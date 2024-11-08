import { FC } from "react";
import Devider from "../../../components/Devider";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ICEComponent: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Devider />
      <div className="flex gap-5 flex-col items-center md:flex-row">
        <motion.div
          className="flex justify-center md:justify-start w-full md:w-1/2"
          initial={{ translateX: -100, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: false }}
        >
          <img
            src="/img/geu-rim0117301668691730168011.png"
            alt=""
            className="w-3/4"
          />
        </motion.div>
        <motion.div
          className="flex flex-col items-center w-full md:w-1/2"
          initial={{ translateX: 100, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: false }}
        >
          <p className="text-[#0256D0] font-medium text-2xl">
            {t("ICEItem.titleImg1")}
          </p>
          <img src="/img/geu-rim071730168133.jpg" alt="" className="w-full" />
          <p className="text-[#D00000] font-medium text-2xl">
            {t("ICEItem.titleImg2")}
          </p>
          <img src="/img/geu-rim081730168231.jpg" alt="" className="w-full2" />
        </motion.div>
      </div>
      <Devider />
    </>
  );
};

export default ICEComponent;
