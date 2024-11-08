import Footer from "@/components/Molecules/Footer";
import Header from "@/components/Molecules/Header";
import HeaderNavigation from "@/components/Molecules/HeaderNav";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { FC } from "react";
import { Outlet } from "react-router-dom";

const AdvanceTechnology: FC = () => {
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

export default AdvanceTechnology;
