import { createBrowserRouter } from 'react-router-dom'
import RoutesString from '../Utils/RoutesString'
import HomePage from '../Home'
import AdminPage from '../Admin'
import EssPage from '../Ess'
import BatteryPage from '../Battery'
import DataCoolingCenterPage from '../DataCoolingCenter'


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
  },
  {
    path: RoutesString.Ess,
    element: <EssPage />
  },
  {
    path: RoutesString.Battery,
    element: <BatteryPage />
  },
  {
    path: RoutesString.DataCoolingCenter,
    element: <DataCoolingCenterPage />
  }

])

export default router
