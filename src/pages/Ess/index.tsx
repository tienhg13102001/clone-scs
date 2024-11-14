// import React from 'react'
import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/Molecules/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { IoMdHome } from 'react-icons/io';
import { useTranslation } from "react-i18next";
import Banner from "../../assets/image/ess-banner.png";
import BenefitImg from "../../assets/image/ess1.png";
import Container from "../../components/products/Containers";

function EssPage() {
  const { t } = useTranslation();
  return (
    <SidebarProvider open={false}>
      <AppSidebar />
      <main className="min-h-screen w-full">
        <Header />
        <section
          style={{ backgroundImage: `url(${Banner})` }}
          className="bg-center bg-cover bg-no-repeat h-[300px] w-full md:h-[400px] lg:h-[470px]"
        >
          <div className="flex flex-col items-center justify-center pt-[150px]">
            <p className="text-white text-[50px] uppercase text-custom">
              {t("products.ess_tms.main_path")}
            </p>
            <div className="flex gap-[15px] mt-[50px]">
              <IoMdHome color="white" className="w-4 h-4 self-center" />
              <ChevronRight color="white" className="w-4 h-4 self-center" />
              <p className="capitalize text-[15px] text-white">
                {t("products.ess_tms.path")}
              </p>
              <ChevronRight color="white" className="w-4 h-4 self-center" />
              <p className="uppercase text-[15px] text-white">
                {t("products.ess_tms.main_path")}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 lg:mt-[80px]">
          <Container>
            <h1 className="text-[#444] text-center lg:text-start text-[40px] max-w-[670px]">
              {" "}
              <span className="text-[#4972B8]">
                {t("products.ess_tms.title")}
              </span>
              {t("products.ess_tms.title2")}
            </h1>
            <hr className="border-t-2 border-[#4972B8] my-5" />
            <motion.div
              className="flex gap-5 my-10"
              initial={{ translateX: 100, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: false }}
            >
              <ChevronRight
                color="#4972B8"
                className="w-[45px] h-[45px] self-center"
              />
              <h3 className="text-[#444] text-[30px]">
                {t("products.ess_tms.subtitle")}
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 lg:space-x-[25px] px-4 space-y-6 lg:space-y-0">
              <motion.div
                className="space-y-7"
                initial={{ translateY: 100, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.1 }}
                viewport={{ once: false }}
              >
                <div className="border border-[#4972B8] w-full">
                  <p className="text-black text-2xl text-center py-[10px] px-12">
                    {t("products.ess_tms.item1.name")}
                  </p>
                </div>
                <p className="text-[#444] text-lg">
                  {t("products.ess_tms.item1.description")}
                </p>
                <p className="text-[#444] text-lg">
                  {t("products.ess_tms.item1.description2")}
                </p>
              </motion.div>

              <motion.div
                className="space-y-7"
                initial={{ translateY: 100, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.2 }}
                viewport={{ once: false }}
              >
                <div className="border border-[#4972B8]">
                  <p className="text-black text-2xl text-center py-[10px] px-12">
                    {t("products.ess_tms.item2.name")}
                  </p>
                </div>
                <p className="text-[#444] text-lg">
                  {t("products.ess_tms.item2.description")}
                </p>
                <p className="text-[#444] text-lg">
                  {t("products.ess_tms.item2.description2")}
                </p>
              </motion.div>

              <motion.div
                className="space-y-7"
                initial={{ translateY: 100, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.3 }}
                viewport={{ once: false }}
              >
                <div className="border border-[#4972B8]">
                  <p className="text-black text-2xl text-center py-[10px] px-12">
                    {t("products.ess_tms.item3.name")}
                  </p>
                </div>
                <p className="text-[#444] text-lg">
                  {t("products.ess_tms.item3.description")}
                </p>
                <p className="text-[#444] text-lg">
                  {t("products.ess_tms.item3.description2")}
                </p>
              </motion.div>
            </div>
            <hr className="border-t-2 border-[#4972B8] my-5" />
          </Container>
        </section>

        <section>
          <Container>
            <motion.div
              className="flex gap-5 my-10"
              initial={{ translateX: 100, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: false }}
            >
              <ChevronRight
                color="#4972B8"
                className="w-[45px] h-[45px] self-center"
              />
              <h3 className="text-[#444] text-[30px]">
                {t("products.ess_tms.subtitle2")}
              </h3>
            </motion.div>
            <motion.img
              src={BenefitImg}
              className="w-full h-[400px] lg:w-[1245px] lg:h-[758px] object-contain"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
            <hr className="border-t-2 border-[#4972B8] my-5" />
          </Container>
        </section>

        <section>
          <Container>
            <motion.div
              className="flex gap-5 my-10"
              initial={{ translateX: 100, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: false }}
            >
              <ChevronRight
                color="#4972B8"
                className="w-[45px] h-[45px] self-center"
              />
              <h3 className="text-[#444] text-[30px]">
                {t("products.ess_tms.subtitle3")}
              </h3>
            </motion.div>
            <div className="flex gap-6">
              <motion.div
                className="border border-[#1060ad] grow flex flex-col items-center gap-4 justify-between p-10"
                initial={{ translateX: -100, opacity: 0 }}
                whileInView={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: false }}
              >
                <motion.img
                  src={"/public/img/battery-img-03.webp"}
                  className="w-full object-contain p-5"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
                <motion.p
                  className="text-[#1060ad] font-normal text-3xl text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  Electric Bus
                </motion.p>
              </motion.div>
              <motion.div
                className="border border-[#1060ad] grow flex flex-col items-center gap-4 justify-between p-10"
                initial={{ translateX: 100, opacity: 0 }}
                whileInView={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: false }}
              >
                <motion.img
                  src={"/public/img/battery-img-04.webp"}
                  className="w-full object-contain p-5"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
                <motion.p
                  className="text-[#1060ad] font-normal text-3xl text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  SCS 10kW Liquid + Air Cooling System
                </motion.p>
              </motion.div>
            </div>

            <hr className="border-t-2 border-[#4972B8] my-5" />
          </Container>
        </section>

        <section className="">
          <Container>
            <motion.div
              className="flex gap-5 my-10"
              initial={{ translateX: 100, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: false }}
            >
              <ChevronRight
                color="#4972B8"
                className="w-[45px] h-[45px] self-center"
              />
              <h3 className="text-[#444] text-[30px] text-start">
                {t("products.ess_tms.subtitle4")}
              </h3>
            </motion.div>
          </Container>
        </section>

        <section className="overflow-x-auto w-full max-w-7xl mx-auto p-4">
          <table className="min-w-full break-words text-center">
            <thead>
              <tr>
                <th
                  className="bg-[#8db3e2] border border-white text-white py-4 px-6 font-semibold text-lg"
                  colSpan={1}
                ></th>
                <th
                  className="bg-[#548dd4] border border-white text-white py-4 px-8 font-semibold text-lg uppercase"
                  colSpan={1}
                >
                  {t("products.ess_tms.table.col_span1")}
                </th>
                <th
                  className="bg-[#548dd4] border border-white text-white py-4 px-16 font-semibold text-lg uppercase"
                  colSpan={1}
                >
                  {t("products.ess_tms.table.col_span2")}
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Hardware Section */}
              <tr>
                <td
                  rowSpan={11}
                  className="bg-[#a5a5a5] border border-white text-white p-4 font-semibold uppercase"
                >
                  {t("products.ess_tms.table.row_span1")}
                </td>
                <td className="border p-4 font-semibold">
                  {t("products.ess_tms.table.hardware_section.item1.name")}
                </td>
                <td className="border p-4 font-semibold">
                  {t("products.ess_tms.table.hardware_section.item1.type")}
                </td>
              </tr>
              <tr>
                <td className="border p-4 font-semibold">
                  {t("products.ess_tms.table.hardware_section.item2.name")}
                </td>
                <td className="border p-4 font-semibold">
                  {t("products.ess_tms.table.hardware_section.item2.type")}
                </td>
              </tr>
              <tr>
                <td className="border p-4 font-semibold">
                  {t("products.ess_tms.table.hardware_section.item3.name")}
                </td>
                <td className="border p-4 font-semibold">
                  {t("products.ess_tms.table.hardware_section.item3.type")}
                </td>
              </tr>
              <tr>
                <td className="border p-4 font-semibold">
                  {t("products.ess_tms.table.hardware_section.item4.name")}
                </td>
                <td className="border p-4 font-semibold">
                  {t("products.ess_tms.table.hardware_section.item4.type")}
                </td>
              </tr>
              <tr>
                <td className="border p-4 font-semibold">
                  {t("products.ess_tms.table.hardware_section.item5.name")}
                </td>
                <td className="border p-4 font-semibold">
                  {t("products.ess_tms.table.hardware_section.item5.type")}
                </td>
              </tr>
              <tr>
                <td className="border p-4 font-semibold">
                  {t("products.ess_tms.table.hardware_section.item6.name")}
                </td>
                <td className="border p-4 font-semibold">
                  {t("products.ess_tms.table.hardware_section.item6.type")}
                </td>
              </tr>
              <tr>
                <td className="border p-4 font-semibold">
                  {t("products.ess_tms.table.hardware_section.item7.name")}
                </td>
                <td className="border p-4 font-semibold">
                  {t("products.ess_tms.table.hardware_section.item7.type")}
                </td>
              </tr>
              <tr>
                <td className="border p-4 font-semibold">
                  {t("products.ess_tms.table.hardware_section.item8.name")}
                </td>
                <td className="border p-4 font-semibold">
                  {t("products.ess_tms.table.hardware_section.item8.type")}
                </td>
              </tr>
              <tr>
                <td className="border p-4 font-semibold">
                  {t("products.ess_tms.table.hardware_section.item9.name")}
                </td>
                <td className="border p-4 font-semibold">
                  {t("products.ess_tms.table.hardware_section.item9.type")}
                </td>
              </tr>
              <tr>
                <td className="border p-4 font-semibold">
                  {t("products.ess_tms.table.hardware_section.item10.name")}
                </td>
                <td className="border p-4 font-semibold">
                  {t("products.ess_tms.table.hardware_section.item10.type")}
                </td>
              </tr>
              <tr>
                <td className="border p-4 font-semibold">
                  {t("products.ess_tms.table.hardware_section.item11.name")}
                </td>
                <td className="border p-4 font-semibold">
                  {t("products.ess_tms.table.hardware_section.item11.type")}
                </td>
              </tr>

              {/* Software Section */}
              <tr>
                <td
                  rowSpan={2}
                  className="bg-[#a5a5a5] border border-white text-white p-4 font-semibold uppercase"
                >
                  {t("products.ess_tms.table.row_span2")}
                </td>
                <td className="border p-4 font-semibold">
                  {t("products.ess_tms.table.software_section.item1.name")}
                </td>
                <td className="border p-4 font-semibold">
                  {t("products.ess_tms.table.software_section.item1.type")}
                </td>
              </tr>
              <tr>
                <td className="border p-4 font-semibold">
                  {t("products.ess_tms.table.software_section.item2.name")}
                </td>
                <td className="border p-4 font-semibold">
                  {t("products.ess_tms.table.software_section.item2.type")}
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </SidebarProvider>
  );
}

export default EssPage;
