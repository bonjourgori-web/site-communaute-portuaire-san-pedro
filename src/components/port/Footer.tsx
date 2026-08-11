'use client';

import { Anchor, MapPin, Phone, Mail, Globe } from 'lucide-react';

export default function Footer({ lang }: { lang: 'fr' | 'en' }) {
  const content = {
    fr: {
      about: 'Le Port Autonome de San-Pédro est le deuxième port de Côte d\'Ivoire, spécialisé dans l\'export de cacao, de bois et de produits agricoles. La communauté portuaire réunit l\'ensemble des acteurs publics et privés pour une logistique fluide et fiable.',
      quickLinks: 'Liens rapides',
      contact: 'Contact',
      address: 'Zone portuaire, San-Pédro, Côte d\'Ivoire',
      phone: '+225 34 75 20 20',
      email: 'contact@pasp.ci',
      copyright: '© 2026 Port Autonome de San-Pédro — Tous droits réservés',
      links: [
        { label: 'Guichet unique', href: '#services' },
        { label: 'Trafic en direct', href: '#trafic' },
        { label: 'Documents', href: '#services' },
        { label: 'Tarifs', href: '#actualites' },
        { label: 'Emploi', href: '#' },
        { label: 'Mentions légales', href: '#' },
      ],
    },
    en: {
      about: 'The Autonomous Port of San-Pédro is Côte d\'Ivoire\'s second port, specializing in the export of cocoa, timber and agricultural products. The port community brings together all public and private stakeholders for smooth and reliable logistics.',
      quickLinks: 'Quick links',
      contact: 'Contact',
      address: 'Port area, San-Pédro, Côte d\'Ivoire',
      phone: '+225 34 75 20 20',
      email: 'contact@pasp.ci',
      copyright: '© 2026 Autonomous Port of San-Pédro — All rights reserved',
      links: [
        { label: 'Single Window', href: '#services' },
        { label: 'Live Traffic', href: '#trafic' },
        { label: 'Documents', href: '#services' },
        { label: 'Tariffs', href: '#actualites' },
        { label: 'Careers', href: '#' },
        { label: 'Legal notice', href: '#' },
      ],
    },
  };

  const c = content[lang];

  return (
    <footer className="bg-navy-dark text-cream border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-ocean rounded-lg flex items-center justify-center">
                <Anchor className="w-6 h-6 text-cream" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wide">Port Autonome</p>
                <p className="text-[10px] text-cream/50 tracking-widest uppercase">San-Pédro</p>
              </div>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed">
              {c.about}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber mb-5">
              {c.quickLinks}
            </h4>
            <ul className="space-y-3">
              {c.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/50 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber mb-5">
              {c.contact}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cream/40 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-cream/50">{c.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cream/40 flex-shrink-0" />
                <p className="text-sm text-cream/50">{c.phone}</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cream/40 flex-shrink-0" />
                <p className="text-sm text-cream/50">{c.email}</p>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-cream/40 flex-shrink-0" />
                <p className="text-sm text-cream/50">www.pasp.ci</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream/30">{c.copyright}</p>
          <p className="text-xs text-cream/30">
            {lang === 'fr'
              ? 'Communauté Portuaire de San-Pédro — Plateforme numérique'
              : 'San-Pédro Port Community — Digital platform'}
          </p>
        </div>
      </div>
    </footer>
  );
}
