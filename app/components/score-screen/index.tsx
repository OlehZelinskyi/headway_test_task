import { InfoScreen } from "@/app/types";
import client from "@/app/utils/client";
import NavigateButton from "../navigate-button/start-button";

interface ScoreScreenProps {
  screenId: string;
}

async function ScoreScreen({ screenId }: ScoreScreenProps) {
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

  console.log("score page level", data);

  const score = 0;

  return (
    <section>
      <h1>{data.info}</h1>
      <p>{score} earned</p>
      <NavigateButton next={data.next}>Try again</NavigateButton>
    </section>
  );
}

export default ScoreScreen;
