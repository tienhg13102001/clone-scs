import React from "react";
import { motion } from "framer-motion";

interface BenefitCardProps {
  title: string | JSX.Element;
  content: string | JSX.Element;
  delay?: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  title,
  content,
  delay = 0.5,
}) => {
  return (
    <motion.div
      className="w-full md:w-1/3"
      initial={{ translateY: 100, opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 1, delay: delay }}
      viewport={{ once: false }}
    >
      <div className="text-black font-medium border-[2px] border-[#9796E5] bg-white text-center py-10 text-2xl">
        {title}
      </div>
      <div className="overflow-y-auto text-justify pt-5 text-black">
        {content}
      </div>
    </motion.div>
  );
};

export default BenefitCard;
