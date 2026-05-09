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
    <footer className='bg-[#040d1a] border-t border-blue-900/30'>
      <div className='py-10'>
        <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6'>
          <div className='flex items-center gap-3'>
            <div className='w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-900/40'>
              <svg viewBox='0 0 48 48' className='w-8 h-8 fill-white'>
                <polygon points='24,4 27,18 40,18 30,26 34,40 24,32 14,40 18,26 8,18 21,18' />
              </svg>
            </div>
            <div>
              <div className='flex items-center gap-1'>
                <span className='text-xl font-bold font-display text-blue-400 tracking-wide'>BLUE</span>
                <span className='text-xl font-bold font-display text-white tracking-wide'>LINE</span>
              </div>
              <div className='text-[9px] text-gray-400 tracking-widest uppercase'>Professional Soft Wash</div>
            </div>
          </div>

          <nav className='flex flex-wrap items-center justify-center gap-4 md:gap-6'>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='text-xs font-semibold text-gray-400 hover:text-blue-400 transition-colors tracking-widest uppercase'
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className='py-4 border-t border-blue-900/20'>
        <div className='max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3'>
          <p className='text-gray-500 text-xs'>
            &copy; 2024 BlueLine Services. All Rights Reserved.
          </p>
          <a
            href='https://www.facebook.com/profile.php?id=61589064537386'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 bg-[#0a1c38] border border-blue-500/40 text-blue-300 hover:bg-blue-600 hover:text-white hover:border-blue-500 font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-900/30 text-sm tracking-wide'
          >
            <svg className='w-4 h-4 fill-current' viewBox='0 0 320 512' aria-hidden='true'>
              <path d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z' />
            </svg>
            Follow BlueLine on Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
