import { useTranslation } from "react-i18next";
import Footer from "../../components/Molecules/Footer";
import Header from "../../components/Molecules/Header";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="wrap">
      <Header />
      <div>
        <h1>{t("welcome")}</h1>
        <p>{t("description")}</p>

        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("ko")}>한국어</button>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomePage;
