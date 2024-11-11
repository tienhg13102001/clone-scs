import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
const InfoTable = () => {
  const { t } = useTranslation();

  const data = [
    { label: t("coolingCapacity"), value: t("values.coolingCapacity") },
    { label: t("heatingCapacity"), value: t("values.heatingCapacity") },
    { label: t("dimensions"), value: t("values.dimensions") },
    {
      label: t("temperatureRange"),
      value: t("values.temperatureRange"),
    },
    { label: t("current"), value: t("values.current") },
    { label: t("weight"), value: t("values.weight") },
    { label: t("voltage"), value: t("values.voltage") },
    { label: t("refrigerant"), value: t("values.refrigerant") },
  ];

  return (
    <motion.table
      style={{ borderCollapse: "collapse", width: "100%" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      viewport={{ once: false }}
    >
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td
              style={{
                backgroundColor: "#bdd7ee",
                padding: "8px",
                fontWeight: "bold",
                border: "1px solid #ddd",
              }}
            >
              {item.label}
            </td>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>
              {item.value}
            </td>
          </tr>
        ))}
      </tbody>
    </motion.table>
  );
};

export default InfoTable;
