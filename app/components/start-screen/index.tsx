import { InfoScreen } from "@/app/types";
import client from "@/app/utils/client";
import StartButton from "./start-button";

import Image from "next/image";
import styles from "./styles.module.css";

interface StartScreenProps {
  screenId: string;
}

async function StartScreen({ screenId }: StartScreenProps) {
  const gql = `
  query {
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
  };

  const data = screenData.screens[screenId];

  return (
    <section className={styles.bg}>
      <div className={styles.hand}>
        <Image src="/hand.svg" alt="hand" fill />
      </div>
      <div className={styles.start}>
        <h1 className={styles.heading}>{data.info}</h1>
        <StartButton next={data.next}>Start</StartButton>
      </div>
    </section>
  );
}

export default StartScreen;
