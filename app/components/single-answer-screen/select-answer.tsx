"use client";

import { Option } from "@/app/types";
import { ChangeEventHandler, useEffect, useState } from "react";
import NavigateButton from "../navigate-button/start-button";
import RadioGroupInput from "../radio-group-input";

interface SelectAnswerProps {
  options: Option[];
  getNext: (selected: string) => Promise<string>;
}

const SelectAnswer = ({ options, getNext }: SelectAnswerProps) => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [next, setNext] = useState<string>("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;

    setSelectedValue(value);
  };

  useEffect(() => {
    (async () => {
      if (selectedValue) {
        const _next = await getNext(selectedValue);

        setNext(_next);
      }
    })();
  }, [selectedValue, getNext]);

  return (
    <div>
      <RadioGroupInput
        options={options}
        value={selectedValue}
        onChange={handleChange}
      />
      {Boolean(selectedValue) && (
        <NavigateButton next={next}>Submit</NavigateButton>
      )}
    </div>
  );
};

export default SelectAnswer;
