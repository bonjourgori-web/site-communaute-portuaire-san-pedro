'use client';

import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}

function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2000, decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(eased * end);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy tabular-nums">
      {prefix}{count.toFixed(decimals)}{suffix}
    </div>
  );
}

export default function ChiffresCles({ lang }: { lang: 'fr' | 'en' }) {
  const stats = {
    fr: [
      { value: 4.2, suffix: 'M', prefix: '', decimals: 1, label: 'Tonnes de fret/an', sublabel: 'Trafic total tous terminals' },
      { value: 352, suffix: '', prefix: '', decimals: 0, label: "Escale's maritimes/an", sublabel: 'Navires commerciaux' },
      { value: 62, suffix: '%', prefix: '', decimals: 0, label: 'Part export cacao', sublabel: 'Premier port cacao d\'Afrique de l\'Ouest' },
      { value: 18, suffix: '%', prefix: '', decimals: 0, label: 'Part export bois', sublabel: 'Grumes et bois transformé' },
      { value: 850, suffix: 'm', prefix: '', decimals: 0, label: 'Linéaire de quai', sublabel: 'Terminaux opérationnels' },
      { value: 14, suffix: 'm', prefix: '', decimals: 0, label: 'Tirant d\'eau max', sublabel: 'Chenal d\'accès dragué' },
    ],
    en: [
      { value: 4.2, suffix: 'M', prefix: '', decimals: 1, label: 'Tonnes of freight/year', sublabel: 'Total traffic all terminals' },
      { value: 352, suffix: '', prefix: '', decimals: 0, label: 'Maritime calls/year', sublabel: 'Commercial vessels' },
      { value: 62, suffix: '%', prefix: '', decimals: 0, label: 'Cocoa export share', sublabel: "West Africa's top cocoa port" },
      { value: 18, suffix: '%', prefix: '', decimals: 0, label: 'Timber export share', sublabel: 'Logs and processed wood' },
      { value: 850, suffix: 'm', prefix: '', decimals: 0, label: 'Quay length', sublabel: 'Operational terminals' },
      { value: 14, suffix: 'm', prefix: '', decimals: 0, label: 'Max draft', sublabel: 'Dredged access channel' },
    ],
  };

  const s = stats[lang];

  return (
    <section id="chiffres" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-ocean text-xs font-bold uppercase tracking-[0.25em] mb-3">
            {lang === 'fr' ? 'En chiffres' : 'By the numbers'}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-navy">
            {lang === 'fr' ? 'Chiffres clés' : 'Key Figures'}
          </h2>
          <div className="w-16 h-1 bg-amber mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {s.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-cream-dark/50 hover:shadow-md hover:border-ocean/20 transition-all group"
            >
              <AnimatedCounter
                end={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                decimals={stat.decimals}
              />
              <p className="text-sm font-bold text-navy mt-3 uppercase tracking-wide">
                {stat.label}
              </p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                {stat.sublabel}
              </p>
              <div className="w-8 h-0.5 bg-amber/40 group-hover:bg-amber group-hover:w-12 transition-all mt-4 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
