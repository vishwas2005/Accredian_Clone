"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type FormFields = {
  name: string;
  email: string;
  phone: string;
  company: string;
  domain: string;
  candidates: string;
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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validateField = (name: string, value: string) => {
    let error = "";

    if (name === "name") {
      if (!value.trim()) error = "Required";
      else if (!/^[A-Za-z\s]+$/.test(value)) error = "Only letters";
    }

    if (name === "email") {
      if (!value.trim()) error = "Required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        error = "Invalid email";
    }

    if (name === "phone") {
      if (!value) error = "Required";
      else if (!/^\d{10}$/.test(value)) error = "10 digits only";
    }

    if (name === "company" && !value.trim()) error = "Required";
    if (name === "location" && !value.trim()) error = "Required";
    if (name === "domain" && !value) error = "Required";
    if (name === "mode" && !value) error = "Required";

    if (name === "candidates") {
      if (!value) error = "Required";
      else if (Number(value) <= 0) error = "Invalid";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const validateAll = () => {
    let valid = true;

    Object.entries(form).forEach(([key, value]) => {
      validateField(key, value);
      if (!value) valid = false;
    });

    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateAll()) return;

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
      onClose();
    }, 3000);
  };

  const inputClass =
    "w-full border border-gray-300 bg-gray-50 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
        <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-xl grid md:grid-cols-2 max-h-[90vh]">

          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-50 bg-white p-2 rounded-full shadow hover:scale-110 transition text-gray-700"
          >
            <X size={18} />
          </button>

          <div className="hidden md:block relative min-h-[350px]">
            <Image
              src="/logos/business-v2.webp"
              alt="img"
              fill
              className="object-cover"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="overflow-y-auto p-5 space-y-2 pb-6"
          >
            <h2 className="text-xl font-semibold text-gray-900">
              Enquire Now
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className={inputClass}
            />
            <p className="text-xs text-red-500 h-4">{errors.name}</p>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className={inputClass}
            />
            <p className="text-xs text-red-500 h-4">{errors.email}</p>

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className={inputClass}
            />
            <p className="text-xs text-red-500 h-4">{errors.phone}</p>

            <input
              type="text"
              name="company"
              placeholder="Company"
              value={form.company}
              onChange={handleChange}
              className={inputClass}
            />
            <p className="text-xs text-red-500 h-4">{errors.company}</p>

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={form.location}
              onChange={handleChange}
              className={inputClass}
            />
            <p className="text-xs text-red-500 h-4">{errors.location}</p>

            <select
              name="domain"
              value={form.domain}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select Domain</option>
              <option>IT</option>
              <option>Finance</option>
            </select>
            <p className="text-xs text-red-500 h-4">{errors.domain}</p>

            <input
              type="number"
              name="candidates"
              placeholder="Candidates"
              value={form.candidates}
              onChange={handleChange}
              className={inputClass}
            />
            <p className="text-xs text-red-500 h-4">{errors.candidates}</p>

            <select
              name="mode"
              value={form.mode}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Delivery Mode</option>
              <option>Online</option>
              <option>Offline</option>
            </select>
            <p className="text-xs text-red-500 h-4">{errors.mode}</p>

            <div className="sticky bottom-0 bg-white pt-3">
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {showAlert && (
        <div className="fixed z-[100] top-6 right-6 w-[320px] bg-green-600 text-white px-4 py-3 rounded-md shadow-lg overflow-hidden">
          <p className="text-sm">
            Thank you! Form submitted successfully.
          </p>
          <div className="absolute bottom-0 left-0 h-[3px] bg-white animate-progress"></div>
        </div>
      )}

      <style jsx>{`
        .animate-progress {
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