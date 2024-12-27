import { InfoScreen } from "@/app/types";
import client from "@/app/utils/client";
import NavigateButton from "../navigate-button/start-button";

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
      <NavigateButton next={data.next}>Start</NavigateButton>
    </section>
  );
}

export default StartScreen;
