import React from "react";

interface BenefitCardProps {
    title: string | JSX.Element;
    content: string | JSX.Element;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, content }) => {
    return (
        <div className="w-full md:w-1/3">
            <div className="text-black font-medium border-[2px] border-[#9796E5] bg-white text-center py-10 text-2xl">
                {title}
            </div>
            <div className="overflow-y-auto text-justify pt-5 text-black">
                {content}
            </div>
        </div>
    );
};

export default BenefitCard;
