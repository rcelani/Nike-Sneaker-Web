import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Breadcrumb from "../components/Breadcrumb";
import useSEO from "../hook/useSEO";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useSEO({
    title: "Chi Siamo | Nike Sneaker",
    description:
      "Da Beaverton al mondo intero. La storia di Nike, la mission, i valori e il futuro dello sport. Scopri chi siamo e cosa ci muove.",
    image: "/images/nike-logo.png",
  });

  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Hero
      gsap.from(".about-hero-title", {
        y: -40, opacity: 0, duration: 0.9, ease: "back.out(1.4)",
      });
      gsap.from(".about-hero-divider", {
        scaleX: 0, transformOrigin: "left center", duration: 0.8, delay: 0.4,
      });
      gsap.from(".about-hero-text", {
        y: 25, opacity: 0, duration: 0.7, delay: 0.5,
      });

      // Story sections (scroll triggered)
      const sections = containerRef.current?.querySelectorAll(".story-section");
      sections?.forEach((s) => {
        const heading = s.querySelector(".story-heading");
        const para = s.querySelector(".story-para");
        const num = s.querySelector(".story-num");

        gsap.fromTo(num, { scale: 0, opacity: 0 }, {
          scale: 1, opacity: 1, duration: 0.7, ease: "back.out(2)",
          scrollTrigger: { trigger: s, start: "top 85%", toggleActions: "play none none reverse" },
        });
        gsap.fromTo(heading, { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.1,
          scrollTrigger: { trigger: s, start: "top 85%", toggleActions: "play none none reverse" },
        });
        gsap.fromTo(para, { y: 30, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.7, ease: "power2.out", delay: 0.3,
          scrollTrigger: { trigger: s, start: "top 85%", toggleActions: "play none none reverse" },
        });
      });

      // Values
      const values = containerRef.current?.querySelectorAll(".value-card");
      values?.forEach((v, idx) => {
        gsap.fromTo(v, { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.7, delay: idx * 0.12, ease: "power3.out",
          scrollTrigger: { trigger: v, start: "top 90%", toggleActions: "play none none reverse" },
        });
      });

      // Stats
      const stats = containerRef.current?.querySelectorAll(".stat-card");
      stats?.forEach((s, idx) => {
        gsap.fromTo(s, { y: 30, opacity: 0, scale: 0.95 }, {
          y: 0, opacity: 1, scale: 1, duration: 0.7, delay: idx * 0.1, ease: "back.out(1.4)",
          scrollTrigger: { trigger: s, start: "top 90%", toggleActions: "play none none reverse" },
        });
      });
    },
    { scope: containerRef }
  );

  const stories = [
    {
      num: "01",
      title: "Le origini",
      text: "Nasciamo nel 1964 a Beaverton, Oregon, sotto il nome di Blue Ribbon Sports. Il fondatore Phil Knight iniziò vendendo scarpe da corsa giapponesi dal bagagliaio della sua auto. Sei anni più tardi, nel 1971, l'azienda cambiò nome in Nike — dalla dea greca della vittoria — e adottò il celebre logo Swoosh disegnato da Carolyn Davidson per soli 35 dollari.",
    },
    {
      num: "02",
      title: "L'era Jordan",
      text: "Nel 1984 Nike firmò un giovane rookie di Chicago: Michael Jordan. Le prime Air Jordan, vietate dalla NBA per il loro schema cromatico, generarono un'isteria collettiva che cambiò per sempre il rapporto tra sport, sneaker e cultura pop. Quarant'anni dopo, la linea Jordan è ancora il singolo brand più riconoscibile del mondo dello sport.",
    },
    {
      num: "03",
      title: "Just Do It",
      text: "Nel 1988 nasce uno degli slogan più potenti della storia della pubblicità. Tre parole, tre sillabe, un manifesto: superare l'esitazione, agire, prendersi i propri spazi. Dal campo alla strada, da chi corre la prima maratona a chi vince i Mondiali, lo slogan diventa universale.",
    },
    {
      num: "04",
      title: "Innovazione continua",
      text: "Dal Nike Air al Flyknit, dallo Zoom al ReactX, ogni decennio Nike introduce una tecnologia che ridefinisce il concetto di performance. Oggi il Nike Sport Research Lab di Beaverton occupa più di 40.000 metri quadrati e ospita laboratori di biomeccanica, fisiologia e scienze dei materiali tra i più avanzati al mondo.",
    },
  ];

  const values = [
    {
      icon: "ri-rocket-2-line",
      title: "Innovazione",
      text: "Ogni prodotto inizia da un problema concreto degli atleti. Risolverlo con tecnologia all'avanguardia è la nostra ossessione quotidiana.",
    },
    {
      icon: "ri-team-line",
      title: "Inclusività",
      text: "Lo sport è di tutti. Costruiamo prodotti pensati per ogni livello, ogni biomeccanica e ogni storia personale.",
    },
    {
      icon: "ri-leaf-line",
      title: "Sostenibilità",
      text: "Move to Zero è il nostro impegno verso un futuro a zero emissioni di carbonio e zero rifiuti. Ogni materiale viene scelto con questa missione in mente.",
    },
    {
      icon: "ri-trophy-line",
      title: "Performance",
      text: "Non rilasciamo nulla che non superi i test più severi. Le nostre scarpe accompagnano gli atleti più decorati del pianeta perché non possono fallire.",
    },
  ];

  const stats = [
    { value: "60+", label: "Anni di storia" },
    { value: "170", label: "Paesi nel mondo" },
    { value: "4M+", label: "Atleti supportati" },
    { value: "50%+", label: "Materiali sostenibili" },
  ];

  return (
    <div ref={containerRef}>
      {/* HERO */}
      <section className="w-full min-h-[80vh] lg:min-h-screen rounded-b-4xl bg-gradient-to-br from-[#0a0a0a] via-[#171717] to-black relative flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-10 pt-28 sm:pt-32 lg:pt-40 pb-12 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <img src="/images/nike-logo.png" alt="" className="w-[80%] max-w-[800px] invert" />
        </div>

        <div className="relative z-10 max-w-3xl">
          <Breadcrumb
            items={[{ label: "Home", to: "/" }, { label: "Chi Siamo" }]}
          />
          <span className="about-hero-text text-white/50 text-xs sm:text-sm tracking-[3px] uppercase">
            La nostra storia
          </span>
          <h1 className="about-hero-title text-4xl sm:text-6xl lg:text-7xl xl:text-[88px] font-black uppercase text-white leading-[1.05] mt-3 lg:mt-5 tracking-[-1px] lg:tracking-[-2px]">
            Chi siamo.
          </h1>
          <div
            className="about-hero-divider h-[2px] w-48 sm:w-64 lg:w-80 mt-5 mx-auto"
            style={{ background: "linear-gradient(to right, #fff, transparent)" }}
          />
          <p className="about-hero-text text-white/80 text-sm sm:text-base lg:text-lg leading-[1.7] mt-7 lg:mt-9 max-w-2xl mx-auto">
            Da una piccola azienda dell'Oregon a marchio sportivo più riconosciuto del pianeta. Sessant'anni di scelte coraggiose, atleti leggendari e prodotti che hanno cambiato la storia dello sport.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="w-full bg-gradient-to-br from-[#fafafa] via-[#e5e5e5] to-[#a3a3a3] py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-black/40 text-xs tracking-[3px] uppercase">Mission</span>
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black uppercase text-black/90 leading-[1.05] mt-3">
            Portare ispirazione e
            <br />
            innovazione a ogni atleta.
          </h2>
          <p className="text-black/60 text-sm sm:text-base lg:text-lg leading-relaxed mt-6 lg:mt-8 max-w-3xl mx-auto">
            Questa è la nostra mission, ed è da queste parole che parte ogni progetto. Per noi "atleta" significa chiunque abbia un corpo: il professionista, l'amatore, chi corre la prima maratona, chi gioca a basket il sabato pomeriggio. Tutti meritano lo stesso livello di attenzione e qualità.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="w-full bg-[#0a0a0a] py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 lg:mb-20">
            <span className="text-white/40 text-xs tracking-[3px] uppercase">Timeline</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white leading-tight mt-2">
              60 anni di storia.
            </h2>
          </div>

          <div className="space-y-14 lg:space-y-20">
            {stories.map((s, idx) => (
              <article
                key={s.num}
                className={`story-section grid grid-cols-1 lg:grid-cols-[140px_1fr] gap-6 lg:gap-12 items-start ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="story-num text-7xl lg:text-8xl font-black text-white/20 leading-none">
                  {s.num}
                </div>
                <div>
                  <h3 className="story-heading text-2xl sm:text-3xl lg:text-5xl font-black uppercase text-white leading-tight">
                    {s.title}
                  </h3>
                  <p className="story-para text-white/70 text-sm sm:text-base leading-[1.8] mt-4 lg:mt-6 max-w-3xl">
                    {s.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="w-full bg-gradient-to-b from-[#0a0a0a] to-[#171717] py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-white/40 text-xs tracking-[3px] uppercase">Cosa ci muove</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white leading-tight mt-2">
              I nostri valori.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="value-card bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-7 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mb-4">
                  <i className={`${v.icon} text-2xl`} />
                </div>
                <h3 className="text-white text-xl font-black uppercase mb-2 leading-tight">
                  {v.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="w-full bg-[#0a0a0a] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="stat-card bg-gradient-to-br from-white/10 to-white/0 border border-white/10 rounded-3xl p-6 lg:p-8 text-center"
              >
                <p className="text-white text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-1px]">
                  {s.value}
                </p>
                <p className="text-white/50 text-xs sm:text-sm tracking-[2px] uppercase mt-2">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-gradient-to-b from-[#0a0a0a] to-black py-20 lg:py-32 px-4 sm:px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black uppercase text-white leading-tight">
            Pronto a fare
            <br />
            la tua mossa?
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-5 lg:mt-7 max-w-xl mx-auto">
            Esplora la collezione e trova il prodotto pensato per la tua passione.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-8">
            <Link
              to="/collezione"
              className="bg-white text-black px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-neutral-200 transition-colors flex items-center gap-2"
            >
              Esplora la collezione
              <i className="ri-arrow-right-line" />
            </Link>
            <Link
              to="/contatti"
              className="text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide bg-white/10 hover:bg-white/20 transition-colors"
            >
              Contattaci
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
