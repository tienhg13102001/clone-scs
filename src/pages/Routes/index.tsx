import { createBrowserRouter } from "react-router-dom";
import RoutesString from "../Utils/RoutesString";
import HomePage from "../Home";
import AdminPage from "../Admin";
import BusinessAreas from "../BusinessAreas";
import FastChargerCooling from "../BusinessAreas/FastChargerCooling";
import ICE from "../BusinessAreas/ICE";

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
            element: <ICE />,
          },
        ],
      },
    ],
  },
]);

export default router;
