import Devider from "@/components/Devider";
import { BenefitCard } from "@/components/Molecules/components";
import { useTranslation } from "react-i18next";

const EnergyIntegration = () => {
    const { t } = useTranslation();
    return (
        <>
            <Devider />
            <div className="flex justify-center gap-5 mx-2 md:mx-0">
                <BenefitCard
                    title={<p>{t("energyIntegrationSystemItem.solution")}</p>}
                    content={
                        <div>
                            <img
                                src="/img/geu-rim03.jpg1730101127.png"
                                alt=""
                            />
                            <p className="text-center text-xl text-[#444444]">
                                {t("energyIntegrationSystemItem.content1")}
                            </p>
                        </div>
                    }
                />
                <BenefitCard
                    title="Solution Before"
                    content={
                        <div>
                            <img
                                src="/img/geu-rim03.jpg-11730101208.png"
                                alt=""
                            />
                            <p className="text-center text-xl text-[#444444]">
                                {t("energyIntegrationSystemItem.content2")}
                            </p>
                        </div>
                    }
                />
            </div>
            <Devider />
        </>
    );
};

export default EnergyIntegration;
