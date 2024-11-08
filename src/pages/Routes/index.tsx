import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../Home'
import AdminPage from "../Admin";
import TSMControl from "../AdvanceTechnology/TSMControl";
import BatteryPage from "../Battery";
import BusinessAreas from "../BusinessAreas";
import ElectricVessel from "../BusinessAreas/ElectricVessel";
import Elevator from "../BusinessAreas/Elevator";
import FastChargerCooling from "../BusinessAreas/FastChargerCooling";
import ICEComponent from "../BusinessAreas/ICE";
import Residential from "../BusinessAreas/Residential";
import USPComponent from "../BusinessAreas/USP";
import WaterCapture from "../BusinessAreas/WaterCapture";
import DataCoolingCenterPage from "../DataCoolingCenter";
import EssPage from "../Ess";
import RoutesString from "../Utils/RoutesString";
import AdvanceTechnology from "../AdvanceTechnology";
import EnergyIntegration from "../AdvanceTechnology/EnergyIntegration";
import HighEfficiency from "../AdvanceTechnology/HighEfficiency";
import AIMonitoring from '../BusinessAreas/AIMonitoring';
import CompanyInfo from '../Scs/CompanyInfo';
import Scs from '../Scs';
import History from '../Scs/History';
import SCSHeat from '../Scs/SCSHeat';
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
    path: RoutesString.AdvanceTechnology,
    element: <AdvanceTechnology />,
    children: [
      {
        path: RoutesString.AITSMControl,
        element: <TSMControl />,
      },
      {
        path: RoutesString.EnergyIntegrationSystem,
        element: <EnergyIntegration />,
      },
      {
        path: RoutesString.HightEfficiencyHeatExchanger,
        element: <HighEfficiency />,
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
      },
      {
        path: RoutesString.Contact,
        element: <ContactPage />
      },
      {
        path: RoutesString.MediaRecord,
        element: <MediaRecord />
      }
    ]
  }
]);

export default router;
