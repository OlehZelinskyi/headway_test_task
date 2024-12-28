"use client";

import { RootState } from "@/app/redux/store";
import { formatCurrency } from "@/app/utils/formatCurrency";
import { useSelector } from "react-redux";

import styles from "./styles.module.css";

interface EarnedProps {
  currency: string;
}

const Earned = ({ currency }: EarnedProps) => {
  const score = useSelector((state: RootState) => state.game.earned);

  return (
    <p className={styles.earned}>{formatCurrency(score, currency)} earned</p>
  );
};

export default Earned;
