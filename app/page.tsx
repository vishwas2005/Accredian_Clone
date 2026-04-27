"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Clients from "./components/Clients";
import Edge from "./components/Edge";
import Domain from "./components/Domain";
import Courses from "./components/Courses";
import CAT from "./components/CAT";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar />

      <Hero onOpen={() => setOpen(true)} />

      <Stats />
      <Clients />
      <Edge />
      <Domain />
      <Courses />
      <CAT />
      <HowItWorks />
      <FAQ />

      <Testimonials />

      <Footer />


      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}