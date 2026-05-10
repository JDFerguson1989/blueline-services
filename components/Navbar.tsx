'use client';

import { useState } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { href: '#home', label: 'HOME' },
  { href: '#services', label: 'SERVICES' },
  { href: '#about', label: 'ABOUT US' },
  { href: '#areas', label: 'SERVICE AREAS' },
  { href: '/gallery', label: 'GALLERY' },
  { href: '#contact', label: 'CONTACT' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#040d1a] border-b border-blue-900/30 sticky top-0 z-50 shadow-lg shadow-black/40">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="relative w-14 h-14 flex-shrink-0">
            <div className="absolute inset-0 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
              <svg viewBox="0 0 48 48" className="w-10 h-10 fill-white">
                {/* Texas star */}
                <polygon points="24,4 27,18 40,18 30,26 34,40 24,32 14,40 18,26 8,18 21,18" className="fill-white" />
              </svg>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold font-display text-blue-400 tracking-wide">BLUE</span>
              <span className="text-2xl font-bold font-display text-white tracking-wide">LINE</span>
            </div>
            <div className="text-[10px] text-blue-300 tracking-[0.2em] uppercase font-semibold border-t border-b border-blue-600/50 px-1 leading-4">
              — Services —
            </div>
            <div className="text-[9px] text-gray-400 tracking-widest uppercase">Professional Soft Wash</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-gray-300 hover:text-blue-400 transition-colors tracking-wide border-b-2 border-transparent hover:border-blue-400 pb-0.5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="tel:8325578758"
          id="navbar-call-btn"
          className="hidden lg:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 py-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-900/40"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          <div className="text-left leading-tight">
            <div className="text-[10px] tracking-widest uppercase opacity-80">CALL NOW</div>
            <div className="text-base font-bold tracking-wide">832-557-8758</div>
          </div>
        </a>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-btn"
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#071428] border-t border-blue-900/30 px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-semibold text-gray-300 hover:text-blue-400 border-b border-blue-900/20 tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:8325578758"
            className="mt-4 flex items-center justify-center gap-2 bg-blue-600 text-white font-bold px-4 py-3 rounded-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call Now: 832-557-8758
          </a>
        </div>
      )}
    </header>
  );
}
