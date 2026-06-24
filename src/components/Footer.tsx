import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-primary text-white border-t border-blue-700 overflow-hidden">
      {/* Subtle animated wave line overlay */}
      <div className="absolute top-0 left-0 w-[200%] h-[2px] opacity-25 pointer-events-none z-10">
        <div className="w-full h-full bg-gradient-to-r from-blue-300 via-white to-blue-300 animate-wave" />
      </div>
      {/* Top half */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 text-left">
        {/* Brand Block */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <Link href="/home" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white text-primary rounded-lg flex items-center justify-center font-bold text-base shadow-sm">
              P
            </div>
            <span className="font-heading font-extrabold text-lg tracking-tight text-white">
              PROPA<span className="text-blue-200 font-bold">SURE</span>
            </span>
          </Link>
          <p className="text-blue-100 font-heading font-bold text-xs tracking-wider uppercase">
            Property Decisions Assured.
          </p>
          <p className="text-xs text-blue-100/90 leading-relaxed max-w-sm">
            India’s First AI-Powered Property Advisory & Execution Platform. We combine deep learning OCR technology and real estate expertise to protect your family's life savings.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-105" aria-label="LinkedIn">
              <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-105" aria-label="Twitter">
              <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-105" aria-label="Facebook">
              <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
            </a>
          </div>
        </div>

        {/* Links Col 1: Solutions */}
        <div>
          <h4 className="font-heading font-bold text-sm tracking-wide border-b border-blue-400/30 pb-2 mb-4 text-white">Solutions</h4>
          <ul className="flex flex-col gap-2.5 text-xs text-blue-100">
            <li><Link href="/solutions?tab=buy-property" className="hover:text-white transition-colors">Buy Property</Link></li>
            <li><Link href="/solutions?tab=sell-property" className="hover:text-white transition-colors">Sell Property</Link></li>
            <li><Link href="/solutions?tab=rent-property" className="hover:text-white transition-colors">Rent & Lease</Link></li>
            <li><Link href="/solutions?tab=landlords" className="hover:text-white transition-colors">Landlord Services</Link></li>
          </ul>
        </div>

        {/* Links Col 2: Partners */}
        <div>
          <h4 className="font-heading font-bold text-sm tracking-wide border-b border-blue-400/30 pb-2 mb-4 text-white">Partners</h4>
          <ul className="flex flex-col gap-2.5 text-xs text-blue-100">
            <li><Link href="/solutions?tab=builders" className="hover:text-white transition-colors">Builders & Developers</Link></li>
            <li><Link href="/solutions?tab=agents" className="hover:text-white transition-colors">Real Estate Agents</Link></li>
          </ul>
        </div>

        {/* Links Col 3: AI Core */}
        <div>
          <h4 className="font-heading font-bold text-sm tracking-wide border-b border-blue-400/30 pb-2 mb-4 text-white">AI Services</h4>
          <ul className="flex flex-col gap-2.5 text-xs text-blue-100">
            <li><Link href="/ai-services" className="hover:text-white transition-colors">AI Advisor</Link></li>
            <li><Link href="/ai-services" className="hover:text-white transition-colors">AI Property Score</Link></li>
            <li><Link href="/ai-services" className="hover:text-white transition-colors">AI Legal Risk Engine</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom half */}
      <div className="border-t border-blue-700 py-6 text-xs text-blue-200 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 Propasure Technologies Private Limited. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing Plans</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
