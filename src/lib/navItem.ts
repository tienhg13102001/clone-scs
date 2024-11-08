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
        title: "ESS TMS",
        url: "/ess-tms",
      },
      {
        title: "Battery TMS",
        url: "/battery-tms",
      },
      {
        title: "Data Center Cooling",
        url: "/data-cooling-center",
      },
    ],
  },
  {
    title: t("advanced-tech"),
    links: [
      {
        title: "A.I TMS control",
        url: "/advance-technology/ai-tsm-control",
      },
      {
        title: "Energy Integration System",
        url: "/advance-technology/energy-integration-system",
      },
      {
        title: "High efficiency heat exchanger",
        url: "/advance-technology/high-efficiency-heat-exchanger",
      },
    ],
  },
  {
    title: t("business-areas"),
    links: [
      {
        title: "Fast Charger Cooling",
        url: "/business-areas/fast-charger-cooling",
      },
      {
        title: "ICE Bath Chiller/ Heater",
        url: "/business-areas/ICE",
      },
      {
        title: "Electric Vessel TMS",
        url: "/business-areas/electric",
      },
      // {
      //   title: "Roof (Golf Cart) AC",
      //   url: "/business-areas/elevator",
      // },
      {
        title: "Elevator AC",
        url: "/business-areas/elevator",
      },
      {
        title: "Residential HVAC",
        url: "/business-areas/residential",
      },
      {
        title: "Water Capture HEX",
        url: "/business-areas/water-capture",
      },
      {
        title: "UPS Battery System",
        url: "/business-areas/USP",
      },
      {
        title: "A.I. System Manager",
        url: "/business-areas/ai-monitoring",
      },
    ],
  },
  {
    title: t("media"),
    links: [
      {
        title: "Contact",
        url: "/",
      },
      {
        title: t("media-record"),
        url: "/",
      },
    ],
  },
];
