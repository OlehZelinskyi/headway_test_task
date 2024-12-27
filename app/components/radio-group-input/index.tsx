import { Option } from "@/app/types";
import { ChangeEventHandler, Fragment } from "react";

interface RadioGroupInputProps {
  options: Option[];
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const RadioGroupInput = ({
  options,
  value,
  onChange,
}: RadioGroupInputProps) => {
  return (
    <fieldset>
      {options.map((option, index) => (
        <Fragment key={index}>
          <input
            id={`${index}-option`}
            type="radio"
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
          />
          <label htmlFor={`${index}-option`}>{option.label}</label>
        </Fragment>
      ))}
    </fieldset>
  );
};

export default RadioGroupInput;
