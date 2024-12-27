import { Option } from "@/app/types";
import { ChangeEventHandler, Fragment } from "react";

interface CheckboxGroupInputProps {
  options: Option[];
  value: string[];
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const CheckboxGroupInput = ({
  options,
  value,
  onChange,
}: CheckboxGroupInputProps) => {
  return (
    <fieldset>
      {options.map((option, index) => (
        <Fragment key={index}>
          <input
            id={`${index}-option`}
            type="checkbox"
            value={option.value}
            checked={value.includes(option.value)}
            onChange={onChange}
          />
          <label htmlFor={`${index}-option`}>{option.label}</label>
        </Fragment>
      ))}
    </fieldset>
  );
};

export default CheckboxGroupInput;
