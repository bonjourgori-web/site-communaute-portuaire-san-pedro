'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, Building2, User, Mail, Phone, MessageSquare } from 'lucide-react';

export default function Adhesion({ lang }: { lang: 'fr' | 'en' }) {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    activity: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const content = {
    fr: {
      title: 'Adhésion & contact',
      subtitle: 'Rejoignez la communauté portuaire',
      desc: 'Opérateur maritime, transitaires, consignataire, manutentionnaire, exportateur — demandez votre accès à l\'espace membre de la communauté portuaire de San-Pédro.',
      company: 'Raison sociale',
      name: 'Nom complet',
      email: 'Adresse e-mail',
      phone: 'Téléphone',
      activity: 'Activité principale',
      activityPlaceholder: 'Armateur, transitaire, consignataire, exportateur...',
      message: 'Message',
      messagePlaceholder: 'Décrivez votre besoin ou votre demande d\'adhésion...',
      submit: 'Envoyer la demande',
      success: 'Votre demande a été envoyée avec succès. Notre équipe vous contactera sous 48 heures.',
      infoTitle: 'Pourquoi adhérer ?',
      benefits: [
        'Accès au guichet unique des démarches portuaires',
        'Suivi en temps réel des navires et opérations',
        'Alertes et notifications personnalisées',
        'Annuaire privilégié des acteurs portuaires',
        'Documentation réglementaire mise à jour',
      ],
    },
    en: {
      title: 'Membership & contact',
      subtitle: 'Join the port community',
      desc: 'Maritime operator, freight forwarder, ship agent, stevedore, exporter — request your access to the San-Pédro port community member area.',
      company: 'Company name',
      name: 'Full name',
      email: 'Email address',
      phone: 'Phone number',
      activity: 'Main activity',
      activityPlaceholder: 'Shipowner, freight forwarder, agent, exporter...',
      message: 'Message',
      messagePlaceholder: 'Describe your need or membership request...',
      submit: 'Send request',
      success: 'Your request has been sent successfully. Our team will contact you within 48 hours.',
      infoTitle: 'Why join?',
      benefits: [
        'Access to the single port procedures portal',
        'Real-time vessel and operation tracking',
        'Personalized alerts and notifications',
        'Privileged port stakeholder directory',
        'Up-to-date regulatory documentation',
      ],
    },
  };

  const c = content[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="adhesion" className="py-20 lg:py-28 bg-navy relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(245,240,232,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,232,1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-amber text-xs font-bold uppercase tracking-[0.25em] mb-3">
            {c.subtitle}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-cream">
            {c.title}
          </h2>
          <div className="w-16 h-1 bg-amber mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: info */}
          <div>
            <p className="text-cream/70 leading-relaxed mb-8">
              {c.desc}
            </p>
            <h3 className="text-xl font-bold text-cream uppercase tracking-wide mb-6">
              {c.infoTitle}
            </h3>
            <ul className="space-y-4">
              {c.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-amber" />
                  </div>
                  <span className="text-cream/80 text-sm leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Image */}
            <div className="mt-8 rounded-xl overflow-hidden border border-white/10">
              <img
                src="/images/port/hero-port-aerien.jpg"
                alt="Vue aérienne du port de San-Pédro"
                className="w-full h-48 object-cover opacity-80"
              />
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 lg:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-forest/20 flex items-center justify-center mb-4">
                  <Send className="w-7 h-7 text-forest-light" />
                </div>
                <h3 className="text-lg font-bold text-cream mb-2">
                  {lang === 'fr' ? 'Demande envoyée' : 'Request sent'}
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed max-w-sm">{c.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label className="text-cream/70 text-xs uppercase tracking-wider font-bold">
                      <Building2 className="w-3.5 h-3.5 inline mr-1.5" />
                      {c.company}
                    </Label>
                    <Input
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-white/5 border-white/10 text-cream placeholder:text-cream/30 focus:border-amber"
                      placeholder={c.company}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-cream/70 text-xs uppercase tracking-wider font-bold">
                      <User className="w-3.5 h-3.5 inline mr-1.5" />
                      {c.name}
                    </Label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/5 border-white/10 text-cream placeholder:text-cream/30 focus:border-amber"
                      placeholder={c.name}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label className="text-cream/70 text-xs uppercase tracking-wider font-bold">
                      <Mail className="w-3.5 h-3.5 inline mr-1.5" />
                      {c.email}
                    </Label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/5 border-white/10 text-cream placeholder:text-cream/30 focus:border-amber"
                      placeholder={c.email}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-cream/70 text-xs uppercase tracking-wider font-bold">
                      <Phone className="w-3.5 h-3.5 inline mr-1.5" />
                      {c.phone}
                    </Label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-white/5 border-white/10 text-cream placeholder:text-cream/30 focus:border-amber"
                      placeholder={c.phone}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-cream/70 text-xs uppercase tracking-wider font-bold">
                    <Building2 className="w-3.5 h-3.5 inline mr-1.5" />
                    {c.activity}
                  </Label>
                  <Input
                    value={formData.activity}
                    onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
                    className="bg-white/5 border-white/10 text-cream placeholder:text-cream/30 focus:border-amber"
                    placeholder={c.activityPlaceholder}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-cream/70 text-xs uppercase tracking-wider font-bold">
                    <MessageSquare className="w-3.5 h-3.5 inline mr-1.5" />
                    {c.message}
                  </Label>
                  <Textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white/5 border-white/10 text-cream placeholder:text-cream/30 focus:border-amber resize-none"
                    placeholder={c.messagePlaceholder}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-amber hover:bg-amber-light text-white font-bold uppercase tracking-wider h-12 text-sm rounded-lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {c.submit}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
