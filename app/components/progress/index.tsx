"use client";

import { RootState } from "@/app/redux/store";
import { formatCurrency } from "@/app/utils/formatCurrency";
import clsx from "clsx";
import { useSelector } from "react-redux";

interface ProgressProps {
  steps: string[];
  currency: string;
}

const Progress = ({ steps, currency }: ProgressProps) => {
  const currentStep = useSelector((state: RootState) => state.game.currentStep);

  return (
    <aside>
      {steps.map((step) => (
        <div key={step} className={clsx({ active: currentStep === step })}>
          {formatCurrency(Number(step), currency)}
        </div>
      ))}
    </aside>
  );
};

export default Progress;
