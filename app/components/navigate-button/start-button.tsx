"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface NavigateButtonProps {
  next: string;
  children: ReactNode;
}

const NavigateButton = ({ next, children }: NavigateButtonProps) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.replace(`/${next}`);
  };

  return <button onClick={handleNavigate}>{children}</button>;
};

export default NavigateButton;
