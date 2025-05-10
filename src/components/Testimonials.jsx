import React from "react";

const testimonials = [
  { name: "Jane Doe", role: "CTO", company: "TechCorp", text: "SoftSell helped us recover thousands in unused licenses." },
  { name: "John Smith", role: "IT Manager", company: "InnovaSoft", text: "Fast, reliable, and secure. Highly recommended!" }
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>
      <div className="space-y-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <p className="italic mb-2">"{t.text}"</p>
            <p className="font-semibold">{t.name}, {t.role} @ {t.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
