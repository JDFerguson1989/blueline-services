const NAV_LINKS = [
  { href: '#home', label: 'HOME' },
  { href: '#services', label: 'SERVICES' },
  { href: '#about', label: 'ABOUT US' },
  { href: '#areas', label: 'SERVICE AREAS' },
  { href: '#gallery', label: 'GALLERY' },
  { href: '#contact', label: 'CONTACT' },
];

export default function Footer() {
  return (
    <footer className="bg-[#040d1a] border-t border-blue-900/30">
      {/* Logo row */}
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-900/40">
              <svg viewBox="0 0 48 48" className="w-8 h-8 fill-white">
                <polygon points="24,4 27,18 40,18 30,26 34,40 24,32 14,40 18,26 8,18 21,18" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xl font-bold font-display text-blue-400 tracking-wide">BLUE</span>
                <span className="text-xl font-bold font-display text-white tracking-wide">LINE</span>
              </div>
              <div className="text-[9px] text-gray-400 tracking-widest uppercase">Professional Soft Wash</div>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold text-gray-400 hover:text-blue-400 transition-colors tracking-widest uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="py-4 border-t border-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-xs">
            © 2024 BlueLine Services. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
