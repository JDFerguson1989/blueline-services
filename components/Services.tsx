const SERVICES = [
  {
    id: 'house-washing',
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <path d="M32 8L8 28v28h48V28L32 8z" stroke="#60A5FA" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(21,101,192,0.15)" />
        <path d="M24 56V38h16v18" stroke="#60A5FA" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M14 36c0-10 18-10 18-20 0 10 18 10 18 20" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="44" cy="20" r="3" fill="#60A5FA" />
        <path d="M44 23v6M41 26h6" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'HOUSE WASHING',
    desc: 'Safely remove dirt, algae, and buildup from your siding.',
  },
  {
    id: 'driveway-cleaning',
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <rect x="12" y="16" width="40" height="32" rx="2" stroke="#60A5FA" strokeWidth="2.5" fill="rgba(21,101,192,0.15)" />
        <line x1="32" y1="16" x2="32" y2="48" stroke="#60A5FA" strokeWidth="2" strokeDasharray="4 3" />
        <line x1="12" y1="32" x2="52" y2="32" stroke="#93C5FD" strokeWidth="1.5" />
        <circle cx="22" cy="52" r="4" stroke="#60A5FA" strokeWidth="2" />
        <circle cx="42" cy="52" r="4" stroke="#60A5FA" strokeWidth="2" />
        <path d="M26 52h12" stroke="#60A5FA" strokeWidth="2" />
        <path d="M18 52H8M46 52h10" stroke="#60A5FA" strokeWidth="2" />
      </svg>
    ),
    title: 'DRIVEWAY CLEANING',
    desc: 'Restore driveways by removing oil stains, dirt, and grime.',
  },
  {
    id: 'roof-cleaning',
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <path d="M8 30L32 8l24 22" stroke="#60A5FA" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(21,101,192,0.15)" />
        <path d="M14 30v22h36V30" stroke="#60A5FA" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M20 24c4-8 20-8 24 0" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M26 56V40h12v16" stroke="#60A5FA" strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
    ),
    title: 'ROOF CLEANING (SOFT WASH)',
    desc: 'Low-pressure cleaning that removes algae and extends roof life.',
  },
  {
    id: 'gutter-cleaning',
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <rect x="8" y="16" width="48" height="10" rx="2" stroke="#60A5FA" strokeWidth="2.5" fill="rgba(21,101,192,0.15)" />
        <path d="M12 26v6M52 26v6" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M32 26v14" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M20 36c0 6 8 8 12 8s12-2 12-8" stroke="#93C5FD" strokeWidth="1.5" />
        <path d="M24 44l-4 8M40 44l4 8" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'GUTTER CLEANING',
    desc: 'Prevent water damage by keeping your gutters clear and flowing.',
  },
  {
    id: 'deck-fence',
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <rect x="8" y="20" width="8" height="36" rx="1" stroke="#60A5FA" strokeWidth="2.5" fill="rgba(21,101,192,0.15)" />
        <rect x="20" y="20" width="8" height="36" rx="1" stroke="#60A5FA" strokeWidth="2.5" fill="rgba(21,101,192,0.15)" />
        <rect x="32" y="20" width="8" height="36" rx="1" stroke="#60A5FA" strokeWidth="2.5" fill="rgba(21,101,192,0.15)" />
        <rect x="44" y="20" width="8" height="36" rx="1" stroke="#60A5FA" strokeWidth="2.5" fill="rgba(21,101,192,0.15)" />
        <line x1="6" y1="30" x2="54" y2="30" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="6" y1="40" x2="54" y2="40" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'DECK & FENCE CLEANING',
    desc: 'Bring wood and surfaces back to life without damage.',
  },
  {
    id: 'trash-bin',
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <rect x="16" y="20" width="32" height="36" rx="3" stroke="#60A5FA" strokeWidth="2.5" fill="rgba(21,101,192,0.15)" />
        <path d="M10 20h44" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 20v-4a4 4 0 018 0v4" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="24" y1="30" x2="24" y2="46" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="32" y1="30" x2="32" y2="46" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="40" y1="30" x2="40" y2="46" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'TRASH BIN CLEANING',
    desc: 'Eliminate odor and bacteria with deep, sanitizing cleaning.',
  },
  {
    id: 'commercial-cleaning',
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <rect x="10" y="18" width="44" height="38" rx="2" stroke="#60A5FA" strokeWidth="2.5" fill="rgba(21,101,192,0.15)" />
        <rect x="18" y="10" width="28" height="10" rx="1" stroke="#60A5FA" strokeWidth="2" />
        <path d="M24 30h16M24 38h16M24 46h8" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="28" y="42" width="8" height="14" rx="1" stroke="#60A5FA" strokeWidth="1.5" />
      </svg>
    ),
    title: 'COMMERCIAL CLEANING',
    desc: 'Professional cleaning for storefronts, parking lots, and commercial areas.',
  },
  {
    id: 'full-exterior',
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <path d="M32 6L6 26v32h52V26L32 6z" stroke="#60A5FA" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(21,101,192,0.15)" />
        <rect x="24" y="40" width="16" height="18" rx="1" stroke="#60A5FA" strokeWidth="2" />
        <rect x="14" y="34" width="10" height="12" rx="1" stroke="#93C5FD" strokeWidth="1.5" />
        <rect x="40" y="34" width="10" height="12" rx="1" stroke="#93C5FD" strokeWidth="1.5" />
        <path d="M20 20c4-6 20-6 24 0" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'FULL EXTERIOR CLEANING',
    desc: 'Complete exterior refresh for maximum curb appeal.',
  },
  {
    id: 'patio-concrete',
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <rect x="8" y="28" width="48" height="28" rx="2" stroke="#60A5FA" strokeWidth="2.5" fill="rgba(21,101,192,0.15)" />
        <path d="M8 36h48M8 44h48M24 28v28M40 28v28" stroke="#93C5FD" strokeWidth="1.2" />
        <path d="M16 20c0-6 32-6 32 0" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M22 20v8M42 20v8" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'PATIO & CONCRETE CLEANING',
    desc: 'Remove stains, mold, and buildup from patios, walkways, and more.',
  },
  {
    id: 'boat-rv',
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <path d="M8 40l6-16h36l6 16H8z" stroke="#60A5FA" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(21,101,192,0.15)" />
        <path d="M8 40c0 6 48 6 48 0" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M32 24V10M32 10l-8 6M32 10l8 6" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="18" cy="46" r="4" stroke="#60A5FA" strokeWidth="2" />
        <circle cx="46" cy="46" r="4" stroke="#60A5FA" strokeWidth="2" />
      </svg>
    ),
    title: 'BOAT & RV CLEANING',
    desc: 'Keep your investments looking their best all year long.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#040d1a] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center gap-4 justify-center mb-4">
            <div className="flex-1 h-px bg-blue-600/40 max-w-[180px]" />
            <h2 className="section-title text-white font-display">OUR SERVICES</h2>
            <div className="flex-1 h-px bg-blue-600/40 max-w-[180px]" />
          </div>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            From residential to commercial — we handle every surface with precision and care.
          </p>
        </div>

        {/* Services Grid — top row 5, bottom row 5 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-4">
          {SERVICES.slice(0, 5).map((service) => (
            <div key={service.id} id={`service-${service.id}`} className="card-service flex flex-col items-center text-center gap-3">
              <div className="flex items-center justify-center">{service.icon}</div>
              <h3 className="font-display font-bold text-white text-sm uppercase tracking-wide leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {SERVICES.slice(5, 10).map((service) => (
            <div key={service.id} id={`service-${service.id}`} className="card-service flex flex-col items-center text-center gap-3">
              <div className="flex items-center justify-center">{service.icon}</div>
              <h3 className="font-display font-bold text-white text-sm uppercase tracking-wide leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
