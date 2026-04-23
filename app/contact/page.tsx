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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          message: form.message,
          subject: "Contact Form Submission",
          senderType: "General",
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ fullName: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-[#ddd6fe] text-[#1e1b2e] text-sm placeholder:text-[#6b5f8e] bg-white focus:outline-none focus:ring-2 focus:ring-[#7c3aed] focus:border-transparent transition-[box-shadow,border-color]";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="fullName" className="sr-only">Full Name</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
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
          required
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
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          className={inputClass}
          placeholder="Message"
          style={{ resize: "vertical", minHeight: 144 }}
        />
      </div>

      {status === "success" && (
        <div
          className="rounded-xl px-4 py-3 text-sm font-medium text-center"
          style={{ background: "#f0fdf4", color: "#166534" }}
          role="status"
        >
          Message sent! We&apos;ll get back to you within 2–3 business days.
        </div>
      )}
      {status === "error" && (
        <div
          className="rounded-xl px-4 py-3 text-sm font-medium text-center"
          style={{ background: "#fef2f2", color: "#991b1b" }}
          role="alert"
        >
          Something went wrong. Email{" "}
          <a href="mailto:tumortactics@gmail.com" className="underline">
            tumortactics@gmail.com
          </a>{" "}
          directly.
        </div>
      )}

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
          disabled={status === "loading"}
          className="px-14 py-3.5 font-bold text-sm rounded-xl text-white transition-[opacity,transform] hover:opacity-90 active:translate-y-px disabled:opacity-60"
          style={{ background: "#7c3aed" }}
        >
          {status === "loading" ? "Sending…" : "Submit"}
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
            <div className="text-center mb-12">
              <h1
                className="text-5xl sm:text-6xl font-black text-[#1e1b2e] mb-6 leading-none"
                style={{ letterSpacing: "-0.03em" }}
              >
                Contact Us
              </h1>
              <p className="text-sm text-[#6b5f8e] leading-relaxed mb-3 max-w-md mx-auto">
                Reach out to us and let us know if there is anything we can do for you.
              </p>
              <p className="text-sm text-[#6b5f8e] leading-relaxed max-w-md mx-auto">
                If you are an educator, reach out here to receive a quotation for a bulk purchase
                order or to book a guided activity session with us at your school*.
              </p>
              <p className="text-xs text-[#6b5f8e] mt-4">
                *Guided activities are currently only available in the San Diego area.
              </p>
            </div>

            <ContactForm />

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
