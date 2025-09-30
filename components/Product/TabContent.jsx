"use client";
import { useState } from "react";

export default function TabContent(props) {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    {
      id: "tab1",
      label: "Description",
      content: <Description />,
    },
    {
      id: "tab2",
      label: "Specification",
      content: <Specification />,
    },
    {
      id: "tab3",
      label: "Reviews (2)",
      content: <Review />,
    },
    {
      id: "tab4",
      label: "FAQ",
      content: <FAQ />,
    },
  ];

  return (
    <>
      {/* Tab Headers */}
      <div className="flex border-b-2 border-border ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-8 py-2 text-2xl  transition-colors ${
              activeTab === tab.id
                ? "border-b-2 border-black text-black font-bold"
                : "text-gray-300 hover:text-secondary font-medium"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content with Slide Transition */}
      <div className="relative p-4  overflow-hidden">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={` transform transition-all duration-500 ease-in-out
               ${
                 activeTab === tab.id
                   ? "max-h-[800px] opacity-100 translate-y-0"
                   : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
               }
            `}
          >
            <p className="p-2">{tab.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}

const Review = () => {
  return (
    <>
      <p>Review</p>
    </>
  );
};
const Description = () => {
  return (
    <>
      <p>
        Welcome to our premier retail and online shop, your ultimate destination
        for leading batteries, car care kits, and engine parts in Bangladesh. We
        are proud to offer an extensive range of top-quality products that cater
        to the needs of vehicle owners, enthusiasts, and professionals alike.{" "}
        <br /> <br />
        At our store, you’ll find an impressive selection of batteries from
        renowned brands, ensuring reliable power solutions for all types of
        vehicles. Whether you drive a car, motorcycle, or even a heavy-duty
        vehicle, we have the perfect battery to meet your requirements. Our
        range encompasses various battery technologies, including
        maintenance-free, deep-cycle, and high-performance options, allowing you
        to choose the ideal power source for your specific needs.
      </p>
    </>
  );
};
const Specification = () => {
  return (
    <>
      <p>Review</p>
    </>
  );
};
const FAQ = () => {
  return (
    <>
      <p>Review</p>
    </>
  );
};
