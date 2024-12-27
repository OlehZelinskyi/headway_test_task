import { QuestionScreen } from "@/app/types";
import client from "@/app/utils/client";
import SelectAnswer from "./select-answer";

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

  const data = screenData.screens[screenId];

  console.log("single answer page level", data);

  const isCorrect = async (selectedValue: string) => {
    "use server";
    return selectedValue === data.answer;
  };

  return (
    <div>
      <section>
        <h1>{data.question}</h1>
        <SelectAnswer
          options={data.options}
          isCorrect={isCorrect}
          nextSuccess={data.next_success}
          nextFailure={data.next_fail}
          score={data.score}
        />
      </section>
      <aside>{/* TODO: render flow */}</aside>
    </div>
  );
}

export default SingleAnswerScreen;
