import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import ListItem from '.'

const meta = {
  title: 'Components/ListItem ',
  component: ListItem,
  decorators: [withRouter],
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ListItem>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    name: 'Item',
    url: 'https://www.google.com',
    id: '1'
  }
}
