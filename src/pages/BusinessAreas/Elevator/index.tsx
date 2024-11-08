import { FC } from "react";
import { useTranslation } from "react-i18next";
import Devider from "../../../components/Devider";
import { SectionTitle } from "../../../components/Molecules/components";
import TableComponent from "../../../components/Molecules/components/SpecTable";
import { motion } from "framer-motion";

const Elevator: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex gap-5 flex-col md:flex-row">
        <motion.img
          src="/img/geu-rim011730166869d1730170224dd1730179229.png"
          alt=""
          className="w-full md:w-1/2"
          initial={{ translateX: -100, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: false }}
        />
        <motion.img
          src="/img/ddff1730181276.png"
          alt=""
          className="w-full md:w-1/2"
          initial={{ translateX: 100, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: false }}
        />
      </div>
      <Devider />
      <SectionTitle title={t("elevatorItem.titleSection1")} />
      <motion.div
        className="mb-10"
        initial={{ translateY: 100, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: false }}
      >
        <TableComponent />
      </motion.div>
    </>
  );
};

export default Elevator;
