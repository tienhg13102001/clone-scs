import RoutesString from "@/pages/Utils/RoutesString";

interface NavItem {
  title: string;
  url: string;
  links: {
    title: string;
    url: string;
  }[];
}

export const getNavItems = (t: (key: string) => string): NavItem[] => [
  {
    title: t("scsNav"),
    url: RoutesString.CompanyInfo,
    links: [
      {
        title: t("company-info"),
        url: RoutesString.CompanyInfo,
      },
      {
        title: t("history"),
        url: RoutesString.History,
      },
      {
        title: t("heat-rd-center"),
        url: RoutesString.SCSHeat,
      },
    ],
  },
  {
    title: t("product"),
    url: RoutesString.Ess,
    links: [
      {
        title: t("products.ess_tms.main_path"),
        url: RoutesString.Ess,
      },
      {
        title: t("products.ess_tms.battery_tms.main_path"),
        url: RoutesString.Battery,
      },
      {
        title: t("products.ess_tms.data_center_cooling.main_path"),
        url: RoutesString.DataCoolingCenter,
      },
    ],
  },
  {
    title: t("advanced-tech"),
    url: RoutesString.AITSMControl,
    links: [
      {
        title: t("ai-tsm-control"),
        url: RoutesString.AITSMControl,
      },
      {
        title: t("energy-integration-system"),
        url: RoutesString.EnergyIntegrationSystem,
      },
      {
        title: t("high-efficiency-heat-exchanger"),
        url: RoutesString.HightEfficiencyHeatExchanger,
      },
    ],
  },
  {
    title: t("business-areas"),
    url: RoutesString.FastChargerCooling,
    links: [
      {
        title: t("fast-charger-cooling"),
        url: RoutesString.FastChargerCooling,
      },
      {
        title: t("ICE"),
        url: RoutesString.ICE,
      },
      {
        title: t("electric"),
        url: RoutesString.Electric,
      },
      {
        title: "Roof (Golf Cart) AC",
        url: RoutesString.Roof,
      },
      {
        title: t("elevator"),
        url: RoutesString.Elevator,
      },
      {
        title: t("residential"),
        url: RoutesString.Elevator,
      },
      {
        title: t("water-capture"),
        url: RoutesString.WaterCapture,
      },
      {
        title: t("USP"),
        url: RoutesString.USP,
      },
      {
        title: t("ai-monitoring"),
        url: RoutesString.AIMonitoring,
      },
    ],
  },
  {
    title: t("media"),
    url: RoutesString.Contact,
    links: [
      {
        title: t("contact.contact"),
        url: RoutesString.Contact,
      },
      {
        title: t("media-record"),
        url: RoutesString.MediaRecord,
      },
    ],
  },
];

export const PageTitles = (t: (key: string) => string) => ({
  [RoutesString.Home]: "SCS",
  [RoutesString.Admin]: t("admin"),
  [RoutesString.Ess]: t("ess"),
  [RoutesString.Battery]: t("battery"),
  [RoutesString.DataCoolingCenter]: t(
    "products.ess_tms.data_center_cooling.main_path"
  ),
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
  [RoutesString.HightEfficiencyHeatExchanger]: t(
    "high-efficiency-heat-exchanger"
  ),
  [RoutesString.Scs]: t("scs"),
  [RoutesString.CompanyInfo]: t("company-info"),
  [RoutesString.History]: t("history"),
  [RoutesString.SCSHeat]: t("heat-rd-center"),
  [RoutesString.Contact]: t("contact.contact"),
  [RoutesString.MediaRecord]: t("media-record"),
});
