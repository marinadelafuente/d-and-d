import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
  Navigate
} from 'react-router-dom'

// CSS
import './index.css'

// Pages / Components
import App from './pages/App'
import DetailedItemModal from 'components/DetailedItemModal'
import ErrorPage from 'pages/ErrorPage'

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
  },
  { path: '/', element: <Navigate to="/spells" replace /> }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
