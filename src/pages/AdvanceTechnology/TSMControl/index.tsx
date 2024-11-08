import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const TSMControl = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="text-center text-xl py-12 px-24 font-normal text-white  bg-[url('/img/du-beon-jjae-ka-te-go-ri-bae-gyeo1730097469.png')] mb-4">
        {t("aiTSMControlItem.titleSection1")}
      </div>
      <motion.img
        src="/img/1.jpg1730098441.png"
        alt=""
        initial={{ translateY: 100, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: false }}
      />
    </>
  );
};

export default TSMControl;
