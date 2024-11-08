import { AppSidebar } from "@/components/app-sidebar";
import Footer from "@/components/Molecules/Footer";
import Header from "@/components/Molecules/Header";
import HeaderNavigation from "@/components/Molecules/HeaderNav";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { FC } from "react";
import { Outlet } from "react-router-dom";

const AdvanceTechnology: FC = () => {
    return (
        <SidebarProvider>
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

export default AdvanceTechnology;
