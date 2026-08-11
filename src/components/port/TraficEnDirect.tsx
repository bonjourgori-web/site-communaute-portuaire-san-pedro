'use client';

import { useState, useEffect, Fragment } from 'react';
import { Clock, Anchor, ArrowUpRight, ArrowDownRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Vessel {
  id: string;
  name: string;
  flag: string;
  type: string;
  status: 'attendu' | 'a_quai' | 'depart';
  terminal: string;
  agent: string;
  cargo: string;
  eta?: string;
  etd?: string;
  quay?: string;
}

const vesselsData: Vessel[] = [
  { id: '1', name: 'MSC SAMAR', flag: 'PA', type: 'Porte-conteneurs', status: 'attendu', terminal: 'T1 Conteneurs', agent: 'CMA CGM', cargo: 'Conteneurs 20/40 EVP', eta: '14 Aout 18:30', quay: 'Quai 1' },
  { id: '2', name: 'MAERSK SEALAND', flag: 'DK', type: 'Porte-conteneurs', status: 'a_quai', terminal: 'T1 Conteneurs', agent: 'Maersk Line', cargo: 'Conteneurs + FCL', etd: '15 Aout 06:00', quay: 'Quai 2' },
  { id: '3', name: 'CMA CGM MARCO POLO', flag: 'FR', type: 'Porte-conteneurs', status: 'a_quai', terminal: 'T1 Conteneurs', agent: 'CMA CGM', cargo: 'Cacao en conteneurs', etd: '16 Aout 22:00', quay: 'Quai 1' },
  { id: '4', name: 'BULK AFRICA', flag: 'LR', type: 'Vraquier', status: 'attendu', terminal: 'T2 Vraquier', agent: 'SAGA Shipping', cargo: 'Riz 12 000 T', eta: '16 Aout 04:00', quay: 'Quai 3' },
  { id: '5', name: 'TIMBER STAR', flag: 'NO', type: 'Vraquier bois', status: 'depart', terminal: 'T3 Bois', agent: 'SCI Transit', cargo: 'Grumes + bois transforme', etd: '14 Aout 14:00', quay: 'Quai 5' },
  { id: '6', name: 'FEDERAL DANUBE', flag: 'MT', type: 'Vraquier', status: 'a_quai', terminal: 'T2 Vraquier', agent: 'SDV Transports', cargo: 'Ciment 8 500 T', etd: '17 Aout 10:00', quay: 'Quai 3' },
  { id: '7', name: 'PACIFIC HARVEST', flag: 'JP', type: 'Vraquier', status: 'attendu', terminal: 'T2 Vraquier', agent: 'Bollore Logistics', cargo: 'Engrais 15 000 T', eta: '18 Aout 12:00', quay: 'Quai 4' },
  { id: '8', name: 'HEROIC SEA', flag: 'PA', type: 'Porte-conteneurs', status: 'attendu', terminal: 'T1 Conteneurs', agent: 'Maersk Line', cargo: 'Conteneurs EVP', eta: '19 Aout 08:00', quay: 'Quai 2' },
];

const statusConfig = {
  attendu: { color: 'bg-ocean/10 text-ocean', label: { fr: 'Attendu', en: 'Expected' }, icon: ArrowDownRight },
  a_quai: { color: 'bg-forest/10 text-forest', label: { fr: 'A quai', en: 'Berthed' }, icon: Anchor },
  depart: { color: 'bg-amber/10 text-amber-dark', label: { fr: 'Au depart', en: 'Departing' }, icon: ArrowUpRight },
};

const filterOptions = ['all', 'attendu', 'a_quai', 'depart'] as const;

export default function TraficEnDirect({ lang }: { lang: 'fr' | 'en' }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState(2);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate((prev) => (prev < 59 ? prev + 1 : 0));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const filtered = filter === 'all' ? vesselsData : vesselsData.filter((v) => v.status === filter);

  const labels = lang === 'fr'
    ? { title: 'Trafic en direct', subtitle: 'Mouvements des navires', all: 'Tous', vessel: 'Navire', agent: 'Agent', terminal: 'Terminal', status: 'Statut', update: 'Mis a jour il y a', min: 'min', cargo: 'Marchandise', quay: 'Quai', eta: 'ETA', etd: 'ETD' }
    : { title: 'Live Traffic', subtitle: 'Vessel movements', all: 'All', vessel: 'Vessel', agent: 'Agent', terminal: 'Terminal', status: 'Status', update: 'Updated', min: 'min ago', cargo: 'Cargo', quay: 'Quay', eta: 'ETA', etd: 'ETD' };

  const l = labels;

  function getDetail(vessel: Vessel) {
    return (
      <tr className="bg-cream/50 border-t border-cream-dark/20">
        <td colSpan={6} className="px-5 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-1">{l.quay}</p>
              <p className="font-semibold text-navy">{vessel.quay}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-1">{l.agent}</p>
              <p className="font-semibold text-navy">{vessel.agent}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-1">{l.cargo}</p>
              <p className="font-semibold text-navy">{vessel.cargo}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-1">{vessel.eta ? l.eta : l.etd}</p>
              <p className="font-semibold text-navy">{vessel.eta || vessel.etd}</p>
            </div>
          </div>
        </td>
      </tr>
    );
  }

  function getMobileDetail(vessel: Vessel) {
    return (
      <div className="px-4 pb-4 pt-0 border-t border-cream-dark/20 mt-0">
        <div className="grid grid-cols-2 gap-3 pt-3 text-sm">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-1">{l.quay}</p>
            <p className="font-semibold text-navy">{vessel.quay}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-1">{l.agent}</p>
            <p className="font-semibold text-navy">{vessel.agent}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-1">{l.cargo}</p>
            <p className="font-semibold text-navy">{vessel.cargo}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-1">{vessel.eta ? l.eta : l.etd}</p>
            <p className="font-semibold text-navy">{vessel.eta || vessel.etd}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="trafic" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-ocean text-xs font-bold uppercase tracking-[0.25em] mb-3">{l.subtitle}</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-navy">{l.title}</h2>
            <div className="w-16 h-1 bg-amber mt-4 rounded-full" />
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="w-3.5 h-3.5" />
            <span>{l.update} {lastUpdate} {l.min}</span>
            <div className="w-2 h-2 rounded-full bg-forest live-pulse" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {filterOptions.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={
                filter === s
                  ? 'bg-navy text-cream px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-colors'
                  : 'bg-white text-navy hover:bg-cream-dark border border-cream-dark/50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-colors'
              }
            >
              {s === 'all' ? l.all : statusConfig[s].label[lang]}
            </button>
          ))}
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-xl border border-cream-dark/50 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-navy text-cream text-xs uppercase tracking-wider">
                <th className="text-left px-5 py-3 font-bold">{l.vessel}</th>
                <th className="text-left px-5 py-3 font-bold">{l.terminal}</th>
                <th className="text-left px-5 py-3 font-bold">{l.status}</th>
                <th className="text-left px-5 py-3 font-bold">{l.agent}</th>
                <th className="text-left px-5 py-3 font-bold">{l.cargo}</th>
                <th className="w-10" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((vessel) => {
                const sc = statusConfig[vessel.status];
                const isExp = expanded === vessel.id;
                const StatusIcon = sc.icon;
                return (
                  <Fragment key={vessel.id}>
                    <tr
                      className="border-t border-cream-dark/30 hover:bg-cream/50 transition-colors cursor-pointer"
                      onClick={() => setExpanded(isExp ? null : vessel.id)}
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono bg-cream-dark/50 px-1.5 py-0.5 rounded">{vessel.flag}</span>
                          <div>
                            <p className="text-sm font-bold text-navy">{vessel.name}</p>
                            <p className="text-[11px] text-muted-foreground">{vessel.type}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm text-navy font-medium">{vessel.terminal}</td>
                      <td className="px-5 py-4">
                        <Badge className={`${sc.color} text-[11px] font-bold uppercase tracking-wider border-0`}>
                          <StatusIcon className="w-3 h-3 mr-1" />
                          {sc.label[lang]}
                        </Badge>
                      </td>
                      <td className="px-5 py-4 text-sm text-navy">{vessel.agent}</td>
                      <td className="px-5 py-4 text-sm text-muted-foreground max-w-[200px] truncate">{vessel.cargo}</td>
                      <td className="px-5 py-4">
                        {isExp ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                      </td>
                    </tr>
                    {isExp ? getDetail(vessel) : null}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden flex flex-col gap-3">
          {filtered.map((vessel) => {
            const sc = statusConfig[vessel.status];
            const isExp = expanded === vessel.id;
            const StatusIcon = sc.icon;
            return (
              <div key={vessel.id} className="bg-white rounded-xl border border-cream-dark/50 overflow-hidden">
                <button onClick={() => setExpanded(isExp ? null : vessel.id)} className="w-full text-left p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono bg-cream-dark/50 px-1.5 py-0.5 rounded">{vessel.flag}</span>
                      <p className="text-sm font-bold text-navy">{vessel.name}</p>
                    </div>
                    <Badge className={`${sc.color} text-[10px] font-bold uppercase tracking-wider border-0`}>
                      <StatusIcon className="w-3 h-3 mr-1" />
                      {sc.label[lang]}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">{vessel.terminal} - {vessel.cargo}</p>
                    {isExp ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                  </div>
                </button>
                {isExp ? getMobileDetail(vessel) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
