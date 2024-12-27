import { InfoScreen } from "@/app/types";
import client from "@/app/utils/client";
import StartButton from "./start-button";

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

  console.log("start page level", data);

  return (
    <section>
      <h1>{data.info}</h1>
      <StartButton next={data.next}>Start</StartButton>
    </section>
  );
}

export default StartScreen;
