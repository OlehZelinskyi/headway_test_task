"use client";

import { useRouter } from "next/navigation";
import { MouseEventHandler, ReactNode } from "react";

interface NavigateButtonProps {
  next: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const NavigateButton = ({ next, children, onClick }: NavigateButtonProps) => {
  const router = useRouter();

  const handleNavigate: MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick?.(e);
    router.replace(`/${next}`);
  };

  return <button onClick={handleNavigate}>{children}</button>;
};

export default NavigateButton;
