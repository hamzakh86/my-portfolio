import React from 'react';
import { ArrowLeft, Github, ExternalLink, Smartphone, Globe, LayoutDashboard, Server, CheckCircle2, Zap, Clock, Database, Shield, RefreshCw } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const HachkaCaseStudy = ({ onBack }) => {
  const stack = [
    { layer: 'Mobile',   tech: 'React Native · Redux · React Navigation · Expo',       icon: Smartphone,      color: 'from-cyan-400 to-blue-500' },
    { layer: 'Web',      tech: 'AngularJS · JavaScript · Bootstrap · Chart.js',         icon: Globe,           color: 'from-red-500 to-orange-400' },
    { layer: 'Admin',    tech: 'AngularJS · JWT · Role-based access control',           icon: LayoutDashboard, color: 'from-purple-500 to-pink-500' },
    { layer: 'Backend',  tech: 'Node.js · Express.js · MongoDB · JWT · REST API',       icon: Server,          color: 'from-green-500 to-emerald-400' },
  ];

  const challenges = [
    {
      problem: 'Architecture unifiée entre 4 apps',
      solution: 'Une seule API REST centralisée avec 20+ endpoints consommée par les 3 clients. Même système d\'auth JWT partagé.',
    },
    {
      problem: 'Gestion de 50+ produits avec filtres avancés',
      solution: 'Système de catégories imbriquées + filtres multi-critères (prix, catégorie, stock) côté backend avec pagination.',
    },
    {
      problem: 'UI cohérente sur 3 plateformes différentes',
      solution: 'Design system partagé : même palette de couleurs, mêmes composants logiques adaptés à chaque framework.',
    },
    {
      problem: 'Livraison en 10 semaines en solo',
      solution: 'Sprints de 2 semaines, priorité aux fonctionnalités core. Mobile first, puis web, puis admin, puis polish.',
    },
  ];

  const metrics = [
    { label: '4 apps connectées', icon: RefreshCw, value: 'Écosystème complet' },
    { label: '20+ endpoints API',  icon: Server,    value: 'REST centralisé' },
    { label: '50+ produits',       icon: Database,  value: 'Catalogue géré' },
    { label: '10 semaines',        icon: Clock,     value: 'Livré en solo' },
    { label: '15+ écrans mobile',  icon: Smartphone,value: 'iOS & Android' },
    { label: 'JWT Auth',           icon: Shield,    value: 'Sécurisé' },
  ];

  const timeline = [
    { week: 'Semaines 1–2',  title: 'Architecture & Backend',       desc: 'Conception de l\'API REST, modèles MongoDB, système d\'auth JWT, 20+ endpoints.' },
    { week: 'Semaines 3–5',  title: 'App Mobile React Native',      desc: '15+ écrans : catalogue, panier, checkout, suivi de commandes, notifications push.' },
    { week: 'Semaines 6–8',  title: 'Site Web AngularJS',           desc: 'E-commerce complet : navigation produits, catégories, filtres avancés, panier, JWT.' },
    { week: 'Semaines 8–9',  title: 'Dashboard Admin AngularJS',    desc: 'CRUD produits/catégories/commandes/utilisateurs, graphiques Chart.js, rôles.' },
    { week: 'Semaine 10',    title: 'Tests, polish & déploiement',  desc: 'Tests d\'intégration, optimisations performance, déploiement Render + Netlify.' },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back button */}
        <Button variant="ghost" onClick={onBack} className="mb-8 -ml-2">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux projets
        </Button>

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge className="bg-primary/10 text-primary border-0 text-sm px-3 py-1">Freelance</Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">Mars – Mai 2026</Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">10 semaines</Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Hachka — Plateforme E-Commerce
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            4 applications connectées développées en solo en 10 semaines : une app mobile React Native,
            un site e-commerce AngularJS, un dashboard admin et une API backend centralisée.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Button onClick={() => window.open('https://github.com/hamzakh86', '_blank')}>
              <Github className="w-4 h-4 mr-2" /> Voir les repos
            </Button>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-16">
          {metrics.map((m, i) => (
            <div key={i} className="bg-accent/40 rounded-xl p-5 text-center">
              <m.icon className="w-5 h-5 mx-auto mb-2 text-primary" />
              <div className="text-lg font-bold text-foreground mb-0.5">{m.value}</div>
              <div className="text-xs text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Architecture */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Architecture</h2>
          <p className="text-muted-foreground mb-8">
            Une API REST centralisée sert de colonne vertébrale à 3 clients indépendants.
            Chaque client partage le même système d'auth JWT et les mêmes modèles de données.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stack.map((s, i) => (
              <Card key={i} className="card-hover">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center`}>
                      <s.icon className="w-5 h-5 text-white" />
                    </div>
                    {s.layer}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{s.tech}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Architecture diagram */}
          <div className="mt-8 bg-card border border-border rounded-xl p-6">
            <p className="text-xs text-muted-foreground text-center mb-4 uppercase tracking-wide font-medium">Flux de données</p>
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-wrap gap-3 justify-center">
                {['📱 Mobile (React Native)', '🌐 Web (AngularJS)', '🖥️ Admin (AngularJS)'].map((app, i) => (
                  <div key={i} className="bg-accent/50 rounded-lg px-4 py-2 text-sm font-medium text-foreground">{app}</div>
                ))}
              </div>
              <div className="text-muted-foreground text-2xl">↓</div>
              <div className="bg-primary text-primary-foreground rounded-lg px-6 py-3 text-sm font-medium">
                🔗 REST API — Node.js / Express.js
              </div>
              <div className="text-muted-foreground text-2xl">↓</div>
              <div className="flex gap-3 flex-wrap justify-center">
                <div className="bg-accent/50 rounded-lg px-4 py-2 text-sm font-medium text-foreground">🍃 MongoDB</div>
                <div className="bg-accent/50 rounded-lg px-4 py-2 text-sm font-medium text-foreground">🔐 JWT Auth</div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Timeline de développement</h2>
          <p className="text-muted-foreground mb-8">10 semaines, livré en solo avec des sprints de 2 semaines.</p>
          <div className="relative">
            <div className="absolute left-5 top-0 h-full w-0.5 bg-border" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-14">
                  <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 border-2 border-primary/20">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">{item.week}</span>
                    <h3 className="text-base font-semibold mt-2 mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Défis & Solutions</h2>
          <p className="text-muted-foreground mb-8">Les principaux problèmes rencontrés et comment ils ont été résolus.</p>
          <div className="space-y-4">
            {challenges.map((c, i) => (
              <Card key={i} className="card-hover">
                <CardContent className="pt-5">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{c.problem}</p>
                      <p className="text-sm text-muted-foreground">{c.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Key learnings */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2">Ce que j'ai appris</h2>
          <div className="bg-accent/30 rounded-xl p-6 space-y-3">
            {[
              "Architecturer une API centralisée consommée par des clients hétérogènes (mobile, web, admin)",
              "Gérer la complexité d'un projet multi-applications en solo avec une discipline de sprint",
              "Adapter un design système à 3 frameworks différents tout en gardant une cohérence visuelle",
              "Prioriser les fonctionnalités core vs nice-to-have sous contrainte de temps",
            ].map((learning, i) => (
              <div key={i} className="flex items-start gap-3">
                <Zap className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">{learning}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center border-t border-border pt-10">
          <p className="text-muted-foreground mb-4">Intéressé par un projet similaire ?</p>
          <Button size="lg" onClick={onBack}>
            Retour aux projets
          </Button>
        </div>

      </div>
    </div>
  );
};

export default HachkaCaseStudy;