import { QuestionScreen } from "@/app/types";
import client from "@/app/utils/client";

interface MultipleAnswerScreenProps {
  screenId: string;
}

async function MultipleAnswerScreen({ screenId }: MultipleAnswerScreenProps) {
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

  console.log("multiple answers page level", data);

  return null;
}

export default MultipleAnswerScreen;
