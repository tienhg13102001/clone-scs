import { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import RoutesString from "../Utils/RoutesString";
import HeaderNavigation from "../../components/Molecules/HeaderNav";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

const BusinessAreas: FC<Props> = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(RoutesString.FastChargerCooling);
  }, [navigate]);

  return (
    <>
      <HeaderNavigation title="Fast Charger Cooling"/>
      <Outlet />
    </>
  );
};

export default BusinessAreas;
