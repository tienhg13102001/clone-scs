import { getNavItems, PageTitles } from "@/lib/navItem";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/sidebarStore";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const { t, i18n } = useTranslation();
  const [whiteMode, setWhiteMode] = useState(false);
  const location = useLocation();
  const titles = PageTitles(t);
  const navigate = useNavigate();
  useEffect(() => {
    const title = titles[location.pathname] || "SCS";
    document.title = title === "SCS" ? title : `SCS ${title}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const isOpen = useSidebarStore((state) => state.isOpen);
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);

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
          "fixed top-0 flex justify-between items-center w-full bg-white border-b px-4 border-[rgba(255,255,255,.2)] shadow-md transition-all duration-200 max-lg:hidden z-50",
          {
            "text-white bg-transparent hover:bg-black/30 shadow-none":
              !whiteMode,
          }
        )}
      >
        <Link to="/">
          <img
            src={whiteMode ? "/img/logo.png" : "/img/logo-w.png"}
            alt=""
            className="block w-auto max-h-[50px]"
          />
        </Link>
        <div className="flex text-center text-ellipsis text-nowrap w-full max-w-[1200px]">
          {navItems.map((navItem, index) => (
            <div
              className="w-1/5 min-h-[84px] flex justify-center items-center text-base text-ellipsis ring-transparent outline-none relative group cursor-pointer before:h-0.5 before:hover:w-[50%] before:inset-x-0 before:mx-auto before:transition-all before:w-0 before:bg-[#7bbbdc] before:absolute before:bottom-0"
              key={index}
            >
              <p
                className="w-full h-full flex items-center justify-center"
                onClick={() => navigate(navItem.url)}
              >
                {navItem.title}
              </p>
              <ul className="absolute bottom-0 translate-y-full flex opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 transition-all flex-col justify-center items-center bg-white w-full text-black p-4 cursor-default">
                {navItem.links.map((link, index) => (
                  <li
                    key={index}
                    className="hover:text-[#7bbbdc] py-1 px-2 cursor-pointer"
                  >
                    <NavLink
                      to={link.url}
                      className={({ isActive }) =>
                        cn({
                          "text-[#7bbbdc]": isActive,
                        })
                      }
                    >
                      {link.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center gap-3 min-h-[80px] p-4 text-[21px]">
          <button onClick={() => changeLanguage("ko")}>KR</button>
          <div className="h-8 w-px bg-[#eee]" />
          <button onClick={() => changeLanguage("en")}>EN</button>
        </div>
      </div>
      <div className="lg:hidden fixed z-50 top-0 w-full bg-white">
        <div className="relative flex w-full justify-center items-center shadow-[0px_0px_3px_rgba(0,0,0,.5)]">
          <button onClick={toggleSidebar} className="absolute inset-y-0 left-3">
            <div className="flex flex-col justify-center items-center w-6 h-6">
              <span
                className={`bg-current absolute h-0.5 w-6 transform transition-all duration-300 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                }`}
              />
              <span
                className={`bg-current absolute h-0.5 transform transition-all duration-300 ease-in-out ${
                  isOpen ? "w-0 opacity-0" : "w-6 opacity-100"
                }`}
              />
              <span
                className={`bg-current absolute h-0.5 w-6 transform transition-all duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                }`}
              />
            </div>
          </button>
          <Link to="/" onClick={toggleSidebar}>
            <img src="/img/logo.png" alt="" className="max-h-[50px]" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
