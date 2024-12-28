"use client";

import { RootState } from "@/app/redux/store";
import { formatCurrency } from "@/app/utils/formatCurrency";
import clsx from "clsx";
import { useSelector } from "react-redux";

import Image from "next/image";
import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const currentStep = useSelector((state: RootState) => state.game.currentStep);

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Image
        className={styles.burger}
        src="burger.svg"
        width="13"
        height="13"
        alt="open"
        onClick={handleToggleMenu}
      />
      <aside className={clsx(styles.container, menuOpen && styles.visible)}>
        <Image
          className={styles.cross}
          src="cross.svg"
          width="13"
          height="13"
          alt="close"
          onClick={handleToggleMenu}
        />
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
    </>
  );
};

export default Progress;
