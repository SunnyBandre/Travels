import { useState } from "react";
import { contact } from "../data/content";
import SectionBanner from "./SectionBanner";
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
    // Wire this up to your backend / email service / form provider.
    console.log("Contact form submitted:", form);
    alert("Thanks! We'll get back to you soon.");
    setForm({ name: "", email: "", number: "", message: "" });
  };

  return (
    <section id="contact" className="bg-cream-50">
      <SectionBanner heading={contact.heading} font={contact.headingFont} />

      <div className="mx-auto px-6 sm:px-20 py-10 sm:py-14 grid md:grid-cols-2 gap-8">
        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#133125] rounded-[44px] p-6 sm:p-8 flex flex-col gap-4"
        >
          <h3 className="font-namdhinggo text-white text-3xl sm:text-5xl tracking-wide text-center mb-2">
            YOUR FEEDBACK<br/> MATTERS!
          </h3>

          {[
            { name: "name", label: "Your Name" },
            { name: "email", label: "Your Email", type: "email" },
            { name: "number", label: "Number", type: "tel" },
            { name: "message", label: "Message" },
          ].map((field) => (
            <label key={field.name} className="flex items-center gap-3">
              <span className="font-mona text-white text-base sm:text-2xl whitespace-nowrap uppercase tracking-wide w-16 sm:w-40 shrink-0">
                {field.label}
              </span>
              <input
                type={field.type || "text"}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                className="flex-1 bg-[#D9D9D9] rounded px-3 py-2 text-sm text-neutral-800 outline-none focus:ring-2 focus:ring-gold-500"
              />
            </label>
          ))}

          <button
            type="submit"
            className="self-center mt-2 bg-[#A77631] hover:bg-gold-700 text-white font-inter font-semibold text-3xl rounded-lg tracking-wide px-6 py-2 uppercase transition-colors"
          >
            {contact.submit}
          </button>
        </form>

        {/* Phone / mail cards */}
        <div className="flex flex-col gap-8 text-white self-center text-center">
          <div className="bg-[#133125] rounded-[28px] px-4 py-5 flex items-center gap-8">
            <img src={phone} alt="Phone" className="w-20" />
            <div className="flex-1 text-center">
              <p className="font-namdhinggo text-5xl uppercase tracking-wide">
                {contact.phone.label}
              </p>
              <p className="font-montserrat-alt text-5xl mt-1">
                {contact.phone.value}
              </p>
            </div>
          </div>

          <div className="bg-[#133125] rounded-[28px] px-6 py-5 flex items-center gap-8">
            <img src={mail} alt="Mail" className="w-20" />
            <div className="flex-1 text-center">
              <p className="font-namdhinggo text-5xl uppercase tracking-wide">
                {contact.mail.label}
              </p>
              <p className="font-montserrat-alt text-4xl mt-1 break-all">
                {contact.mail.value}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
