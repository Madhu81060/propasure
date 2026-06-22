import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white border-t-4 border-accent">
      {/* Top half */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Brand Block */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white text-primary rounded-lg flex items-center justify-center font-bold text-base border-b-2 border-accent">
              P
            </div>
            <span className="font-heading font-extrabold text-lg tracking-tight text-white">
              PROPA<span className="text-secondary-light font-bold">SURE</span>
            </span>
          </Link>
          <p className="text-accent font-heading font-bold text-sm tracking-wide">
            Find. Verify. Negotiate. Own.
          </p>
          <p className="text-xs text-slate-350 leading-relaxed max-w-sm">
            India’s First AI-Powered Property Advisory & Execution Platform. We combine deep learning OCR technology and real estate expertise to protect your family's life savings.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-secondary flex items-center justify-center transition-all hover:scale-105" aria-label="LinkedIn">
              <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-secondary flex items-center justify-center transition-all hover:scale-105" aria-label="Twitter">
              <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-secondary flex items-center justify-center transition-all hover:scale-105" aria-label="Facebook">
              <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-secondary flex items-center justify-center transition-all hover:scale-105" aria-label="Instagram">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>

        {/* Links Col 1: Solutions */}
        <div>
          <h4 className="font-heading font-bold text-sm tracking-wide border-b border-white/10 pb-2 mb-4">Solutions</h4>
          <ul className="flex flex-col gap-2.5 text-xs text-slate-300">
            <li><Link href="/buy-property" className="hover:text-secondary-light transition-colors">Buy Property</Link></li>
            <li><Link href="/sell-property" className="hover:text-secondary-light transition-colors">Sell Property</Link></li>
            <li><Link href="/rent-property" className="hover:text-secondary-light transition-colors">Rent Property</Link></li>
            <li><Link href="/landlords" className="hover:text-secondary-light transition-colors">Landlord Services</Link></li>
          </ul>
        </div>

        {/* Links Col 2: Partners */}
        <div>
          <h4 className="font-heading font-bold text-sm tracking-wide border-b border-white/10 pb-2 mb-4">Partners</h4>
          <ul className="flex flex-col gap-2.5 text-xs text-slate-300">
            <li><Link href="/builders" className="hover:text-secondary-light transition-colors">Builders & Developers</Link></li>
            <li><Link href="/agents" className="hover:text-secondary-light transition-colors">Real Estate Agents</Link></li>
          </ul>
        </div>

        {/* Links Col 3: AI Core */}
        <div>
          <h4 className="font-heading font-bold text-sm tracking-wide border-b border-white/10 pb-2 mb-4">AI Services</h4>
          <ul className="flex flex-col gap-2.5 text-xs text-slate-300">
            <li><Link href="/ai-services" className="hover:text-secondary-light transition-colors">AI Advisor</Link></li>
            <li><Link href="/ai-services" className="hover:text-secondary-light transition-colors">AI Voice Agent</Link></li>
            <li><Link href="/ai-services" className="hover:text-secondary-light transition-colors">AI Property Score</Link></li>
            <li><Link href="/ai-services" className="hover:text-secondary-light transition-colors">AI Legal Risk Engine</Link></li>
            <li><Link href="/ai-services" className="hover:text-secondary-light transition-colors">AI Investment Planner</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom half */}
      <div className="border-t border-white/10 py-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 Propasure Technologies Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing Plans</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
