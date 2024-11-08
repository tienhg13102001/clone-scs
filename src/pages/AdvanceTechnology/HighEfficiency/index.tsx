import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const HighEfficiency: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="text-center text-xl py-12 px-24 font-normal text-white  bg-[url('/img/du-beon-jjae-ka-te-go-ri-bae-gyeo1730097469.png')] mb-4">
        {t("highEfficiencyHeatExchangerItem.title1")}{" "}
        <span className="text-[#31c4f6]">
          {t("highEfficiencyHeatExchangerItem.title2")}
        </span>{" "}
        {t("highEfficiencyHeatExchangerItem.title3")}
      </div>
      <div className="flex flex-col md:flex-row">
        <motion.div
          initial={{ translateX: -100, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: false }}
        >
          <img src="/img/221730099153.png" alt="" className="w-full h-atuo" />
        </motion.div>
        <motion.div
          initial={{ translateX: 100, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: false }}
        >
          <img
            src="/img/2222221730099163.png"
            alt=""
            className="w-full h-atuo"
          />
        </motion.div>
      </div>
    </>
  );
};

export default HighEfficiency;
