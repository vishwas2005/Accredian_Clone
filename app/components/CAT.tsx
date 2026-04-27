"use client";

import Image from "next/image";

export default function CAT() {
  return (
    <section
      id="cat"
      className="py-24 bg-[#f7f9fc] scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">


        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          The <span className="text-blue-600">CAT Framework</span>
        </h2>

        <p className="mt-3 text-gray-600">
          Our Proven Approach to{" "}
          <span className="text-blue-600">Learning Excellence</span>
        </p>


        <div className="mt-16 flex justify-center">
          <Image
            src="/logos/catV2.svg"
            alt="CAT Framework"
            width={1000}
            height={400}
            className="w-full max-w-5xl object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}