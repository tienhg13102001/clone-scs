import { createBrowserRouter } from 'react-router-dom'
import RoutesString from '../Utils/RoutesString'
import HomePage from '../Home'
import AdminPage from '../Admin'
import CompanyInfo from '../CompanyInfo'
import History from '../History'
import SCSHeat from '../SCSHeat'
import BusinessAreas from "../BusinessAreas";
import FastChargerCooling from "../BusinessAreas/FastChargerCooling";
import ICEComponent from "../BusinessAreas/ICE";
import ElectricVessel from "../BusinessAreas/ElectricVessel";
import Elevator from "../BusinessAreas/Elevator";
import EssPage from "../Ess";
import BatteryPage from "../Battery";
import DataCoolingCenterPage from "../DataCoolingCenter";
import Residential from "../BusinessAreas/Residential";
import WaterCapture from "../BusinessAreas/WaterCapture";
import USPComponent from "../BusinessAreas/USP";
import AIMonitoring from "../BusinessAreas/AIMonitoring";
import ContactPage from '../Contact'
import MediaRecord from '../MediaRecord'

const router = createBrowserRouter([
  {
    path: RoutesString.Home,
    element: <HomePage />,
    children: [
      {
        path: RoutesString.Admin,
        element: <AdminPage />,
      },
    ],
  },
  {
    path: RoutesString.Ess,
    element: <EssPage />,
  },
  {
    path: RoutesString.Battery,
    element: <BatteryPage />,
  },
  {
    path: RoutesString.DataCoolingCenter,
    element: <DataCoolingCenterPage />,
  },
  {
    path: RoutesString.BusinessAreas,
    element: <BusinessAreas />,
    children: [
      {
        path: RoutesString.FastChargerCooling,
        element: <FastChargerCooling />,
      },
      {
        path: RoutesString.ICE,
        element: <ICEComponent />,
      },
      {
        path: RoutesString.Electric,
        element: <ElectricVessel />,
      },
      {
        path: RoutesString.Elevator,
        element: <Elevator />,
      },
      {
        path: RoutesString.Residential,
        element: <Residential />,
      },
      {
        path: RoutesString.WaterCapture,
        element: <WaterCapture />,
      },
      {
        path: RoutesString.USP,
        element: <USPComponent />,
      },
      {
        path: RoutesString.AIMonitoring,
        element: <AIMonitoring />,
      },
    ],
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
  },
  {
    path: RoutesString.Contact,
    element: <ContactPage />
  },
  {
    path: RoutesString.MediaRecord,
    element: <MediaRecord />
  }
]);

export default router;
