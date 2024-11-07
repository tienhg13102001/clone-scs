import { createBrowserRouter } from 'react-router-dom'
import RoutesString from '../Utils/RoutesString'
import HomePage from '../Home'
import AdminPage from '../Admin'
import CompanyInfo from '../CompanyInfo'
import History from '../History'
import SCSHeat from '../SCSHeat'


const router = createBrowserRouter([
  {
    path: RoutesString.Home,
    element: <HomePage />,
    children: [
      {
        path: RoutesString.Admin,
        element: <AdminPage />
      },
      {
        path: RoutesString.CompanyInfo,
        element: <CompanyInfo />
      },
      {
        path: RoutesString.History,
        element: <History />
      },
      {
        path: RoutesString.SCSHeat,
        element: <SCSHeat />
      }
    ]
  }
])

export default router
