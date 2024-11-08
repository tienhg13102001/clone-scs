// import React from 'react'
import { motion } from "framer-motion";
import { ChevronRight, House } from "lucide-react";
import { useTranslation } from "react-i18next";
import BenefitImg from "../../assets/image/battery1.png";
import ManagementImg from "../../assets/image/battery2.png";
import Banner from "../../assets/image/ess-banner.png";
import Container from "../../components/products/Containers";

function BatteryPage() {
  const { t } = useTranslation();
  return (
    <main className="min-h-screen w-full">
      <section
        style={{ backgroundImage: `url(${Banner})` }}
        className="bg-fixed bg-cover lg:bg-contain bg-no-repeat w-full h-[300px] lg:h-[470px]"
      >
        <div className="flex flex-col items-center justify-center pt-[120px] lg:pt-[150px]">
          <p className="text-white text-4xl lg:text-[50px] uppercase text-custom">
            {t("products.battery_tms.main_path")}
          </p>
          <div className="flex gap-[15px] mt-[50px]">
            <House color="white" className="w-4 h-4 self-center" />
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

      <section className="mt-10 lg:mt-[80px]]">
        <Container>
          <h1 className="text-[#444] text-center lg:text-start text-[40px] flex flex-col">
            {" "}
            <span className="text-[#4972B8]">
              {t("products.battery_tms.title")}
            </span>
            {t("products.battery_tms.title2")}
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
              {t("products.battery_tms.subtitle")}
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
                <p className="text-black text-2xl text-center py-[10px] px-32 lg:px-40">
                  {t("products.battery_tms.item1.name")}
                </p>
              </div>
              <p className="text-[#444] text-lg">
                {t("products.battery_tms.item1.description")}
              </p>
              <p className="text-[#444] text-lg">
                {t("products.battery_tms.item1.description2")}
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
                <p className="text-black text-2xl text-center py-[10px] px-24 lg:px-32">
                  {t("products.battery_tms.item2.name")}
                </p>
              </div>
              <p className="text-[#444] text-lg">
                {t("products.battery_tms.item2.description")}
              </p>
              <p className="text-[#444] text-lg">
                {t("products.battery_tms.item2.description2")}
              </p>
              <p className="text-[#444] text-lg">
                {t("products.battery_tms.item2.description3")}
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
                <p className="text-black text-2xl text-center py-[10px] px-32 lg:px-40">
                  {t("products.battery_tms.item3.name")}
                </p>
              </div>
              <p className="text-[#444] text-lg">
                {t("products.battery_tms.item3.description")}
              </p>
              <p className="text-[#444] text-lg">
                {t("products.battery_tms.item3.description2")}
              </p>
              <p className="text-[#444] text-lg">
                {t("products.battery_tms.item3.description3")}
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
              {t("products.battery_tms.subtitle2")}
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
          <div className="flex gap-5 my-10">
            <ChevronRight
              color="#4972B8"
              className="w-[45px] h-[45px] self-center"
            />
            <h3 className="text-[#444] text-[30px]">
              {t("products.battery_tms.subtitle3")}
            </h3>
          </div>
          <img src={ManagementImg} className="w-[1245px] h-[758px]" />
          <hr className="border-t-2 border-[#4972B8] my-5" />
        </Container>
      </section>

      <section className="">
        <Container>
          <div className="flex gap-5 my-10">
            <ChevronRight
              color="#4972B8"
              className="w-[45px] h-[45px] self-center"
            />
            <h3 className="text-[#444] text-[30px] text-start">
              {t("products.battery_tms.subtitle4")}
            </h3>
          </div>
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
                {t("products.battery_tms.table.col_span1")}
              </th>
              <th
                className="bg-[#548dd4] border border-white text-white py-4 px-16 font-semibold text-lg uppercase"
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
                className="bg-[#a5a5a5] border border-white text-white p-4 font-semibold uppercase"
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
                className="bg-[#a5a5a5] border border-white text-white p-4 font-semibold uppercase"
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
