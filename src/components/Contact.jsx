import { useState } from "react";
import { contact } from "../data/content";
import SectionBanner from "./SectionBanner";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your backend / email service / form provider.
    console.log("Contact form submitted:", form);
    alert("Thanks! We'll get back to you soon.");
    setForm({ name: "", email: "", number: "", message: "" });
  };

  return (
    <section id="contact" className="bg-cream-50">
      <SectionBanner heading={contact.heading} />

      <div className="max-w-4xl mx-auto px-6 sm:px-10 py-10 sm:py-14 grid md:grid-cols-2 gap-8">
        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="bg-emerald-950 rounded-2xl p-6 sm:p-8 flex flex-col gap-4"
        >
          <h3 className="font-heading text-cream-50 text-lg sm:text-xl tracking-wide text-center mb-2">
            {contact.formHeading}
          </h3>

          {[
            { name: "name", label: "Your Name" },
            { name: "email", label: "Your Email", type: "email" },
            { name: "number", label: "Number", type: "tel" },
            { name: "message", label: "Message" },
          ].map((field) => (
            <label key={field.name} className="flex items-center gap-3">
              <span className="font-heading-alt text-cream-100 text-[10px] sm:text-xs uppercase tracking-wide w-16 sm:w-20 shrink-0">
                {field.label}
              </span>
              <input
                type={field.type || "text"}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                className="flex-1 bg-cream-100 rounded px-3 py-2 text-sm text-neutral-800 outline-none focus:ring-2 focus:ring-gold-500"
              />
            </label>
          ))}

          <button
            type="submit"
            className="self-start mt-2 bg-gold-600 hover:bg-gold-700 text-cream-50 font-heading-alt text-sm tracking-wide px-6 py-2 uppercase transition-colors"
          >
            {contact.submit}
          </button>
        </form>

        {/* Phone / mail cards */}
        <div className="flex flex-col gap-4">
          <div className="bg-emerald-950 rounded-2xl px-6 py-5 flex items-center gap-4">
            <span className="w-10 h-10 rounded-full bg-gold-600/20 grid place-items-center text-gold-400 shrink-0">
              ☎
            </span>
            <div>
              <p className="font-heading-alt text-cream-50 text-xs uppercase tracking-wide">
                {contact.phone.label}
              </p>
              <p className="font-heading-alt text-cream-100/90 text-sm mt-1">
                {contact.phone.value}
              </p>
            </div>
          </div>

          <div className="bg-emerald-950 rounded-2xl px-6 py-5 flex items-center gap-4">
            <span className="w-10 h-10 rounded-full bg-gold-600/20 grid place-items-center text-gold-400 shrink-0">
              ✉
            </span>
            <div>
              <p className="font-heading-alt text-cream-50 text-xs uppercase tracking-wide">
                {contact.mail.label}
              </p>
              <p className="font-heading-alt text-cream-100/90 text-sm mt-1 break-all">
                {contact.mail.value}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
