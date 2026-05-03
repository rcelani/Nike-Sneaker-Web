import { productImages } from "./media.js";

// =============================================================
// PRODUCTS DATA
// =============================================================
// Ogni prodotto ha:
// - category: basketball | tennis | running | lifestyle | training | football
// - gender: uomo | donna | bambino
// - type: shoe | apparel | racket | equipment | accessory
// =============================================================

export const products = [
  // ============== BASKETBALL - SHOES ==============
  {
    id: "air-more-uptempo-black",
    slug: "air-more-uptempo-black",
    name: "Air More Uptempo",
    color: "Nero",
    category: "basketball",
    gender: "uomo",
    type: "shoe",
    price: 229,
    image: "/images/tempo.png",
    gallery: [
      "/images/tempo.png",
      "/images/tempo-sole.png",
      "/images/tempo-2.png",
      "/images/tempo-3.png",
      "/images/tempo-4.png",
    ],
    bg: "from-[#2b2b2b] via-[#121212] to-[#000000]",
    rotate: "-20deg",
    scale: 0.95,
    badges: ["Premium", "2026", "Bestseller"],
    rating: 4.8,
    reviews: 142,
    inStock: true,
    sizes: [40, 41, 42, 43, 44, 45, 46],
    shortDescription:
      "Iconica silhouette anni '90 reinventata per il gioco moderno con cushioning Air-Sole a tutta lunghezza.",
    description:
      "L'Air More Uptempo riporta in scena la sneaker simbolo dei campetti degli anni '90. Il maxi logo AIR sui lati è oggi un'icona dello streetwear globale. La tomaia in pelle pieno fiore offre durabilità e supporto, mentre la rivoluzionaria unità Air-Sole a tutta lunghezza assorbe gli impatti più duri offrendoti reattività ad ogni stacco.",
    features: [
      {
        title: "Supporto mediale sagomato in 3D",
        text: "Progettata per garantire aderenza anche sotto pressione, la suola esterna in gomma testurizzata offre trazione affidabile e lunga durata.",
      },
      {
        title: "Intersuola in Phylon iniettato",
        text: "L'ammortizzazione in Phylon iniettato assorbe gli impatti mantenendo una calzata leggera e reattiva.",
      },
      {
        title: "Rivestimento interno in mesh",
        text: "Una fascia interna in mesh traspirante avvolge il piede offrendo una vestibilità aderente, simile a una calza.",
      },
    ],
    seoTitle: "Air More Uptempo Nero | Scarpe Basket Premium Nike",
    seoDescription:
      "Scopri Nike Air More Uptempo Nero. Tomaia in pelle, unità Air-Sole a tutta lunghezza, iconico logo laterale. €229.",
    releaseYear: 2026,
    newArrival: true,
  },

  {
    id: "air-jordan-18-green",
    slug: "air-jordan-18-green",
    name: "Air Jordan 18",
    color: "Verde",
    category: "basketball",
    gender: "uomo",
    type: "shoe",
    price: 199,
    image: "/images/jordan.png",
    gallery: [
      "/images/jordan.png",
      "/images/tempo-sole.png",
      "/images/tempo-2.png",
      "/images/tempo-3.png",
      "/images/tempo-4.png",
    ],
    bg: "from-[#a8ff00] via-[#3a7d2c] to-[#041b12]",
    rotate: "20deg",
    translateY: "60px",
    scale: 1.1,
    badges: ["Premium", "2026", "Limited"],
    rating: 4.9,
    reviews: 287,
    inStock: true,
    sizes: [40, 41, 42, 43, 44, 45, 46],
    shortDescription:
      "Il capitolo finale della leggenda NBA. Linee da supercar italiana, dettagli da gioielleria.",
    description:
      "La Air Jordan 18 è una delle sneaker più raffinate e lussuose della linea Jordan, progettata per rappresentare il capitolo finale della leggendaria carriera NBA di Michael Jordan. Le linee si ispirano alle supercar italiane degli anni 2000: profilo basso, cuciture a vista e una shroud removibile in cordura sulla tomaia.",
    features: [
      {
        title: "Tomaia in pelle premium",
        text: "Pelle pieno fiore con dettagli traforati e cuciture a contrasto in stile gioielleria italiana.",
      },
      {
        title: "Zoom Air full-length",
        text: "Cushioning Zoom Air a tutta lunghezza per la massima reattività sul parquet.",
      },
      {
        title: "Shroud rimovibile",
        text: "Copertura esterna in cordura tecnica removibile, ispirata al design automotive.",
      },
    ],
    seoTitle: "Air Jordan 18 Verde | Sneaker Basket Edizione Limitata",
    seoDescription:
      "Acquista Nike Air Jordan 18 Verde. Tomaia in pelle premium, Zoom Air full-length, shroud rimovibile. €199.",
    releaseYear: 2026,
    newArrival: true,
  },

  {
    id: "air-dt-max-red",
    slug: "air-dt-max-96-rosso",
    name: "Air DT Max '96",
    color: "Rosso",
    category: "basketball",
    gender: "uomo",
    type: "shoe",
    price: 219,
    image: "/images/dtmax.png",
    gallery: [
      "/images/dtmax.png",
      "/images/tempo-sole.png",
      "/images/tempo-2.png",
      "/images/tempo-3.png",
      "/images/tempo-4.png",
    ],
    bg: "from-[#ff4d4d] via-[#c1121f] to-[#2b0000]",
    rotate: "-20deg",
    scale: 0.85,
    badges: ["Cross-Training", "Heritage"],
    rating: 4.7,
    reviews: 96,
    inStock: true,
    sizes: [40, 41, 42, 43, 44, 45, 46],
    shortDescription:
      "Il cross-trainer di Deion Sanders. Versatile, stabile, iconico.",
    description:
      "La Air DT Max '96 fu disegnata per Deion 'Prime Time' Sanders, l'unico atleta ad aver giocato sia in NFL che in MLB. Costruita per supportare allenamenti multidisciplinari, combina la stabilità delle scarpe da training con il cushioning Max Air dei modelli da basket.",
    features: [
      {
        title: "Max Air nel tallone",
        text: "Unità Max Air nel tallone per assorbire gli impatti dei movimenti laterali e degli allenamenti pliometrici.",
      },
      {
        title: "Supporto laterale rinforzato",
        text: "Cinturino esterno in TPU per stabilizzare il mediopiede durante movimenti rapidi.",
      },
      {
        title: "Suola in gomma carbonio",
        text: "Suola esterna in gomma carbonio ad alta densità per trazione e durata su qualsiasi superficie.",
      },
    ],
    seoTitle: "Air DT Max '96 Rosso | Scarpe Cross-Training Nike",
    seoDescription:
      "Nike Air DT Max '96 Rosso, il cross-trainer di Deion Sanders. Max Air, supporto laterale rinforzato. €219.",
    releaseYear: 2026,
  },

  {
    id: "court-vision-purple",
    slug: "court-vision-purple",
    name: "Nike Court Vision",
    color: "Viola Royal",
    category: "basketball",
    gender: "bambino",
    type: "shoe",
    price: 159,
    image: "/images/scarpa_basket.png",
    gallery: ["/images/scarpa_basket.png", "/images/tempo-sole.png"],
    bg: "from-[#7e22ce] via-[#4c1d95] to-[#1e0436]",
    rotate: "0deg",
    scale: 1,
    badges: ["Performance", "Mid-Top"],
    rating: 4.6,
    reviews: 73,
    inStock: true,
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    shortDescription:
      "Profilo viola elettrico con accenti rosa. Mid-top per supporto alla caviglia, suola Zoom reattiva.",
    description:
      "Le Nike Court Vision sono pensate per il giocatore esplosivo che cerca aggressività visiva ed esecuzione tecnica. Costruzione mid-top con sistema di chiusura interno, schiuma Zoom Air estesa lungo l'avampiede, tomaia in mesh ingegnerizzato con overlay TPU per il supporto laterale durante i tagli rapidi. Il colorway Royal Purple con accenti rosa neon le rende immediatamente riconoscibili sul campo.",
    features: [
      {
        title: "Costruzione mid-top",
        text: "Profilo medio per stabilità alla caviglia senza sacrificare la mobilità nei cambi di direzione.",
      },
      {
        title: "Zoom Air avampiede",
        text: "Unità Zoom Air estesa lungo l'avampiede per spinta reattiva sui tagli e sui contropiede.",
      },
      {
        title: "Overlay TPU laterali",
        text: "Rinforzi termoformati per contenere il piede nei movimenti laterali esplosivi.",
      },
    ],
    seoTitle: "Nike Court Vision Viola | Scarpe Basket Mid-Top",
    seoDescription:
      "Nike Court Vision in colorway Viola Royal con accenti rosa. Mid-top, Zoom Air avampiede, overlay TPU. €159.",
    releaseYear: 2026,
  },

  // ============== BASKETBALL - APPAREL ==============
  {
    id: "lakers-jersey-77",
    slug: "lakers-jersey-77",
    name: "Lakers Icon Edition Jersey #77",
    color: "Giallo / Viola",
    category: "basketball",
    gender: "uomo",
    type: "apparel",
    price: 119,
    image: "/images/lakers.png",
    gallery: ["/images/lakers.png"],
    bg: "from-[#fbbf24] via-[#a16207] to-[#1c1917]",
    rotate: "0deg",
    scale: 1,
    badges: ["NBA Official", "Icon Edition"],
    rating: 4.9,
    reviews: 412,
    inStock: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    shortDescription:
      "Maglia ufficiale NBA dei Los Angeles Lakers, Icon Edition. Tessuto Dri-FIT in mesh ingegnerizzato.",
    description:
      "La maglia ufficiale dei Los Angeles Lakers in Icon Edition è il pezzo definitivo per ogni fan. Tessuto Dri-FIT in mesh che mantiene il corpo asciutto e fresco anche durante le partite più intense. Numero termoadesivo a contrasto, dettagli applicati con precisione gioielliera. Lo stesso stile indossato dai campioni in campo. La grafica 'Leave a Legacy' celebra l'eredità della franchigia californiana con il dorato e viola che rendono questa divisa una delle più iconiche nella storia dell'NBA.",
    features: [
      {
        title: "Tessuto Dri-FIT",
        text: "Tecnologia Nike Dri-FIT che assorbe il sudore e lo evacua dal tessuto per mantenerti asciutto.",
      },
      {
        title: "Mesh ingegnerizzato",
        text: "Aperture mirate nelle zone ad alto sviluppo di calore per massima ventilazione.",
      },
      {
        title: "Dettagli applicati",
        text: "Numero, nome e logo squadra applicati con tecnica heat-seal di precisione.",
      },
    ],
    seoTitle: "Lakers Jersey #77 Icon Edition | Maglia NBA Ufficiale",
    seoDescription:
      "Maglia ufficiale Los Angeles Lakers Icon Edition, numero 77. Dri-FIT, mesh ingegnerizzato. €119.",
    releaseYear: 2026,
  },

  {
    id: "warriors-shorts-white",
    slug: "warriors-swingman-shorts",
    name: "Warriors Swingman Shorts",
    color: "Bianco / Royal",
    category: "basketball",
    gender: "uomo",
    type: "apparel",
    price: 89,
    image: "/images/pantaloncini_basket.png",
    gallery: ["/images/pantaloncini_basket.png"],
    bg: "from-[#1d4ed8] via-[#1e3a8a] to-[#0c1e4a]",
    rotate: "0deg",
    scale: 1,
    badges: ["NBA Official", "Swingman"],
    rating: 4.8,
    reviews: 198,
    inStock: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    shortDescription:
      "Pantaloncini ufficiali NBA dei Golden State Warriors, versione Swingman. Stile da campo, comfort tutto il giorno.",
    description:
      "I pantaloncini Swingman dei Golden State Warriors riproducono fedelmente l'uniforme da gioco della squadra di San Francisco. Tessuto Dri-FIT in mesh leggero e traspirante, vita elastica con coulisse interna per la massima vestibilità, dettagli laterali in giallo Warriors a contrasto sul bianco. Il taglio 'swingman' è leggermente più ampio rispetto alla versione 'authentic' indossata dagli atleti, pensato per il comfort di chi li vuole indossare anche fuori dal campo. La 'W' di San Francisco campeggia sulla parte anteriore.",
    features: [
      {
        title: "Vestibilità Swingman",
        text: "Taglio leggermente più ampio rispetto alla versione authentic, per comfort e libertà di movimento.",
      },
      {
        title: "Coulisse interna",
        text: "Vita elastica con coulisse regolabile per personalizzare la vestibilità.",
      },
      {
        title: "Mesh Dri-FIT",
        text: "Mesh leggero che evacua il sudore e mantiene il corpo asciutto.",
      },
    ],
    seoTitle: "Warriors Shorts Swingman | Pantaloncini NBA Ufficiali",
    seoDescription:
      "Pantaloncini Swingman Golden State Warriors. Dri-FIT, mesh leggero, vestibilità ampia. €89.",
    releaseYear: 2026,
  },

  // ============== TENNIS - SHOES ==============
  {
    id: "court-zoom-vapor-white",
    slug: "court-zoom-vapor-white",
    name: "NikeCourt Air Zoom Vapor",
    color: "Bianco",
    category: "tennis",
    gender: "uomo",
    type: "shoe",
    price: 159,
    image: "/images/dtmax.png",
    gallery: [
      "/images/dtmax.png",
      "/images/tempo-sole.png",
      "/images/tempo-2.png",
      "/images/tempo-3.png",
    ],
    bg: "from-[#ffffff] via-[#d4d4d8] to-[#52525b]",
    rotate: "-15deg",
    scale: 0.9,
    badges: ["Tennis Pro", "2026"],
    rating: 4.7,
    reviews: 211,
    inStock: true,
    sizes: [40, 41, 42, 43, 44, 45, 46],
    shortDescription:
      "La scarpa preferita dai pro del circuito ATP. Velocità, controllo e stabilità.",
    description:
      "La NikeCourt Air Zoom Vapor è progettata per il giocatore di tennis che cerca esplosività ad ogni cambio di direzione. La tomaia leggera in mesh tecnico Dynamic Fit avvolge il piede senza compromettere la traspirabilità. L'unità Zoom Air nell'avampiede offre risposta immediata sugli scatti.",
    features: [
      {
        title: "Zoom Air nell'avampiede",
        text: "Risposta immediata sugli scatti e nei colpi in uscita dal palleggio.",
      },
      {
        title: "Drag-On Toe",
        text: "Rinforzo in gomma sulla punta per proteggere durante le scivolate e i servizi kick.",
      },
      {
        title: "Suola Multi-Surface",
        text: "Pattern a spina di pesce ottimizzato per terra battuta, cemento e sintetico.",
      },
    ],
    seoTitle: "NikeCourt Air Zoom Vapor Bianco | Scarpe Tennis Pro",
    seoDescription:
      "Scarpe da tennis Nike Court Air Zoom Vapor. Zoom Air, suola multi-surface. €159.",
    releaseYear: 2026,
    newArrival: true,
  },

  {
    id: "court-zoom-nxt-green",
    slug: "court-zoom-nxt-verde",
    name: "NikeCourt Zoom NXT",
    color: "Verde",
    category: "tennis",
    gender: "donna",
    type: "shoe",
    price: 139,
    originalPrice: 169,
    image: "/images/jordan.png",
    gallery: ["/images/jordan.png", "/images/tempo-sole.png", "/images/tempo-2.png"],
    bg: "from-[#84cc16] via-[#365314] to-[#0c1a01]",
    rotate: "15deg",
    scale: 1,
    badges: ["Outlet", "Tennis", "Comfort"],
    rating: 4.6,
    reviews: 154,
    inStock: true,
    sizes: [36, 37, 38, 39, 40, 41, 42],
    shortDescription:
      "Comfort tutto il giorno per il tennis amatoriale, dal primo all'ultimo set.",
    description:
      "La NikeCourt Zoom NXT è pensata per la giocatrice amatoriale che passa ore in campo. Tomaia in mesh ingegnerizzato che offre traspirabilità mirata nelle zone calde, intersuola Cushlon ST per ammortizzazione morbida e Zoom Air strip nel tallone per la spinta sui movimenti di avanzamento.",
    features: [
      {
        title: "Cushlon ST",
        text: "Schiuma morbida e reattiva per comfort prolungato sui campi.",
      },
      {
        title: "Mesh ingegnerizzato",
        text: "Traspirabilità mirata nelle zone ad alto sviluppo di calore.",
      },
      {
        title: "Battistrada XDR",
        text: "Gomma rinforzata per maggiore durata sui campi outdoor in cemento.",
      },
    ],
    seoTitle: "NikeCourt Zoom NXT Verde | Tennis Donna Comfort",
    seoDescription:
      "NikeCourt Zoom NXT donna in verde. Cushlon ST, Zoom Air, battistrada XDR. €139.",
    releaseYear: 2026,
  },

  // ============== TENNIS - RACKETS ==============
  {
    id: "head-boom-mp",
    slug: "head-boom-mp",
    name: "HEAD Boom MP 2026",
    color: "Mint / Black",
    category: "tennis",
    gender: "uomo",
    type: "racket",
    price: 249,
    image: "/images/racchetta_1.png",
    gallery: ["/images/racchetta_1.png"],
    bg: "from-[#5eead4] via-[#0f766e] to-[#042f2e]",
    rotate: "0deg",
    scale: 1,
    badges: ["Pro Series", "Graphene"],
    rating: 4.8,
    reviews: 156,
    inStock: true,
    sizes: ["L1", "L2", "L3", "L4"],
    weight: "295g",
    headSize: "100 sq in",
    shortDescription:
      "Telaio in Graphene per potenza e comfort. La scelta degli all-round players sul circuito ATP.",
    description:
      "La HEAD Boom MP 2026 è la racchetta che ha rivoluzionato il segmento all-round del tennis professionistico. Costruita con l'esclusiva tecnologia Graphene 360+, offre il perfetto equilibrio tra potenza, controllo e comfort. Il bilanciamento neutro a 32 cm dal manico la rende incredibilmente versatile: efficace sia da fondo che a rete. Il colorway mint con dettagli neri ne fa una delle racchette esteticamente più riconoscibili in commercio.",
    features: [
      {
        title: "Graphene 360+",
        text: "Tecnologia in fibra di grafene che aumenta la rigidità del telaio senza aggiungere peso, traducendosi in più potenza per swing.",
      },
      {
        title: "Spiral Fibers",
        text: "Fibre laterali nel cuore della racchetta che migliorano il comfort all'impatto e riducono le vibrazioni.",
      },
      {
        title: "Bilanciamento neutro",
        text: "32 cm dal manico per versatilità assoluta sia da fondo che a rete.",
      },
    ],
    seoTitle: "HEAD Boom MP 2026 | Racchetta Tennis Pro Graphene",
    seoDescription:
      "HEAD Boom MP 2026, racchetta da tennis con Graphene 360+. Peso 295g, piatto 100. €249.",
    releaseYear: 2026,
  },

  {
    id: "yonex-vcore-100",
    slug: "yonex-vcore-100",
    name: "Yonex VCore 100",
    color: "White / Red",
    category: "tennis",
    gender: "donna",
    type: "racket",
    price: 219,
    image: "/images/racchetta_2.png",
    gallery: ["/images/racchetta_2.png"],
    bg: "from-[#fafafa] via-[#a8a29e] to-[#1c1917]",
    rotate: "0deg",
    scale: 1,
    badges: ["Spin Series", "Isometric"],
    rating: 4.7,
    reviews: 198,
    inStock: true,
    sizes: ["L1", "L2", "L3", "L4"],
    weight: "300g",
    headSize: "100 sq in",
    shortDescription:
      "La racchetta del top spin. Telaio Isometric per sweet spot esteso e potenza in rotazione.",
    description:
      "La Yonex VCore 100 è la racchetta progettata per chi vive di top spin. Il telaio Isometric brevettato Yonex offre un sweet spot del 7% più ampio rispetto alle racchette tradizionali a forma ovale, traducendosi in maggior tolleranza sui colpi non perfettamente centrati. Il pattern di incordatura 16x19 enfatizza la rotazione, rendendo questa racchetta ideale per chi gioca con gli effetti pesanti tipo Nadal o Alcaraz.",
    features: [
      {
        title: "Telaio Isometric",
        text: "Forma squadrata brevettata Yonex con sweet spot del 7% più ampio rispetto alle racchette ovali.",
      },
      {
        title: "Pattern 16x19",
        text: "Schema di incordatura aperto per massima rotazione e effetti pronunciati.",
      },
      {
        title: "2G-Namd Speed",
        text: "Materiale composito che si flette all'impatto e rilascia energia esplosiva sulla palla.",
      },
    ],
    seoTitle: "Yonex VCore 100 | Racchetta Tennis Spin Isometric",
    seoDescription:
      "Yonex VCore 100, racchetta top spin con telaio Isometric. Peso 300g, pattern 16x19. €219.",
    releaseYear: 2026,
  },

  {
    id: "head-prestige-pro",
    slug: "head-prestige-pro",
    name: "HEAD Prestige Pro",
    color: "Black / Bordeaux",
    category: "tennis",
    gender: "uomo",
    type: "racket",
    price: 269,
    image: "/images/racchetta_3.png",
    gallery: ["/images/racchetta_3.png"],
    bg: "from-[#7f1d1d] via-[#450a0a] to-[#0a0202]",
    rotate: "0deg",
    scale: 1,
    badges: ["Pro Tour", "Heritage"],
    rating: 4.9,
    reviews: 134,
    inStock: true,
    sizes: ["L1", "L2", "L3", "L4"],
    weight: "315g",
    headSize: "98 sq in",
    shortDescription:
      "L'icona del tennis tecnico. Telaio compatto, controllo chirurgico, sensazione pura.",
    description:
      "La HEAD Prestige Pro è la racchetta dei puristi del tennis. Telaio in Auxetic con piatto da 98 pollici quadrati per il massimo controllo, profilo costante per una sensazione di gioco pulita ad ogni impatto. La verniciatura nera con dettagli bordeaux richiama l'eleganza delle versioni storiche degli anni '90, indossate dai campioni più tecnici della loro epoca. Pesa 315g a vuoto: una racchetta per giocatori esperti che cercano sensibilità e precisione assolute.",
    features: [
      {
        title: "Tecnologia Auxetic",
        text: "Materiale che si comporta in modo non convenzionale all'impatto, migliorando il feeling sulla palla.",
      },
      {
        title: "Piatto 98 sq in",
        text: "Piatto compatto per il massimo controllo sui colpi tecnici e a rete.",
      },
      {
        title: "Profilo costante",
        text: "Spessore uniforme del telaio per sensazione di gioco classica e pulita.",
      },
    ],
    seoTitle: "HEAD Prestige Pro | Racchetta Tennis Tecnica Auxetic",
    seoDescription:
      "HEAD Prestige Pro racchetta tecnica con tecnologia Auxetic. Peso 315g, piatto 98. €269.",
    releaseYear: 2026,
  },

  // ============== RUNNING ==============
  {
    id: "air-zoom-pegasus-41",
    slug: "air-zoom-pegasus-41",
    name: "Air Zoom Pegasus 41",
    color: "Nero",
    category: "running",
    gender: "uomo",
    type: "shoe",
    price: 149,
    image: "/images/tempo.png",
    gallery: ["/images/tempo.png", "/images/tempo-sole.png", "/images/tempo-2.png"],
    bg: "from-[#404040] via-[#171717] to-[#000000]",
    rotate: "-10deg",
    scale: 0.9,
    badges: ["Running", "Daily Trainer"],
    rating: 4.8,
    reviews: 423,
    inStock: true,
    sizes: [40, 41, 42, 43, 44, 45, 46],
    shortDescription:
      "Il cavallo da battaglia. 41 generazioni di running, ora con ReactX.",
    description:
      "La Pegasus è la scarpa da running più amata di Nike, alla sua 41esima iterazione. Per il 2026 introduce la nuova schiuma ReactX, che restituisce il 13% di energia in più rispetto al React precedente. Doppia unità Zoom Air (avampiede e tallone) per la spinta, tomaia in mesh ingegnerizzato e calzata Flyknit nel mediopiede.",
    features: [
      {
        title: "Schiuma ReactX",
        text: "Nuova mescola che offre il 13% in più di energy return rispetto al React tradizionale.",
      },
      {
        title: "Doppio Zoom Air",
        text: "Unità Zoom Air separate nell'avampiede e nel tallone per spinta e ammortizzazione mirata.",
      },
      {
        title: "Mesh ingegnerizzato",
        text: "Tomaia traspirante con zone di supporto strategiche e overlay sul tallone.",
      },
    ],
    seoTitle: "Nike Air Zoom Pegasus 41 Nero | Daily Trainer Running",
    seoDescription:
      "Air Zoom Pegasus 41 con schiuma ReactX e doppio Zoom Air. €149.",
    releaseYear: 2026,
  },

  {
    id: "react-infinity-run-lime",
    slug: "react-infinity-run-lime",
    name: "React Infinity Run",
    color: "Verde Lime",
    category: "running",
    gender: "donna",
    type: "shoe",
    price: 169,
    image: "/images/jordan.png",
    gallery: ["/images/jordan.png", "/images/tempo-3.png"],
    bg: "from-[#bef264] via-[#65a30d] to-[#1a2e05]",
    rotate: "10deg",
    scale: 1,
    badges: ["Running", "Stability"],
    rating: 4.7,
    reviews: 198,
    inStock: true,
    sizes: [36, 37, 38, 39, 40, 41, 42],
    shortDescription:
      "Progettata per ridurre gli infortuni. Più appoggio, più chilometri, meno pause.",
    description:
      "La React Infinity Run è nata per accompagnarti nelle lunghe distanze riducendo il rischio di infortunio. Geometria ampia del battistrada per maggiore stabilità, cushioning React iperreattivo e sistema di tenuta Flywire integrato. Studi indipendenti hanno dimostrato una riduzione del 52% degli infortuni rispetto al modello precedente.",
    features: [
      {
        title: "Battistrada largo",
        text: "Base d'appoggio più ampia per stabilità superiore in fase di transizione.",
      },
      {
        title: "Schiuma React",
        text: "Morbida ma reattiva: assorbe gli impatti restituendo energia ad ogni passo.",
      },
      {
        title: "Flywire integrato",
        text: "Sistema di tenuta interno che adatta la calzata al volume del piede.",
      },
    ],
    seoTitle: "Nike React Infinity Run Donna Verde Lime",
    seoDescription:
      "React Infinity Run donna riduce il rischio di infortunio del 52%. Stability shoe. €169.",
    releaseYear: 2026,
  },


  // ============== TRAINING ==============
  {
    id: "metcon-10-black-volt",
    slug: "metcon-10-black-volt",
    name: "Nike Metcon 10",
    color: "Nero / Volt",
    category: "training",
    gender: "uomo",
    type: "shoe",
    price: 159,
    image: productImages.shoes.dtMax,
    gallery: [productImages.shoes.dtMax, productImages.shoes.tempoSide],
    bg: "from-[#0f172a] via-[#334155] to-[#84cc16]",
    rotate: "-12deg",
    scale: 0.92,
    badges: ["Training", "Stability", "Gym"],
    rating: 4.8,
    reviews: 176,
    inStock: true,
    sizes: [40, 41, 42, 43, 44, 45, 46],
    shortDescription:
      "Stabilità alta per squat, grip laterale per workout esplosivi e struttura solida per l'allenamento quotidiano.",
    description:
      "Nike Metcon 10 è pensata per chi alterna pesi, HIIT e movimenti laterali. La base ampia sostiene gli esercizi di forza, il tallone stabile aiuta nelle alzate e la tomaia rinforzata resiste all'usura della palestra. Una scarpa tecnica, concreta, costruita per sessioni intense.",
    features: [
      {
        title: "Base stabile",
        text: "La piattaforma larga migliora l'appoggio durante squat, deadlift e movimenti con carichi elevati.",
      },
      {
        title: "Grip laterale",
        text: "La gomma avvolge il lato mediale per offrire presa nei rope climb e nei cambi direzione.",
      },
      {
        title: "Tomaia rinforzata",
        text: "Mesh tecnico con overlay anti-abrasione per resistere agli allenamenti più duri.",
      },
    ],
    seoTitle: "Nike Metcon 10 Nero Volt | Scarpe Training Uomo",
    seoDescription:
      "Nike Metcon 10 Nero Volt per palestra, HIIT e pesi. Base stabile, grip laterale e tomaia rinforzata. €159.",
    releaseYear: 2026,
  },

  {
    id: "free-metcon-6-pink",
    slug: "free-metcon-6-pink",
    name: "Nike Free Metcon 6",
    color: "Rosa / Bianco",
    category: "training",
    gender: "donna",
    type: "shoe",
    price: 139,
    image: productImages.shoes.jordan,
    gallery: [productImages.shoes.jordan, productImages.shoes.tempoBack],
    bg: "from-[#f9a8d4] via-[#db2777] to-[#500724]",
    rotate: "12deg",
    scale: 0.96,
    badges: ["Training", "Flex", "Donna"],
    rating: 4.7,
    reviews: 119,
    inStock: true,
    sizes: [36, 37, 38, 39, 40, 41, 42],
    shortDescription:
      "Flessibile sull'avampiede, stabile sul tallone: ideale per workout misti, circuiti e sala pesi.",
    description:
      "Nike Free Metcon 6 combina la libertà di movimento della famiglia Free con la stabilità delle Metcon. L'avampiede segue il piede durante affondi e burpees, mentre il tallone strutturato offre controllo negli esercizi di forza. Una daily trainer da palestra versatile e leggera.",
    features: [
      {
        title: "Avampiede flessibile",
        text: "Scanalature mirate aiutano il piede a muoversi in modo naturale durante salti e cambi di ritmo.",
      },
      {
        title: "Tallone contenitivo",
        text: "La struttura posteriore stabilizza il piede nelle alzate e negli esercizi con carico.",
      },
      {
        title: "Calzata leggera",
        text: "La tomaia in mesh mantiene ventilazione e comfort durante le sessioni lunghe.",
      },
    ],
    seoTitle: "Nike Free Metcon 6 Donna | Scarpe Training Rosa",
    seoDescription:
      "Nike Free Metcon 6 donna rosa e bianca. Flessibile, stabile e leggera per palestra, HIIT e workout misti. €139.",
    releaseYear: 2026,
  },

  {
    id: "nike-pro-training-top",
    slug: "nike-pro-training-top",
    name: "Nike Pro Training Top",
    color: "Nero / Bianco",
    category: "training",
    gender: "uomo",
    type: "apparel",
    price: 49,
    image: productImages.apparel.lakersJersey,
    gallery: [productImages.apparel.lakersJersey],
    bg: "from-[#18181b] via-[#27272a] to-[#09090b]",
    rotate: "0deg",
    scale: 1,
    badges: ["Dri-FIT", "Training"],
    rating: 4.6,
    reviews: 82,
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    shortDescription:
      "Top tecnico aderente con tecnologia traspirante per allenarti senza distrazioni.",
    description:
      "Nike Pro Training Top è uno strato tecnico pensato per sessioni indoor e outdoor. Il tessuto elasticizzato segue i movimenti del corpo, mentre la tecnologia traspirante aiuta a mantenere la pelle asciutta anche quando l'intensità sale.",
    features: [
      {
        title: "Tessuto elasticizzato",
        text: "Segue i movimenti durante esercizi dinamici, plank, trazioni e circuiti funzionali.",
      },
      {
        title: "Gestione del sudore",
        text: "La struttura leggera favorisce evaporazione rapida e comfort durante l'allenamento.",
      },
    ],
    seoTitle: "Nike Pro Training Top | Maglia Tecnica Training",
    seoDescription:
      "Nike Pro Training Top con tessuto elasticizzato e tecnologia traspirante per palestra e workout. €49.",
    releaseYear: 2026,
  },

  // ============== FOOTBALL ==============
  {
    id: "mercurial-vapor-elite-crimson",
    slug: "mercurial-vapor-elite-crimson",
    name: "Mercurial Vapor Elite",
    color: "Crimson / Nero",
    category: "football",
    gender: "uomo",
    type: "shoe",
    price: 259,
    image: productImages.shoes.tempoSide,
    gallery: [productImages.shoes.tempoSide, productImages.shoes.tempoSole, productImages.shoes.tempoDetail],
    bg: "from-[#ffedd5] via-[#ea580c] to-[#431407]",
    rotate: "-18deg",
    scale: 0.9,
    badges: ["Football", "Elite", "Speed"],
    rating: 4.9,
    reviews: 204,
    inStock: true,
    sizes: [39, 40, 41, 42, 43, 44, 45, 46],
    shortDescription:
      "Scarpa da calcio leggera per accelerazioni, cambi di passo e controllo in velocità.",
    description:
      "Mercurial Vapor Elite è costruita per i giocatori che vivono di scatti. La tomaia sottile migliora il contatto con il pallone, la struttura aderente blocca il piede e la piastra reattiva aiuta nelle accelerazioni improvvise. Perfetta per esterni, attaccanti e giocatori che attaccano lo spazio.",
    features: [
      {
        title: "Tomaia aderente",
        text: "Materiale sottile e tecnico per un contatto diretto con il pallone anche ad alta velocità.",
      },
      {
        title: "Piastra reattiva",
        text: "La struttura sotto il piede aiuta a trasferire energia nelle partenze e nei cambi di direzione.",
      },
      {
        title: "Grip multidirezionale",
        text: "Tacchetti disegnati per accelerare, frenare e ripartire in pochi metri.",
      },
    ],
    seoTitle: "Nike Mercurial Vapor Elite | Scarpe Calcio Velocità",
    seoDescription:
      "Nike Mercurial Vapor Elite Crimson per velocità e controllo. Tomaia aderente, piastra reattiva e grip multidirezionale. €259.",
    releaseYear: 2026,
  },

  {
    id: "phantom-gx-academy-blue",
    slug: "phantom-gx-academy-blue",
    name: "Phantom GX Academy",
    color: "Blu / Bianco",
    category: "football",
    gender: "uomo",
    type: "shoe",
    price: 99,
    originalPrice: 129,
    image: productImages.shoes.courtPurple,
    gallery: [productImages.shoes.courtPurple, productImages.shoes.tempoSole],
    bg: "from-[#60a5fa] via-[#2563eb] to-[#020617]",
    rotate: "8deg",
    scale: 0.95,
    badges: ["Outlet", "Football", "Control"],
    rating: 4.6,
    reviews: 91,
    inStock: true,
    sizes: [39, 40, 41, 42, 43, 44, 45],
    shortDescription:
      "Controllo palla pulito, calzata sicura e comfort per allenamenti e partite settimanali.",
    description:
      "Phantom GX Academy è pensata per chi vuole controllo e sensibilità sul pallone senza rinunciare al comfort. La tomaia morbida aiuta nei tocchi rapidi, la calzata avvolgente stabilizza il piede e la suola offre trazione affidabile sui campi in erba sintetica e naturale compatibile.",
    features: [
      {
        title: "Zona touch ampia",
        text: "La superficie testurizzata aiuta nel primo controllo e nei passaggi rapidi.",
      },
      {
        title: "Calzata sicura",
        text: "La costruzione interna mantiene il piede fermo durante cambi direzione e pressing.",
      },
      {
        title: "Trazione versatile",
        text: "Tacchettatura progettata per offrire stabilità su diversi fondi di gioco.",
      },
    ],
    seoTitle: "Nike Phantom GX Academy Blu | Scarpe Calcio Controllo",
    seoDescription:
      "Nike Phantom GX Academy blu per controllo palla, calzata sicura e trazione versatile. €99.",
    releaseYear: 2026,
  },

  {
    id: "academy-dri-fit-football-shorts",
    slug: "academy-dri-fit-football-shorts",
    name: "Academy Dri-FIT Shorts",
    color: "Nero / Volt",
    category: "football",
    gender: "uomo",
    type: "apparel",
    price: 39,
    originalPrice: 49,
    image: productImages.apparel.basketballShorts,
    gallery: [productImages.apparel.basketballShorts],
    bg: "from-[#111827] via-[#365314] to-[#020617]",
    rotate: "0deg",
    scale: 1,
    badges: ["Outlet", "Dri-FIT", "Football"],
    rating: 4.5,
    reviews: 64,
    inStock: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    shortDescription:
      "Pantaloncini leggeri da calcio con tessuto traspirante e libertà di movimento.",
    description:
      "Academy Dri-FIT Shorts sono progettati per allenamenti tecnici, partitelle e riscaldamento. Il tessuto leggero segue il movimento, la cintura elastica resta stabile e il taglio pulito funziona sia in campo sia nel tempo libero.",
    features: [
      {
        title: "Tessuto leggero",
        text: "Costruzione ariosa per mantenere freschezza durante allenamenti e partite.",
      },
      {
        title: "Vita elastica",
        text: "Cintura stabile con regolazione interna per una vestibilità sicura.",
      },
    ],
    seoTitle: "Nike Academy Dri-FIT Shorts | Pantaloncini Calcio",
    seoDescription:
      "Nike Academy Dri-FIT Shorts neri, pantaloncini calcio leggeri e traspiranti. €39.",
    releaseYear: 2026,
  },


  // ============== LIFESTYLE ==============
  {
    id: "air-trainer-classic",
    slug: "air-trainer-classic",
    name: "Air Trainer Classic",
    color: "Rosso",
    category: "lifestyle",
    gender: "uomo",
    type: "shoe",
    price: 139,
    image: "/images/dtmax.png",
    gallery: ["/images/dtmax.png", "/images/tempo-2.png"],
    bg: "from-[#fb7185] via-[#9f1239] to-[#1a0307]",
    rotate: "-15deg",
    scale: 0.9,
    badges: ["Lifestyle", "Heritage"],
    rating: 4.6,
    reviews: 134,
    inStock: true,
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    shortDescription:
      "Heritage anni '80 per il lifestyle quotidiano. Stile senza compromessi.",
    description:
      "L'Air Trainer Classic recupera il DNA dei training shoe degli anni '80 e lo porta sulla strada. Cinturino centrale iconico, tomaia in pelle scamosciata e mesh, suola Air visibile nel tallone.",
    features: [
      {
        title: "Cinturino centrale",
        text: "Il dettaglio iconico del training Nike anni '80, oggi rivisitato in chiave moderna.",
      },
      {
        title: "Tomaia in pelle e mesh",
        text: "Combinazione di pelle scamosciata e mesh per stile e traspirabilità.",
      },
    ],
    seoTitle: "Nike Air Trainer Classic Rosso | Lifestyle Heritage",
    seoDescription:
      "Air Trainer Classic in rosso, l'icona training anni '80. €139.",
    releaseYear: 2026,
  },
  // ============== LIFESTYLE - EXTRA ==============
  {
    id: "air-max-pulse-sail",
    slug: "air-max-pulse-sail",
    name: "Air Max Pulse",
    color: "Sail / Grigio",
    category: "lifestyle",
    gender: "donna",
    type: "shoe",
    price: 169,
    image: productImages.shoes.tempoDetail,
    gallery: [productImages.shoes.tempoDetail, productImages.shoes.tempo, productImages.shoes.tempoSide],
    bg: "from-[#f5f5f4] via-[#a8a29e] to-[#1c1917]",
    rotate: "-10deg",
    scale: 0.9,
    badges: ["Lifestyle", "Air Max"],
    rating: 4.7,
    reviews: 157,
    inStock: true,
    sizes: [36, 37, 38, 39, 40, 41, 42],
    shortDescription:
      "Air visibile, silhouette pulita e comfort quotidiano per outfit street e minimal.",
    description:
      "Air Max Pulse porta il DNA Air Max in una silhouette moderna e facile da indossare. Il profilo pulito funziona con denim, pantaloni tecnici e look più essenziali, mentre l'ammortizzazione visibile nel tallone garantisce comfort per tutto il giorno.",
    features: [
      {
        title: "Unità Air visibile",
        text: "Ammortizzazione nel tallone per comfort quotidiano e look riconoscibile.",
      },
      {
        title: "Profilo urbano",
        text: "Linee pulite e palette neutra per abbinamenti lifestyle versatili.",
      },
    ],
    seoTitle: "Nike Air Max Pulse Donna Sail | Sneaker Lifestyle",
    seoDescription:
      "Nike Air Max Pulse donna Sail e grigio. Sneaker lifestyle con Air visibile e comfort quotidiano. €169.",
    releaseYear: 2026,
  },

  {
    id: "sportswear-tech-fleece-hoodie",
    slug: "sportswear-tech-fleece-hoodie",
    name: "Tech Fleece Hoodie",
    color: "Grigio / Nero",
    category: "lifestyle",
    gender: "bambino",
    type: "apparel",
    price: 109,
    originalPrice: 139,
    image: productImages.apparel.lakersJersey,
    gallery: [productImages.apparel.lakersJersey],
    bg: "from-[#d4d4d8] via-[#52525b] to-[#18181b]",
    rotate: "0deg",
    scale: 1,
    badges: ["Outlet", "Lifestyle", "Tech Fleece"],
    rating: 4.8,
    reviews: 211,
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    shortDescription:
      "Felpa premium leggera, calda e strutturata. Essenziale per layering urbano e travel look.",
    description:
      "Tech Fleece Hoodie è un capo lifestyle premium con struttura leggera e calore bilanciato. Il taglio moderno, le cuciture pulite e il tessuto tecnico lo rendono ideale per layering, viaggi e outfit sportivi elevati.",
    features: [
      {
        title: "Calore leggero",
        text: "Il tessuto tecnico trattiene calore senza appesantire il fit.",
      },
      {
        title: "Taglio premium",
        text: "Costruzione pulita con cappuccio strutturato e dettagli essenziali.",
      },
    ],
    seoTitle: "Nike Tech Fleece Hoodie | Felpa Lifestyle Premium",
    seoDescription:
      "Nike Sportswear Tech Fleece Hoodie grigia. Felpa lifestyle calda, leggera e premium. €109.",
    releaseYear: 2026,
  },

  // ============== BAMBINO ==============
  {
    id: "air-zoom-pegasus-kids-black",
    slug: "air-zoom-pegasus-kids-black",
    name: "Air Zoom Pegasus Kids",
    color: "Nero / Volt",
    category: "running",
    gender: "bambino",
    type: "shoe",
    price: 89,
    image: productImages.shoes.tempo,
    gallery: [productImages.shoes.tempo, productImages.shoes.tempoSide, productImages.shoes.tempoDetail],
    bg: "from-[#1f2937] via-[#111827] to-[#84cc16]",
    rotate: "-12deg",
    scale: 0.9,
    badges: ["Kids", "Running", "Novità"],
    rating: 4.7,
    reviews: 86,
    inStock: true,
    sizes: [32, 33, 34, 35, 36, 37, 38],
    shortDescription:
      "Daily trainer junior leggero e resistente per scuola, sport e tempo libero.",
    description:
      "Air Zoom Pegasus Kids porta il comfort della linea running Nike in una versione pensata per i più giovani. Tomaia traspirante, ammortizzazione morbida e suola resistente per accompagnare allenamento, scuola e giornate dinamiche.",
    features: [
      {
        title: "Calzata junior",
        text: "Fit studiato per piede in crescita, con struttura stabile e facile da indossare.",
      },
      {
        title: "Suola resistente",
        text: "Battistrada in gomma pensato per uso quotidiano e attività sportiva.",
      },
    ],
    seoTitle: "Nike Air Zoom Pegasus Kids Nero | Running Bambino",
    seoDescription:
      "Nike Air Zoom Pegasus Kids nero e volt. Scarpa running bambino leggera e resistente. €89.",
    releaseYear: 2026,
    newArrival: true,
  },

  {
    id: "mercurial-vapor-kids-orange",
    slug: "mercurial-vapor-kids-orange",
    name: "Mercurial Vapor Kids",
    color: "Arancio / Nero",
    category: "football",
    gender: "bambino",
    type: "shoe",
    price: 79,
    originalPrice: 99,
    image: productImages.shoes.tempoSide,
    gallery: [productImages.shoes.tempoSide, productImages.shoes.tempoBack, productImages.shoes.tempo],
    bg: "from-[#fb923c] via-[#ea580c] to-[#431407]",
    rotate: "-16deg",
    scale: 0.92,
    badges: ["Outlet", "Kids", "Football"],
    rating: 4.6,
    reviews: 74,
    inStock: true,
    sizes: [32, 33, 34, 35, 36, 37, 38],
    shortDescription:
      "Scarpa calcio junior per velocità, trazione e cambi di direzione rapidi.",
    description:
      "Mercurial Vapor Kids è pensata per giovani calciatori che giocano in velocità. La tomaia sintetica avvolge il piede, mentre la trazione multidirezionale aiuta negli scatti e nei cambi di ritmo.",
    features: [
      {
        title: "Trazione junior",
        text: "Pattern suola progettato per movimenti rapidi e stabilità nei cambi direzione.",
      },
      {
        title: "Tomaia leggera",
        text: "Materiale sintetico sottile per una sensazione agile sul piede.",
      },
    ],
    seoTitle: "Nike Mercurial Vapor Kids Arancio | Calcio Bambino",
    seoDescription:
      "Nike Mercurial Vapor Kids arancio e nero. Scarpa calcio bambino leggera e veloce. €79.",
    releaseYear: 2026,
  },

  {
    id: "court-borough-kids-white",
    slug: "court-borough-kids-white",
    name: "Court Borough Kids",
    color: "Bianco / Grigio",
    category: "lifestyle",
    gender: "bambino",
    type: "shoe",
    price: 69,
    image: productImages.shoes.courtPurple,
    gallery: [productImages.shoes.courtPurple, productImages.shoes.jordan],
    bg: "from-[#f8fafc] via-[#94a3b8] to-[#1e293b]",
    rotate: "10deg",
    scale: 0.95,
    badges: ["Kids", "Lifestyle"],
    rating: 4.7,
    reviews: 112,
    inStock: true,
    sizes: [30, 31, 32, 33, 34, 35, 36],
    shortDescription:
      "Sneaker junior essenziale, facile da abbinare e comoda ogni giorno.",
    description:
      "Court Borough Kids prende ispirazione dal basket heritage e lo traduce in una sneaker quotidiana per bambini. Linea pulita, struttura robusta e comfort semplice da indossare.",
    features: [
      {
        title: "Look heritage",
        text: "Design ispirato al basket classico con proporzioni adatte ai più piccoli.",
      },
      {
        title: "Comfort quotidiano",
        text: "Collare imbottito e suola flessibile per accompagnare ogni giornata.",
      },
    ],
    seoTitle: "Nike Court Borough Kids Bianco | Sneaker Bambino",
    seoDescription:
      "Nike Court Borough Kids bianco e grigio. Sneaker lifestyle bambino comoda e versatile. €69.",
    releaseYear: 2026,
  },

  {
    id: "kids-training-set-black",
    slug: "kids-training-set-black",
    name: "Dri-FIT Training Set Kids",
    color: "Nero / Bianco",
    category: "training",
    gender: "bambino",
    type: "apparel",
    price: 59,
    image: productImages.apparel.basketballShorts,
    gallery: [productImages.apparel.basketballShorts, productImages.apparel.lakersJersey],
    bg: "from-[#262626] via-[#0a0a0a] to-[#525252]",
    rotate: "0deg",
    scale: 1,
    badges: ["Kids", "Dri-FIT", "Training"],
    rating: 4.6,
    reviews: 58,
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    shortDescription:
      "Set tecnico junior per palestra, scuola sportiva e allenamenti leggeri.",
    description:
      "Dri-FIT Training Set Kids è pensato per i giovani sportivi che hanno bisogno di libertà di movimento e tessuto traspirante. Perfetto per allenamenti, educazione fisica e tempo libero attivo.",
    features: [
      {
        title: "Tessuto Dri-FIT",
        text: "Aiuta a mantenere la pelle asciutta durante il movimento.",
      },
      {
        title: "Fit comodo",
        text: "Taglio facile da indossare, studiato per attività dinamiche.",
      },
    ],
    seoTitle: "Nike Dri-FIT Training Set Kids | Abbigliamento Bambino",
    seoDescription:
      "Set Nike Dri-FIT Training Kids nero e bianco. Abbigliamento tecnico bambino per allenamento. €59.",
    releaseYear: 2026,
    newArrival: true,
  },


];

// =============================================================
// HELPERS
// =============================================================
export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);

export const getProductsByCategory = (category) =>
  products.filter((p) => p.category === category);

export const getProductsByGender = (gender) =>
  products.filter((p) => p.gender === gender);

export const getProductsByCategoryAndGender = (category, gender) =>
  products.filter((p) => p.category === category && p.gender === gender);

export const getFeaturedProducts = (limit = 4) =>
  products
    .filter((p) => p.badges?.includes("Bestseller") || p.rating >= 4.8)
    .slice(0, limit);

export const getRelatedProducts = (currentSlug, category, limit = 3) =>
  products
    .filter((p) => p.category === category && p.slug !== currentSlug)
    .slice(0, limit);
