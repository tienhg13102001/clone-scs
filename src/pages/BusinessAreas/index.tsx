import Header from "@/components/Molecules/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import HeaderNavigation from "../../components/Molecules/HeaderNav";
import Footer from "@/components/Molecules/Footer";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

const BusinessAreas: FC<Props> = () => {
  return (
    <SidebarProvider>
      <div className="w-full">
        <Header />
        <HeaderNavigation title="Fast Charger Cooling" />
        <div className="mx-44 mt-10">
          <Outlet />
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default BusinessAreas;
