<<<<<<< HEAD
import React, { useEffect } from 'react';
import Header from '../../components/Molecules/Header';
import Footer from '../../components/Molecules/Footer';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

=======
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Molecules/Footer";
import Header from "../../components/Molecules/Header";
>>>>>>> a08c66494cbabbf62d142a97b7e21c085c5a208f

const HomePage = () => {
  const { t } = useTranslation();

  const descItems = [
    {
      title: t("body-1"),
      desc: t("body-1-detail"),
    },
    {
      title: t("body-2"),
      desc: t("body-2-detail"),
    },
    {
      title: t("body-3"),
      desc: t("body-3-detail"),
    },
    {
      title: t("body-4"),
      desc: t("body-4-detail"),
    },
    {
      title: t("body-5"),
      desc: t("body-5-detail"),
    },
    {
      title: t("body-6"),
      desc: t("body-6-detail"),
    },
  ];

  return (
    <SidebarProvider open={false}>
      <AppSidebar />
      <div className="wrap overflow-x-hidden">
        <Header />
        <section className="mx-auto mb-0 bg-[url('/img/homepage-bg.png')] bg-repeat bg-transparent lg:object-cover object-[center_center] lg:bg-fixed text-white p-5 lg:p-[100px_300px_150px_300px] max-lg:mt-[50px]">
          <div className="lg:h-[200px] h-[35px]" />
          <div className="pb-[75px] lg:pb-[190px] text-center">
            <h1 className="lg:text-xl lg:tracking-[6px] text-base">
              A.I. Energy Management Solution Provider
            </h1>
            <p className="lg:text-[60px] text-xl/[-.03em]">
              “ <span className="text-[30px] lg:text-[75px]">S</span>tandard{" "}
              <span className="text-[30px] lg:text-[75px]">C</span>ooling{" "}
              <span className="text-[30px] lg:text-[75px]">S</span>ystems ″
            </p>
          </div>
          <div>
            <p className="lg:text-[35px] text-xl/[1.4em] tracking-[-.03em] mb-5">
              Our Mission
            </p>
            <p className="text-base lg:text-xl/[1.5em]">{t("our-mission")}</p>
          </div>
          <div className="h-[100px]" />
          <motion.div
            className="flex w-full max-md:flex-col"
            initial={{ translateX: 100, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: false }}
          >
            <div className="flex-1 flex flex-col justify-center items-center">
              <img
                src="/img/ESS.png"
                alt=""
                className="p-2 rounded-full transition-all hover:scale-110 duration-300 bg-white/30 hover:bg-white"
              />
              <span className="mt-4 text-[18px]/[1.4em]">ESS</span>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <img
                src="/img/battery.png"
                alt=""
                className="p-2 rounded-full transition-all hover:scale-110 duration-300 bg-white/30 hover:bg-white"
              />
              <span className="mt-4 text-[18px]/[1.4em]">Battery</span>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <img
                src="/img/data-center.png"
                alt=""
                className="p-2 rounded-full transition-all hover:scale-110 duration-300 bg-white/30 hover:bg-white"
              />
              <span className="mt-4 text-[18px]/[1.4em]">Data Center</span>
            </div>
          </motion.div>
        </section>
        <section className="lg:px-[300px] lg:py-[150px] p-5">
          <div className="flex flex-col lg:gap-8 gap-2">
            <motion.h1
              className="text-[#444444] lg:text-[50px] text-xl"
              initial={{ translateX: 100, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: false }}
            >
              Why <span className="text-[#150291]">SCS</span>
            </motion.h1>
            <motion.p
              className="text-[#444444] lg:text-[35px] text-xl"
              initial={{ translateX: 100, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.75 }}
              viewport={{ once: false }}
            >
              <span className="text-[#150291]">S</span>tandard{" "}
              <span className="text-[#150291]">C</span>ooling{" "}
              <span className="text-[#150291]">S</span>ystems
            </motion.p>
          </div>
          <img src="/img/graph.png" alt="" className="pb-5 pt-10 pl-10" />
          <motion.p
            className="text-[15px]/[1.5em]"
            initial={{ translateY: 100, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
            viewport={{ once: false }}
          >
            {t("introductory-paragraph")}
          </motion.p>
          <motion.p
            className="text-[15px]/[1.5em]"
            initial={{ translateY: 100, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
            viewport={{ once: false }}
          >
            <ul className="list-decimal pl-4 text-pretty">
              {descItems.map(({ title, desc }, index) => (
                <li key={index}>
                  {title}
                  <p>{desc}</p>
                </li>
              ))}
            </ul>
            <br />
            <p>{t("conclusion-paragraph")}</p>
          </motion.p>
        </section>
        <Footer />
      </div>
<<<<<<< HEAD
      <Outlet />
      <Footer />
    </div>
=======
    </SidebarProvider>
>>>>>>> a08c66494cbabbf62d142a97b7e21c085c5a208f
  );
};

export default HomePage;
