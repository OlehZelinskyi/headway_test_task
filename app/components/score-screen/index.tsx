import { InfoScreen, Settings } from "@/app/types";
import client from "@/app/utils/client";
import Image from "next/image";
import Earned from "./earned";
import styles from "./styles.module.css";
import TryAgainButton from "./try-again-button";

interface ScoreScreenProps {
  screenId: string;
}

async function ScoreScreen({ screenId }: ScoreScreenProps) {
  const gql = `
  query {
    settings {
      currency
    }
    screens {
      ${screenId} {
        screen_type,
        info,
        next
      }
    }
  }
`;

  const screenData = (await client.query(gql)) as {
    screens: { [key: string]: InfoScreen };
    settings: Settings;
  };

  const data = screenData.screens[screenId];
  const currency = screenData.settings.currency;

  return (
    <section className={styles.bg}>
      <div className={styles.hand}>
        <Image src="/hand.svg" alt="hand" fill />
      </div>
      <div className={styles.again}>
        <h1 className={styles.heading}>{data.info}</h1>
        <Earned currency={currency} />
        <TryAgainButton next={data.next}>Try again</TryAgainButton>
      </div>
    </section>
  );
}

export default ScoreScreen;
