import { FC } from "react";
import { Outlet } from "react-router-dom";
import HeaderNavigation from "../../components/Molecules/HeaderNav";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

const BusinessAreas: FC<Props> = () => {


  return (
    <>
      <HeaderNavigation title="Fast Charger Cooling"/>
      <Outlet />
    </>
  );
};

export default BusinessAreas;
