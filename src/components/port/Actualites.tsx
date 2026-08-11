'use client';

import { Calendar, FileText, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const news = {
  fr: [
    {
      id: 1,
      date: '10 Août 2026',
      category: 'Communiqué',
      title: 'Programme de dragage du chenal d\'accès — Travaux du 20 août au 15 septembre',
      desc: 'Le Port Autonome de San-Pédro informe les opérateurs qu\'une campagne de dragage du chenal d\'accès sera conduite du 20 août au 15 septembre 2026. Le tirant d\'eau sera temporairement réduit à 12,5 m. Les armateurs sont invités à ajuster leurs plans de chargement en conséquence et à contacter le service des mouvements pour toute question.',
      image: '/images/port/operations-port.jpg',
    },
    {
      id: 2,
      date: '5 Août 2026',
      category: 'Tarifs',
      title: 'Révision des tarifs de manutention applicable au 1er septembre 2026',
      desc: 'Le conseil d\'administration du PASP a approuvé une révision tarifaire pour les opérations de manutention portuaire. Les nouveaux tarifs seront effectifs à compter du 1er septembre 2026. Le détail des nouveaux barèmes est disponible au téléchargement dans la section Documents.',
      image: '/images/port/quai-port.jpg',
    },
    {
      id: 3,
      date: '28 Juillet 2026',
      category: 'Avis aux navigateurs',
      title: 'Restriction temporaire de la passe d\'entrée — Profondeur réduite',
      desc: 'Suite à des mouvements de sédiments, la profondeur utile de la passe d\'entrée est temporairement réduite à 13 m au lieu de 14 m. Une intervention de dragage correctif est planifiée. Les navires ayant un tirant d\'eau supérieur à 12,8 m doivent contacter le capitainerie avant leur approche.',
      image: '/images/port/hero-port-conteneurs.jpg',
    },
  ],
  en: [
    {
      id: 1,
      date: 'August 10, 2026',
      category: 'Notice',
      title: 'Access channel dredging program — Works from August 20 to September 15',
      desc: 'The Autonomous Port of San-Pédro informs operators that an access channel dredging campaign will be conducted from August 20 to September 15, 2026. The draft will be temporarily reduced to 12.5 m. Shipowners are invited to adjust their loading plans accordingly and to contact the movements service for any questions.',
      image: '/images/port/operations-port.jpg',
    },
    {
      id: 2,
      date: 'August 5, 2026',
      category: 'Tariffs',
      title: 'Revision of handling tariffs applicable September 1, 2026',
      desc: 'The PASP board of directors has approved a tariff revision for port handling operations. The new tariffs will be effective from September 1, 2026. Detailed tariff schedules are available for download in the Documents section.',
      image: '/images/port/quai-port.jpg',
    },
    {
      id: 3,
      date: 'July 28, 2026',
      category: 'Notice to Mariners',
      title: 'Temporary entrance channel restriction — Reduced depth',
      desc: 'Following sediment movements, the usable depth of the entrance channel is temporarily reduced to 13 m instead of 14 m. A corrective dredging operation is planned. Vessels with a draft exceeding 12.8 m must contact the harbor master before approaching.',
      image: '/images/port/hero-port-conteneurs.jpg',
    },
  ],
};

const categoryColors: Record<string, string> = {
  'Communiqué': 'bg-navy/10 text-navy',
  'Notice': 'bg-navy/10 text-navy',
  'Tarifs': 'bg-amber/10 text-amber-dark',
  'Tariffs': 'bg-amber/10 text-amber-dark',
  'Avis aux navigateurs': 'bg-safety/10 text-safety-dark',
  'Notice to Mariners': 'bg-safety/10 text-safety-dark',
};

export default function Actualites({ lang }: { lang: 'fr' | 'en' }) {
  const items = news[lang];

  return (
    <section id="actualites" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-ocean text-xs font-bold uppercase tracking-[0.25em] mb-3">
            {lang === 'fr' ? 'Dernières informations' : 'Latest information'}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-navy">
            {lang === 'fr' ? 'Actualités & avis' : 'News & Notices'}
          </h2>
          <div className="w-16 h-1 bg-amber mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <article
              key={item.id}
              className={`group bg-white rounded-xl overflow-hidden border border-cream-dark/50 hover:shadow-lg transition-all ${
                i === 0 ? 'lg:row-span-2' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? 'h-48 lg:h-64' : 'h-40'}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <Badge className={`${categoryColors[item.category] || 'bg-navy/10 text-navy'} text-[10px] font-bold uppercase tracking-wider border-0`}>
                    <Tag className="w-3 h-3 mr-1" />
                    {item.category}
                  </Badge>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.date}
                </div>
                <h3 className={`font-bold text-navy leading-tight mb-3 group-hover:text-ocean transition-colors ${
                  i === 0 ? 'text-lg' : 'text-base'
                }`}>
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
                <button className="inline-flex items-center gap-1.5 mt-4 text-xs font-bold uppercase tracking-wider text-ocean hover:text-ocean-light transition-colors">
                  <FileText className="w-3.5 h-3.5" />
                  {lang === 'fr' ? 'Lire la suite' : 'Read more'}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
