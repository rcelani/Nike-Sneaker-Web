import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ShoesDetails = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const headings = sectionRef.current?.querySelectorAll(".sd-heading");
    const paras = sectionRef.current?.querySelectorAll(".sd-para");
    const imgs = sectionRef.current?.querySelectorAll(".sd-img");

    headings?.forEach((h) => {
      gsap.fromTo(h, { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: h, start: "top 85%", toggleActions: "play none none reverse" },
      });
    });

    paras?.forEach((p) => {
      gsap.fromTo(p, { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, delay: 0.2, ease: "power2.out",
        scrollTrigger: { trigger: p, start: "top 88%", toggleActions: "play none none reverse" },
      });
    });

    imgs?.forEach((i, idx) => {
      gsap.fromTo(i, { x: idx % 2 === 0 ? -80 : 80, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1.1, ease: "power3.out",
        scrollTrigger: { trigger: i, start: "top 85%", toggleActions: "play none none reverse" },
      });
    });
  }, { scope: sectionRef });

  return (
    <div
      ref={sectionRef}
      className="min-h-screen w-screen rounded-t-4xl bg-gradient-to-br from-[#fafafa] via-[#e5e5e5] to-[#404040] py-10 lg:py-0 overflow-hidden"
    >
      {/* SECTION 1 */}
      <div className="w-full flex flex-col lg:flex-row items-center pt-6 lg:pt-20 gap-6 lg:gap-0">
        <div className="w-full lg:w-[50%] flex items-center justify-center lg:justify-start">
          <img className="sd-img h-40 sm:h-52 lg:h-60 lg:pl-2" src="/images/tempo-sole.png" alt="Suola in gomma testurizzata" />
        </div>

        <div className="w-full lg:w-[50%] px-6 lg:p-5 lg:pt-15 lg:pl-15">
          <div className="text-center lg:text-left">
            <h2 className="sd-heading text-3xl sm:text-4xl lg:text-6xl uppercase text-black/90 font-black">Supporto mediale</h2>
            <h2 className="sd-heading text-3xl sm:text-4xl lg:text-6xl uppercase text-black/90 font-black">sagomato in 3D</h2>
          </div>

          <div className="sd-para font-light w-full max-w-[600px] mx-auto lg:mx-0 lg:w-150 leading-7 mt-4 lg:mt-5 text-sm sm:text-base text-center lg:text-left">
            <p>
              Progettata per garantire aderenza anche sotto pressione, la suola esterna in gomma testurizzata offre trazione affidabile e lunga durata. Una suola in gomma realizzata con precisione assicura un appoggio sicuro, combinando resistenza e controllo reattivo sul terreno.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="mt-12 lg:mt-25 w-full flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-0">
        <div className="w-full lg:w-[50%] px-6 lg:p-5 lg:pt-15 lg:pl-15">
          <div className="lg:mt-10 text-center lg:text-left">
            <h2 className="sd-heading text-3xl sm:text-4xl lg:text-6xl uppercase text-black/90 font-black">Intersuola</h2>
            <h2 className="sd-heading text-3xl sm:text-4xl lg:text-6xl uppercase text-black/90 font-black">in Phylon iniettato</h2>
          </div>

          <div className="sd-para font-light w-full max-w-[600px] mx-auto lg:mx-0 lg:w-150 leading-7 mt-4 lg:mt-5 text-sm sm:text-base text-center lg:text-left">
            <p>
              L'ammortizzazione in Phylon iniettato assorbe gli impatti mantenendo una calzata leggera e reattiva. Pensata per il movimento, l'intersuola in Phylon offre comfort costante senza peso aggiunto.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[50%] flex items-center justify-center">
          <img className="sd-img h-56 sm:h-72 lg:h-100" src="/images/tempo-2.png" alt="Intersuola in Phylon iniettato" />
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="mt-12 lg:mt-25 w-full flex flex-col lg:flex-row items-center gap-6 lg:gap-0">
        <div className="w-full lg:w-[50%] flex items-center justify-center lg:justify-start">
          <img className="sd-img h-52 sm:h-72 lg:h-90 lg:pl-20" src="/images/tempo-3.png" alt="Rivestimento interno in mesh" />
        </div>

        <div className="w-full lg:w-[50%] px-6 lg:p-5 lg:pt-15 lg:pl-15">
          <div className="text-center lg:text-left">
            <h2 className="sd-heading text-3xl sm:text-4xl lg:text-6xl uppercase text-black/90 font-black">rivestimento interno</h2>
          </div>

          <div className="sd-para font-light w-full max-w-[600px] mx-auto lg:mx-0 lg:w-150 leading-7 mt-4 lg:mt-5 text-sm sm:text-base text-center lg:text-left">
            <p>
              Una fascia interna in mesh traspirante avvolge il piede offrendo una vestibilità aderente, simile a una calza, e comfort per tutto il giorno. La struttura leggera in mesh migliora la ventilazione, garantendo una sensazione sicura e adattiva.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 4 */}
      <div className="min-h-screen pt-12 lg:pt-20 w-full relative">
        <div className="h-full relative w-full">
          <h2 className="sd-heading text-4xl sm:text-5xl lg:text-7xl px-6 lg:pl-10 pb-6 lg:pb-10 font-black text-center lg:text-left">
            Risultati <br /> che confermano.
          </h2>

          <div className="lg:hidden flex flex-col items-center gap-6 px-6">
            <div className="relative flex items-center justify-center">
              <img className="h-32 sm:h-44 opacity-40" src="/images/nike-logo.png" alt="" />
              <img
                className="h-44 sm:h-60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[10deg] z-10"
                src="/images/tempo-4.png"
                alt="Nike Air More Uptempo"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-md mt-4">
              {["Eco Build", "Impact Foam", "Strong Stitch", "Rapid Dry", "Ultra Light", "Traction Grip"].map((tag) => (
                <div key={tag} className="bg-white rounded-full px-4 py-2 shadow-2xl">
                  <h3 className="font-black text-sm">{tag}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <img className="h-90 pl-50" src="/images/nike-logo.png" alt="" />
            <img className="h-90 absolute rotate-10 top-60 left-170 z-50" src="/images/tempo-4.png" alt="Nike Air More Uptempo" />
            <div className="absolute top-150 left-130 bg-white rounded-full px-5 py-2 shadow-2xl inline-block"><h3 className="font-black text-lg">Traction Grip</h3></div>
            <div className="absolute top-120 left-110 bg-white rounded-full px-5 py-2 shadow-2xl inline-block"><h3 className="font-black text-lg">Ultra Light</h3></div>
            <div className="absolute top-50 left-130 bg-white rounded-full px-5 py-2 shadow-2xl inline-block"><h3 className="font-black text-lg">Eco Build</h3></div>
            <div className="absolute top-20 left-200 bg-white rounded-full px-5 py-2 shadow-2xl inline-block"><h3 className="font-black text-lg">Impact Foam</h3></div>
            <div className="absolute top-60 left-280 bg-white rounded-full px-5 py-2 shadow-2xl inline-block"><h3 className="font-black text-lg">Strong Stitch</h3></div>
            <div className="absolute top-100 left-300 bg-white rounded-full px-5 py-2 shadow-2xl inline-block"><h3 className="font-black text-lg">Rapid Dry</h3></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoesDetails;
