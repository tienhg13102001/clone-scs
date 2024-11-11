import Devider from "@/components/Devider";
import { SectionTitle } from "@/components/Molecules/components";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import InfoTable from "@/components/Molecules/components/InfoTable";

const RoofComponent = () => {
  const { t } = useTranslation();
  return (
    <>
      <Devider />
      <SectionTitle title={t("roofItems.titleSection1")} />
      <div className="flex justify-between items-end mb-10">
        {/* 231231730177121.png */}
        <motion.img
          src="/img/231231730177121.png"
          alt=""
          className="mb-10"
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: false }}
        />
        <div>
          {" "}
          <motion.img
            src="/img/dddff1730177276.png"
            alt=""
            className="mb-10"
            initial={{ translateY: 100, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: false }}
          />
          <InfoTable />
        </div>
      </div>
    </>
  );
};

export default RoofComponent;
