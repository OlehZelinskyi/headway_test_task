import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./styles.module.css";

interface OptionShape {
  className?: string;
  children: ReactNode;
}

const OptionShape = ({ className, children }: OptionShape) => {
  return (
    <div className={clsx(styles.container, className)}>
      <div className={clsx(styles.risk, "risk")} />
      <svg
        // width="288"
        // height="56"
        viewBox="0 0 288 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.shape}
      >
        <path d="M16.8175 5.31576C18.9762 2.29361 22.4615 0.5 26.1754 0.5H261.825C265.539 0.5 269.024 2.29361 271.183 5.31576L287.386 28L271.183 50.6842C269.024 53.7064 265.539 55.5 261.825 55.5H26.1754C22.4615 55.5 18.9762 53.7064 16.8175 50.6842L0.614452 28L16.8175 5.31576Z" />
      </svg>
      <div className={clsx(styles.risk, "risk")} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default OptionShape;
