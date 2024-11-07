import { FC } from "react";
import { useTranslation } from "react-i18next";
import Devider from "../../../components/Devider";
import { SectionTitle } from "../components";
import TableComponent from "../components/SpecTable";

const Elevator: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex gap-5 flex-col md:flex-row">
        <img
          src="/img/geu-rim011730166869d1730170224dd1730179229.png"
          alt=""
          className="w-full md:w-1/2"
        />
        <img src="/img/ddff1730181276.png" alt="" className="w-full md:w-1/2" />
      </div>
      <Devider />
      <SectionTitle title={t("elevatorItem.titleSection1")} />
      <div className="mb-10">
        <TableComponent />
      </div>
    </>
  );
};

export default Elevator;
