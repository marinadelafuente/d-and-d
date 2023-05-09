import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import DetailedItemModal from '.'

const meta = {
  title: 'Components/DetailedItemModal ',
  component: DetailedItemModal,
  decorators: [withRouter],
  tags: ['autodocs'],
  parameters: {
    reactRouter: {
      routePath: '/detailed-item-modal/:id',
      routeParams: { id: '42' }
    },
    layout: 'fullscreen'
  }
} satisfies Meta<typeof DetailedItemModal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
