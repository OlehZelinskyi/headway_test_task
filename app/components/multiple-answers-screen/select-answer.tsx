"use client";

import { Option } from "@/app/types";
import { ChangeEventHandler, useEffect, useState } from "react";
import CheckboxGroupInput from "../checkbox-group-input";
import NavigateButton from "../navigate-button/start-button";

interface SelectAnswerProps {
  options: Option[];
  getNext: (selected: string[]) => Promise<string>;
}

const SelectAnswer = ({ options, getNext }: SelectAnswerProps) => {
  const [selectedValue, setSelectedValue] = useState<string[]>([]);
  const [next, setNext] = useState<string>("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;

    setSelectedValue((prev) => {
      if (prev.includes(value)) {
        return prev.filter((v) => v !== value);
      }

      return [...prev, value];
    });
  };

  useEffect(() => {
    (async () => {
      if (selectedValue) {
        const _next = await getNext(selectedValue);

        setNext(_next);
      }
    })();
  }, [selectedValue, getNext]);

  console.log("next", next);

  return (
    <div>
      <CheckboxGroupInput
        options={options}
        value={selectedValue}
        onChange={handleChange}
      />
      {Boolean(selectedValue.length) && (
        <NavigateButton next={next}>Submit</NavigateButton>
      )}
    </div>
  );
};

export default SelectAnswer;
