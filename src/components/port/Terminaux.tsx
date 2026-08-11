'use client';

import { useState } from 'react';
import {
  Container,
  Mountain,
  Fish,
  TreePine,
  Warehouse,
  Ruler,
  Droplets,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type TerminalKey = 'conteneurs' | 'vraquier' | 'bois' | 'peche' | 'storage';

interface TerminalInfo {
  key: TerminalKey;
  icon: React.ReactNode;
  name: { fr: string; en: string };
  color: string;
  bgColor: string;
  capacity: { fr: string; en: string };
  draft: string;
  equipment: { fr: string; en: string };
  area: string;
  position: { top: string; left: string };
}

const terminals: TerminalInfo[] = [
  {
    key: 'conteneurs',
    icon: <Container className="w-7 h-7" />,
    name: { fr: 'Terminal Conteneurs (T1)', en: 'Container Terminal (T1)' },
    color: 'text-ocean',
    bgColor: 'bg-ocean',
    capacity: { fr: '250 000 EVP/an', en: '250,000 TEU/year' },
    draft: '13,5 m',
    equipment: { fr: '2 portiques, 4 reach-stackers, 8 strat carriers', en: '2 gantry cranes, 4 reach-stackers, 8 straddle carriers' },
    area: '12 ha',
    position: { top: '20%', left: '15%' },
  },
  {
    key: 'vraquier',
    icon: <Mountain className="w-7 h-7" />,
    name: { fr: 'Terminal Vraquier (T2)', en: 'Bulk Terminal (T2)' },
    color: 'text-amber-dark',
    bgColor: 'bg-amber',
    capacity: { fr: '1,5M tonnes/an', en: '1.5M tonnes/year' },
    draft: '14 m',
    equipment: { fr: '2 grues à godets, 2 convoyeurs, 1 trieur magnétique', en: '2 bucket cranes, 2 conveyors, 1 magnetic separator' },
    area: '8 ha',
    position: { top: '55%', left: '10%' },
  },
  {
    key: 'bois',
    icon: <TreePine className="w-7 h-7" />,
    name: { fr: 'Zone Bois (T3)', en: 'Timber Zone (T3)' },
    color: 'text-forest',
    bgColor: 'bg-forest',
    capacity: { fr: '800 000 m³/an', en: '800,000 m³/year' },
    draft: '10 m',
    equipment: { fr: '4 grues mobiles, 2 tracteurs, parc à grumes', en: '4 mobile cranes, 2 tractors, log park' },
    area: '15 ha',
    position: { top: '35%', left: '55%' },
  },
  {
    key: 'peche',
    icon: <Fish className="w-7 h-7" />,
    name: { fr: 'Quai de Pêche', en: 'Fishing Quay' },
    color: 'text-ocean-dark',
    bgColor: 'bg-ocean-dark',
    capacity: { fr: '20 000 tonnes/an', en: '20,000 tonnes/year' },
    draft: '5 m',
    equipment: { fr: 'Halle à marée, chambre froide, bacs de stockage', en: 'Fish market, cold room, storage tanks' },
    area: '3 ha',
    position: { top: '75%', left: '60%' },
  },
  {
    key: 'storage',
    icon: <Warehouse className="w-7 h-7" />,
    name: { fr: 'Zone de Stockage', en: 'Storage Zone' },
    color: 'text-navy-light',
    bgColor: 'bg-navy',
    capacity: { fr: 'Entrepôts + zones découvertes', en: 'Warehouses + open areas' },
    draft: '—',
    equipment: { fr: '6 hangars (18 000 m²), 30 ha de terre-plein', en: '6 sheds (18,000 m²), 30 ha open storage' },
    area: '48 ha',
    position: { top: '50%', left: '38%' },
  },
];

export default function Terminaux({ lang }: { lang: 'fr' | 'en' }) {
  const [activeTerminal, setActiveTerminal] = useState<TerminalKey | null>(null);
  const active = terminals.find((t) => t.key === activeTerminal);

  return (
    <section id="terminaux" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-ocean text-xs font-bold uppercase tracking-[0.25em] mb-3">
            {lang === 'fr' ? 'Infrastructure portuaire' : 'Port infrastructure'}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-navy">
            {lang === 'fr' ? 'Terminaux & infrastructures' : 'Terminals & Infrastructures'}
          </h2>
          <div className="w-16 h-1 bg-amber mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Interactive map */}
          <div className="lg:col-span-3 relative">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-ocean/5 border border-cream-dark/50">
              {/* Port area illustration */}
              <img
                src="/images/port/domaine-port.jpg"
                alt={lang === 'fr' ? 'Plan du domaine portuaire de San-Pédro' : 'San-Pédro port area map'}
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              {/* Grid overlay */}
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(11,29,58,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(11,29,58,0.08) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }} />
              {/* Water area */}
              <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-ocean/20 to-transparent" />
              <p className="absolute bottom-3 right-4 text-[10px] uppercase tracking-widest text-ocean/60 font-bold">
                {lang === 'fr' ? 'Océan Atlantique' : 'Atlantic Ocean'}
              </p>

              {/* Terminal hotspots */}
              {terminals.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setActiveTerminal(activeTerminal === t.key ? null : t.key)}
                  className={`terminal-highlight absolute flex items-center gap-2 px-3 py-2 rounded-lg border-2 cursor-pointer ${
                    activeTerminal === t.key
                      ? `${t.bgColor} text-white border-white shadow-lg scale-105`
                      : 'bg-white/90 text-navy border-cream-dark/50 hover:border-amber hover:shadow-md'
                  } transition-all`}
                  style={{
                    top: t.position.top,
                    left: t.position.left,
                  }}
                >
                  <span className={activeTerminal === t.key ? 'text-white' : t.color}>
                    {t.icon}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider hidden sm:inline">
                    {t.name[lang].split('(')[0].trim()}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-2">
            {active ? (
              <div className="bg-cream rounded-xl p-6 lg:p-8 border border-cream-dark/50">
                <div className={`w-14 h-14 rounded-xl ${active.bgColor}/10 ${active.color} flex items-center justify-center mb-5`}>
                  {active.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-4 uppercase tracking-wide">
                  {active.name[lang]}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge variant="secondary" className="text-[10px] uppercase tracking-wider font-bold bg-navy/5 text-navy flex-shrink-0 mt-0.5">
                      {lang === 'fr' ? 'Capacité' : 'Capacity'}
                    </Badge>
                    <p className="text-sm text-navy font-medium">{active.capacity[lang]}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="secondary" className="text-[10px] uppercase tracking-wider font-bold bg-navy/5 text-navy flex-shrink-0 mt-0.5">
                      <Ruler className="w-3 h-3 mr-1" />
                      {lang === 'fr' ? 'Tirant d\'eau' : 'Draft'}
                    </Badge>
                    <p className="text-sm text-navy font-medium">{active.draft}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="secondary" className="text-[10px] uppercase tracking-wider font-bold bg-navy/5 text-navy flex-shrink-0 mt-0.5">
                      {lang === 'fr' ? 'Équipements' : 'Equipment'}
                    </Badge>
                    <p className="text-sm text-navy font-medium leading-relaxed">{active.equipment[lang]}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="secondary" className="text-[10px] uppercase tracking-wider font-bold bg-navy/5 text-navy flex-shrink-0 mt-0.5">
                      {lang === 'fr' ? 'Superficie' : 'Area'}
                    </Badge>
                    <p className="text-sm text-navy font-medium">{active.area}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-cream rounded-xl p-6 lg:p-8 border border-cream-dark/50 flex flex-col items-center justify-center text-center min-h-[300px]">
                <Droplets className="w-10 h-10 text-ocean/30 mb-4" />
                <p className="text-sm text-muted-foreground">
                  {lang === 'fr'
                    ? 'Survolez ou cliquez sur un terminal pour voir ses détails.'
                    : 'Hover or click a terminal to see its details.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
