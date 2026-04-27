"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "stats", label: "Stats" },
  { id: "clients", label: "Clients" },
  { id: "edge", label: "Accredian Edge" },
  { id: "cat", label: "CAT" },
  { id: "how", label: "How It Works" },
  { id: "faq", label: "FAQs" },
  { id: "testimonials", label: "Testimonials" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const el = document.getElementById(section.id);

        if (el) {
          const top = el.offsetTop - window.innerHeight / 3;

          if (window.scrollY >= top) {
            current = section.id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="w-full px-6 md:px-10 py-4 flex items-center justify-between">


        <div className="flex flex-col leading-none">
          <span className="text-blue-600 text-[26px] font-bold">
            accredian
          </span>
          <span className="text-[12px] text-gray-500">
            credentials that matter
          </span>
        </div>


        <nav className="hidden md:flex items-center gap-8 text-[16px] font-medium">

          {sections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative pb-1 transition-colors duration-300 ${
                active === item.id
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {item.label}


              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ${
                  active === item.id ? "w-full" : "w-0"
                }`}
              ></span>
            </a>
          ))}

        </nav>
      </div>
    </header>
  );
}