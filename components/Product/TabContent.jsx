"use client";
import { useState } from "react";

export default function TabContent({ product }) {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    {
      id: "tab1",
      label: "Description",
      content: <Description key={product?.id} desc={product?.description} />,
    },
    {
      id: "tab2",
      label: "Specification",
      content: (
        <Specification key={product?.id} spec={product?.specification} />
      ),
    },
    {
      id: "tab3",
      label: `Reviews ${product?.reviews?.length || 0}`,
      content: <Review key={product?.id} reviews={product?.reviews} />,
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
            {tab.content}
          </div>
        ))}
      </div>
    </>
  );
}

const Review = ({ reviews }) => {
  return (
    <>
      {reviews?.map((r) => (
        <p key={r.id} className="p-2">
          {r.comment}
        </p>
      ))}
    </>
  );
};
const Description = ({ desc }) => {
  return (
    <>
      <p className="p-2">{desc}</p>
    </>
  );
};
const Specification = ({ spec }) => {
  return (
    <>
      <p className="p-2">{spec}</p>
    </>
  );
};
const FAQ = () => {
  return (
    <>
      <p className="p-2">Review</p>
    </>
  );
};
