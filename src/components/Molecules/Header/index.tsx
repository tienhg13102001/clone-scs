import { useSidebar } from "@/components/ui/sidebar";
import { getNavItems } from "@/lib/navItem";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Header() {
  const { t, i18n } = useTranslation();
  const [whiteMode, setWhiteMode] = useState(false);
  const { toggleSidebar } = useSidebar();

  const navItems = getNavItems(t);

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
          "fixed top-0 flex justify-between items-center w-full bg-white border-b px-4 z-10 border-[rgba(255,255,255,.2)] shadow-md transition-all duration-200 max-lg:hidden",
          {
            "text-white bg-transparent hover:bg-black/30 shadow-none": !whiteMode,
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
            <>
              <div
                className="w-1/5 text-base/[80px] text-ellipsis ring-transparent outline-none relative group cursor-pointer before:h-0.5 before:hover:w-[50%] before:inset-x-0 before:mx-auto before:transition-all before:w-0 before:bg-[#7bbbdc] before:absolute before:bottom-0"
                key={index}
              >
                {navItem.title}
                <ul className="absolute bottom-0 translate-y-full group-hover:flex hidden flex-col justify-center items-center bg-white w-full text-black">
                  {navItem.links.map((link, index) => (
                    <li key={index} className="hover:text-[#7bbbdc]">
                      <Link to={link.url}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ))}
        </div>
        <div className="flex justify-between items-center gap-3 min-h-[80px] p-4 text-[21px]">
          <button onClick={() => changeLanguage("ko")}>KR</button>
          <div className="h-8 w-px bg-[#eee]" />
          <button onClick={() => changeLanguage("en")}>EN</button>
        </div>
      </div>
      <div className="lg:hidden fixed top-0 w-full bg-white">
        <div className="relative flex w-full justify-center items-center shadow-[0px_0px_3px_rgba(0,0,0,.5)]">
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
