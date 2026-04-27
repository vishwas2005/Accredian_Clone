"use client";

import { useState, useEffect } from "react";
import ContactModal from "./ContactModal";

export default function Footer() {
  const [open, setOpen] = useState(false);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => console.log("API:", data));
  }, []);

  return (
    <>

      <section className="bg-gray-100 py-16 px-4">


        <div className="max-w-7xl mx-auto bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="flex items-center gap-4">
            <div className="bg-white text-blue-600 p-3 rounded-xl text-2xl">
              🎧
            </div>
            <div>
              <h2 className="text-xl font-semibold">
                Want to Learn More About Our Training Solutions?
              </h2>
              <p className="text-blue-100 text-sm">
                Get Expert Guidance for Your Team’s Success!
              </p>
            </div>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium"
          >
            Contact Us →
          </button>
        </div>


        <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-2xl font-bold text-blue-600">accredian</h2>
            <p className="text-gray-500 text-sm">
              credentials that matter
            </p>


            <div className="flex gap-4 mt-4 text-gray-600 text-lg">
              <span>📘</span>
              <span>💼</span>
              <span>🐦</span>
              <span>📸</span>
              <span>▶️</span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <button
              onClick={() => setOpen(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Enquire Now
            </button>
            <p className="text-sm text-gray-500 mt-2">
              Speak with our Advisor
            </p>
          </div>
        </div>


        <div className="w-full h-[1px] bg-gray-300 mt-10"></div>


        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 mt-8 text-gray-700">

          <div>
            <h3 className="font-semibold mb-3">Accredian</h3>
            <p className="text-sm text-gray-600">About</p>
            <p className="text-sm text-gray-600">Blog</p>
            <p className="text-sm text-gray-600">Why Accredian</p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Contact Us</h3>
            <p className="text-sm">
              Email:{" "}
              <span className="text-blue-600">
                enterprise@accredian.com
              </span>
            </p>
            <p className="text-sm mt-2">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar,
              Sector 18, Gurugram, Haryana
            </p>
          </div>

        </div>

      </section>


      <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm">
        © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
      </footer>


      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}