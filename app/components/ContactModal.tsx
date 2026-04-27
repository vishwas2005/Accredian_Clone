"use client";

import { useState } from "react";
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
    if (name === "domain" && !value) error = "Required";
    if (name === "mode" && !value) error = "Required";

    if (name === "candidates") {
      if (!value) error = "Required";
      else if (Number(value) <= 0) error = "Invalid";
    }

    if (name === "location" && !value.trim()) error = "Required";

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
    const newErrors: Partial<Record<keyof FormFields, string>> = {};

    Object.entries(form).forEach(([key, value]) => {
      validateField(key, value);
      if (!value) valid = false;
    });

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateAll()) return;

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
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
        <div className="relative w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl bg-white grid md:grid-cols-2">

          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur p-2 rounded-full hover:scale-110 transition"
          >
            <X size={18} />
          </button>

          <div className="hidden md:block relative">
            <Image
              src="/logos/hero.png"
              alt="image"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-10 space-y-6 bg-white"
          >
            <h2 className="text-3xl font-semibold text-gray-900">
              Enquire Now
            </h2>

            {[
              { name: "name", type: "text", label: "Name" },
              { name: "email", type: "email", label: "Email" },
              { name: "phone", type: "number", label: "Phone" },
              { name: "company", type: "text", label: "Company" },
              { name: "location", type: "text", label: "Location" },
            ].map((field) => (
              <div key={field.name} className="relative">
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name as keyof FormFields]}
                  onChange={handleChange}
                  className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600"
                  placeholder={field.label}
                />
                <label className="absolute left-0 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600">
                  {field.label}
                </label>
                {errors[field.name as keyof FormFields] && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors[field.name as keyof FormFields]}
                  </p>
                )}
              </div>
            ))}

            <div>
              <select
                name="domain"
                value={form.domain}
                onChange={handleChange}
                className="w-full border-b-2 py-2 text-gray-900 bg-transparent focus:outline-none focus:border-blue-600"
              >
                <option value="">Select Domain</option>
                <option>IT</option>
                <option>Finance</option>
                <option>Healthcare</option>
              </select>
              {errors.domain && (
                <p className="text-xs text-red-500">{errors.domain}</p>
              )}
            </div>

            <div>
              <input
                type="number"
                name="candidates"
                placeholder="Candidates"
                value={form.candidates}
                onChange={handleChange}
                className="w-full border-b-2 py-2 text-gray-900 bg-transparent focus:outline-none focus:border-blue-600"
              />
              {errors.candidates && (
                <p className="text-xs text-red-500">
                  {errors.candidates}
                </p>
              )}
            </div>

            <div>
              <select
                name="mode"
                value={form.mode}
                onChange={handleChange}
                className="w-full border-b-2 py-2 text-gray-900 bg-transparent focus:outline-none focus:border-blue-600"
              >
                <option value="">Delivery Mode</option>
                <option>Online</option>
                <option>Offline</option>
              </select>
              {errors.mode && (
                <p className="text-xs text-red-500">{errors.mode}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition shadow-lg hover:shadow-xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {showAlert && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-xl overflow-hidden">
          <p className="font-medium">Thank you! Submitted successfully</p>
          <div className="absolute bottom-0 left-0 h-1 bg-white animate-progress"></div>
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