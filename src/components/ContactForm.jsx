import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", license: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.license) {
      setError("Please fill out all required fields.");
    } else {
      alert("Message submitted successfully!");
      setForm({ name: "", email: "", company: "", license: "", message: "" });
      setError("");
    }
  };

  return (
    <section className="py-16 px-4 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Name*" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email*" value={form.email} onChange={handleChange} required />
        <input type="text" name="company" placeholder="Company" value={form.company} onChange={handleChange} />
        <select name="license" value={form.license} onChange={handleChange} required>
          <option value="">Select License Type*</option>
          <option>Microsoft Office</option>
          <option>Adobe Suite</option>
          <option>Antivirus</option>
        </select>
        <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} rows="4" />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="cta-button">Submit</button>
      </form>
    </section>
  );
}
