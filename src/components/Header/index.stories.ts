import type { Meta, StoryObj } from "@storybook/react";

// Component
import Header from ".";

const meta = {
	title: "Components/Header ",
	component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		showSaved: true,
	},
};
