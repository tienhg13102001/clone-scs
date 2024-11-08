import React from "react";
import { motion } from "framer-motion";

interface InfoCardProps {
  title: string;
  content: string;
  backgroundColor: string;
  textColor: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  content,
  backgroundColor,
  textColor,
}) => {
  return (
    <motion.div
      className={`p-4 rounded-xl ${backgroundColor} w-full md:w-1/3`}
      initial={{ translateY: -100, opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: false }}
    >
      <div
        className={`text-[#444444] bg-white rounded-t-md text-center py-10 text-2xl`}
      >
        {title}
      </div>
      <div
        className={`max-h-64 overflow-y-hidden text-justify pt-5 ${textColor}`}
      >
        {content}
      </div>
    </motion.div>
  );
};

export default InfoCard;
