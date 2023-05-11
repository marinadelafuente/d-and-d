import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

// Component
import TableList from ".";

// Mock Data
import { data } from "mockData";

const meta = {
	title: "Components/TableList ",
	component: TableList,
	decorators: [withRouter],
	parameters: {
		reactRouter: {
			routePath: "/spells",
		},
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
} satisfies Meta<typeof TableList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		spells: data,
	},
};
