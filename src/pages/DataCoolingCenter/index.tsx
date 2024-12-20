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
      <main className="min-h-screen w-screen overflow-hidden mx-auto">
        <Header />
        <section
          style={{ backgroundImage: `url(${Banner})` }}
          className="bg-cover bg-center bg-no-repeat h-[300px] w-full md:h-[400px] lg:h-[470px]"
        >
          <div className="flex flex-col items-center justify-center pt-[150px]">
            <p className="text-white text-4xl lg:text-[50px] uppercase text-custom">
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
                <div className="border-2 border-[#4972B8] w-full flex flex-col items-start p-5 h-4/5 text-[33px]/[50px]">
                  <p className="text-[#1060ad] font-semibold">01</p>
                  <p className="text-[#222] font-semibold">
                    {t("products.data_center_cooling.item1.name")}
                  </p>
                  <p className="text-black text-[25px]/[33px] font-normal my-7">
                    {t("products.data_center_cooling.item1.description")}
                  </p>
                </div>

                <p className="text-[#1060ad] text-center text-2xl p-5 font-semibold">
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
                <div className="border-2 border-[#4972B8] w-full flex flex-col items-start p-5 h-4/5 text-[33px]/[50px]">
                  <p className="text-[#1060ad] font-semibold">02</p>
                  <p className="text-[#222] font-semibold">
                    {t("products.data_center_cooling.item2.name")}
                  </p>
                  <p className="text-black text-[25px]/[33px] font-normal my-7 text-balance">
                    {t("products.data_center_cooling.item2.description")}
                  </p>
                </div>
                <p className="text-[#1060ad] text-center text-2xl p-5 font-semibold">
                  {t("products.data_center_cooling.item2.description2")}
                </p>
              </motion.div>

              <motion.div
                className="h-full"
                initial={{ translateY: 100, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.3 }}
                viewport={{ once: false }}
              >
                <div className="border-2 border-[#4972B8] w-full flex flex-col items-start p-5 h-4/5 text-[33px]/[50px]">
                  <p className="text-[#1060ad] font-semibold">03</p>
                  <p className="text-[#222] font-semibold">
                    {t("products.data_center_cooling.item3.name")}
                  </p>
                  <p className="text-black text-[25px]/[33px] font-normal my-7">
                    {t("products.data_center_cooling.item3.description")}
                  </p>
                </div>
                <p className="text-[#1060ad] text-center text-2xl p-5 font-semibold text-balance">
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
            <div className="flex max-lg:flex-col gap-5 justify-between w-full">
              <div className="border border-[#1060ad] flex py-12 items-center justify-center gap-7 max-lg:w-full w-1/2">
                <p className="text-8xl font-semibold text-[#1060ad]">0%</p>
                <div className="flex flex-col h-full justify-between text-3xl">
                  <p className="text-[#222] text-[33px]/[50px]">
                    {t("battery")} <br /> {t("explosion")}
                  </p>
                </div>
              </div>
              <div className="border border-[#1060ad] flex py-12 items-center justify-center gap-7 max-lg:w-full w-1/2">
                <p className="text-8xl leading-[1em] font-semibold text-[#1060ad]">
                  $7
                </p>
                <div className="flex flex-col h-full justify-between ">
                  <p className="text-[#222] text-[33px] font-light">
                    <span className="text-[#1060ad] font-semibold text-[40px]/[50px]">
                      {t("mil_save")}
                    </span>{" "}
                    <br />
                    {t("cost")}
                  </p>
                  <p className="text-2xl"></p>
                </div>
              </div>
            </div>
            <div className="flex gap-5 w-full justify-around items-center max-lg:flex-col">
              <motion.img
                src={"/img/data-center-img-01.webp"}
                className="max-lg:w-full w-1/3 object-contain"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              />
              <motion.img
                src={"/img/plus.webp"}
                className="max-lg:w-1/2 w-1/8 object-contain"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              />
              <motion.img
                src={"/img/Screenshot 2024-11-14 at 14.12.53.png"}
                className="max-lg:w-full w-1/3 object-contain"
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
            <div className="flex max-xl:flex-col gap-6 w-full justify-center items-center">
              <img src="/img/box-data-center-01.webp" alt="" />
              <img src="/img/box-data-center-02.webp" alt="" />
            </div>
            <hr className="border-t-2 border-[#4972B8] my-5" />
          </Container>
        </section>

        <section className="mb-10">
          <Container className="w-full min-h-screen flex flex-col justify-center items-center gap-y-[71px] overflow-hidden">
            <motion.div
              className="flex w-full justify-center items-center"
              initial={{ translateX: 100, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: false }}
            >
              <h3 className="text-[#1060ad] capitalize font-semibold lg:text-[50px]/none text-3xl text-center max-lg:pt-[100px]">
                {t("products.data_center_cooling.subtitle4")}
              </h3>
            </motion.div>
            <table className="w-full border-collapse text-center min-h-[624px] max-w-[1464px] max-lg:hidden">
              <thead>
                <tr>
                  <th
                    className="w-[140px] bg-black text-white p-2"
                    rowSpan={2}
                  ></th>
                </tr>
                <tr className="capitalize text-[33px]/[54px] font-semibold">
                  <th className="w-[324px] bg-[#1060ad] text-white p-2">
                    {t("products.data_center_cooling.table.col_span1")}
                  </th>
                  <th className="w-[340px] bg-[#24aae1] text-white p-2">
                    {t("products.data_center_cooling.table.col_span2")}
                  </th>
                  <th className="w-[324px] bg-[#1060ad] text-white p-2">
                    {t("products.data_center_cooling.table.col_span1")}
                  </th>
                  <th className="w-[340px] bg-[#24aae1] text-white p-2">
                    {t("products.data_center_cooling.table.col_span2")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Hardware Section */}
                <tr>
                  <td
                    rowSpan={11}
                    className="bg-black text-white align-middle uppercase font-semibold text-[25px]/[33px]"
                  >
                    {t("products.data_center_cooling.table.row_span1")}
                  </td>
                  <td className="border p-4">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item1.name"
                    )}
                  </td>
                  <td className="border p-4">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item1.type"
                    )}
                  </td>
                  <td className="border p-4">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item7.name"
                    )}
                  </td>
                  <td className="border p-4">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item7.type"
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="border p-4">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item2.name"
                    )}
                  </td>
                  <td className="border p-4">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item2.type"
                    )}
                  </td>
                  <td className="border p-4">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item8.name"
                    )}
                  </td>
                  <td className="border p-4">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item8.type"
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="border p-4">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item3.name"
                    )}
                  </td>
                  <td className="border p-4">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item3.type"
                    )}
                  </td>
                  <td className="border p-4">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item9.name"
                    )}
                  </td>
                  <td className="border p-4">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item9.type"
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="border p-4">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item4.name"
                    )}
                  </td>
                  <td className="border p-4">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item4.type"
                    )}
                  </td>
                  <td className="border p-4">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item10.name"
                    )}
                  </td>
                  <td className="border p-4">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item10.type"
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="border p-4">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item5.name"
                    )}
                  </td>
                  <td className="border p-4">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item5.type"
                    )}
                  </td>
                  <td className="border p-4">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item11.name"
                    )}
                  </td>
                  <td className="border p-4">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item11.type"
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="border p-4">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item6.name"
                    )}
                  </td>
                  <td className="border p-4">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item6.type"
                    )}
                  </td>
                  <td className="border p-4"></td>
                  <td className="border p-4"></td>
                </tr>
                {/*  */}
              </tbody>
            </table>
            <table className="hidden break-words text-center max-lg:block">
              <thead className="w-full">
                <tr>
                  <th className="bg-black text-white p-2" colSpan={1}></th>
                  <th
                    className="bg-[#1060ad] w-[324px] text-white py-4 px-8 font-semibold text-lg capitalize"
                    colSpan={1}
                  >
                    {t("products.data_center_cooling.table.col_span1")}
                  </th>
                  <th
                    className="bg-[#24aae1] w-[340px] text-white py-4 px-16 font-semibold text-lg capitalize"
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
                    className="bg-black text-white align-middle uppercase font-semibold text-[25px]/[33px] w-[140px]"
                  >
                    {t("products.data_center_cooling.table.row_span1")}
                  </td>
                  <td className="border p-2">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item1.name"
                    )}
                  </td>
                  <td className="border p-2">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item1.type"
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item2.name"
                    )}
                  </td>
                  <td className="border p-2">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item2.type"
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item3.name"
                    )}
                  </td>
                  <td className="border p-2">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item3.type"
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item4.name"
                    )}
                  </td>
                  <td className="border p-2">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item4.type"
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item5.name"
                    )}
                  </td>
                  <td className="border p-2">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item5.type"
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item6.name"
                    )}
                  </td>
                  <td className="border p-2">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item6.type"
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item7.name"
                    )}
                  </td>
                  <td className="border p-2">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item7.type"
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item8.name"
                    )}
                  </td>
                  <td className="border p-2">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item8.type"
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item9.name"
                    )}
                  </td>
                  <td className="border p-2">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item9.type"
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item10.name"
                    )}
                  </td>
                  <td className="border p-2">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item10.type"
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item11.name"
                    )}
                  </td>
                  <td className="border p-2">
                    {t(
                      "products.data_center_cooling.table.hardware_section.item11.type"
                    )}
                  </td>
                </tr>
                {/*  */}
              </tbody>
            </table>
          </Container>
        </section>
      </main>
    </SidebarProvider>
  );
}

export default DataCoolingCenterPage;
