"use client";

import BaseButton, { BaseButtonProps } from "@/app/components/base-button";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

interface NavigateButtonProps extends BaseButtonProps {
  next: string;
}

const NavigateButton = ({
  next,
  children,
  onClick,
  ...rest
}: NavigateButtonProps) => {
  const router = useRouter();

  const handleNavigate: MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick?.(e);
    router.replace(`/${next}`);
  };

  return (
    <BaseButton onClick={handleNavigate} {...rest}>
      {children}
    </BaseButton>
  );
};

export default NavigateButton;
