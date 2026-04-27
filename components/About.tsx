import Image from 'next/image';

const CHECKLIST = [
  'Licensed & Experienced',
  'Built on Discipline',
  'Top-of-the-Line Equipment',
  'Soft Wash Specialists',
  'Reliable & On Time',
  'Detail Oriented',
  'We Treat Your Property Like Our Own',
];

const SERVICE_AREAS = [
  'SARGENT',
  'LAKE JACKSON',
  'BAY CITY',
  'SWEENY',
  'CEDAR LAKE',
  'CEDAR LANE',
  'BRAZORIA',
];

export default function About() {
  return (
    <section id="about" className="bg-[#071428] py-20 border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10">
          {/* WHY CHOOSE BLUELINE */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase mb-4">
              WHY CHOOSE <span className="text-blue-400">BLUELINE?</span>
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              BlueLine Services is built on discipline, accountability, and doing the job right the first time.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              With years of experience as a licensed water systems operator, every job is handled with precision
              and responsibility — not guesswork.
            </p>

            {/* Checklist */}
            <ul className="flex flex-col gap-2.5 mb-6">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-sm flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-white font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {/* Texas flag / brand accent */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0a1c38] to-[#040d1a] p-5 border border-blue-900/30 flex items-center gap-4">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-900/50">
                <svg viewBox="0 0 48 48" className="w-8 h-8 fill-white">
                  <polygon points="24,4 27,18 40,18 30,26 34,40 24,32 14,40 18,26 8,18 21,18" />
                </svg>
              </div>
              <div>
                <div className="font-display text-lg font-bold text-white leading-none mb-1">BLUELINE SERVICES</div>
                <div className="text-blue-400 text-[10px] tracking-widest uppercase font-semibold">Professional Soft Wash • Texas</div>
              </div>
              {/* Water splash accent */}
              <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-blue-500/5 rounded-full blur-2xl" />
            </div>
          </div>

          {/* PROUDLY SERVING */}
          <div id="areas" className="flex flex-col justify-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase mb-1">
              PROUDLY SERVING
            </h2>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-blue-400 uppercase mb-6">
              YOUR COMMUNITY
            </h3>

            {/* Service Areas and Map */}
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(220px,auto)_minmax(360px,520px)] gap-8 items-center mb-8 mt-4">
              {/* Service area list */}
              <div>
                <ul className="flex flex-col gap-2 min-w-[220px] whitespace-nowrap">
                  {SERVICE_AREAS.map((area) => (
                    <li key={area} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      <span className="font-display font-bold text-white text-[15px] tracking-wide">{area}</span>
                    </li>
                  ))}
                  <li className="text-blue-400 font-bold text-xs italic mt-1">AND SURROUNDING AREAS!</li>
                </ul>
              </div>

              {/* Texas map Image */}
              <div className="w-full flex justify-center lg:justify-end mt-4 lg:mt-0">
                <Image
                  src="/images/texas-service-map.png"
                  alt="BlueLine Services Texas service area graphic"
                  width={520}
                  height={520}
                  className="w-full max-w-[360px] lg:max-w-[520px] h-auto object-contain drop-shadow-[0_10px_30px_rgba(33,150,243,0.3)] hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* CTA inside about */}
            <a
              href="tel:8325578758"
              id="about-call-btn"
              className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 hover:scale-105 shadow-xl shadow-blue-900/40 text-lg w-full"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              CALL OR TEXT: 832-557-8758
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
