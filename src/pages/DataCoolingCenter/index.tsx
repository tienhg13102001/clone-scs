import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/Molecules/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { IoMdHome } from "react-icons/io";
import { useTranslation } from "react-i18next";
import Banner from "../../assets/image/ess-banner.png";
import Container from "../../components/products/Containers";

function DataCoolingCenterPage() {
  const { t } = useTranslation();
  return (
    <SidebarProvider open={false}>
      <AppSidebar />
      <main className="min-h-screen w-full">
        <Header />
        <section
          style={{ backgroundImage: `url(${Banner})` }}
          className="bg-cover bg-no-repeat h-[300px] w-full md:h-[400px] lg:h-[470px]"
        >
          <div className="flex flex-col items-center justify-center pt-[150px]">
            <p className="text-white text-[50px] uppercase text-custom">
              {t("products.data_center_cooling.main_path")}
            </p>
            <div className="flex gap-[15px] mt-[50px]">
              <IoMdHome color="white" className="w-4 h-4 self-center" />
              <ChevronRight color="white" className="w-4 h-4 self-center" />
              <p className="capitalize text-[15px] text-white">
                {t("products.data_center_cooling.path")}
              </p>
              <ChevronRight color="white" className="w-4 h-4 self-center" />
              <p className="uppercase text-[15px] text-white">
                {t("products.data_center_cooling.main_path")}
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
                {t("products.data_center_cooling.subtitle")}
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 lg:space-x-[25px] px-4 space-y-6 lg:space-y-0">
              <motion.div
                className="h-full"
                initial={{ translateY: 100, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.1 }}
                viewport={{ once: false }}
              >
                <div className="border-2 border-[#4972B8] w-full flex flex-col items-start p-5 h-4/5 text-[30px]/[50px] ">
                  <p className="text-[#1060ad] font-semibold">01</p>
                  <p className="text-[#222] font-semibold">
                    {t("products.data_center_cooling.item1.name")}
                  </p>
                  <p className="text-black text-2xl font-light my-7">
                    {t("products.data_center_cooling.item1.description")}
                  </p>
                </div>

                <p className="text-[#1060ad] text-center text-2xl p-5">
                  {t("products.data_center_cooling.item1.description2")}
                </p>
              </motion.div>

              <motion.div
                className="h-full"
                initial={{ translateY: 100, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.2 }}
                viewport={{ once: false }}
              >
                <div className="border-2 border-[#4972B8] w-full flex flex-col items-start p-5 h-4/5 text-[30px]/[50px]">
                  <p className="text-[#1060ad] font-semibold">02</p>
                  <p className="text-[#222] font-semibold">
                    {t("products.data_center_cooling.item2.name")}
                  </p>
                  <p className="text-black text-2xl font-light my-7">
                    {t("products.data_center_cooling.item2.description")}
                  </p>
                </div>
                <p className="text-[#1060ad] text-center text-2xl p-5">
                  {t("products.data_center_cooling.item2.description")}
                </p>
              </motion.div>

              <motion.div
                className="h-full"
                initial={{ translateY: 100, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.3 }}
                viewport={{ once: false }}
              >
                <div className="border-2 border-[#4972B8] w-full flex flex-col items-start p-5 h-4/5 text-[30px]/[50px]">
                  <p className="text-[#1060ad] font-semibold">02</p>
                  <p className="text-[#222] font-semibold">
                    {t("products.data_center_cooling.item3.name")}
                  </p>
                  <p className="text-black text-2xl font-light my-7">
                    {t("products.data_center_cooling.item3.description")}
                  </p>
                </div>
                <p className="text-[#1060ad] text-center text-2xl p-5">
                  {t("products.data_center_cooling.item3.description2")}
                </p>
              </motion.div>
            </div>
            <hr className="border-t-2 border-[#4972B8] my-5" />
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
              <h3 className="text-[#1060ad] capitalize font-semibold lg:text-[50px]/none text-3xl text-center">
                {t("products.data_center_cooling.subtitle2")}
              </h3>
            </motion.div>
            <div className="flex gap-5 justify-between w-full">
              <div className="border border-[#1060ad] flex py-12 items-center justify-center gap-7 w-1/2">
                <p className="text-8xl font-semibold text-[#1060ad]">0%</p>
                <div className="flex flex-col h-full justify-between text-3xl">
                  <p>Battery</p>
                  <p>Explosion</p>
                </div>
              </div>
              <div className="border border-[#1060ad] flex py-12 items-center justify-center gap-7 w-1/2">
                <p className="text-8xl font-semibold text-[#1060ad]">$7</p>
                <div className="flex flex-col h-full justify-between ">
                  <p className="text-5xl text-[#1060ad] font-semibold">
                    mil saved{" "}
                  </p>
                  <p className="text-2xl">Annual Facilities Operation Cost</p>
                </div>
              </div>
            </div>
            <div className="flex gap-5 w-full justify-around">
              <motion.img
                src={"/img/data-center-img-01.webp"}
                className="w-1/3 object-contain"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              />
              <motion.img
                src={"/img/plus.webp"}
                className="w-1/8 object-contain"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              />
              <motion.img
                src={"/img/Screenshot 2024-11-14 at 14.12.53.png"}
                className="w-1/3 object-contain"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              />
            </div>

            <hr className="border-t-2 border-[#4972B8] my-5" />
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
              <h3 className="text-[#1060ad] capitalize font-semibold lg:text-[50px]/none text-3xl text-center">
                {t("products.data_center_cooling.subtitle3")}
              </h3>
            </motion.div>
            <div className="flex gap-5 w-fl">
              <div className="flex flex-col items-center w-1/2 p-10 border border-[#1060ad]">
                <motion.img
                  src={"/img/data-center-img-03.webp"}
                  className="h-full object-contain"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                />
                <p className="py-5 text-2xl font-semibold text-[#1060ad]">
                  Data Center
                </p>
              </div>
              <div className="flex flex-col items-center w-1/2 p-10 border border-[#1060ad]">
                <motion.img
                  src={"/img/data-center-img-04.webp"}
                  className="h-full object-contain"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                />
                <p className="py-5 text-2xl font-semibold text-[#1060ad]">
                  SCS 200kW Immersion Cooling system{" "}
                </p>
              </div>
            </div>
            <hr className="border-t-2 border-[#4972B8] my-5" />
          </Container>
        </section>

        <section className="mb-10">
          <Container>
            <motion.div
              className="flex w-full justify-center items-center"
              initial={{ translateX: 100, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: false }}
            >
              <h3 className="text-[#1060ad] capitalize font-semibold lg:text-[50px]/none text-3xl text-center">
                {t("products.data_center_cooling.subtitle4")}
              </h3>
            </motion.div>
          </Container>
        </section>

        <section className="overflow-x-auto w-full max-w-7xl mx-auto p-4">
          <table className="min-w-full break-words text-center">
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
                  {t("products.data_center_cooling.table.col_span1")}
                </th>
                <th
                  className="bg-[#24aae1] border border-white text-white py-4 px-16 font-semibold text-lg uppercase"
                  colSpan={1}
                >
                  {t("products.data_center_cooling.table.col_span2")}
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
                  {t("products.data_center_cooling.table.row_span1")}
                </td>
                <td className="border p-4 font-semibold">
                  {t(
                    "products.data_center_cooling.table.hardware_section.item1.name"
                  )}
                </td>
                <td className="border p-4 font-semibold">
                  {t(
                    "products.data_center_cooling.table.hardware_section.item1.type"
                  )}
                </td>
              </tr>
              <tr>
                <td className="border p-4 font-semibold">
                  {t(
                    "products.data_center_cooling.table.hardware_section.item2.name"
                  )}
                </td>
                <td className="border p-4 font-semibold">
                  {t(
                    "products.data_center_cooling.table.hardware_section.item2.type"
                  )}
                </td>
              </tr>
              <tr>
                <td className="border p-4 font-semibold">
                  {t(
                    "products.data_center_cooling.table.hardware_section.item3.name"
                  )}
                </td>
                <td className="border p-4 font-semibold">
                  {t(
                    "products.data_center_cooling.table.hardware_section.item3.type"
                  )}
                </td>
              </tr>
              <tr>
                <td className="border p-4 font-semibold">
                  {t(
                    "products.data_center_cooling.table.hardware_section.item4.name"
                  )}
                </td>
                <td className="border p-4 font-semibold">
                  {t(
                    "products.data_center_cooling.table.hardware_section.item4.type"
                  )}
                </td>
              </tr>
              <tr>
                <td className="border p-4 font-semibold">
                  {t(
                    "products.data_center_cooling.table.hardware_section.item5.name"
                  )}
                </td>
                <td className="border p-4 font-semibold">
                  {t(
                    "products.data_center_cooling.table.hardware_section.item5.type"
                  )}
                </td>
              </tr>
              <tr>
                <td className="border p-4 font-semibold">
                  {t(
                    "products.data_center_cooling.table.hardware_section.item6.name"
                  )}
                </td>
                <td className="border p-4 font-semibold">
                  {t(
                    "products.data_center_cooling.table.hardware_section.item6.type"
                  )}
                </td>
              </tr>
              <tr>
                <td className="border p-4 font-semibold">
                  {t(
                    "products.data_center_cooling.table.hardware_section.item7.name"
                  )}
                </td>
                <td className="border p-4 font-semibold">
                  {t(
                    "products.data_center_cooling.table.hardware_section.item7.type"
                  )}
                </td>
              </tr>
              <tr>
                <td className="border p-4 font-semibold">
                  {t(
                    "products.data_center_cooling.table.hardware_section.item8.name"
                  )}
                </td>
                <td className="border p-4 font-semibold">
                  {t(
                    "products.data_center_cooling.table.hardware_section.item8.type"
                  )}
                </td>
              </tr>
              <tr>
                <td className="border p-4 font-semibold">
                  {t(
                    "products.data_center_cooling.table.hardware_section.item9.name"
                  )}
                </td>
                <td className="border p-4 font-semibold">
                  {t(
                    "products.data_center_cooling.table.hardware_section.item9.type"
                  )}
                </td>
              </tr>
              <tr>
                <td className="border p-4 font-semibold">
                  {t(
                    "products.data_center_cooling.table.hardware_section.item10.name"
                  )}
                </td>
                <td className="border p-4 font-semibold">
                  {t(
                    "products.data_center_cooling.table.hardware_section.item10.type"
                  )}
                </td>
              </tr>
              <tr>
                <td className="border p-4 font-semibold">
                  {t(
                    "products.data_center_cooling.table.hardware_section.item11.name"
                  )}
                </td>
                <td className="border p-4 font-semibold">
                  {t(
                    "products.data_center_cooling.table.hardware_section.item11.type"
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </SidebarProvider>
  );
}

export default DataCoolingCenterPage;
