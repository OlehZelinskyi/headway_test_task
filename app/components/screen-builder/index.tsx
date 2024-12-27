import { ScreenType, ScreenTypeEnum } from "@/app/types";
import MultipleAnswerScreen from "../multiple-answers-screen";
import ScoreScreen from "../score-screen";
import SingleAnswerScreen from "../single-answer-screen";
import StartScreen from "../start-screen";

interface ScreenBuilderProps {
  screenType: ScreenType;
  screenId: string;
}

const ScreenBuilder = ({ screenType, screenId }: ScreenBuilderProps) => {
  const component = {
    [ScreenTypeEnum.START]: <StartScreen screenId={screenId} />,
    [ScreenTypeEnum.SCORE]: <ScoreScreen screenId={screenId} />,
    [ScreenTypeEnum.SINGLE_ANSWER]: <SingleAnswerScreen screenId={screenId} />,
    [ScreenTypeEnum.MULTIPLE_ANSWERS]: (
      <MultipleAnswerScreen screenId={screenId} />
    ),
  }[screenType];

  return component ?? null;
};

export default ScreenBuilder;
