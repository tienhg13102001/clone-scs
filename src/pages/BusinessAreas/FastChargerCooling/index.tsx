import { FC } from "react";
import Devider from "../../../components/Devider";
import {
    BenefitCard,
    InfoCard,
    SectionTitle,
} from "../../../components/Molecules/components";
import { useTranslation } from "react-i18next";
import {motion} from "framer-motion"

const FastChargerCooling: FC = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="flex gap-5 flex-col md:flex-row">
                <motion.img
                    src="/img/geu-rim011730166869.jpg"
                    alt=""
                    className="w-full md:w-1/2"
                    initial={{ translateX: -100, opacity: 0 }}
                    whileInView={{ translateX: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: false }}
                />
                <motion.img
                    src="/img/geu-rim011730166869.png"
                    alt=""
                    className="w-full md:w-1/2"
                    initial={{ translateX: 100, opacity: 0 }}
                    whileInView={{ translateX: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: false }}
                />
            </div>
            <Devider />
            {/*  */}
            <SectionTitle title={t("fastChargerCooling.titleSection1")} />
            <div className="flex gap-10 justify-center pt-10 flex-col mx-2 md:mx-0 md:flex-row">
                <InfoCard
                    title={t(
                        "fastChargerCooling.infoCards.safeguardingBatteryHealth.title"
                    )}
                    content={t(
                        "fastChargerCooling.infoCards.safeguardingBatteryHealth.content"
                    )}
                    backgroundColor="bg-[#0f6bb5]"
                    textColor="text-white"
                />
                <InfoCard
                    title={t(
                        "fastChargerCooling.infoCards.fasterChargingTimes.title"
                    )}
                    content={t(
                        "fastChargerCooling.infoCards.fasterChargingTimes.content"
                    )}
                    backgroundColor="bg-[#01bef7]"
                    textColor="text-white"
                />
                <InfoCard
                    title={t(
                        "fastChargerCooling.infoCards.improvedReliability.title"
                    )}
                    content={t(
                        "fastChargerCooling.infoCards.improvedReliability.content"
                    )}
                    backgroundColor="bg-[#d3effb]"
                    textColor="text-[#444444]"
                />
            </div>
            <Devider />
            {/*  */}
            <SectionTitle title={t("fastChargerCooling.titleSection2")} />
            <div className="flex gap-10 justify-center pt-10 flex-col mx-2 md:mx-0 md:flex-row">
                <BenefitCard
                    title={t(
                        "fastChargerCooling.benefitsCard.providesStability.title"
                    )}
                    content={t(
                        "fastChargerCooling.benefitsCard.providesStability.content"
                    )}
                    delay={0.5}
                />
                <BenefitCard
                    title={t(
                        "fastChargerCooling.benefitsCard.reduceChargingTime.title"
                    )}
                    content={t(
                        "fastChargerCooling.benefitsCard.reduceChargingTime.content"
                    )}
                    delay={0.75}
                />
                <BenefitCard
                    title={t(
                        "fastChargerCooling.benefitsCard.reduceChargingTime.title"
                    )}
                    content={t(
                        "fastChargerCooling.benefitsCard.reduceChargingTime.content"
                    )}
                    delay={1}
                />
            </div>
            <Devider />
            {/*  */}
            <SectionTitle title={t("fastChargerCooling.titleSection3")} />
            <div className="flex gap-10 justify-center pt-10">
                <img src="/img/ha-dan-ja1730166720.png" alt="" />
            </div>
        </>
    );
};

export default FastChargerCooling;
