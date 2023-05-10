import type { Meta, StoryObj } from "@storybook/react";

import SaveButton from ".";

const meta = {
	title: "Components/SaveButton",
	component: SaveButton,
} satisfies Meta<typeof SaveButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
	args: {
		isSelected: true,
	},
};

export const Empty: Story = {
	args: {
		isSelected: false,
	},
};
