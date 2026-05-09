"use client";

export default function MobileStickyCTA() {
  return (
    <nav
      aria-label="Mobile quick actions"
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
    >
      <div className="flex items-center justify-between bg-[#071428] border-t border-blue-900/40 px-2 py-2 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
        <a
          href="tel:8325578758"
          aria-label="Call BlueLine Services"
          className="flex flex-col items-center justify-center flex-1 gap-0.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg py-2 transition-all duration-200 active:scale-95"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-wider">Call Now</span>
        </a>

        <a
          href="sms:8325578758"
          aria-label="Text BlueLine Services for a free quote"
          className="flex flex-col items-center justify-center flex-1 gap-0.5 bg-[#0a1c38] border border-blue-600/40 hover:bg-blue-900/30 text-white rounded-lg py-2 mx-2 transition-all duration-200 active:scale-95"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.013 8.013 0 01-3.84-1.02l-2.88.72.72-2.88A8.013 8.013 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-wider">Text Quote</span>
        </a>

        <a
          href="/#quote"
          aria-label="Request a free quote"
          className="flex flex-col items-center justify-center flex-1 gap-0.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg py-2 transition-all duration-200 active:scale-95"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-wider">Free Quote</span>
        </a>
      </div>
    </nav>
  );
}
