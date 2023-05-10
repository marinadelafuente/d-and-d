import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

// Component
import TableList from '.'

// Mock Data
import { data } from 'mockData'

const meta = {
  title: 'Components/TableList ',
  component: TableList,
  decorators: [withRouter],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof TableList>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    spells: data
  }
}
