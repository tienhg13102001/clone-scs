import { AppSidebar } from "@/components/app-sidebar";
import HeaderNavigation from "@/components/Molecules/HeaderNav";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useBreadcrumb } from "@/hooks/useBreadcrumb";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";

const AdvanceTechnology: FC = () => {
  const { t } = useTranslation();
  const { pathnames } = useBreadcrumb();

  return (
    <SidebarProvider open={false}>
      <AppSidebar />
      <div className="w-full">
        <HeaderNavigation title={t(pathnames[1])} />
        <div className="container mt-10">
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdvanceTechnology;
