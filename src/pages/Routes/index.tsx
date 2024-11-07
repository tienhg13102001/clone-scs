import { createBrowserRouter } from 'react-router-dom'
import RoutesString from '../Utils/RoutesString'
import HomePage from '../Home'
import AdminPage from '../Admin'


const router = createBrowserRouter([
  {
    path: RoutesString.Home,
    element: <HomePage />,
    children: [
      {
        path: RoutesString.Admin,
        element: <AdminPage />
      }
    ]
  }
])

export default router
