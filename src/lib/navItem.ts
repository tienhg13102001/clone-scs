import RoutesString from "@/pages/Utils/RoutesString";

interface NavItem {
  title: string;
  links: {
    title: string;
    url: string;
  }[];
}

export const getNavItems = (t: (key: string) => string): NavItem[] => [
  {
    title: t("scsNav"),
    links: [
      {
        title: t("company-info"),
        url: "/scs/company-info",
      },
      {
        title: t("history"),
        url: "/scs/history",
      },
      {
        title: t("heat-rd-center"),
        url: "/scs/heat-rd-center",
      },
    ],
  },
  {
    title: t("product"),
    links: [
      {
        title: t('products.ess_tms.main_path'),
        url: "/ess-tms",
      },
      {
        title: t('products.ess_tms.battery_tms.main_path'),
        url: "/battery-tms",
      },
      {
        title: t('products.ess_tms.data_center_cooling.main_path'),
        url: "/data-cooling-center",
      },
    ],
  },
  {
    title: t("advanced-tech"),
    links: [
      {
        title: t('ai-tsm-control'),
        url: "/advance-technology/ai-tsm-control",
      },
      {
        title: t("energy-integration-system"),
        url: "/advance-technology/energy-integration-system",
      },
      {
        title: t('high-efficiency-heat-exchanger'),
        url: "/advance-technology/high-efficiency-heat-exchanger",
      },
    ],
  },
  {
    title: t("business-areas"),
    links: [
      {
        title: t('fast-charger-cooling'),
        url: "/business-areas/fast-charger-cooling",
      },
      {
        title: t("ICE"),
        url: "/business-areas/ICE",
      },
      {
        title: t('electric'),
        url: "/business-areas/electric",
      },
      {
        title: "Roof (Golf Cart) AC",
        url: "/business-areas/roof",
      },
      {
        title: t("elevator"),
        url: "/business-areas/elevator",
      },
      {
        title: t("residential"),
        url: "/business-areas/residential",
      },
      {
        title: t("water-capture"),
        url: "/business-areas/water-capture",
      },
      {
        title: t("USP"),
        url: "/business-areas/USP",
      },
      {
        title: t("ai-monitoring"),
        url: "/business-areas/ai-monitoring",
      },
    ],
  },
  {
    title: t("media"),
    links: [
      {
        title: t('contact.contact'),
        url: "/contact",
      },
      {
        title: t("media-record"),
        url: "/media-record",
      },
    ],
  },
];

export const PageTitles = (t: (key: string) => string) => ({
  [RoutesString.Home]: "SCS",
  [RoutesString.Admin]: t("admin"),
  [RoutesString.Ess]: t("ess"),
  [RoutesString.Battery]: t("battery"),
  [RoutesString.DataCoolingCenter]: t('products.ess_tms.data_center_cooling.main_path'),
  [RoutesString.BusinessAreas]: t("business-areas"),
  [RoutesString.FastChargerCooling]: t("fast-charger-cooling"),
  [RoutesString.ICE]: t("ICE"),
  [RoutesString.Electric]: t("electric"),
  [RoutesString.Elevator]: t("elevator"),
  [RoutesString.Residential]: t("residential"),
  [RoutesString.WaterCapture]: t("water-capture"),
  [RoutesString.USP]: t("USP"),
  [RoutesString.AIMonitoring]: t("ai-monitoring"),
  [RoutesString.AdvanceTechnology]: t("advance-technology"),
  [RoutesString.AITSMControl]: t("ai-tsm-control"),
  [RoutesString.EnergyIntegrationSystem]: t("energy-integration-system"),
  [RoutesString.HightEfficiencyHeatExchanger]: t("high-efficiency-heat-exchanger"),
  [RoutesString.Scs]: t("scs"),
  [RoutesString.CompanyInfo]: t("company-info"),
  [RoutesString.History]: t("history"),
  [RoutesString.SCSHeat]: t("heat-rd-center"),
  [RoutesString.Contact]: t('contact.contact'),
  [RoutesString.MediaRecord]: t("media-record"),
});
