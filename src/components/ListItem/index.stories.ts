import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

// Component
import ListItem from ".";

// Mock Data
import { data } from "mockData";

const meta = {
	title: "Components/ListItem ",
	component: ListItem,
	decorators: [withRouter],
	parameters: {
		layout: "fullscreen",
		mockData: [
			{
				url: "https://www.dnd5eapi.co/api/spells/sacred-flame",
				method: "GET",
				status: 200,
				response: {
					data: data[0],
				},
			},
		],
	},
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		name: "Sacred-flame",
		url: "/api/spells/sacred-flame",
		id: "sacred-flame",
		isEven: true,
	},
};
