'use client';

import { useState, useEffect } from 'react';
import { AlertTriangle, X } from 'lucide-react';

const alerts = [
  {
    id: 1,
    fr: 'AVIS URGENT : Restitution de la passe d’entrée du port le 15/08 — Consultez le communiqué.',
    en: 'URGENT NOTICE: Port entrance channel restoration on 08/15 — Read the advisory.',
  },
];

export default function AlertBanner({ lang }: { lang: 'fr' | 'en' }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-safety text-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <AlertTriangle className="w-5 h-5 flex-shrink-0 live-pulse" />
          <p className="text-sm font-medium truncate">
            {lang === 'fr' ? alerts[0].fr : alerts[0].en}
          </p>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="flex-shrink-0 p-1 hover:bg-safety-dark/30 rounded transition-colors"
          aria-label="Fermer l'alerte"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
