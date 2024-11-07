import Devider from "@/components/Devider";
import { FC } from "react";
import { SectionTitle } from "../components";
import { useTranslation } from "react-i18next";

const USPComponent: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Devider />
      <SectionTitle title={t("USPItem.titleSection1")} />
      <img src="/img/geu-rim31.jpg1730183650.png" alt="" className="mb-10" />
    </>
  );
};

export default USPComponent;
