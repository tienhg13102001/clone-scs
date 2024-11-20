import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/Molecules/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useBreadcrumb } from "@/hooks/useBreadcrumb";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import HeaderNavigation from "../../components/Molecules/HeaderNav";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

const BusinessAreas: FC<Props> = () => {
  const { t } = useTranslation();
  const { pathnames } = useBreadcrumb();
  return (
    <SidebarProvider open={false}>
      <AppSidebar />
      <div className="w-full">
        <Header />
        <HeaderNavigation title={t(pathnames[1])} />
        <div className="container mt-10">
          <Outlet />
        </div>
        {/* <Footer /> */}
      </div>
    </SidebarProvider>
  );
};

export default BusinessAreas;
