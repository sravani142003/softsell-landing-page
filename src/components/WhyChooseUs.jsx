import React from "react";

const reasons = [
  { title: "Fast Payments", desc: "Get paid quickly after license verification.", icon: "⚡" },
  { title: "Secure Process", desc: "Your data and transactions are safe with us.", icon: "🔒" },
  { title: "Fair Valuations", desc: "We ensure competitive market-based pricing.", icon: "📈" },
  { title: "24/7 Support", desc: "We’re here whenever you need help.", icon: "🛠️" }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <div key={i} className="p-6 rounded-lg shadow bg-white dark:bg-gray-700">
            <div className="text-4xl mb-3">{r.icon}</div>
            <h3 className="font-semibold text-lg mb-1">{r.title}</h3>
            <p className="text-sm">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
