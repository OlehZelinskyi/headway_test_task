import { Option } from "@/app/types";
import numberToLetter from "@/app/utils/numberToLetter";
import clsx from "clsx";
import { ChangeEventHandler } from "react";
import OptionShape from "../option-shape";
import styles from "./styles.module.css";

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
      {options.map((option, index) => {
        const selected = value === option.value;

        return (
          <div
            key={index}
            className={clsx(styles.option, selected && styles.selected)}
          >
            <OptionShape className={styles.hexshape}>
              <div>
                <span className={styles.letter}>{numberToLetter(index)}</span>
                <span className={styles.label}>{option.label}</span>
              </div>
            </OptionShape>
            <div className={styles["input-group"]}>
              <input
                id={`${index}-option`}
                type="radio"
                value={option.value}
                checked={selected}
                onChange={onChange}
              />
              <label htmlFor={`${index}-option`}>{option.label}</label>
            </div>
          </div>
        );
      })}
    </fieldset>
  );
};

export default RadioGroupInput;
