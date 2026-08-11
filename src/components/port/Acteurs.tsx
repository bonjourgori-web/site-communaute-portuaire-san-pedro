'use client';

import { useState } from 'react';
import {
  Ship,
  ClipboardList,
  Truck,
  HardHat,
  Shield,
  Building2,
  Search,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

type ActorCategory = 'all' | 'armateur' | 'consignataire' | 'transitaire' | 'manutentionnaire' | 'douane' | 'admin';

const categories: { key: ActorCategory; fr: string; en: string }[] = [
  { key: 'all', fr: 'Tous', en: 'All' },
  { key: 'armateur', fr: 'Armateurs', en: 'Shipowners' },
  { key: 'consignataire', fr: 'Consignataires', en: 'Agents' },
  { key: 'transitaire', fr: 'Transitaires', en: 'Freight Forwarders' },
  { key: 'manutentionnaire', fr: 'Manutentionnaires', en: 'Stevedores' },
  { key: 'douane', fr: 'Douane', en: 'Customs' },
  { key: 'admin', fr: 'Administration', en: 'Administration' },
];

const icons: Record<string, React.ReactNode> = {
  armateur: <Ship className="w-6 h-6" />,
  consignataire: <ClipboardList className="w-6 h-6" />,
  transitaire: <Truck className="w-6 h-6" />,
  manutentionnaire: <HardHat className="w-6 h-6" />,
  douane: <Shield className="w-6 h-6" />,
  admin: <Building2 className="w-6 h-6" />,
};

const actors = [
  { name: 'Maersk Line', category: 'armateur' as const, descFr: 'Ligne maritime mondiale, services conteneurs réguliers.', descEn: 'Global shipping line, regular container services.' },
  { name: 'CMA CGM', category: 'armateur' as const, descFr: 'Groupe maritime français, hub Afrique de l\'Ouest.', descEn: 'French maritime group, West Africa hub.' },
  { name: 'SAGA Shipping', category: 'armateur' as const, descFr: 'Armement régional pour le trafic cabotage.', descEn: 'Regional shipping for coastal traffic.' },
  { name: 'Consignation Maritime Abidjan', category: 'consignataire' as const, descFr: 'Représentation des armateurs, formalités d\'escale.', descEn: 'Shipowner representation, call formalities.' },
  { name: 'SCI Transit', category: 'consignataire' as const, descFr: 'Consignataire et agent maritime, opérations à quai.', descEn: 'Ship agent and maritime operator, dockside operations.' },
  { name: 'SDV Transports', category: 'transitaire' as const, descFr: 'Transitaire international, logistique douanière.', descEn: 'International freight forwarder, customs logistics.' },
  { name: 'Bolloré Logistics', category: 'transitaire' as const, descFr: 'Chaîne logistique complète, transport multimodal.', descEn: 'Full logistics chain, multimodal transport.' },
  { name: 'GETMA', category: 'manutentionnaire' as const, descFr: 'Manutention portuaire, opérations de chargement/déchargement.', descEn: 'Port handling, loading/unloading operations.' },
  { name: 'SIPRA', category: 'manutentionnaire' as const, descFr: 'Société ivoirienne de manutention portuaire.', descEn: 'Ivorian port handling company.' },
  { name: 'Douane ivoirienne', category: 'douane' as const, descFr: 'Administration des douanes, dédouanement et contrôle.', descEn: 'Customs administration, clearance and control.' },
  { name: 'Direction Portuaire', category: 'admin' as const, descFr: 'Autorité portuaire, gestion du domaine et régulation.', descEn: 'Port authority, estate management and regulation.' },
  { name: 'PASP', category: 'admin' as const, descFr: 'Port Autonome de San-Pédro, autorité gestionnaire.', descEn: 'Autonomous Port of San-Pédro, managing authority.' },
];

export default function Acteurs({ lang }: { lang: 'fr' | 'en' }) {
  const [filter, setFilter] = useState<ActorCategory>('all');
  const [search, setSearch] = useState('');

  const filtered = actors.filter((a) => {
    const matchCat = filter === 'all' || a.category === filter;
    const matchSearch =
      search === '' ||
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.descFr.toLowerCase().includes(search.toLowerCase()) ||
      a.descEn.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section id="acteurs" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-ocean text-xs font-bold uppercase tracking-[0.25em] mb-3">
            {lang === 'fr' ? 'Réseau portuaire' : 'Port network'}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-navy">
            {lang === 'fr' ? 'Acteurs de la communauté' : 'Community Stakeholders'}
          </h2>
          <div className="w-16 h-1 bg-amber mx-auto mt-4 rounded-full" />
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
          {/* Search */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder={lang === 'fr' ? 'Rechercher un opérateur...' : 'Search an operator...'}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-cream border-cream-dark/50 focus:border-ocean"
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-colors ${
                  filter === cat.key
                    ? 'bg-navy text-cream'
                    : 'bg-cream text-navy hover:bg-cream-dark'
                }`}
              >
                {lang === 'fr' ? cat.fr : cat.en}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((actor, i) => (
            <div
              key={`${actor.name}-${i}`}
              className="group bg-cream/50 border border-cream-dark/50 rounded-xl p-5 hover:bg-white hover:shadow-md hover:border-ocean/20 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-ocean/10 text-ocean flex items-center justify-center flex-shrink-0 group-hover:bg-ocean group-hover:text-cream transition-colors">
                  {icons[actor.category]}
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-navy leading-tight truncate">
                    {actor.name}
                  </h3>
                  <Badge
                    variant="secondary"
                    className="mt-1.5 text-[10px] uppercase tracking-wider font-semibold bg-ocean/10 text-ocean hover:bg-ocean/10"
                  >
                    {lang === 'fr'
                      ? categories.find((c) => c.key === actor.category)?.fr
                      : categories.find((c) => c.key === actor.category)?.en}
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    {lang === 'fr' ? actor.descFr : actor.descEn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12 text-sm">
            {lang === 'fr'
              ? 'Aucun opérateur trouvé pour ces critères.'
              : 'No operator found for these criteria.'}
          </p>
        )}
      </div>
    </section>
  );
}
