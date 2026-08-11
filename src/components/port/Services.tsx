'use client';

import { FileText, Ship, ClipboardCheck, Download, ArrowRight } from 'lucide-react';

const services = {
  fr: [
    {
      icon: <ClipboardCheck className="w-7 h-7" />,
      title: 'Guichet unique',
      desc: 'Plateforme centralisée pour toutes vos formalités portuaires : déclaration d\'escale, manifeste, bordereaux. Un point d\'entrée unique pour simplifier vos démarches et réduire les délais de traitement.',
      cta: 'Accéder au guichet',
    },
    {
      icon: <Ship className="w-7 h-7" />,
      title: "Formalités d\'escale",
      desc: 'Déclaration d\'arrivée et de départ, autorisation d\'accès au port, plan d\'arrimage. Toutes les procédures réglementaires pour les navires en escale à San-Pédro.',
      cta: 'Consulter les démarches',
    },
    {
      icon: <FileText className="w-7 h-7" />,
      title: 'Dédouanement',
      desc: 'Suivi en ligne de vos opérations de dédouanement, télétransmission des documents douaniers, liaison avec le système SYDAM-world pour une fluidité maximale des échanges.',
      cta: 'Suivre une opération',
    },
    {
      icon: <Download className="w-7 h-7" />,
      title: 'Documents téléchargeables',
      desc: 'Formulaires, tarifs portuaires, règlements, conditions générales, guides de procédures. L\'ensemble de la documentation utile pour les opérateurs portuaires.',
      cta: 'Voir les documents',
    },
  ],
  en: [
    {
      icon: <ClipboardCheck className="w-7 h-7" />,
      title: 'Single Window',
      desc: 'Centralized platform for all port formalities: call declaration, manifest, waybills. A single entry point to streamline your procedures and reduce processing times.',
      cta: 'Access the portal',
    },
    {
      icon: <Ship className="w-7 h-7" />,
      title: 'Call Formalities',
      desc: 'Arrival and departure declarations, port access authorization, stowage plan. All regulatory procedures for vessels calling at San-Pédro.',
      cta: 'View procedures',
    },
    {
      icon: <FileText className="w-7 h-7" />,
      title: 'Customs Clearance',
      desc: 'Online tracking of your clearance operations, electronic customs document submission, SYDAM-world system integration for maximum exchange fluidity.',
      cta: 'Track an operation',
    },
    {
      icon: <Download className="w-7 h-7" />,
      title: 'Downloadable Documents',
      desc: 'Forms, port tariffs, regulations, general conditions, procedure guides. All the useful documentation for port operators.',
      cta: 'View documents',
    },
  ],
};

export default function Services({ lang }: { lang: 'fr' | 'en' }) {
  const items = services[lang];

  return (
    <section id="services" className="py-20 lg:py-28 bg-navy relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(245,240,232,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,232,1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-amber text-xs font-bold uppercase tracking-[0.25em] mb-3">
            {lang === 'fr' ? 'Plateforme de services' : 'Services platform'}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-cream">
            {lang === 'fr' ? 'Services & démarches' : 'Services & Procedures'}
          </h2>
          <div className="w-16 h-1 bg-amber mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((service, i) => (
            <div
              key={i}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 lg:p-8 hover:bg-white/10 hover:border-amber/30 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-amber/10 text-amber flex items-center justify-center mb-5 group-hover:bg-amber group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-cream mb-3 uppercase tracking-wide">
                {service.title}
              </h3>
              <p className="text-cream/60 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <button className="inline-flex items-center gap-2 text-amber text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                {service.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
