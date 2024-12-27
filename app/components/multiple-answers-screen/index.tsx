import { QuestionScreen } from "@/app/types";
import areSetsEqualAlt from "@/app/utils/areSetsEqual";
import client from "@/app/utils/client";
import SelectAnswer from "./select-answer";

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

  const data = screenData.screens[screenId];

  console.log("multiple answer page level", data);

  const getNext = async (selectedValue: string[]) => {
    "use server";

    return areSetsEqualAlt(new Set(selectedValue), new Set(data.answer))
      ? data.next_success
      : data.next_fail;
  };

  return (
    <div>
      <section>
        <h1>{data.question}</h1>
        <SelectAnswer options={data.options} getNext={getNext} />
      </section>
      <aside>{/* TODO: render flow */}</aside>
    </div>
  );
}

export default MultipleAnswerScreen;
