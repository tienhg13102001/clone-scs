import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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
    <div className="wrap overflow-hidden">
      <section className="mx-auto mb-0 bg-[url('/img/homepage-bg.png')] bg-center bg-[length:100%] bg-repeat bg-transparent lg:object-cover object-[center_center] lg:bg-fixed text-white p-5 lg:p-[100px_300px_150px_300px] max-lg:mt-[50px]">
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
        <div className="flex flex-col justify-center items-center lg:gap-5 gap-2">
          <motion.h1
            className="text-[#1160ad] text-[15px] font-semibold"
            initial={{ translateX: 100, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: false }}
          >
            Why SCS
          </motion.h1>
          <motion.p
            className="text-[#222] lg:text-[32px]/[40px] text-xl"
            initial={{ translateX: 100, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
            viewport={{ once: false }}
          >
            <span>Standard Cooling Systems</span>
          </motion.p>
          <motion.p
            className="text-[16px]/[24px] text-center max-w-[930px] w-full text-pretty"
            initial={{ translateY: 100, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
            viewport={{ once: false }}
          >
            {t("introductory-paragraph")}
          </motion.p>
        </div>
        <motion.div
          className="mt-[70px] w-full flex justify-center items-center"
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.75 }}
          viewport={{ once: false }}
        >
          <img src="/img/main-img.png" alt="main img" />
        </motion.div>
        <motion.div
          className="text-[15px]/[1.5em] mt-[80px]"
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.75 }}
          viewport={{ once: false }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-y-[140px] xl:gap-x-20 gap-8">
            {descItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-start items-start"
              >
                <img
                  className="pb-[30px]"
                  src={`/img/ic-0${index + 1}.png`}
                  alt=""
                />
                <h1
                  className={cn(
                    "text-[#222] text-[28px]/[40px] font-semibold capitalize pb-[32px] w-full",
                    {
                      "max-w-[185px]": index == 0,
                      "max-w-[130px]": index == 1 || index == 3,
                      "max-w-[235px]": index == 2,
                      "max-w-[270px]": index == 4,
                      "max-w-[167px]": index == 5,
                    }
                  )}
                >
                  {item.title}
                </h1>
                <p className="text-base/6 text-pretty">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
      <div className="min-h-[240px] bg-[#f4f4f4] lg:px-[300px] lg:py-[72px] py-10 px-5">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-y-[140px] xl:gap-x-20 text-base/6 gap-8 text-[#222]"
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.75 }}
          viewport={{ once: false }}
        >
          <p className="text-[#b7b7b7] font-semibold text-[32px]">Conclusion</p>
          <p>{t("conclusion-paragraph")}</p>
          <p>{t("conclusion-paragraph-2")}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
