import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

// Component
import DetailedItemModal from '.'

// Mock Data
import { data } from 'mockData'

const meta = {
  title: 'Components/DetailedItemModal ',
  component: DetailedItemModal,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/detailed-item-modal/:id',
      routeParams: { id: 'sacred-flame' }
    },
    layout: 'fullscreen',
    mockData: [
      {
        url: 'https://www.dnd5eapi.co/api/spells/sacred-flame',
        method: 'GET',
        status: 200,
        response: {
          data: data[0]
        }
      }
    ]
  }
} satisfies Meta<typeof DetailedItemModal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
