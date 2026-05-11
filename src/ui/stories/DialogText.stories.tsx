import type { Meta, StoryObj } from "@storybook/react";
import { DialogText } from "../components/DialogText";

const meta: Meta<typeof DialogText> = {
  title: "DialogText",
  component: DialogText,
} satisfies Meta<typeof DialogText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Example dialog text",
  },
};
