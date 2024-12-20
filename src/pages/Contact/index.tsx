// import Footer from '@/components/Molecules/Footer'
import Header from "@/components/Molecules/Header";
import Container from "@/components/products/Containers";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { IoMdHome } from "react-icons/io";
import Banner from "../../assets/image/contact-banner.png";
import { useTranslation } from "react-i18next";
import { EMBEDDED_GOOGLE_MAPS } from "../Utils/constants";
// import React from 'react'

function ContactPage() {
  const { t } = useTranslation();
  return (
    <SidebarProvider>
      <main className="min-h-screen w-full">
        <Header />

        <section
          style={{ backgroundImage: `url(${Banner})` }}
          className="bg-contain bg-no-repeat bg-fixed h-[300px] w-full md:h-[400px] lg:h-[470px]"
        >
          <div className="flex flex-col items-center justify-center pt-[150px]">
            <p className="text-white text-[50px] text-custom">
              {t("contact.main_path")}
            </p>
            <div className="flex gap-[15px] mt-[50px]">
              <IoMdHome color="white" className="w-4 h-4 self-center" />
              <ChevronRight color="white" className="w-4 h-4 self-center" />
              <p className="capitalize text-[15px] text-white">
                {t("contact.path")}
              </p>
              <ChevronRight color="white" className="w-4 h-4 self-center" />
              <p className=" text-[15px] text-white">
                {t("contact.main_path")}
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 md:pl-60">
          <Container>
            <div className="relative">
              <iframe
                src={EMBEDDED_GOOGLE_MAPS}
                width="600"
                height="450"
                allowFullScreen
                loading="lazy"
                className="h-[660px] w-full md:h-[450px] md:w-[650px]"
              ></iframe>
              <div className="bg-white shadow-lg w-[450px] h-[325px] space-y-4 p-5 z-10 absolute bottom-0 right-[400px]">
                <h3 className="text-[30px] font-semibold">
                  <span className="text-[#0256d0] text-[40px]">S</span>tandard{" "}
                  <span className="text-[#0256d0] text-[40px]">C</span>ooling{" "}
                  <span className="text-[#0256d0] text-[40px]">S</span>ystems
                </h3>
                <div className="flex gap-4">
                  <div>
                    <MapPin color="#444" className="w-5 h-5 self-start" />
                  </div>
                  <p className="text-[#444] text-xl">{t("contact.address")}</p>
                </div>

                <div className="flex gap-4">
                  <Phone color="#444" className="w-5 h-5 self-center" />
                  <p className="text-[#444] text-xl">{t("contact.phone")}</p>
                </div>

                <div className="flex gap-4">
                  <Mail color="#444" className="w-5 h-5 self-center" />
                  <p className="text-[#444] text-xl">{t("contact.mail")}</p>
                </div>
                <button
                  className="border border-[#444] text-[#444] bg-white
                hover:bg-[#444] hover:text-white text-xl font-semibold capitalize py-2 px-6"
                >
                  {t("contact.button")}
                </button>
              </div>
            </div>
          </Container>
        </section>
        {/* <Footer /> */}
      </main>
    </SidebarProvider>
  );
}

export default ContactPage;
