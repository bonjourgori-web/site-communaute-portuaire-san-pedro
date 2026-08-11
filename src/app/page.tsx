'use client';

import { useState } from 'react';
import AlertBanner from '@/components/port/AlertBanner';
import Header from '@/components/port/Header';
import Hero from '@/components/port/Hero';
import ChiffresCles from '@/components/port/ChiffresCles';
import Acteurs from '@/components/port/Acteurs';
import Services from '@/components/port/Services';
import TraficEnDirect from '@/components/port/TraficEnDirect';
import Terminaux from '@/components/port/Terminaux';
import Actualites from '@/components/port/Actualites';
import Adhesion from '@/components/port/Adhesion';
import Footer from '@/components/port/Footer';

export default function Home() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AlertBanner lang={lang} />
      <Header lang={lang} onToggleLang={() => setLang(lang === 'fr' ? 'en' : 'fr')} />
      <main className="flex-1">
        <Hero lang={lang} />
        <ChiffresCles lang={lang} />
        <Acteurs lang={lang} />
        <Services lang={lang} />
        <TraficEnDirect lang={lang} />
        <Terminaux lang={lang} />
        <Actualites lang={lang} />
        <Adhesion lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}