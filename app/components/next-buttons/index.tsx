"use client";

import { setCurrentStep } from "@/app/redux/game.slice";
import { RootState } from "@/app/redux/store";
import { useDispatch, useSelector } from "react-redux";
import NavigateButton from "../navigate-button";

import styles from "./styles.module.css";

interface NextButtonsProps {
  isCorrectAnswer?: boolean;
  next: string;
}

const NextButtons = ({ isCorrectAnswer, next }: NextButtonsProps) => {
  const dispatch = useDispatch();
  const settings = useSelector((state: RootState) => state.game.settings);

  const handleSubmit = () => {
    dispatch(setCurrentStep(next));
  };

  const handleTakeMoney = () => {
    if (settings?.result_screen) {
      dispatch(setCurrentStep(settings.result_screen));
    }
  };

  const lastQuestion = next === settings?.result_screen;

  return (
    <div className={styles.buttons}>
      {isCorrectAnswer && !lastQuestion && (
        <NavigateButton
          next={settings?.result_screen ?? ""}
          onClick={handleTakeMoney}
          variant="outline"
        >
          Take the money
        </NavigateButton>
      )}
      <NavigateButton next={next} onClick={handleSubmit}>
        {isCorrectAnswer ? "Continue" : "End game"}
      </NavigateButton>
    </div>
  );
};

export default NextButtons;
