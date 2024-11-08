import { createBrowserRouter } from 'react-router-dom'
import RoutesString from '../Utils/RoutesString'
import HomePage from '../Home'
import AdminPage from '../Admin'
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
import Scs from '../Scs/index';
import CompanyInfo from '../Scs/CompanyInfo';
import History from '../Scs/History';
import SCSHeat from '../Scs/SCSHeat';

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
    path: RoutesString.Scs,
    element: <Scs />,
    children: [
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
]);

export default router;
