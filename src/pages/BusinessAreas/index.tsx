import { FC } from "react";
import { Outlet } from "react-router-dom";
import HeaderNavigation from "../../components/Molecules/HeaderNav";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

const BusinessAreas: FC<Props> = () => {
  return (
    <SidebarProvider open={false}>
      <AppSidebar />
      <div className="w-full">
        <Header />
        <HeaderNavigation title="Fast Charger Cooling" />
        <div className="container mt-10">
          <Outlet />
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default BusinessAreas;
