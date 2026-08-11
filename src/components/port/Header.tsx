'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Globe, Anchor } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = {
  fr: [
    { label: 'Accueil', href: '#hero' },
    { label: 'Chiffres clés', href: '#chiffres' },
    { label: 'Acteurs', href: '#acteurs' },
    { label: 'Services', href: '#services' },
    { label: 'Trafic en direct', href: '#trafic' },
    { label: 'Terminaux', href: '#terminaux' },
    { label: 'Actualités', href: '#actualites' },
    { label: 'Adhésion', href: '#adhesion' },
  ],
  en: [
    { label: 'Home', href: '#hero' },
    { label: 'Key Figures', href: '#chiffres' },
    { label: 'Stakeholders', href: '#acteurs' },
    { label: 'Services', href: '#services' },
    { label: 'Live Traffic', href: '#trafic' },
    { label: 'Terminals', href: '#terminaux' },
    { label: 'News', href: '#actualites' },
    { label: 'Membership', href: '#adhesion' },
  ],
};

export default function Header({
  lang,
  onToggleLang,
}: {
  lang: 'fr' | 'en';
  onToggleLang: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = navLinks[lang];

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNav('#hero');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-ocean rounded-lg flex items-center justify-center group-hover:bg-ocean-light transition-colors">
              <Anchor className="w-6 h-6 text-cream" />
            </div>
            <div className="hidden sm:block">
              <p className={`text-sm font-bold tracking-wide uppercase leading-tight ${scrolled ? 'text-cream' : 'text-white'}`}>
                {lang === 'fr' ? 'Port Autonome' : 'Autonomous Port'}
              </p>
              <p className={`text-xs tracking-widest uppercase ${scrolled ? 'text-cream/70' : 'text-white/70'}`}>
                San-Pédro
              </p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-colors hover:bg-white/10 ${
                  scrolled ? 'text-cream/90 hover:text-cream' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleLang}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-colors ${
                scrolled
                  ? 'border-cream/30 text-cream hover:bg-cream/10'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>

            <Button
              onClick={() => handleNav('#adhesion')}
              className="hidden sm:flex bg-amber hover:bg-amber-light text-white text-xs font-bold uppercase tracking-wider rounded-full px-5"
            >
              {lang === 'fr' ? 'Espace membre' : 'Member area'}
            </Button>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`xl:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-cream hover:bg-white/10' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="xl:hidden bg-navy/98 backdrop-blur-lg border-t border-white/10">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left px-4 py-3 text-sm font-semibold text-cream/90 hover:text-cream hover:bg-white/5 rounded-lg transition-colors uppercase tracking-wider"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => {
                setMobileOpen(false);
                handleNav('#adhesion');
              }}
              className="mt-2 bg-amber hover:bg-amber-light text-white font-bold uppercase tracking-wider rounded-lg"
            >
              {lang === 'fr' ? 'Espace membre' : 'Member area'}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
