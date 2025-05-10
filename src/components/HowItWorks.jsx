import React from "react";

const steps = [
  { title: "Upload License", icon: "📤", desc: "Securely share your unused license details." },
  { title: "Get Valuation", icon: "💰", desc: "We analyze and provide a fair market price." },
  { title: "Get Paid", icon: "🏦", desc: "Receive fast payout after agreement." }
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-12">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-800">
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
