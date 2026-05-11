import type { FC } from "react";

export const DialogText: FC<{ text: string }> = ({ text }) => {
  return <div>{text}</div>;
};
