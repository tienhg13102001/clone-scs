import React from "react";

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
    <div className={`p-4 rounded-xl ${backgroundColor} w-full md:w-1/3`}>
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
    </div>
  );
};

export default InfoCard;
