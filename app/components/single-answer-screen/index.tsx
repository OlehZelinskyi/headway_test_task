import { QuestionScreen } from "@/app/types";
import client from "@/app/utils/client";

interface SingleAnswerScreenProps {
  screenId: string;
}

async function SingleAnswerScreen({ screenId }: SingleAnswerScreenProps) {
  const gql = `
    query {
      screens {
        ${screenId} {
          question,
          screen_type,
          options,
          answer,
          score,
          currency,
          next_fail,
          next_success
        }
      }
    }
`;

  const screenData = (await client.query(gql)) as {
    screens: { [key: string]: QuestionScreen };
  };

  const data = JSON.stringify(screenData);

  console.log("single answer page level", data);

  return null;
}

export default SingleAnswerScreen;
