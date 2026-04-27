"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

type Category = "About the Course" | "About the Delivery" | "Miscellaneous";

export default function FAQ() {
  const categories: Category[] = [
    "About the Course",
    "About the Delivery",
    "Miscellaneous",
  ];

  const faqs: Record<Category, string[]> = {
    "About the Course": [
      "What is the ideal team size for corporate training?",
      "How do we get started with Accredian?",
    ],
    "About the Delivery": [
      "How are the sessions delivered?",
      "Are the programs flexible?",
    ],
    "Miscellaneous": [
      "Do you provide certification?",
      "Can programs be customized?",
    ],
  };

  const [activeCategory, setActiveCategory] =
    useState<Category>("Miscellaneous");

  const [openIndex, setOpenIndex] = useState<number | null>(null);


  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="faq" className="py-20 bg-[#f7f9fc] scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4">


          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Frequently Asked{" "}
            <span className="text-blue-600">Questions</span>
          </h2>


          <div className="mt-12 grid md:grid-cols-3 gap-10">


            <div className="flex flex-col gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenIndex(null);
                  }}
                  className={`px-6 py-4 rounded-lg border text-left transition
                    ${
                      activeCategory === cat
                        ? "bg-white shadow-md text-blue-600 font-medium border-blue-500"
                        : "bg-gray-100 text-gray-600"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>


            <div className="md:col-span-2 space-y-4">
              {faqs[activeCategory].map((q, i) => (
                <div
                  key={i}
                  className="bg-white border rounded-lg p-5 cursor-pointer transition hover:shadow-sm"
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                >
                  <div className="flex justify-between items-center">
                    <p className="text-gray-800 font-medium">{q}</p>
                    <span className="text-gray-400 text-xl transition">
                      {openIndex === i ? "−" : "+"}
                    </span>
                  </div>


                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === i ? "max-h-40 mt-3" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-600 text-sm leading-relaxed">
                      This is a sample answer. Replace this with your real FAQ content.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="flex justify-center mt-12">
            <button
              onClick={() => setOpen(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Enquire Now
            </button>
          </div>

        </div>
      </section>


      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}