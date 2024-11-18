// import React from 'react'
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { IoMdArrowUp, IoMdHome } from "react-icons/io";
import Banner from "../../assets/image/ess-banner.png";
import Container from "../../components/products/Containers";

function BatteryPage() {
  const { t } = useTranslation();
  return (
    <main className="min-h-screen w-full overflow-hidden mx-auto">
      <section
        style={{ backgroundImage: `url(${Banner})` }}
        className="bg-cover bg-center bg-no-repeat h-[300px] w-full md:h-[400px] lg:h-[470px]"
      >
        <div className="flex flex-col items-center justify-center pt-[120px] lg:pt-[150px]">
          <p className="text-white text-4xl lg:text-[50px] uppercase text-custom">
            {t("products.battery_tms.main_path")}
          </p>
          <div className="flex gap-[15px] mt-[50px]">
            <IoMdHome color="white" className="w-4 h-4 self-center" />
            <ChevronRight color="white" className="w-4 h-4 self-center" />
            <p className="capitalize text-[15px] text-white">
              {t("products.battery_tms.path")}
            </p>
            <ChevronRight color="white" className="w-4 h-4 self-center" />
            <p className="uppercase text-[15px] text-white">
              {t("products.battery_tms.main_path")}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <Container className="max-w-[1464px] min-h-screen flex flex-col justify-center items-center gap-y-[71px] overflow-hidden">
          <motion.div
            className="flex w-full justify-center items-center"
            initial={{ translateX: 100, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: false }}
          >
            <h3 className="text-[#1060ad] capitalize font-semibold lg:text-[50px]/none text-3xl text-center">
              {t("products.battery_tms.subtitle")}
            </h3>
          </motion.div>

          <div className="flex justify-between max-lg:flex-col lg:space-x-[25px] space-y-6 lg:space-y-0 max-lg:px-5">
            <motion.div
              className="space-y-[17px] flex-1"
              initial={{ translateY: 100, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              viewport={{ once: false }}
            >
              <div className="border-2 border-[#4972B8] w-full min-h-[288px] p-[33px] 2xl:text-[33px]/[50px] text-2xl text-black">
                <p className="text-[#1060ad] font-semibold">01</p>
                <p className="font-semibold">
                  {t("products.battery_tms.item1.name")}
                </p>
                <p className="2xl:text-[25px]/[33px] text-xl text-pretty pt-[38px]">
                  {t("products.battery_tms.item1.description")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-y-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="size-1 rounded-full bg-[#1060ad]" />
                ))}
              </div>
              <div className="bg-[#1060ad] text-white min-h-[197px] w-full p-[33px]">
                <p className="2xl:text-[25px]/[33px] text-xl">
                  {t("products.battery_tms.item1.description2")}
                </p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-[17px] flex-1"
              initial={{ translateY: 100, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              viewport={{ once: false }}
            >
              <div className="border-2 border-[#4972B8] w-full min-h-[288px] p-[33px] 2xl:text-[33px]/[50px] text-2xl text-black">
                <p className="text-[#1060ad] font-semibold">02</p>
                <p className="font-semibold">
                  {t("products.battery_tms.item2.name")}
                </p>
                <p className="2xl:text-[25px]/[33px] text-xl text-pretty pt-[38px]">
                  {t("products.battery_tms.item2.description")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-y-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="size-1 rounded-full bg-[#1060ad]" />
                ))}
              </div>
              <div className="bg-[#1060ad] text-white min-h-[197px] w-full p-[33px]">
                <p className="2xl:text-[25px]/[33px] text-xl">
                  {t("products.battery_tms.item2.description2")}
                </p>
              </div>
              <div className="px-[33px]">
                <span className="text-[#1060ad] font-semibold 2xl:text-[25px]/[33px] text-xl">
                  {t("products.battery_tms.item2.description3")}
                </span>
              </div>
            </motion.div>

            <motion.div
              className="space-y-[17px] flex-1"
              initial={{ translateY: 100, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              viewport={{ once: false }}
            >
              <div className="border-2 border-[#4972B8] w-full min-h-[288px] p-[33px] 2xl:text-[33px]/[50px] text-2xl text-black">
                <p className="text-[#1060ad] font-semibold">03</p>
                <p className="font-semibold">
                  {t("products.battery_tms.item3.name")}
                </p>
                <p className="2xl:text-[25px]/[33px] text-xl text-pretty pt-[38px]">
                  {t("products.battery_tms.item3.description")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-y-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="size-1 rounded-full bg-[#1060ad]" />
                ))}
              </div>
              <div className="bg-[#1060ad] text-white min-h-[197px] w-full p-[33px]">
                <p className="2xl:text-[25px]/[33px] text-xl">
                  {t("products.battery_tms.item3.description2")}
                </p>
              </div>
              <div className="px-[33px]">
                <span className="text-[#1060ad] font-semibold 2xl:text-[25px]/[33px] text-xl">
                  {t("products.battery_tms.item3.description3")}
                </span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="max-w-[1464px] min-h-screen flex flex-col justify-center items-center gap-y-[71px] overflow-hidden">
          <motion.div
            className="flex w-full justify-center items-center"
            initial={{ translateX: 100, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: false }}
          >
            <h3 className="text-[#1060ad] capitalize font-semibold lg:text-[50px]/none text-3xl text-center max-lg:pt-[100px]">
              {t("products.battery_tms.subtitle2")}
            </h3>
          </motion.div>
          <motion.div
            className="w-full flex flex-col gap-y-[50px]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex max-lg:flex-col justify-center items-center w-full gap-6">
              <div className="border-2 border-[#1060ad] flex gap-x-[30px] flex-1 justify-center w-full items-center lg:py-[52px]">
                <span className="text-[100px]/none font-semibold text-[#1060ad]">
                  0%
                </span>
                <p className="text-[#222] text-[33px]/[50px]">
                  {t("battery")} <br />
                  {t("explosion")}
                </p>
              </div>
              <div className="border-2 border-[#1060ad] flex gap-x-[30px] flex-1 justify-center w-full items-center lg:py-[52px]">
                <span className="text-[100px]/none font-semibold text-[#1060ad] flex">
                  <IoMdArrowUp className="size-24" />
                  15%
                </span>
                <p className="text-[#222] text-[33px]/[50px]">
                  {t("driving")} <br />
                  {t("extension")}
                </p>
              </div>
            </div>
            <div className="flex max-lg:flex-col justify-center items-center lg:gap-[90px] gap-10">
              <div className="flex justify-center items-center flex-col">
                <img src="/img/battery-img-01.png" alt="" />
              </div>
              <img src="/img/plus.png" alt="" className="max-lg:size-20" />
              <div className="flex flex-col relative max-lg:min-h-[450px] min-h-[300px]">
                <div className="flex justify-center items-start gap-[27px]">
                  <div className="flex flex-col items-center gap-1">
                    <h1 className="font-semibold text-[25px]/[33px]">TMS</h1>
                    <p className="text-[17px]/[21px]">
                      {t("products.battery_tms.subtitle")}
                    </p>
                    <div className="flex flex-col items-center">
                      <img src="/img/ic-ess-tms.png" alt="" />
                      <div className="w-[2px] bg-black h-[49px]" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <h1 className="font-semibold text-[25px]/[33px]">
                      {t("products.battery_tms.controller")}
                    </h1>
                    <p className="text-[17px]/[21px]">
                      {t("products.battery_tms.subtitle5")}
                    </p>
                    <div className="flex flex-col items-center">
                      <img src="/img/ic-ess-ai.png" alt="" />
                      <div className="w-[2px] bg-black h-[56px]" />
                    </div>
                  </div>
                </div>
                <img
                  className="absolute -z-10 translate-y-[60%]"
                  src="/img/battery-img-02.png"
                  alt=""
                />
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <section>
        <Container>
          <motion.div
            className="flex w-full justify-center items-center"
            initial={{ translateX: 100, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: false }}
          >
            <h3 className="text-[#1060ad] capitalize font-semibold lg:text-[50px]/none text-3xl text-center max-lg:pt-[100px]">
              {t("products.battery_tms.subtitle3")}
            </h3>
          </motion.div>
          <div className="flex flex-col gap-5 justify-around mt-[71px] px-2 lg:px-0 lg:flex-row">
            <div className="p-8 border-2 border-[#1060ad] flex flex-col justify-between items-center gap-10 w-full lg:w-1/2">
              <motion.img src={"/img/battery-img-03.webp"} className="w-2/3" />
              <p className="text-[33px] text-[#1060ad] font-medium">
                {t("electric_bus")}
              </p>
              {""}
            </div>
            <div className="p-8 border-2 border-[#1060ad] flex flex-col justify-between items-center gap-10 w-full lg:w-1/2">
              <motion.img src={"/img/battery-img-04.webp"} className="w-2/3" />
              <p className="text-[33px] text-[#1060ad] text-center font-medium">
                {t("performance_info")}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-24">
        <Container>
          <motion.div
            className="flex w-full justify-center items-center"
            initial={{ translateX: 100, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: false }}
          >
            <h3 className="text-[#1060ad] capitalize font-semibold lg:text-[50px]/none text-3xl text-center max-lg:pt-[100px]">
              {t("products.battery_tms.subtitle4")}
            </h3>
          </motion.div>
        </Container>
      </section>

      <section className="overflow-x-auto w-full max-w-7xl mx-auto p-4 flex flex-col justify-center items-center">
        <table className="break-words text-center max-lg:hidden">
          <thead>
            <tr>
              <th
                className="bg-black border border-white text-white py-4 px-6 font-semibold text-lg"
                colSpan={1}
              ></th>
              <th
                className="bg-[#1060ad] border border-white text-white py-4 px-8 font-semibold text-lg uppercase"
                colSpan={1}
              >
                {t("products.battery_tms.table.col_span1")}
              </th>
              <th
                className="bg-[#24aae1] border border-white text-white py-4 px-16 font-semibold text-lg uppercase"
                colSpan={1}
              >
                {t("products.battery_tms.table.col_span2")}
              </th>
              <th
                className="bg-[#1060ad] border border-white text-white py-4 px-8 font-semibold text-lg uppercase"
                colSpan={1}
              >
                {t("products.battery_tms.table.col_span1")}
              </th>
              <th
                className="bg-[#24aae1] border border-white text-white py-4 px-16 font-semibold text-lg uppercase"
                colSpan={1}
              >
                {t("products.battery_tms.table.col_span2")}
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Hardware Section */}
            <tr>
              <td
                rowSpan={6}
                className="bg-black border border-white text-white p-4 font-semibold uppercase"
              >
                {t("products.battery_tms.table.row_span1")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item1.name")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item1.type")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item7.name")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item7.type")}
              </td>
            </tr>
            <tr>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item2.name")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item2.type")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item8.name")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item8.type")}
              </td>
            </tr>
            <tr>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item3.name")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item3.type")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item9.name")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item9.type")}
              </td>
            </tr>
            <tr>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item4.name")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item4.type")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item10.name")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item10.type")}
              </td>
            </tr>
            <tr>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item5.name")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item5.type")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item11.name")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item11.type")}
              </td>
            </tr>
            <tr>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item6.name")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item6.type")}
              </td>
              <td className="border p-4 font-semibold"></td>
              <td className="border p-4 font-semibold"></td>
            </tr>

            {/* Software Section */}
            <tr>
              <td
                rowSpan={2}
                className="bg-black border border-white text-white p-4 font-semibold uppercase"
              >
                {t("products.battery_tms.table.row_span2")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.software_section.item1.name")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.software_section.item1.type")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.software_section.item2.name")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.software_section.item2.type")}
              </td>
            </tr>
          </tbody>
        </table>
        <table className="hidden break-words text-center max-lg:block">
          <thead>
            <tr>
              <th
                className="bg-black border border-white text-white py-4 px-6 font-semibold text-lg"
                colSpan={1}
              ></th>
              <th
                className="bg-[#1060ad] border border-white text-white py-4 px-8 font-semibold text-lg uppercase"
                colSpan={1}
              >
                {t("products.battery_tms.table.col_span1")}
              </th>
              <th
                className="bg-[#24aae1] border border-white text-white py-4 px-16 font-semibold text-lg uppercase"
                colSpan={1}
              >
                {t("products.battery_tms.table.col_span2")}
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Hardware Section */}
            <tr>
              <td
                rowSpan={11}
                className="bg-black border border-white text-white p-4 font-semibold uppercase"
              >
                {t("products.battery_tms.table.row_span1")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item1.name")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item1.type")}
              </td>
            </tr>
            <tr>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item2.name")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item2.type")}
              </td>
            </tr>
            <tr>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item3.name")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item3.type")}
              </td>
            </tr>
            <tr>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item4.name")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item4.type")}
              </td>
            </tr>
            <tr>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item5.name")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item5.type")}
              </td>
            </tr>
            <tr>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item6.name")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item6.type")}
              </td>
              <td className="border p-4 font-semibold"></td>
              <td className="border p-4 font-semibold"></td>
            </tr>
            <tr>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item7.name")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item7.type")}
              </td>
            </tr>
            <tr>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item8.name")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item8.type")}
              </td>
            </tr>
            <tr>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item9.name")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item9.type")}
              </td>
            </tr>
            <tr>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item10.name")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item10.type")}
              </td>
            </tr>
            <tr>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item11.name")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.hardware_section.item11.type")}
              </td>
            </tr>
            {/* Software Section */}
            <tr>
              <td
                rowSpan={2}
                className="bg-black border border-white text-white p-4 font-semibold uppercase"
              >
                {t("products.battery_tms.table.row_span2")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.software_section.item1.name")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.software_section.item1.type")}
              </td>
            </tr>
            <tr>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.software_section.item2.name")}
              </td>
              <td className="border p-4 font-semibold">
                {t("products.battery_tms.table.software_section.item2.type")}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default BatteryPage;
