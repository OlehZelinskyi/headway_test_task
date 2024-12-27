export const ScreenTypeEnum = {
  START: "START",
  SCORE: "SCORE",
  SINGLE_ANSWER: "SINGLE_ANSWER",
  MULTIPLE_ANSWERS: "MULTIPLE_ANSWERS",
} as const;

export type ScreenType = keyof typeof ScreenTypeEnum;

export interface Option {
  label: string;
  value: string;
}

export interface InfoScreen {
  info: string;
  screen_type: ScreenType;
  next: string;
}

export interface QuestionScreen {
  question: string;
  screen_type: ScreenType;
  options: Option[];
  answer: string;
  score: string;
  currency: string;
  next_fail: string;
  next_success: string;
}

export type Screen = InfoScreen | QuestionScreen;

export interface QuestionsJSON {
  entry: string;
  flow: string[];
  screens: Record<string, Screen>;
}