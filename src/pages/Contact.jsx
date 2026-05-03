import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Breadcrumb from "../components/Breadcrumb";
import useSEO from "../hook/useSEO";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useSEO({
    title: "Contatti | Nike Sneaker",
    description:
      "Mettiti in contatto con il team Nike Sneaker. Sede in Italia, supporto clienti, social. Risposta garantita in 24 ore lavorative.",
    image: "/images/nike-logo.png",
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "ordine",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".contact-title", {
        y: -40, opacity: 0, duration: 0.9, ease: "back.out(1.4)",
      });
      gsap.from(".contact-divider", {
        scaleX: 0, transformOrigin: "left center", duration: 0.8, delay: 0.4,
      });
      gsap.from(".contact-text", {
        y: 25, opacity: 0, duration: 0.7, delay: 0.5,
      });

      const form = containerRef.current?.querySelector(".contact-form");
      if (form) {
        gsap.fromTo(form, { x: -60, opacity: 0 }, {
          x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: form, start: "top 85%", toggleActions: "play none none reverse" },
        });
      }

      const info = containerRef.current?.querySelector(".contact-info");
      if (info) {
        gsap.fromTo(info, { x: 60, opacity: 0 }, {
          x: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.15,
          scrollTrigger: { trigger: info, start: "top 85%", toggleActions: "play none none reverse" },
        });
      }

      const cards = containerRef.current?.querySelectorAll(".support-card");
      cards?.forEach((c, i) => {
        gsap.fromTo(c, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.6, delay: i * 0.1, ease: "power3.out",
          scrollTrigger: { trigger: c, start: "top 90%", toggleActions: "play none none reverse" },
        });
      });
    },
    { scope: containerRef }
  );

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Il nome è obbligatorio";
    if (!form.email.trim()) e.email = "L'email è obbligatoria";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Email non valida";
    if (!form.message.trim()) e.message = "Il messaggio è obbligatorio";
    else if (form.message.trim().length < 10)
      e.message = "Il messaggio è troppo corto (min 10 caratteri)";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }
    setErrors({});
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "ordine", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const supportCards = [
    {
      icon: "ri-truck-line",
      title: "Spedizioni",
      text: "Spedizione standard gratuita per ordini sopra €100. Consegna in 2-4 giorni lavorativi in tutta Italia.",
    },
    {
      icon: "ri-refresh-line",
      title: "Resi",
      text: "Hai 30 giorni per cambiare idea. Resi gratuiti dal sito o nei punti vendita aderenti.",
    },
    {
      icon: "ri-shield-check-line",
      title: "Garanzia",
      text: "Tutti i nostri prodotti sono coperti da garanzia ufficiale Nike di 2 anni sui difetti di fabbricazione.",
    },
  ];

  return (
    <div ref={containerRef}>
      {/* HERO */}
      <section className="w-full bg-gradient-to-br from-[#0a0a0a] via-[#171717] to-black pt-28 sm:pt-32 lg:pt-40 pb-12 lg:pb-20 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb
            items={[{ label: "Home", to: "/" }, { label: "Contatti" }]}
          />
          <span className="contact-text text-white/50 text-xs sm:text-sm tracking-[3px] uppercase">
            Parla con noi
          </span>
          <h1 className="contact-title text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] font-black uppercase text-white leading-[1.05] mt-3 lg:mt-5 tracking-[-1px] lg:tracking-[-2px]">
            Contattaci.
          </h1>
          <div
            className="contact-divider h-[2px] w-48 sm:w-64 lg:w-80 mt-5"
            style={{ background: "linear-gradient(to right, #fff, transparent)" }}
          />
          <p className="contact-text text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed mt-5 lg:mt-7 max-w-2xl">
            Siamo qui per aiutarti. Compila il modulo o usa uno dei canali qui sotto: rispondiamo in massimo 24 ore lavorative.
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="w-full bg-[#0a0a0a] py-12 lg:py-20 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12">
          {/* FORM */}
          <div className="contact-form bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white leading-tight">
              Scrivici.
            </h2>
            <p className="text-white/60 text-sm mt-2 mb-6 lg:mb-8">
              Compila il modulo, ti risponderemo entro 24 ore lavorative.
            </p>

            {submitted && (
              <div className="bg-green-500/15 border border-green-400/40 text-green-200 rounded-xl p-4 mb-5 flex items-start gap-3">
                <i className="ri-check-line text-xl mt-0.5" />
                <div className="text-sm">
                  <p className="font-bold">Messaggio inviato con successo</p>
                  <p className="text-green-200/80 mt-1">
                    Ti contatteremo al più presto all'indirizzo email fornito.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                <Field
                  label="Nome e cognome"
                  required
                  error={errors.name}
                >
                  <input
                    type="text"
                    value={form.name}
                    onChange={handleChange("name")}
                    placeholder="Mario Rossi"
                    className="w-full bg-white/10 border border-white/15 focus:border-white/40 outline-none rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 transition-colors"
                  />
                </Field>

                <Field
                  label="Email"
                  required
                  error={errors.email}
                >
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleChange("email")}
                    placeholder="mario.rossi@esempio.it"
                    className="w-full bg-white/10 border border-white/15 focus:border-white/40 outline-none rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 transition-colors"
                  />
                </Field>
              </div>

              <Field label="Argomento" required>
                <select
                  value={form.subject}
                  onChange={handleChange("subject")}
                  className="w-full bg-white/10 border border-white/15 focus:border-white/40 outline-none rounded-xl px-4 py-3 text-white text-sm cursor-pointer transition-colors"
                >
                  <option value="ordine">Domanda su un ordine</option>
                  <option value="prodotto">Informazioni su un prodotto</option>
                  <option value="reso">Reso o cambio</option>
                  <option value="press">Stampa e media</option>
                  <option value="lavoro">Lavora con noi</option>
                  <option value="altro">Altro</option>
                </select>
              </Field>

              <Field
                label="Messaggio"
                required
                error={errors.message}
              >
                <textarea
                  value={form.message}
                  onChange={handleChange("message")}
                  rows={5}
                  placeholder="Raccontaci come possiamo esserti utile..."
                  className="w-full bg-white/10 border border-white/15 focus:border-white/40 outline-none rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 resize-none transition-colors"
                />
              </Field>

              <button
                type="submit"
                className="w-full sm:w-auto bg-white text-black px-8 py-3.5 rounded-full text-sm font-extrabold uppercase tracking-[1.5px] hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
              >
                Invia messaggio
                <i className="ri-send-plane-fill" />
              </button>

              <p className="text-white/40 text-xs leading-relaxed pt-2">
                Inviando il modulo accetti la nostra Privacy Policy. I tuoi dati saranno trattati esclusivamente per rispondere alla tua richiesta.
              </p>
            </form>
          </div>

          {/* INFO */}
          <aside className="contact-info space-y-5 lg:space-y-6">
            <ContactCard
              icon="ri-map-pin-2-line"
              title="Sede Italia"
              lines={[
                "Nike Italy S.r.l.",
                "Via Senigallia 18/2",
                "20161 Milano (MI)",
              ]}
            />
            <ContactCard
              icon="ri-mail-line"
              title="Email"
              lines={["supporto@nike-sneaker.example.com", "press@nike-sneaker.example.com"]}
            />
            <ContactCard
              icon="ri-phone-line"
              title="Telefono"
              lines={["+39 02 1234 5678", "Lun–Ven 9:00–18:00"]}
            />
            <ContactCard
              icon="ri-customer-service-2-line"
              title="Headquarters"
              lines={[
                "One Bowerman Drive",
                "Beaverton, OR 97005",
                "United States",
              ]}
            />

            {/* Social */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-5 lg:p-6">
              <p className="text-white/50 text-xs tracking-[2px] uppercase mb-4">
                Seguici
              </p>
              <div className="flex gap-3 flex-wrap">
                {[
                  { icon: "ri-instagram-line", label: "Instagram" },
                  { icon: "ri-facebook-circle-line", label: "Facebook" },
                  { icon: "ri-twitter-line", label: "Twitter" },
                  { icon: "ri-youtube-line", label: "YouTube" },
                  { icon: "ri-tiktok-line", label: "TikTok" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all"
                  >
                    <i className={`${s.icon} text-lg`} />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* SUPPORT CARDS */}
      <section className="w-full bg-gradient-to-b from-[#0a0a0a] to-[#171717] py-16 lg:py-24 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 lg:mb-14">
            <span className="text-white/40 text-xs tracking-[3px] uppercase">Supporto</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white leading-tight mt-2">
              Tutto quello che ti serve.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {supportCards.map((s) => (
              <div
                key={s.title}
                className="support-card bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-7 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mb-4">
                  <i className={`${s.icon} text-2xl`} />
                </div>
                <h3 className="text-white text-xl font-black uppercase mb-2 leading-tight">
                  {s.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const Field = ({ label, required, error, children }) => (
  <div>
    <label className="text-white/70 text-xs tracking-[2px] uppercase mb-2 block">
      {label} {required && <span className="text-red-300">*</span>}
    </label>
    {children}
    {error && (
      <p className="text-red-300 text-xs mt-1.5 flex items-center gap-1">
        <i className="ri-error-warning-line" />
        {error}
      </p>
    )}
  </div>
);

const ContactCard = ({ icon, title, lines }) => (
  <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-5 lg:p-6 flex gap-4 items-start">
    <div className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center shrink-0">
      <i className={`${icon} text-xl`} />
    </div>
    <div>
      <p className="text-white/50 text-xs tracking-[2px] uppercase mb-1.5">{title}</p>
      {lines.map((line, i) => (
        <p key={i} className="text-white text-sm leading-relaxed">
          {line}
        </p>
      ))}
    </div>
  </div>
);

export default Contact;
