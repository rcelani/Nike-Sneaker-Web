import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const ShoesDetails = () => {
  return (
    <div className="min-h-screen w-screen rounded-t-4xl bg-gradient-to-br from-[#fafafa] via-[#e5e5e5] to-[#404040] py-10 lg:py-0 overflow-hidden">

      {/* ================= SECTION 1 ================= */}
      <div className="w-full flex flex-col lg:flex-row items-center pt-6 lg:pt-20 gap-6 lg:gap-0">
        <div className="shoes-div w-full lg:w-[50%] flex items-center justify-center lg:justify-start">
          <img className="h-40 sm:h-52 lg:h-60 lg:pl-2" src="/images/tempo-sole.png" alt="" />
        </div>

        <div className="w-full lg:w-[50%] px-6 lg:p-5 lg:pt-15 lg:pl-15">
          <div className="heading text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl uppercase text-black/90 font-black">
              Supporto mediale
            </h1>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl uppercase text-black/90 font-black">
              sagomato in 3D
            </h1>
          </div>

          <div className="para font-light w-full max-w-[600px] mx-auto lg:mx-0 lg:w-150 leading-7 mt-4 lg:mt-5 text-sm sm:text-base text-center lg:text-left">
            <p>
              Progettata per garantire aderenza anche sotto pressione, 
              la suola esterna in gomma testurizzata offre trazione affidabile e lunga durata. 
              Una suola in gomma realizzata con precisione assicura un appoggio sicuro, 
              combinando resistenza e controllo reattivo sul terreno. Suola esterna in gomma resistente, 
              costruita per il massimo grip e controllo.
            </p>
          </div>
        </div>
      </div>

      {/* ================= SECTION 2 ================= */}
      <div className="mt-12 lg:mt-25 w-full flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-0">
        <div className="w-full lg:w-[50%] px-6 lg:p-5 lg:pt-15 lg:pl-15">
          <div className="heading lg:mt-10 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl uppercase text-black/90 font-black">
              Intersuola
            </h1>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl uppercase text-black/90 font-black">
              in Phylon iniettato
            </h1>
          </div>

          <div className="para font-light w-full max-w-[600px] mx-auto lg:mx-0 lg:w-150 leading-7 mt-4 lg:mt-5 text-sm sm:text-base text-center lg:text-left">
            <p>
              L'ammortizzazione in Phylon iniettato assorbe gli impatti mantenendo una calzata leggera e reattiva.
              Pensata per il movimento, l'intersuola in Phylon offre comfort costante senza peso aggiunto. 
              Progettato per gestire gli urti, il nucleo in Phylon iniettato garantisce transizioni fluide e stabili.
            </p>
          </div>
        </div>

        <div className="shoes-div w-full lg:w-[50%] flex items-center justify-center">
          <img className="h-56 sm:h-72 lg:h-100" src="/images/tempo-2.png" alt="" />
        </div>
      </div>

      {/* ================= SECTION 3 ================= */}
      <div className="mt-12 lg:mt-25 w-full flex flex-col lg:flex-row items-center gap-6 lg:gap-0">
        <div className="shoes-div w-full lg:w-[50%] flex items-center justify-center lg:justify-start">
          <img className="h-52 sm:h-72 lg:h-90 lg:pl-20" src="/images/tempo-3.png" alt="" />
        </div>

        <div className="w-full lg:w-[50%] px-6 lg:p-5 lg:pt-15 lg:pl-15">
          <div className="heading text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl uppercase text-black/90 font-black">
              rivestimento interno
            </h1>
          </div>

          <div className="para font-light w-full max-w-[600px] mx-auto lg:mx-0 lg:w-150 leading-7 mt-4 lg:mt-5 text-sm sm:text-base text-center lg:text-left">
            <p>
              Una fascia interna in mesh traspirante avvolge il piede offrendo una vestibilità aderente, 
              simile a una calza, e comfort per tutto il giorno. 
              La struttura leggera in mesh migliora la ventilazione, garantendo una sensazione sicura e adattiva. 
              La calzata interna in mesh tecnico assicura traspirabilità mirata e stabilità durante il movimento.
            </p>
          </div>
        </div>
      </div>

      {/* ================= SECTION 4 - Risultati ================= */}
      <div className="min-h-screen pt-12 lg:pt-20 w-full relative">
        <div className="h-full relative w-full">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl px-6 lg:pl-10 pb-6 lg:pb-10 font-black text-center lg:text-left">
            Risultati <br /> che confermano.
          </h1>

          {/* ===== MOBILE LAYOUT ===== */}
          <div className="lg:hidden flex flex-col items-center gap-6 px-6">
            <div className="relative flex items-center justify-center">
              <img className="h-32 sm:h-44 opacity-40" src="/images/nike-logo.png" alt="" />
              <img 
                className="h-44 sm:h-60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[10deg] z-10"
                src="/images/tempo-4.png" 
                alt="" 
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-md mt-4">
              <div className="bg-white rounded-full px-4 py-2 shadow-2xl">
                <h1 className="font-black text-sm">Eco Build</h1>
              </div>
              <div className="bg-white rounded-full px-4 py-2 shadow-2xl">
                <h1 className="font-black text-sm">Impact Foam</h1>
              </div>
              <div className="bg-white rounded-full px-4 py-2 shadow-2xl">
                <h1 className="font-black text-sm">Strong Stitch</h1>
              </div>
              <div className="bg-white rounded-full px-4 py-2 shadow-2xl">
                <h1 className="font-black text-sm">Rapid Dry</h1>
              </div>
              <div className="bg-white rounded-full px-4 py-2 shadow-2xl">
                <h1 className="font-black text-sm">Ultra Light</h1>
              </div>
              <div className="bg-white rounded-full px-4 py-2 shadow-2xl">
                <h1 className="font-black text-sm">Traction Grip</h1>
              </div>
            </div>
          </div>

          {/* ===== DESKTOP LAYOUT (original absolute positioning) ===== */}
          <div className="hidden lg:block">
            <img className="h-90 pl-50 pt" src="/images/nike-logo.png" alt="" />

            <img
              className="h-90 absolute rotate-10 top-60 left-170 z-50"
              src="/images/tempo-4.png"
              alt=""
            />

            <div className="absolute top-150 left-130 bg-white rounded-full px-5 py-2 shadow-2xl inline-block">
              <h1 className="font-black text-lg">Traction Grip</h1>
            </div>

            <div className="absolute top-120 left-110 bg-white rounded-full px-5 py-2 shadow-2xl inline-block">
              <h1 className="font-black text-lg">Ultra Light</h1>
            </div>

            <div className="absolute top-50 left-130 bg-white rounded-full px-5 py-2 shadow-2xl inline-block">
              <h1 className="font-black text-lg">Eco Build</h1>
            </div>

            <div className="absolute top-20 left-200 bg-white rounded-full px-5 py-2 shadow-2xl inline-block">
              <h1 className="font-black text-lg">Impact Foam</h1>
            </div>
            <div className="absolute top-60 left-280 bg-white rounded-full px-5 py-2 shadow-2xl inline-block">
              <h1 className="font-black text-lg">Strong Stitch</h1>
            </div>

            <div className="absolute top-100 left-300 bg-white rounded-full px-5 py-2 shadow-2xl inline-block">
              <h1 className="font-black text-lg">Rapid Dry</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoesDetails;
