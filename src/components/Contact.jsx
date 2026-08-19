import { useState } from "react";
import { contact } from "../data/content";
import SectionBanner from "./SectionTitle";
import phone from "/images/phone.png";
import mail from "/images/mail.png";

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
    console.log("Contact form submitted:", form);
    alert("Thanks! We'll get back to you soon.");
    setForm({ name: "", email: "", number: "", message: "" });
  };

  return (
    <section id="contact" className="bg-cream-50 overflow-hidden">
      <SectionBanner heading={contact.heading} font={contact.headingFont} />

      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-20 py-10 sm:py-14 grid md:grid-cols-2 gap-8 items-center">
        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#133125] rounded-3xl sm:rounded-[44px] p-5 sm:p-8 flex flex-col gap-4 shadow-xl transition-all duration-300 hover:shadow-2xl"
        >
          <h3 className="font-namdhinggo text-white text-2xl sm:text-4xl lg:text-5xl tracking-wide text-center mb-2">
            YOUR FEEDBACK
            <br /> MATTERS!
          </h3>

          {[
            { name: "name", label: "Your Name" },
            { name: "email", label: "Your Email", type: "email" },
            { name: "number", label: "Number", type: "tel" },
            { name: "message", label: "Message", isTextArea: true },
          ].map((field) => (
            <div
              key={field.name}
              className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3"
            >
              <label
                htmlFor={field.name}
                className="font-mona text-white text-sm sm:text-lg lg:text-xl uppercase tracking-wide sm:w-32 lg:w-40 shrink-0"
              >
                {field.label}
              </label>

              {field.isTextArea ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  rows={3}
                  value={form[field.name]}
                  onChange={handleChange}
                  className="flex-1 w-full bg-[#D9D9D9] rounded px-3 py-2 text-sm sm:text-base text-neutral-800 outline-none transition-all duration-200 focus:ring-2 focus:ring-gold-500"
                />
              ) : (
                <input
                  id={field.name}
                  type={field.type || "text"}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  className="flex-1 w-full bg-[#D9D9D9] rounded px-3 py-2 text-sm sm:text-base text-neutral-800 outline-none transition-all duration-200 focus:ring-2 focus:ring-gold-500"
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="self-center mt-2 bg-[#A77631] hover:bg-gold-700 text-white font-inter font-semibold text-lg sm:text-2xl lg:text-3xl rounded-lg tracking-wide px-8 py-2.5 uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-md cursor-pointer"
          >
            {contact.submit}
          </button>
        </form>

        {/* Phone / Mail Cards */}
        <div className="flex flex-col gap-6 text-white text-center">
          {/* Phone Card */}
          <a
            href={`tel:${contact.phone.value}`}
            className="bg-[#133125] rounded-2xl sm:rounded-[28px] p-5 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#183d2e] group"
          >
            <img
              src={phone}
              alt="Phone"
              className="w-12 sm:w-16 lg:w-20 object-contain transition-transform duration-300 group-hover:rotate-12"
            />
            <div className="flex-1 text-center sm:text-left">
              <p className="font-namdhinggo text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wide">
                {contact.phone.label}
              </p>
              <p className="font-montserrat-alt text-xl sm:text-3xl lg:text-4xl mt-1 font-semibold group-hover:text-gold-500 transition-colors">
                {contact.phone.value}
              </p>
            </div>
          </a>

          {/* Mail Card */}
          <a
            href={`mailto:${contact.mail.value}`}
            className="bg-[#133125] rounded-2xl sm:rounded-[28px] p-5 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#183d2e] group"
          >
            <img
              src={mail}
              alt="Mail"
              className="w-12 sm:w-16 lg:w-20 object-contain transition-transform duration-300 group-hover:-rotate-12"
            />
            <div className="flex-1 text-center sm:text-left min-w-0">
              <p className="font-namdhinggo text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wide">
                {contact.mail.label}
              </p>
              <p className="font-montserrat-alt text-base sm:text-2xl lg:text-3xl mt-1 break-all font-semibold group-hover:text-gold-500 transition-colors">
                {contact.mail.value}
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
