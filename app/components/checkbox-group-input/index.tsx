import { Option } from "@/app/types";
import numberToLetter from "@/app/utils/numberToLetter";
import clsx from "clsx";
import { ChangeEventHandler } from "react";
import OptionShape from "../option-shape";
import styles from "./styles.module.css";

interface CheckboxGroupInputProps {
  options: Option[];
  value: string[];
  onChange: ChangeEventHandler<HTMLInputElement>;
  isCorrectAnswer: boolean | undefined;
}

const CheckboxGroupInput = ({
  options,
  value,
  onChange,
  isCorrectAnswer,
}: CheckboxGroupInputProps) => {
  const validated = typeof isCorrectAnswer !== "undefined";

  return (
    <fieldset disabled={validated} className={styles.grid}>
      {options.map((option, index) => {
        const selected = value.includes(option.value);

        return (
          <div
            key={index}
            className={clsx(
              styles.option,
              selected && styles.selected,
              selected &&
                validated && {
                  [styles.success]: isCorrectAnswer,
                  [styles.failure]: !isCorrectAnswer,
                }
            )}
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
                type="checkbox"
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

export default CheckboxGroupInput;
