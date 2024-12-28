"use client";

import { setEarned } from "@/app/redux/game.slice";
import { Option } from "@/app/types";
import { ChangeEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import BaseButton from "../base-button";
import CheckboxGroupInput from "../checkbox-group-input";
import NextButtons from "../next-buttons";

interface SelectAnswerProps {
  options: Option[];
  isCorrect: (selected: string[]) => Promise<boolean>;
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
  const [selectedValue, setSelectedValue] = useState<string[]>([]);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | undefined>();
  const [next, setNext] = useState<string>("");

  const dispatch = useDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;

    setSelectedValue((prev) => {
      if (prev.includes(value)) {
        return prev.filter((v) => v !== value);
      }

      return [...prev, value];
    });
  };

  const handleCheck = async () => {
    const correct = await isCorrect(selectedValue);
    const _next = correct ? nextSuccess : nextFailure;

    setNext(_next);
    setIsCorrectAnswer(correct);

    dispatch(setEarned(correct ? Number(score) : 0));
  };

  const showCheckButton =
    Boolean(selectedValue) && typeof isCorrectAnswer === "undefined";

  const showNextButtons = typeof isCorrectAnswer !== "undefined";
  return (
    <div>
      <CheckboxGroupInput
        options={options}
        value={selectedValue}
        onChange={handleChange}
        isCorrectAnswer={isCorrectAnswer}
      />
      {showCheckButton && <BaseButton onClick={handleCheck}>Check</BaseButton>}
      {showNextButtons && (
        <NextButtons next={next} isCorrectAnswer={isCorrectAnswer} />
      )}
    </div>
  );
};

export default SelectAnswer;
