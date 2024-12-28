"use client";

import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import styles from "./styles.module.css";

export interface BaseButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "default" | "outline";
  children: ReactNode;
}

const BaseButton = ({
  children,
  variant = "default",
  className,
  ...rest
}: BaseButtonProps) => {
  return (
    <button
      className={clsx(
        styles.button,
        variant === "outline" && styles.outline,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default BaseButton;
