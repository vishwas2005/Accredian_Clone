"use client";

import Image from "next/image";

export default function Domain() {
  const domains = [
    {
      title: "Product & Innovation Hub",
      icon: "https://img.icons8.com/ios/50/light-on--v1.png",
    },
    {
      title: "Gen-AI Mastery",
      icon: "https://img.icons8.com/ios/50/brain.png",
    },
    {
      title: "Leadership Elevation",
      icon: "https://img.icons8.com/ios/50/conference-call.png",
    },
    {
      title: "Tech & Data Insights",
      icon: "https://img.icons8.com/ios/50/combo-chart.png",
    },
    {
      title: "Operations Excellence",
      icon: "https://img.icons8.com/ios/50/settings.png",
    },
    {
      title: "Digital Enterprise",
      icon: "https://img.icons8.com/ios/50/globe.png",
    },
    {
      title: "Fintech Innovation Lab",
      icon: "https://img.icons8.com/ios/50/money-transfer.png",
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#f7f9fc]">
      <div className="max-w-6xl mx-auto text-center">


        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Our <span className="text-[#2563eb]">Domain Expertise</span>
        </h2>

        <p className="mt-3 text-gray-600">
          <span className="text-[#2563eb] font-medium">
            Specialized Programs
          </span>{" "}
          Designed to Fuel Innovation
        </p>


        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {domains.map((item, index) => {
            const isLast = index === domains.length - 1;

            return (
              <div
                key={index}
                className={`
                  flex justify-center
                  ${isLast ? "md:col-start-2" : ""}
                `}
              >
                <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow-sm hover:shadow-md transition border border-gray-100 w-[260px] h-[140px]">

                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={45}
                    height={45}
                  />

                  <h3 className="mt-4 text-gray-900 font-medium text-center text-sm">
                    {item.title}
                  </h3>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}