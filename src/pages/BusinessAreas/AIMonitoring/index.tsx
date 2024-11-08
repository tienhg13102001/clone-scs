import Devider from "@/components/Devider";
import { FC } from "react";
import { BenefitCard, SectionTitle } from "../../../components/Molecules/components";
import { useTranslation } from "react-i18next";

const AIMonitoring: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      {" "}
      <Devider />
      {/*  */}
      <SectionTitle title={t("aiMonitoringItem.titleSection1")} />
      <p className="text-xl text-[#444444] font-medium mt-5 mx-2 md:mx-0">
        Al monitoring is a technology that utilizes Al technol- ogy to
        continuously monitor and <br /> analyze the perfor- mance and efficiency
        of green energy systems. <br />
        <br />
        It supports real-time optimized operations, It de- tects problems in
        advance and responds quickly.
      </p>
      <div className="flex gap-10 justify-center pt-10 flex-col mx-2 md:mx-0 md:flex-row">
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
     <div className="flex w-full items-center justify-center">
     <img src="/img/1231231231730184447.png" alt="" />
     </div>
      <Devider />
    </>
  );
};

export default AIMonitoring;
