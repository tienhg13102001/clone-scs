import { FC } from "react";
import { useBreadcrumb } from "../../../hooks/useBreadcrumb";
import { IoMdHome } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";

type Props = {
  title: string;
};

const HeaderNavigation: FC<Props> = ({ title }) => {
  const { t } = useTranslation();
  const { pathnames } = useBreadcrumb();

  return (
    <div className="bg-hero-pattern bg-center pt-36 pb-12">
      <h1 className="text-white text-5xl mb-5 text-center">{title}</h1>
      <div className="flex justify-center mt-14 items-center gap-3">
        <IoMdHome color="white" className="text-white relative" />
        {pathnames &&
          pathnames.map((path, index) => (
            <div
              key={index}
              className="leading-[50px] text-white relative flex gap-3 items-center"
            >
              <IoIosArrowForward />
              {t(path)}
            </div>
          ))}
      </div>
    </div>
  );
};

export default HeaderNavigation;
