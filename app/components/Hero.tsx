"use client";

import Image from "next/image";

export default function Hero({ onOpen }: { onOpen: () => void }) {
  return (
    <section id="home" className="px-4 py-12 bg-white">
      <div className="max-w-7xl mx-auto bg-[#eaf2ff] rounded-3xl px-8 md:px-16 py-10 md:py-14 flex flex-col md:flex-row items-center justify-between shadow-sm">


        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Next-Gen <span className="text-blue-600">Expertise</span>
            <br />
            For Your <span className="text-blue-600">Enterprise</span>
          </h1>

          <p className="mt-6 text-gray-700 text-lg">
            Cultivate high-performance teams through expert learning.
          </p>

          <div className="flex flex-wrap gap-6 mt-6 text-gray-700 text-sm">
            <span>✔ Tailored Solutions</span>
            <span>✔ Industry Insights</span>
            <span>✔ Expert Guidance</span>
          </div>


          <button
            onClick={onOpen}
            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md"
          >
            Enquire Now
          </button>
        </div>


        <div className="mt-10 md:mt-0">
          <Image
            src="/logos/hero.png"
            alt="hero"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}