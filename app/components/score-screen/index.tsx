import { InfoScreen, Settings } from "@/app/types";
import client from "@/app/utils/client";
import Earned from "./earned";
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
    <section>
      <h1>{data.info}</h1>
      <Earned currency={currency} />
      <TryAgainButton next={data.next}>Try again</TryAgainButton>
    </section>
  );
}

export default ScoreScreen;
