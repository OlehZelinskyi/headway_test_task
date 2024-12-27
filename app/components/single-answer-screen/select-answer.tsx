"use client";

import { setCurrentStep, setEarned } from "@/app/redux/game.slice";
import { Option } from "@/app/types";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import NavigateButton from "../navigate-button";
import RadioGroupInput from "../radio-group-input";

interface SelectAnswerProps {
  options: Option[];
  isCorrect: (selected: string) => Promise<boolean>;
  nextSuccess: string;
  nextFailure: string;
  score: string;
}

const SelectAnswer = ({
  options,
  isCorrect,
  nextSuccess,
  nextFailure,
  score,
}: SelectAnswerProps) => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [next, setNext] = useState<string>("");

  const dispatch = useDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;

    setSelectedValue(value);
  };

  useEffect(() => {
    (async () => {
      if (selectedValue) {
        const correct = await isCorrect(selectedValue);
        const _next = correct ? nextSuccess : nextFailure;

        setNext(_next);
      }
    })();
  }, [isCorrect, nextFailure, nextSuccess, selectedValue]);

  const handleSubmit = async () => {
    const correct = await isCorrect(selectedValue);

    if (correct) {
      dispatch(setEarned(Number(score)));
    }

    dispatch(setCurrentStep(next));
  };

  return (
    <div>
      <RadioGroupInput
        options={options}
        value={selectedValue}
        onChange={handleChange}
      />
      {Boolean(selectedValue) && (
        <NavigateButton next={next} onClick={handleSubmit}>
          Submit
        </NavigateButton>
      )}
    </div>
  );
};

export default SelectAnswer;
