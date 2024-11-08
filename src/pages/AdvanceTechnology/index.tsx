import HeaderNavigation from "@/components/Molecules/HeaderNav";
import type { FC } from "react";
import { Outlet } from "react-router-dom";

const AdvanceTechnology: FC = () => {
  return (
    <div className="w-full">
      <HeaderNavigation title="Fast Charger Cooling" />
      <div className="container mt-10">
        <Outlet />
      </div>
    </div>
  );
};

export default AdvanceTechnology;
