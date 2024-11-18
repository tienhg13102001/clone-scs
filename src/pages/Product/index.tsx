import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/Molecules/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { IoMdHome } from "react-icons/io";
import SubBanner from "../../assets/image/product-banner.png";
import Banner from "../../assets/image/ess-banner.png";
import Product1 from "../../assets/image/product0.png";
import Product2 from "../../assets/image/product1.png";
import Product3 from "../../assets/image/product2.png";
import Product4 from "../../assets/image/product3.png";
import Product5 from "../../assets/image/product4.png";
import Container from "../../components/products/Containers";
import { cn } from "@/lib/utils";

type ProductListType = {
  name: string;
  content: string;
  image: string;
}[];

function ProductPage() {
  const { t } = useTranslation();

  const ProductList: ProductListType = [
    {
      name: t("products.item1.name"),
      content: t("products.item1.content"),

      image: Product1,
    },
    {
      name: t("products.item2.name"),
      content: t("products.item2.content"),

      image: Product2,
    },
    {
      name: t("products.item3.name"),
      content: t("products.item3.content"),

      image: Product3,
    },
    {
      name: t("products.item4.name"),
      content: t("products.item4.content"),

      image: Product4,
    },
  ];
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
              {t("products.main_path")}
            </p>
            <div className="flex gap-[15px] mt-[50px]">
              <IoMdHome color="white" className="w-4 h-4 self-center" />
              <ChevronRight color="white" className="w-4 h-4 self-center" />
              <p className="capitalize text-[15px] text-white">
                {t("products.main_path")}
              </p>
            </div>
          </div>
        </section>

        <section>
          <Container>
            <img
              src={SubBanner}
              className=" h-[300px] w-full md:h-[400px] lg:h-[470px]"
            />
            <h1 className="2xl:text-[25px]/[33px] text-xl font-semibold mt-[50px]">
              {t("products.title")}
            </h1>
            <p className="2xl:text-[25px]/[33px] text-xl">
              {t("products.description")}
            </p>
          </Container>
        </section>

        <section className="my-[50px]">
          <Container>
            <ul className="list-inside list-decimal space-y-16">
              {ProductList.map((product, index) => (
                <li
                  key={product.name}
                  className="flex lg:flex-row flex-col gap-6"
                >
                  <img
                    src={product.image}
                    className={cn("w-60 h-60 object-fill self-center", {
                      "w-[260px] h-[260px]": index === 1,
                      "w-[248px] h-[248px]": index === 2,
                      "w-[255px] h-[255px]": index === 3,
                    })}
                  />
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-row gap-4">
                      <p className="2xl:text-4xl text-xl font-semibold">
                        {product.name}
                      </p>
                      <span className="border-t-4 flex-grow border-black mt-4"></span>
                    </div>
                    <p className="text-[#444] text-xl" key={product.content}>
                      {product.content}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-row gap-6">
              <div className="flex flex-col gap-2 mt-16">
                <div className="flex flex-row gap-4">
                  <p className="2xl:text-4xl text-xl font-semibold">
                    {t("products.item5.name")}
                  </p>
                  <span className="border-t-4 flex-grow border-black mt-4"></span>
                </div>
                <p className="text-[#444] text-xl">
                  {t("products.item5.content1")}
                </p>
                <p className="text-[#444] text-xl mt-5">
                  {t("products.item5.content2")}
                </p>
                <img
                  src={Product5}
                  className="h-[300px] w-full md:h-[400px] lg:h-[650px] object-contain mt-5"
                />
              </div>
            </div>
          </Container>
        </section>
      </main>
    </SidebarProvider>
  );
}

export default ProductPage;
