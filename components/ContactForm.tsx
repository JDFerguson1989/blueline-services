"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const SERVICE_OPTIONS = [
  "Pressure Washing",
  "Soft Washing",
  "House Washing",
  "Roof Cleaning",
  "Driveway / Concrete Cleaning",
  "Deck / Fence Cleaning",
  "Dock / Pier Cleaning",
  "Gutter Cleaning",
  "Trash Can Cleaning",
  "Not Sure Yet",
];

const CITY_OPTIONS = [
  "Sargent",
  "Lake Jackson",
  "Freeport",
  "Bay City",
  "Sweeny",
  "Brazoria",
  "Cedar Lake",
  "Cedar Lane",
  "Other Nearby Area",
];

function trackEvent(eventName: string, params: Record<string, string>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xykondqk");
  const cityRef = useRef("");
  const serviceRef = useRef("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const fd = new FormData(form);
    cityRef.current = (fd.get("city") as string) || "";
    serviceRef.current = (fd.get("service") as string) || "";
    handleSubmit(e);
  };

  useEffect(() => {
    if (state.succeeded) {
      trackEvent("contact_form_submit", {
        page_path: typeof window !== "undefined" ? window.location.pathname : "",
        page_title: typeof window !== "undefined" ? document.title : "",
        form_location: "quote",
        city_selected: cityRef.current,
        service_selected: serviceRef.current,
      });
    }
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <div className="bg-[#0a1c38] border border-blue-600/30 rounded-xl p-6 text-center">
        <p className="text-white font-bold text-lg mb-2">
          Thanks &mdash; your quote request was sent. We&rsquo;ll follow up as soon as possible.
        </p>
        <p className="text-blue-400 text-sm">
          For fastest response, call or text <a href="tel:8325578758" className="underline hover:text-white transition-colors">832-557-8758</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="quote-name" className="block text-gray-300 text-xs font-bold uppercase tracking-widest mb-1">
            Name <span className="text-blue-400">*</span>
          </label>
          <input
            id="quote-name"
            type="text"
            name="name"
            required
            className="w-full bg-[#0a1c38] border border-blue-900/40 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-500"
            placeholder="Your name"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="quote-phone" className="block text-gray-300 text-xs font-bold uppercase tracking-widest mb-1">
            Phone <span className="text-blue-400">*</span>
          </label>
          <input
            id="quote-phone"
            type="tel"
            name="phone"
            required
            className="w-full bg-[#0a1c38] border border-blue-900/40 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-500"
            placeholder="832-555-0000"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>
      </div>

      <div>
        <label htmlFor="quote-email" className="block text-gray-300 text-xs font-bold uppercase tracking-widest mb-1">
          Email
        </label>
        <input
          id="quote-email"
          type="email"
          name="email"
          className="w-full bg-[#0a1c38] border border-blue-900/40 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-500"
          placeholder="you@example.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="quote-city" className="block text-gray-300 text-xs font-bold uppercase tracking-widest mb-1">
            City / Area <span className="text-blue-400">*</span>
          </label>
          <select
            id="quote-city"
            name="city"
            required
            className="w-full bg-[#0a1c38] border border-blue-900/40 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none"
          >
            <option value="">Select your area</option>
            {CITY_OPTIONS.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          <ValidationError prefix="City" field="city" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="quote-service" className="block text-gray-300 text-xs font-bold uppercase tracking-widest mb-1">
            Service Needed <span className="text-blue-400">*</span>
          </label>
          <select
            id="quote-service"
            name="service"
            required
            className="w-full bg-[#0a1c38] border border-blue-900/40 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none"
          >
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((service) => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
          <ValidationError prefix="Service" field="service" errors={state.errors} />
        </div>
      </div>

      <div>
        <label htmlFor="quote-message" className="block text-gray-300 text-xs font-bold uppercase tracking-widest mb-1">
          Message <span className="text-blue-400">*</span>
        </label>
        <textarea
          id="quote-message"
          name="message"
          required
          rows={3}
          className="w-full bg-[#0a1c38] border border-blue-900/40 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none placeholder-gray-500"
          placeholder="Tell us about your project..."
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-xl shadow-blue-900/50 text-base tracking-wide"
      >
        {state.submitting ? "Sending..." : "Request Free Quote"}
      </button>

      <p className="text-gray-400 text-xs text-center">
        For fastest response, call or text <a href="tel:8325578758" className="text-blue-400 font-bold hover:underline">832-557-8758</a>.
      </p>
    </form>
  );
}
