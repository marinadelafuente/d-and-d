import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// CSS
import './index.css'

// Pages / Components
import App from './App'
import DetailedItemModal from 'components/DetailedItemModal'
import ErrorPage from 'components/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/spells',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/spells/:id',
        element: <DetailedItemModal />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
