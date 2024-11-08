import Devider from "@/components/Devider";
import { FC } from "react";
import { SectionTitle } from "../../../components/Molecules/components";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const USPComponent: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Devider />
      <SectionTitle title={t("USPItem.titleSection1")} />
      <motion.img
        src="/img/geu-rim31.jpg1730183650.png"
        alt=""
        className="mb-10"
        initial={{ translateY: 100, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: false }}
      />
    </>
  );
};

export default USPComponent;
