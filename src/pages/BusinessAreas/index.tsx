import { FC } from "react";
import { Outlet } from "react-router-dom";
import HeaderNavigation from "../../components/Molecules/HeaderNav";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/Molecules/Header";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

const BusinessAreas: FC<Props> = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="wrap overflow-x-hidden">
        <Header />
        <HeaderNavigation title="Fast Charger Cooling" />
        <div className="mx-44 mt-10">
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default BusinessAreas;
