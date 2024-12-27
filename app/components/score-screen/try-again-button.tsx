"use client";

import NavigateButton from "@/app/components/navigate-button";
import { setCurrentStep, setEarned } from "@/app/redux/game.slice";
import { ReactNode } from "react";
import { useDispatch } from "react-redux";

interface StartButtonProps {
  next: string;
  children: ReactNode;
}

const TryAgainButton = ({ next, children }: StartButtonProps) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setEarned(0));
    dispatch(setCurrentStep(null));
  };

  return (
    <NavigateButton onClick={handleClick} next={next}>
      {children}
    </NavigateButton>
  );
};

export default TryAgainButton;
