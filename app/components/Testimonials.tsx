"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      logo: "/logos/adp.svg",
      text: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with dedication and expertise.",
    },
    {
      logo: "/logos/hcl.png",
      text: "Great collaboration and seamless execution. Highly professional team delivering impactful results.",
    },
    {
      logo: "/logos/bayer.svg",
      text: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile.",
    },
  ];

  const [index, setIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500); 

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section
      id="testimonials"
      className="py-20 bg-gray-50 scroll-mt-28"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">


        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Testimonials from{" "}
          <span className="text-blue-600">Our Partners</span>
        </h2>

        <p className="mt-3 text-gray-600">
          What <span className="text-blue-600">Our Clients</span> Are Saying
        </p>


        <div className="relative mt-12 overflow-hidden">

          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="min-w-full flex justify-center px-2"
              >
                <div className="bg-white border rounded-xl p-8 shadow-sm max-w-2xl w-full">


                  <div className="flex justify-center mb-4">
                    <Image
                      src={item.logo}
                      alt="logo"
                      width={100}
                      height={50}
                      className="object-contain"
                    />
                  </div>


                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.text}
                  </p>

                </div>
              </div>
            ))}
          </div>

        </div>


        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition ${
                i === index ? "bg-blue-600 scale-110" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>

      </div>
    </section>
  );
}