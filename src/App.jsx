import React from "react";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import Chatbot from "./components/Chatbot";

export default function App() {
  return (
    <main className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white transition-all duration-300">
      <ThemeToggle />
      <Chatbot />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
