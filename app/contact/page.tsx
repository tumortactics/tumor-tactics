"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface FormState {
  fullName: string;
  email: string;
  message: string;
}

function ContactForm() {
  const [form, setForm] = useState<FormState>({ fullName: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-[#b4a4f0] text-[#1e1b2e] text-sm placeholder:text-[#9585b8] bg-[#f5f3ff] cursor-not-allowed opacity-60 focus:outline-none transition-[box-shadow,border-color]";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="fullName" className="sr-only">Full Name</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          disabled
          autoComplete="name"
          value={form.fullName}
          onChange={handleChange}
          className={inputClass}
          placeholder="Full Name"
        />
      </div>

      <div>
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          disabled
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
          placeholder="Email"
        />
      </div>

      <div>
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          name="message"
          disabled
          rows={6}
          value={form.message}
          onChange={handleChange}
          className={inputClass}
          placeholder="Message"
          style={{ resize: "none", minHeight: 144 }}
        />
      </div>


      <div className="pt-3 pb-1 space-y-2 text-center">
        <p className="text-xs text-[#6b5f8e] leading-relaxed">
          You may receive marketing and promotional materials. Contact the merchant for their privacy practices.
        </p>
        <p className="text-[10px] leading-relaxed text-[#6b5f8e]">
          This form is protected by reCAPTCHA and the Google{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-[#7c3aed] transition-colors"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-[#7c3aed] transition-colors"
          >
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </div>

      <div className="flex justify-center pt-1">
        <button
          type="submit"
          disabled
          className="px-14 py-3.5 font-bold text-sm rounded-xl text-white cursor-not-allowed opacity-40"
          style={{ background: "#7c3aed" }}
          title="Form is currently unavailable"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-4rem)] bg-[#f8f5ff]">
        <section className="py-24">
          <div className="max-w-xl mx-auto px-6">

            {/* Header */}
            <div className="text-center mb-10">
              <h1
                className="text-5xl sm:text-6xl font-black text-[#1e1b2e] mb-6 leading-none"
                style={{ letterSpacing: "-0.03em" }}
              >
                Contact Us
              </h1>
              <p className="text-sm text-[#3d2f6b] leading-relaxed mb-3 max-w-md mx-auto">
                Reach out to us and let us know if there is anything we can do for you.
              </p>
              <p className="text-sm text-[#3d2f6b] leading-relaxed max-w-md mx-auto">
                If you are an educator, reach out here to receive a quotation for a bulk purchase
                order or to book a guided activity session with us at your school*.
              </p>
              <p className="text-xs text-[#3d2f6b] mt-4">
                *Guided activities are currently only available in the San Diego area.
              </p>
            </div>

            {/* Disclaimer */}
            <div
              className="rounded-xl px-5 py-4 mb-8 text-sm leading-relaxed text-center"
              style={{ background: "#fef9e7", border: "1px solid #f0c040", color: "#7a5c00" }}
              role="note"
            >
              <span className="font-bold">Note:</span> The contact form is currently not functional.
              To reach us directly, email{" "}
              <a
                href="mailto:playtumortactics@gmail.com"
                className="font-bold underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                playtumortactics@gmail.com
              </a>
              .
            </div>

            <ContactForm />

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
