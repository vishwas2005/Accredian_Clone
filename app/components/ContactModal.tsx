"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type FormFields = {
  name: string;
  email: string;
  phone: number | "";
  company: string;
  domain: string;
  candidates: number | "";
  mode: string;
  location: string;
};

export default function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState<FormFields>({
    name: "",
    email: "",
    phone: "",
    company: "",
    domain: "",
    candidates: "",
    mode: "",
    location: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormFields, string>>
  >({});

  const [showAlert, setShowAlert] = useState(false);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone" || name === "candidates") {
      setForm((prev) => ({
        ...prev,
        [name]: value === "" ? "" : Number(value),
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof FormFields, string>> = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(form.name)) {
      newErrors.name = "Only letters allowed";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (form.phone === "") {
      newErrors.phone = "Phone required";
    } else if (!/^\d{10}$/.test(String(form.phone))) {
      newErrors.phone = "Must be 10 digits";
    }

    if (!form.company.trim()) {
      newErrors.company = "Company required";
    }

    if (!form.domain) {
      newErrors.domain = "Select domain";
    }

    if (form.candidates === "") {
      newErrors.candidates = "Required";
    } else if (form.candidates <= 0) {
      newErrors.candidates = "Must be greater than 0";
    }

    if (!form.mode) {
      newErrors.mode = "Select mode";
    }

    if (!form.location.trim()) {
      newErrors.location = "Location required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setShowAlert(true);

    setForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      domain: "",
      candidates: "",
      mode: "",
      location: "",
    });

    setTimeout(() => {
      setShowAlert(false);
      onClose();
    }, 3000);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl w-full max-w-5xl grid md:grid-cols-2 overflow-hidden relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black"
          >
            <X size={20} />
          </button>

          <div className="hidden md:block relative">
            <Image
              src="/logos/business-v2.webp"
              alt="form"
              fill
              className="object-cover"
            />
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Enquire Now
            </h2>

            <div>
              <input
                name="name"
                placeholder="Enter Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 text-gray-900 placeholder-gray-400 bg-transparent outline-none focus:border-blue-600"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                name="email"
                placeholder="Enter Email"
                value={form.email}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 text-gray-900 placeholder-gray-400 bg-transparent outline-none focus:border-blue-600"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                name="phone"
                placeholder="Enter Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 text-gray-900 placeholder-gray-400 bg-transparent outline-none focus:border-blue-600"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <input
                name="company"
                placeholder="Enter Company Name"
                value={form.company}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 text-gray-900 placeholder-gray-400 bg-transparent outline-none focus:border-blue-600"
              />
              {errors.company && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.company}
                </p>
              )}
            </div>

            <div>
              <select
                name="domain"
                value={form.domain}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 text-gray-900 bg-transparent outline-none focus:border-blue-600"
              >
                <option value="">Select Domain</option>
                <option>IT</option>
                <option>Finance</option>
                <option>Healthcare</option>
              </select>
              {errors.domain && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.domain}
                </p>
              )}
            </div>

            <div>
              <input
                name="candidates"
                placeholder="Enter No. of candidates"
                value={form.candidates}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 text-gray-900 placeholder-gray-400 bg-transparent outline-none focus:border-blue-600"
              />
              {errors.candidates && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.candidates}
                </p>
              )}
            </div>

            <div>
              <select
                name="mode"
                value={form.mode}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 text-gray-900 bg-transparent outline-none focus:border-blue-600"
              >
                <option value="">Select Mode</option>
                <option>Online</option>
                <option>Offline</option>
              </select>
              {errors.mode && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.mode}
                </p>
              )}
            </div>

            <div>
              <input
                name="location"
                placeholder="Enter Location"
                value={form.location}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 text-gray-900 placeholder-gray-400 bg-transparent outline-none focus:border-blue-600"
              />
              {errors.location && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.location}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {showAlert && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 overflow-hidden">
          <p>Thank you! Form submitted</p>
          <div className="absolute bottom-0 left-0 h-1 bg-white animate-progress"></div>
        </div>
      )}

      <style jsx>{`
        .animate-progress {
          width: 100%;
          animation: progress 3s linear forwards;
        }
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}