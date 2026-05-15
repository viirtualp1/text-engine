import type { FC } from "react";

interface Props {
  text: string;
}

export const DialogText: FC<Props> = ({ text }) => {
  return <div>{text}</div>;
};
