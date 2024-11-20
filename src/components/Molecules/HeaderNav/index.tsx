import { FC } from "react";
import { useBreadcrumb } from "../../../hooks/useBreadcrumb";
import { IoMdHome } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

type Props = {
  title: string;
};

const HeaderNavigation: FC<Props> = ({ title }) => {
  const { t } = useTranslation();
  const { pathnames } = useBreadcrumb();

  return (
    <div className="bg-hero-pattern bg-center bg-cover pt-36 pb-12">
      <motion.h1
        className="text-white text-5xl mb-5 text-center"
        initial={{ translateY: -30, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: false }}
      >
        {title}
      </motion.h1>

      <motion.div
        className="flex justify-center mt-14 items-center gap-3"
        initial={{ translateY: -30, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <IoMdHome color="white" className="text-white relative" />
        {pathnames &&
          pathnames.map((path, index) => (
            <div
              key={index}
              className="leading-[50px] text-white relative flex gap-3 items-center"
            >
              <IoIosArrowForward />
              {t(`${path}`)}
            </div>
          ))}
      </motion.div>
    </div>
  );
};

export default HeaderNavigation;
