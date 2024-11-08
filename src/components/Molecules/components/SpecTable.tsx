import React from "react";

interface SpecItem {
  content: string;
  specification: string;
}

const conceptType1Specs: { section: string; items: SpecItem[] }[] = [
  {
    section: "Hardware",
    items: [
      { content: "Function", specification: "Cooling Only" },
      { content: "Fan Speed", specification: "Low / Middle / High" },
      { content: "Heat fluid", specification: "R410 or R32" },
      { content: "Cooling Volume", specification: "Max. 1.6kW" },
      { content: "Heating Volume", specification: "Option" },
      { content: "Operating temp.", specification: "-10 ~ 55°C" },
      { content: "Dimension(L*W*D)", specification: "L430 x W405 x H320" },
      { content: "Weight", specification: "20kg" },
      { content: "Power Source", specification: "220V" },
      { content: "Outlet Target Temp.", specification: "3 ~ 20°C" },
    ],
  },
  {
    section: "Software",
    items: [
      { content: "Control", specification: "App by Bluetooth" },
      { content: "Device Control", specification: "CAN / RS232" },
      { content: "Monitoring", specification: "Smart Phone" },
      { content: "Energy Efficiency", specification: "Grade 1" },
    ],
  },
];

const conceptType2Specs: { section: string; items: SpecItem[] }[] = [
  {
    section: "Hardware",
    items: [
      { content: "Function", specification: "Cooling & Heating" },
      { content: "Fan Speed", specification: "Low / Middle / High" },
      { content: "Heat fluid", specification: "R410 or R32" },
      { content: "Cooling Volume", specification: "Max. 2.5kW" },
      { content: "Heating Volume", specification: "Max. 2.3kW" },
      { content: "Operating temp.", specification: "-10 ~ 55°C" },
      { content: "Dimension(L*W*D)", specification: "L584 x W486 x H365" },
      { content: "Weight", specification: "24kg" },
      { content: "Power Source", specification: "220V" },
      { content: "Outlet Target Temp.", specification: "3 ~ 40°C" },
    ],
  },
  {
    section: "Software",
    items: [
      { content: "Control", specification: "App by Bluetooth" },
      { content: "Device Control", specification: "CAN / RS232" },
      { content: "Monitoring", specification: "Smart Phone" },
      { content: "Energy Efficiency", specification: "Grade 1" },
    ],
  },
];

const SpecTable: React.FC<{
  title: string;
  specs: { section: string; items: SpecItem[] }[];
}> = ({ title, specs }) => (
  <div className="w-full bg-white   shadow-md overflow-hidden">
    <h2 className="text-center text-lg font-semibold bg-[#8db3e2] text-white py-3 my-2">
      {title}
    </h2>
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th
            colSpan={2}
            className="w-1/2 bg-[#8db3e2] border border-gray-300 px-4 py-2 text-center font-medium text-gray-700"
          >
            Contents
          </th>
          <th className="w-1/2 bg-[#8db3e2] border border-gray-300 px-4 py-2 text-center font-medium text-gray-700">
            Specification
          </th>
        </tr>
      </thead>
      <tbody>
        {specs.map((section, index) => (
          <React.Fragment key={index}>
            <tr>
              <td
                rowSpan={section.items.length + 1}
                className="bg-[#c6d9f0] text-center font-semibold py-2 text-gray-800 border border-gray-300"
              >
                {section.section}
              </td>
            </tr>
            {section.items.map((item, idx) => (
              <tr
                key={idx}
                className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-100"}`}
              >
                <td className="border px-4 py-2 text-center font-medium">
                  {item.content}
                </td>
                <td className="border px-4 py-2 text-center">
                  {item.specification}
                </td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  </div>
);

const TableComponent: React.FC = () => (
  <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 p-4">
    <SpecTable title="Concept Type 1" specs={conceptType1Specs} />
    <SpecTable title="Concept Type 2" specs={conceptType2Specs} />
  </div>
);

export default TableComponent;
