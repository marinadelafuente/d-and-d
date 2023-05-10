import type { Meta, StoryObj } from "@storybook/react";

import Container from ".";

const meta = {
	title: "Components/Container",
	component: Container,
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: "Hello World",
		showSaved: true,
	},
};
