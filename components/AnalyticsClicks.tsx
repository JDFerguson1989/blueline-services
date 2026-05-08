"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

function trackEvent(eventName: string, params: Record<string, string>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}

function getCtaLocation(element: HTMLElement): string {
  let el: HTMLElement | null = element;
  while (el) {
    if (el.tagName === "SECTION" && el.id) return el.id;
    if (el.closest("nav")) return "navbar";
    if (el.closest("header")) return "header";
    if (el.closest("footer")) return "footer";
    const closestId = el.closest("[id]");
    if (closestId && closestId.id) return closestId.id;
    el = el.parentElement;
  }
  return "unknown";
}

export default function AnalyticsClicks() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement;
      const link = target.closest("a") as HTMLAnchorElement | null;
      if (!link) return;

      const href = link.href || "";
      const pagePath = window.location.pathname;
      const pageTitle = document.title;
      const linkUrl = href;

      if (href.startsWith("tel:")) {
        trackEvent("phone_call_click", {
          page_path: pagePath,
          page_title: pageTitle,
          link_url: linkUrl,
          cta_location: getCtaLocation(link),
        });
      } else if (href.startsWith("sms:")) {
        trackEvent("sms_click", {
          page_path: pagePath,
          page_title: pageTitle,
          link_url: linkUrl,
          cta_location: getCtaLocation(link),
        });
      } else if (href.includes("facebook.com")) {
        trackEvent("facebook_click", {
          page_path: pagePath,
          page_title: pageTitle,
          link_url: linkUrl,
          cta_location: getCtaLocation(link),
        });
      }
    }

    function handleButtonClick(event: MouseEvent) {
      const target = event.target as HTMLElement;
      const button = target.closest("button") as HTMLButtonElement | null;
      const link = target.closest("a") as HTMLAnchorElement | null;

      const ctaElement = button || link;
      if (!ctaElement) return;

      const text = (ctaElement.textContent || "").toLowerCase();
      const pagePath = window.location.pathname;
      const pageTitle = document.title;

      if (
        text.includes("quote") ||
        text.includes("free quote") ||
        text.includes("get quote") ||
        text.includes("request quote") ||
        text.includes("estimate") ||
        ctaElement.getAttribute("data-cta") === "quote"
      ) {
        trackEvent("quote_button_click", {
          page_path: pagePath,
          page_title: pageTitle,
          link_url: window.location.href,
          cta_location: getCtaLocation(ctaElement),
        });
      }
    }

    document.addEventListener("click", handleClick);
    document.addEventListener("click", handleButtonClick);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("click", handleButtonClick);
    };
  }, []);

  return null;
}
