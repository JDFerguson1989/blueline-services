import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="hero-bg relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Background image layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Professional pressure washing"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040d1a] via-[#071428]/90 to-[#040d1a]/60" />
      </div>

      {/* Water spray effect overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-full z-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 w-full mx-auto flex flex-col items-center flex-1 pb-10">
        
        {/* Top Banner - Decal visual */}
        <div className="w-full bg-[#040d1a]/50 border-b border-blue-900/50 backdrop-blur-sm flex justify-center">
          <div className="relative w-full flex justify-center z-10 drop-shadow-[0_15px_40px_rgba(4,13,26,0.9)] hover:scale-[1.01] transition-transform duration-700">
            <div className="absolute inset-0 bg-blue-500/10 blur-[80px] z-0" />
            <Image
              src="/images/blueline-decal.png"
              alt="BlueLine Services pressure washing decal with Texas design and phone number"
              width={1920}
              height={500}
              className="w-full h-auto object-cover relative z-10"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center text-center gap-6 max-w-5xl px-4 mt-12 md:mt-16">
          <div className="inline-flex items-center gap-2 bg-blue-900/30 border border-blue-600/40 text-blue-300 text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.2)]">
            SOUTHEAST TEXAS PRESSURE WASHING
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-none uppercase tracking-tight">
            <span className="text-white">PRESSURE WASHING & </span>
            <span className="text-blue-400" style={{ textShadow: '0 0 40px rgba(33,150,243,0.5)' }}>
              SOFT WASHING
            </span>
            <br />
            <span className="text-white">BUILT TO RESTORE </span>
            <span className="text-blue-400" style={{ textShadow: '0 0 30px rgba(0,176,255,0.6)' }}>CURB APPEAL</span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg lg:text-xl font-medium max-w-3xl leading-relaxed mt-2">
            Professional exterior cleaning for homes and businesses — from siding, roofs, and gutters to driveways, patios, fences, storefronts, and more.
          </p>

          {/* Trust line */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-white font-bold text-xs md:text-sm tracking-widest uppercase mt-4">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              FAMILY-OWNED & OPERATED
            </span>
            <span className="hidden md:inline text-blue-600">•</span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
              LICENSED WATER SYSTEMS OPERATOR
            </span>
            <span className="hidden md:inline text-blue-600">•</span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              FREE QUOTES AVAILABLE
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a
              href="tel:8325578758"
              id="hero-call-btn"
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 shadow-xl shadow-blue-900/50 text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <div className="leading-none text-left">
                <div className="text-[10px] tracking-widest uppercase opacity-80 mb-1">CALL NOW</div>
                <div className="font-bold tracking-wider text-xl">832-557-8758</div>
              </div>
            </a>

            <a
              href="sms:8325578758"
              id="hero-quote-btn"
              className="flex items-center gap-3 bg-transparent border-2 border-blue-400 hover:bg-blue-400/10 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 text-lg"
            >
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <div className="leading-none text-left">
                <div className="text-[10px] tracking-widest uppercase opacity-80 mb-1">TEXT US FOR A</div>
                <div className="font-bold tracking-wider text-xl">FREE QUOTE</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Service Strip */}
      <div className="relative z-10 bg-[#040d1a]/80 backdrop-blur-md border-t border-b border-blue-900/40 py-5 mt-auto shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <div className="w-full px-4 overflow-hidden">
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-4 text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest text-center leading-none">
            {['House Washing', 'Roof Soft Washing', 'Pressure Washing', 'Soft Washing', 'Driveway Cleaning', 'Concrete Cleaning', 'Sidewalk Cleaning', 'Patio Cleaning', 'Pool Deck Cleaning', 'Fence Cleaning', 'Deck Cleaning', 'Gutter Cleaning', 'Gutter Brightening', 'Trash Bin Cleaning', 'Storefront Cleaning', 'Parking Lot Cleaning', 'Dumpster Pad Cleaning', 'Commercial Pressure Washing', 'Boat Dock Cleaning', 'Boathouse Cleaning', 'Exterior Window Rinsing', 'Rust Stain Removal', 'Oil Stain Treatment', 'Mildew & Algae Removal', 'Pre-Sale Property Cleaning', 'Post-Construction Cleanup', 'Sewer Unclogging', 'Sewer Repair', 'Sewer Camera Inspections', 'Free Quotes'].map((service, index, arr) => (
              <span key={service} className="inline-flex items-center gap-3">
                <span className="text-gray-300 hover:text-white transition-colors cursor-default whitespace-nowrap">{service}</span>
                {index < arr.length - 1 && <span className="text-blue-600/60">•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
