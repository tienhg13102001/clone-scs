// import React from 'react'
import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/Molecules/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { IoMdArrowUp, IoMdHome } from "react-icons/io";
import Banner from "../../assets/image/ess-banner.png";
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
          className="bg-cover bg-center bg-no-repeat h-[300px] w-full md:h-[400px] lg:h-[470px]"
        >
          <div className="flex flex-col items-center justify-center pt-[120px] lg:pt-[150px]">
            <p className="text-white text-4xl lg:text-[50px] uppercase text-custom">
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
          <Container className="max-w-[1464px] min-h-screen flex flex-col justify-center items-center gap-y-[71px] overflow-hidden">
            <motion.div
              className="flex w-full justify-center items-center"
              initial={{ translateX: 100, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: false }}
            >
              <h3 className="text-[#1060ad] capitalize font-semibold lg:text-[50px]/none text-3xl text-center">
                {t("products.ess_tms.subtitle")}
              </h3>
            </motion.div>

            <div className="flex justify-between max-lg:flex-col lg:space-x-[25px] space-y-6 lg:space-y-0 max-lg:px-5">
              <motion.div
                className="space-y-[25px] flex-1"
                initial={{ translateY: 100, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.1 }}
                viewport={{ once: false }}
              >
                <div className="border-2 border-[#4972B8] w-full min-h-[288px] p-[33px] 2xl:text-[33px]/[50px] text-2xl text-black">
                  <p className="text-[#1060ad] font-semibold">01</p>
                  <p className="font-semibold">
                    {t("products.ess_tms.item1.name")}
                  </p>
                  <p className="2xl:text-[25px]/[33px] text-xl text-pretty pt-[38px]">
                    {t("products.ess_tms.item1.description")}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center w-full gap-y-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="size-1 rounded-full bg-[#1060ad]" />
                  ))}
                </div>
                <div className="bg-[#1060ad] text-white min-h-[197px] w-full p-[33px]">
                  <p className="2xl:text-[25px]/[33px] text-xl">
                    {t("products.ess_tms.item1.description2")}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="space-y-[25px] flex-1"
                initial={{ translateY: 100, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.1 }}
                viewport={{ once: false }}
              >
                <div className="border-2 border-[#4972B8] w-full min-h-[288px] p-[33px] 2xl:text-[33px]/[50px] text-2xl text-black">
                  <p className="text-[#1060ad] font-semibold">02</p>
                  <p className="font-semibold">
                    {t("products.ess_tms.item2.name")}
                  </p>
                  <p className="2xl:text-[25px]/[33px] text-xl text-pretty pt-[38px]">
                    {t("products.ess_tms.item2.description")}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center w-full gap-y-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="size-1 rounded-full bg-[#1060ad]" />
                  ))}
                </div>
                <div className="bg-[#1060ad] text-white min-h-[197px] w-full p-[33px]">
                  <p className="2xl:text-[25px]/[33px] text-xl">
                    {t("products.ess_tms.item2.description2")}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="space-y-[25px] flex-1"
                initial={{ translateY: 100, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.1 }}
                viewport={{ once: false }}
              >
                <div className="border-2 border-[#4972B8] w-full min-h-[288px] p-[33px] 2xl:text-[33px]/[50px] text-2xl text-black">
                  <p className="text-[#1060ad] font-semibold">03</p>
                  <p className="font-semibold">
                    {t("products.ess_tms.item3.name")}
                  </p>
                  <p className="2xl:text-[25px]/[33px] text-xl text-pretty pt-[38px]">
                    {t("products.ess_tms.item3.description")}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center w-full gap-y-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="size-1 rounded-full bg-[#1060ad]" />
                  ))}
                </div>
                <div className="bg-[#1060ad] text-white min-h-[197px] w-full p-[33px]">
                  <p className="2xl:text-[25px]/[33px] text-xl">
                    {t("products.ess_tms.item3.description2")}
                  </p>
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
                {t("products.ess_tms.subtitle2")}
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
                    Battery <br />
                    Explosion
                  </p>
                </div>
                <div className="border-2 border-[#1060ad] flex gap-x-[30px] flex-1 justify-center w-full items-center lg:py-[52px]">
                  <span className="text-[100px]/none font-semibold text-[#1060ad] flex">
                    <IoMdArrowUp className="size-24" />
                    15%
                  </span>
                  <p className="text-[#222] text-[33px]/[50px]">
                    Charging <br />
                    Effiency
                  </p>
                </div>
              </div>
              <div className="flex max-lg:flex-col justify-center items-center lg:gap-[90px] gap-10">
                <div className="flex justify-center items-center flex-col">
                  <img src="/img/ess-img-01.png" alt="" />
                  <span className="text-[#1060ad] text-[33px]/[50px]">
                    Battery Rack
                  </span>
                </div>
                <img src="/img/plus.png" alt="" className="max-lg:size-20" />
                <div className="flex gap-[65px]">
                  <div className="flex flex-col justify-center items-center gap-[27px]">
                    <div className="flex flex-col items-center text-center">
                      <img src="/img/ic-ess-tms.png" alt="" />
                      <h1 className="font-semibold text-[25px]/[33px]">TMS</h1>
                      <p className="text-[17px]/[21px]">
                        Thermal Management <br />
                        System
                      </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <img src="/img/ic-ess-ai.png" alt="" />
                      <h1 className="font-semibold text-[25px]/[33px]">
                        A.I Controller
                      </h1>
                      <p className="text-[17px]/[21px]">
                        LSTM + RL <br />
                        based control
                      </p>
                    </div>
                  </div>
                  <img src="/img/ess-img-02.png" alt="" />
                </div>
              </div>
            </motion.div>
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
                {t("products.ess_tms.subtitle3")}
              </h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className="flex max-xl:flex-col gap-6 w-full justify-center items-center">
                <img src="/img/box-ess-01.png" alt="" />
                <img src="/img/box-ess-02.png" alt="" />
              </div>
            </motion.div>
          </Container>
        </section>

        <section>
          <Container className="w-full min-h-screen flex flex-col justify-center items-center gap-y-[71px] overflow-hidden">
            <motion.div
              className="flex w-full justify-center items-center"
              initial={{ translateX: 100, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: false }}
            >
              <h3 className="text-[#1060ad] capitalize font-semibold text-[50px]/none text-center">
                {t("products.ess_tms.subtitle4")}
              </h3>
            </motion.div>
            <SpecificationsTable />
          </Container>
        </section>
      </main>
    </SidebarProvider>
  );
}

export function SpecificationsTable() {
  const { t } = useTranslation();
  return (
    <>
      <table className="w-full border-collapse text-center min-h-[624px] max-w-[1464px] max-lg:hidden">
        <thead>
          <tr>
            <th
              className="max-w-[140px] bg-black text-white p-2"
              rowSpan={2}
            ></th>
          </tr>
          <tr className="capitalize text-[33px]/[54px] font-semibold">
            <th className="max-w-[324px] bg-[#1060ad] text-white p-2">
              {t("products.ess_tms.table.col_span1")}
            </th>
            <th className="max-w-[340px] bg-[#24aae1] text-white p-2">
              {t("products.ess_tms.table.col_span2")}
            </th>
            <th className="max-w-[324px] bg-[#1060ad] text-white p-2">
              {t("products.ess_tms.table.col_span1")}
            </th>
            <th className="max-w-[340px] bg-[#24aae1] text-white p-2">
              {t("products.ess_tms.table.col_span2")}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              className="bg-black text-white align-middle uppercase font-semibold text-[25px]/[33px]"
              rowSpan={6}
            >
              {t("products.ess_tms.table.row_span1")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item1.name")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item1.type")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item7.name")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item7.type")}
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item2.name")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item2.type")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item8.name")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item8.type")}
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item3.name")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item3.type")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item9.name")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item9.type")}
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item4.name")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item4.type")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item10.name")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item10.type")}
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item5.name")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item5.type")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item11.name")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item11.type")}
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item6.name")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item6.type")}
            </td>
            <td className="border p-2"></td>
            <td className="border p-2"></td>
          </tr>
          <tr>
            <td className="bg-black text-white uppercase font-semibold text-[25px]/[33px]">
              {t("products.ess_tms.table.row_span2")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.software_section.item1.name")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.software_section.item1.type")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.software_section.item2.name")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.software_section.item2.type")}
            </td>
          </tr>
        </tbody>
      </table>
      <table className="w-fit border-collapse text-center min-h-[624px] hidden max-lg:block">
        <thead>
          <tr>
            <th className="bg-black text-white p-2" rowSpan={2}></th>
          </tr>
          <tr className="capitalize text-[33px]/[54px] font-semibold">
            <th className="max-w-[324px] bg-[#1060ad] text-white max-lg:text-lg p-2">
              {t("products.ess_tms.table.col_span1")}
            </th>
            <th className="max-w-[340px] bg-[#24aae1] text-white max-lg:text-lg p-2">
              {t("products.ess_tms.table.col_span2")}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              className="bg-black text-white align-middle uppercase font-semibold text-[25px]/[33px] max-lg:text-lg p-3"
              rowSpan={11}
            >
              {t("products.ess_tms.table.row_span1")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item1.name")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item1.type")}
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item7.name")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item7.type")}
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item2.name")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item2.type")}
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item8.name")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item8.type")}
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item3.name")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item3.type")}
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item9.name")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item9.type")}
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item4.name")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item4.type")}
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item10.name")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item10.type")}
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item5.name")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item5.type")}
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item11.name")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item11.type")}
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item6.name")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.hardware_section.item6.type")}
            </td>
          </tr>
          <tr>
            <td
              className="bg-black text-white uppercase font-semibold text-[25px]/[33px] max-lg:text-lg"
              rowSpan={2}
            >
              {t("products.ess_tms.table.row_span2")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.software_section.item1.name")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.software_section.item1.type")}
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              {t("products.ess_tms.table.software_section.item2.name")}
            </td>
            <td className="border p-2">
              {t("products.ess_tms.table.software_section.item2.type")}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default EssPage;
