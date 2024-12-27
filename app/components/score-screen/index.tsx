import { InfoScreen } from "@/app/types";
import client from "@/app/utils/client";

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

  const data = JSON.stringify(screenData);

  console.log("score page level", data);

  return null;
}

export default ScoreScreen;
