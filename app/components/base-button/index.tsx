"use client";

import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import styles from "./styles.module.css";

export interface BaseButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}

const BaseButton = ({ children, ...rest }: BaseButtonProps) => {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
};

export default BaseButton;
