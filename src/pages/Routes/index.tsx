import { createBrowserRouter } from 'react-router-dom'
import RoutesString from '../Utils/RoutesString'
import HomePage from '../Home'
import AdminPage from '../Admin'
<<<<<<< HEAD
import CompanyInfo from '../CompanyInfo'
import History from '../History'
import SCSHeat from '../SCSHeat'
=======
import EssPage from '../Ess'
import BatteryPage from '../Battery'
import DataCoolingCenterPage from '../DataCoolingCenter'
>>>>>>> a08c66494cbabbf62d142a97b7e21c085c5a208f


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
