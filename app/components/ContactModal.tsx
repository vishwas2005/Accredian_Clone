"use client";

import Image from "next/image";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">


      <div className="bg-white rounded-2xl w-full max-w-5xl flex overflow-hidden shadow-2xl relative">


        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
        >
          ✕
        </button>


        <div className="hidden md:block w-1/2 relative">

          <Image

            src="/logos/business-v2.webp" 

            alt="form"

            fill

            className="object-cover"

          />

        </div>


        <div className="w-full md:w-1/2 p-8">

          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Enquire Now
          </h2>

          <div className="space-y-5">

            <input
              type="text"
              placeholder="Enter Name"
              className="w-full border-b border-gray-300 py-2 outline-none text-gray-800 placeholder-gray-500"
            />

            <input
              type="email"
              placeholder="Enter Email"
              className="w-full border-b border-gray-300 py-2 outline-none text-gray-800 placeholder-gray-500"
            />

            <input
              type="tel"
              placeholder="Enter Phone Number"
              className="w-full border-b border-gray-300 py-2 outline-none text-gray-800 placeholder-gray-500"
            />

            <input
              type="text"
              placeholder="Enter Company Name"
              className="w-full border-b border-gray-300 py-2 outline-none text-gray-800 placeholder-gray-500"
            />

            <select className="w-full border-b border-gray-300 py-2 outline-none text-gray-700">
              <option value="">Select Domain</option>
              <option>Tech & Data</option>
              <option>AI / ML</option>
              <option>Leadership</option>
            </select>

            <input
              type="number"
              placeholder="Enter No. of candidates"
              className="w-full border-b border-gray-300 py-2 outline-none text-gray-800 placeholder-gray-500"
            />

            <select className="w-full border-b border-gray-300 py-2 outline-none text-gray-700">
              <option value="">Select Mode of Delivery</option>
              <option>Online</option>
              <option>Offline</option>
              <option>Hybrid</option>
            </select>

            <input
              type="text"
              placeholder="Eg: Gurgaon, Delhi, India"
              className="w-full border-b border-gray-300 py-2 outline-none text-gray-800 placeholder-gray-500"
            />


            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg mt-4 font-medium transition">
              Submit
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}