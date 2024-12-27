"use client";

import NavigateButton from "@/app/components/navigate-button";
import { setCurrentStep } from "@/app/redux/game.slice";
import { ReactNode } from "react";
import { useDispatch } from "react-redux";

interface StartButtonProps {
  next: string;
  children: ReactNode;
}

const StartButton = ({ next, children }: StartButtonProps) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentStep(next));
  };

  return (
    <NavigateButton onClick={handleClick} next={next}>
      {children}
    </NavigateButton>
  );
};

export default StartButton;
