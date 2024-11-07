interface NavItem {
  title: string;
  links: {
    title: string;
    url: string;
  }[];
}

export const getNavItems = (t: (key: string) => string): NavItem[] => [
  {
    title: t("scs"),
    links: [
      {
        title: t("company-info"),
        url: "/",
      },
      {
        title: t("history"),
        url: "/",
      },
      {
        title: t("heat-rd-center"),
        url: "/",
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
        url: "/",
      },
      {
        title: "Energy Integration System",
        url: "/",
      },
      {
        title: "High efficiency heat exchanger",
        url: "/",
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
