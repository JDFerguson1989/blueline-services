export default function CTA() {
  return (
    <section id="contact" className="bg-[#071428] border-t border-blue-900/30 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left — Guarantee */}
          <div className="flex items-start gap-5">
            {/* Badge */}
            <div className="flex-shrink-0 w-24 h-24 relative">
              <div className="absolute inset-0 rounded-full border-4 border-blue-600 flex items-center justify-center bg-[#0a1c38] shadow-lg shadow-blue-900/40">
                <div className="text-center">
                  <div className="font-display font-bold text-blue-400 text-xl leading-none">100%</div>
                  <div className="text-white text-[9px] font-bold leading-tight uppercase tracking-wider mt-0.5">Satisfaction</div>
                  <div className="text-white text-[9px] font-bold leading-tight uppercase tracking-wider">Guarantee</div>
                </div>
              </div>
              {/* Stars ring */}
              <div className="absolute inset-0 rounded-full border border-blue-400/30 scale-110" />
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-white uppercase mb-1">
                100% SATISFACTION <span className="text-blue-400">GUARANTEE</span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                If you&apos;re not completely satisfied with the results, we&apos;ll make it right — no questions asked.
              </p>
              <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                We stand behind every job because your property deserves it.
              </p>
            </div>
          </div>

          {/* Right — Final CTA */}
          <div className="text-center md:text-left">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase leading-tight mb-2">
              GET IT DONE RIGHT THE FIRST TIME
            </h2>
            <p className="text-blue-400 font-bold text-base uppercase tracking-wide mb-5">
              CALL NOW FOR A FAST, FREE ESTIMATE!
            </p>

            <a
              href="tel:8325578758"
              id="cta-call-btn"
              className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-xl shadow-blue-900/50 text-lg w-full md:w-auto"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="font-display tracking-widest text-xl">832-557-8758</span>
            </a>

            <p className="text-gray-400 text-[11px] mt-4 font-medium uppercase tracking-widest">
              FAMILY-OWNED. RELIABLE. BUILT TO DELIVER{' '}
              <span className="text-blue-400 font-bold italic">REAL RESULTS.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
