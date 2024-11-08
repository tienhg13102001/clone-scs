import Footer from "@/components/Molecules/Footer";
import Header from "@/components/Molecules/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export default function Scs() {
    return (
        <SidebarProvider>
            <div className="w-full">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </SidebarProvider>
    )
}
