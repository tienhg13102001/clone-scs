import Devider from "@/components/Devider";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../../components/Molecules/components";

const Residential: FC = () => {
    const { t } = useTranslation();
    return (
        <>
            <Devider />
            <SectionTitle title={t("residentialItem.titleSection1")} />
            <div className="flex gap-5 flex-col md:flex-row items-end mb-10">
                <div className="w-full">
                    <img
                        src="/img/geu-rim281730182092.jpg"
                        alt=""
                        className="w-full"
                    />
                    <p className="text-xl font-normal">
                        Enthalpy Exchange System
                    </p>
                </div>
                <div className="w-full">
                    <img
                        src="/img/geu-rim291730182173.jpg"
                        alt=""
                        className="w-full h-auto"
                    />
                    <p className="text-xl font-normal">
                        Enthalpy Exchange Principle
                    </p>
                </div>
            </div>
            <Devider />
            <div>
                <li className="list-inside text-center text-3xl mb-10">
                    Enthalpy Exchange Mode
                </li>
                <div className="flex gap-5 justify-between mx-2 md:mx-0 flex-col md:flex-rơw">
                    <div className="w-full md:w-1/3">
                        <Devider />
                        <div className="flex flex-col items-center">
                            <img
                                src="/img/111730182706.png"
                                alt=""
                                className="w-11/12"
                            />
                            <div className="w-1/2 text-center">
                                <p className="text-lg text-[#16335D]">
                                    Bypass Mode
                                </p>
                                <p className="text-lg text-[#16335D]">
                                    (Change of seasons)
                                </p>
                                <p className="text-base mt-2 text-[#444444]">
                                    Air-conditioning-free Change of seasons, at
                                    minimum power When you need clean air
                                </p>
                            </div>
                        </div>
                        <Devider />
                    </div>
                    <div className="w-full md:w-1/3">
                        <Devider />
                        <div className="flex flex-col items-center">
                            <img
                                src="/img/221730182853.png"
                                alt=""
                                className="w-11/12"
                            />
                            <div className="w-1/2 text-center">
                                <p className="text-lg text-[#A8A91E]">
                                    Bypass Mode
                                </p>
                                <p className="text-lg text-[#A8A91E]">
                                    (Change of seasons)
                                </p>
                                <p className="text-base mt-2 text-[#444444]">
                                    Air-conditioning-free Change of seasons, at
                                    minimum power When you need clean air
                                </p>
                            </div>
                        </div>
                        <Devider />
                    </div>
                    <div className="w-full md:w-1/3">
                        <Devider />
                        <div className="flex flex-col items-center">
                            <img
                                src="/img/331730182896.png"
                                alt=""
                                className="w-11/12"
                            />
                            <div className="w-1/2 text-center">
                                <p className="text-lg text-[#008480]">
                                    Bypass Mode
                                </p>
                                <p className="text-lg text-[#008480]">
                                    (Change of seasons)
                                </p>
                                <p className="text-base mt-2 text-[#444444]">
                                    Air-conditioning-free Change of seasons, at
                                    minimum power When you need clean air
                                </p>
                            </div>
                        </div>
                        <Devider />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Residential;
