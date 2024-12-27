import { InfoScreen } from "@/app/types";
import client from "@/app/utils/client";

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

  const data = JSON.stringify(screenData);

  console.log("start page level", data);

  return null;
}

export default StartScreen;
