import { FC } from "react";
import { useTranslation } from "react-i18next";
import Devider from "../../../components/Devider";
import { BenefitCard, InfoCard, SectionTitle } from "../components";

const ElectricVessel: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex gap-5 flex-col md:flex-row">
        <img
          src="/img/geu-rim0117301668691730170049.png"
          alt=""
          className="w-full md:w-1/2"
        />
        <img
          src="/img/geu-rim011730166869d1730170224.png"
          alt=""
          className="w-full md:w-1/2"
        />
      </div>
      <Devider />
      <SectionTitle title={t("electricItem.titleSection1")} />
      <div className="flex gap-10 justify-center pt-10 flex-col md:flex-row">
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
          title={t("fastChargerCooling.infoCards.fasterChargingTimes.title")}
          content={t(
            "fastChargerCooling.infoCards.fasterChargingTimes.content"
          )}
          backgroundColor="bg-[#01bef7]"
          textColor="text-white"
        />
        <InfoCard
          title={t("fastChargerCooling.infoCards.improvedReliability.title")}
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
      <div className="flex gap-10 justify-center pt-10 flex-col md:flex-row">
        <BenefitCard
          title={t("fastChargerCooling.benefitsCard.providesStability.title")}
          content={t(
            "fastChargerCooling.benefitsCard.providesStability.content"
          )}
        />
        <BenefitCard
          title={t("fastChargerCooling.benefitsCard.reduceChargingTime.title")}
          content={t(
            "fastChargerCooling.benefitsCard.reduceChargingTime.content"
          )}
        />
        <BenefitCard
          title={t("fastChargerCooling.benefitsCard.reduceChargingTime.title")}
          content={t(
            "fastChargerCooling.benefitsCard.reduceChargingTime.content"
          )}
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

export default ElectricVessel;
