import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <motion.div
      className="flex items-center"
      initial={{ translateX: 100, opacity: 0 }}
      whileInView={{ translateX: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: false }}
    >
      <IoIosArrowForward size={45} color="#4972B8" />
      <p className="text-3xl text-[#444444] font-medium">{title}</p>
    </motion.div>
  );
};

export default SectionTitle;
