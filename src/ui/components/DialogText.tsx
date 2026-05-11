import type { FC } from "react";

interface Props {
  text: string;
  theme?: "light" | "dark" | "auto";
}

export const DialogText: FC<Props> = ({ text, theme }) => {
  return <div className={theme}>{text}</div>;
};
