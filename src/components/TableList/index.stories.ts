import type { Meta, StoryObj } from '@storybook/react'

import TableList from '.'

const meta = {
  title: 'Components/TableList ',
  component: TableList,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof TableList>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    spells: []
  }
}
