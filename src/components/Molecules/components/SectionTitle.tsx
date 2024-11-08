import React from "react";
import { IoIosArrowForward } from "react-icons/io";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="flex items-center">
      <IoIosArrowForward size={45} color="#4972B8" />
      <p className="text-3xl text-[#444444] font-medium">{title}</p>
    </div>
  );
};

export default SectionTitle;
