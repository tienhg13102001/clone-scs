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
        url: "/",
      },
      {
        title: "ICE Bath Chiller/ Heater",
        url: "/",
      },
      {
        title: "Electric Vessel TMS",
        url: "/",
      },
      {
        title: "Roof (Golf Cart) AC",
        url: "/",
      },
      {
        title: "Elevator AC",
        url: "/",
      },
      {
        title: "Residential HVAC",
        url: "/",
      },
      {
        title: "Water Capture HEX",
        url: "/",
      },
      {
        title: "UPS Battery System",
        url: "/",
      },
      {
        title: "A.I. System Manager",
        url: "/",
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
