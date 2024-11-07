import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface NavItem {
  title: string;
  links: {
    title: string;
    url: string;
  }[];
}

const navItems: NavItem[] = [
  {
    title: "SCS",
    links: [
      {
        title: "Company Info",
        url: "/",
      },
      {
        title: "History",
        url: "/",
      },
      {
        title: "Heat R&D Center",
        url: "/",
      },
    ],
  },
  {
    title: "Products",
    links: [
      {
        title: "ESS TMS",
        url: "/",
      },
      {
        title: "Battery TMS",
        url: "/",
      },
      {
        title: "Data Center Cooling",
        url: "/",
      },
    ],
  },
  {
    title: "Advanced Technology",
    links: [
      {
        title: "A.I TMS control",
        url: "/",
      },
      {
        title: "Energy Integration System",
        url: "/",
      },
      {
        title: "High efficiency heat exchanger",
        url: "/",
      },
    ],
  },
  {
    title: "Business Areas",
    links: [
      {
        title: "Fast Charger Cooling",
        url: "/",
      },
      {
        title: "ICE Bath Chiller/ Heater",
        url: "/",
      },
      {
        title: "Electric Vessel TMS",
        url: "/",
      },
      {
        title: "Roof (Golf Cart) AC",
        url: "/",
      },
      {
        title: "Elevator AC",
        url: "/",
      },
      {
        title: "Residential HVAC",
        url: "/",
      },
      {
        title: "Water Capture HEX",
        url: "/",
      },
      {
        title: "UPS Battery System",
        url: "/",
      },
      {
        title: "A.I. System Manager",
        url: "/",
      },
    ],
  },
  {
    title: "Media",
    links: [
      {
        title: "Contact",
        url: "/",
      },
      {
        title: "Media Record",
        url: "/",
      },
    ],
  },
];

function Header() {
  const { i18n } = useTranslation();
  const [whiteMode, setWhiteMode] = useState(false);
  const { toggleSidebar } = useSidebar();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setWhiteMode(true);
      } else {
        setWhiteMode(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={cn(
          "fixed top-0 flex justify-between items-center w-full bg-white border-b px-4 z-10 border-[rgba(255,255,255,.2)] transition-all duration-200 max-lg:hidden",
          {
            "text-white bg-transparent hover:bg-black/30": !whiteMode,
          }
        )}
      >
        <img
          src={whiteMode ? "/img/logo.png" : "/img/logo-w.png"}
          alt=""
          className="block w-auto max-h-[50px]"
        />
        <div className="flex text-center text-ellipsis text-nowrap w-full max-w-[1200px]">
          {navItems.map((navItem, index) => (
            <div
              className="w-1/5 text-base/[80px] text-ellipsis ring-transparent outline-none relative group cursor-pointer before:h-0.5 before:hover:w-[50%] before:inset-x-0 before:mx-auto before:transition-all before:w-0 before:bg-[#7bbbdc] before:absolute before:bottom-0"
              key={index}
            >
              {navItem.title}
              <div className="z-10 absolute left-0 -bottom-0 translate-y-full hidden group-hover:block min-w-full text-black">
                <div className="bg-white flex flex-col">
                  {navItem.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      to={link.url}
                      className="hover:text-[#7bbbdc]"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center gap-3 min-h-[80px] p-4 text-[21px]">
          <button onClick={() => changeLanguage("ko")}>KR</button>
          <div className="h-8 w-px bg-[#eee]" />
          <button onClick={() => changeLanguage("en")}>EN</button>
        </div>
      </div>
      <div className="lg:hidden fixed top-0 w-full bg-white">
        <div className="relative flex w-full justify-center items-center">
          <button onClick={toggleSidebar} className="absolute inset-y-0 left-3">
            <Menu />
          </button>
          <img src="/img/logo.png" alt="" className="max-h-[50px]" />
        </div>
      </div>
    </>
  );
}

export default Header;
