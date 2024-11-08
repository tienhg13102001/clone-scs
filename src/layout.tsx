import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "./components/Molecules/Footer";
import Header from "./components/Molecules/Header";
import { buttonVariants } from "./components/ui/button";
import { getNavItems } from "./lib/navItem";
import { cn } from "./lib/utils";
import { useSidebarStore } from "./store/sidebarStore";

export default function Layout() {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  const { t } = useTranslation();
  const navItems = getNavItems(t);

  return (
    <div className="relative">
      <Header />
      <div
        className={cn(
          "fixed left-0 top-0 z-40 mt-[50px] bg-white h-full w-[220px] text-black transition-transform duration-300 flex flex-col",
          {
            "transform translate-x-0": isOpen,
            "transform -translate-x-full": !isOpen,
          }
        )}
      >
        <Accordion type="single" collapsible>
          {navItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="h-[41px] pl-3 pr-[6px] font-bold text-[#666] text-[13px]">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col pb-0 text-[#666]">
                {item.links.map((link, linkIndex) => (
                  <NavLink
                    to={link.url}
                    key={linkIndex}
                    className={({ isActive }) =>
                      buttonVariants({
                        variant: "ghost",
                        className: cn(
                          "!justify-start border-t !font-bold !text-[13px]",
                          {
                            "!text-[#7bbbdc]": isActive,
                          }
                        ),
                      })
                    }
                  >
                    {link.title}
                  </NavLink>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div
        className={cn(
          "fixed inset-0 bg-black transition-opacity duration-300",
          {
            "opacity-50 pointer-events-auto": isOpen,
            "opacity-0 pointer-events-none": !isOpen,
          }
        )}
        onClick={toggleSidebar}
      />

      <Outlet />
      <Footer />
    </div>
  );
}
