import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

// Components
import Homepage from ".";

// Mock Data
import { data } from "mockData";

const meta = {
	title: "Pages/Homepage ",
	component: Homepage,
	decorators: [withRouter],
	parameters: {
		layout: "fullscreen",
		mockData: [
			{
				url: "https://www.dnd5eapi.co/api/spells/sacred-flame",
				method: "GET",
				status: 200,
				response: {
					data: data,
				},
			},
		],
	},
} satisfies Meta<typeof Homepage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
