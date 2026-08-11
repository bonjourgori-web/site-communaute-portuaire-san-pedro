'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const heroImages = [
  '/images/port/hero-port-aerien.jpg',
  '/images/port/hero-port-conteneurs.jpg',
  '/images/port/domaine-port.jpg',
];

export default function Hero({ lang }: { lang: 'fr' | 'en' }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);

  // Parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scroll = window.scrollY;
      const img = containerRef.current.querySelector('.hero-bg') as HTMLElement;
      if (img) {
        img.style.transform = `translateY(${scroll * 0.3}px) scale(1.1)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Image slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const content = {
    fr: {
      title: 'Communauté Portuaire',
      subtitle: 'de San-Pédro',
      tagline: 'Deuxième port de Côte d\'Ivoire, porte d\'export du cacao et du bois vers le monde.',
      cta1: 'Espace membre',
      cta2: 'Démarches en ligne',
    },
    en: {
      title: 'Port Community',
      subtitle: 'of San-Pédro',
      tagline: "Côte d'Ivoire's second port — gateway for cocoa and timber exports to the world.",
      cta1: 'Member area',
      cta2: 'Online services',
    },
  };

  const c = content[lang];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background images with crossfade */}
      <div className="absolute inset-0">
        {heroImages.map((src, i) => (
          <div
            key={src}
            className="hero-bg absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms]"
            style={{
              opacity: i === currentImage ? 1 : 0,
              backgroundImage: `url(${src})`,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-navy/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-ocean/20 backdrop-blur-sm border border-ocean/30 rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 bg-ocean-light rounded-full live-pulse" />
            <span className="text-ocean-light text-xs font-bold uppercase tracking-widest">
              {lang === 'fr' ? 'Port Autonome de San-Pédro' : 'Autonomous Port of San-Pédro'}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.95] mb-2">
            {c.title}
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-amber leading-[0.95] mb-6">
            {c.subtitle}
          </h2>
          <p className="text-base sm:text-lg text-cream/80 max-w-xl mb-10 leading-relaxed">
            {c.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={() => document.querySelector('#adhesion')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-amber hover:bg-amber-light text-white font-bold uppercase tracking-wider text-sm rounded-lg px-8 h-12 group"
            >
              {c.cta1}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-cream/40 text-cream hover:bg-cream/10 hover:text-white font-bold uppercase tracking-wider text-sm rounded-lg px-8 h-12 group"
            >
              <FileText className="mr-2 w-4 h-4" />
              {c.cta2}
            </Button>
          </div>
        </motion.div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl"
        >
          {[
            { value: '4.2M', label: lang === 'fr' ? 'Tonnes/an' : 'Tonnes/year' },
            { value: '350+', label: lang === 'fr' ? 'Escale\'s/an' : 'Calls/year' },
            { value: '60%', label: lang === 'fr' ? 'Export cacao' : 'Cocoa export' },
            { value: '24/7', label: lang === 'fr' ? 'Opérations' : 'Operations' },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3"
            >
              <p className="text-2xl sm:text-3xl font-black text-white tabular-nums">{stat.value}</p>
              <p className="text-xs text-cream/60 uppercase tracking-wider font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
