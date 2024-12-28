"use client";

import { RootState } from "@/app/redux/store";
import { formatCurrency } from "@/app/utils/formatCurrency";
import clsx from "clsx";
import { useSelector } from "react-redux";

import SmallOptionShape from "../option-shape/small-option-shape";
import styles from "./styles.module.css";

interface ProgressProps {
  steps: string[];
  currency: string;
}

const isPassed = (
  currentStep: string,
  steps: string[] = [],
  stepIndex: number
) => {
  const currentStepIndex = steps.findIndex((s) => s === currentStep);

  if (currentStepIndex < 0) return false;
  if (currentStepIndex <= stepIndex) return false;
  return true;
};

const Progress = ({ steps, currency }: ProgressProps) => {
  const currentStep = useSelector((state: RootState) => state.game.currentStep);

  return (
    <aside className={styles.container}>
      {steps.map((step, index) => (
        <div
          key={step}
          className={clsx(styles.option, {
            [styles.selected]: currentStep === step,
            [styles.passed]: isPassed(currentStep ?? "", steps, index),
          })}
        >
          <SmallOptionShape className={styles.hexshape}>
            <div className={styles.label}>
              {formatCurrency(Number(step), currency)}
            </div>
          </SmallOptionShape>
        </div>
      ))}
    </aside>
  );
};

export default Progress;
