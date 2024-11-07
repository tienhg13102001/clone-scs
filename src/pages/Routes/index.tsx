import { createBrowserRouter } from "react-router-dom";
import RoutesString from "../Utils/RoutesString";
import HomePage from "../Home";
import AdminPage from "../Admin";
import BusinessAreas from "../BusinessAreas";
import FastChargerCooling from "../BusinessAreas/FastChargerCooling";
import ICEComponent from "../BusinessAreas/ICE";
import ElectricVessel from "../BusinessAreas/ElectricVessel";
import Elevator from "../BusinessAreas/Elevator";

const router = createBrowserRouter([
  {
    path: RoutesString.Home,
    element: <HomePage />,
    children: [
      {
        path: RoutesString.Admin,
        element: <AdminPage />,
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
        ],
      },
    ],
  },
]);

export default router;
