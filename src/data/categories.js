// =============================================================
// CATEGORIES (sport)
// =============================================================
export const categories = [
  {
    slug: "basketball",
    name: "Basketball",
    title: "Scarpe da Basket",
    icon: "ri-basketball-line",
    image: "/images/jordan.png",
    bg: "from-[#a8ff00] via-[#3a7d2c] to-[#041b12]",
    accent: "#a8ff00",
    shortDescription:
      "Air Jordan, Air More Uptempo, Lakers Jersey e cross-trainer leggendari. Cushioning Zoom Air e Max Air per dominare il parquet.",
    description:
      "La collezione basketball Nike riunisce le sneaker più iconiche della storia del gioco insieme all'abbigliamento ufficiale NBA. Dalla Air Jordan 18 ispirata alle supercar italiane, fino alla Air More Uptempo simbolo dei campetti anni '90, ogni modello è progettato per offrirti la massima reattività su parquet e cemento. La sezione include anche le maglie ufficiali NBA come quella dei Los Angeles Lakers e i pantaloncini swingman dei Golden State Warriors.",
    keywords: [
      "scarpe basket",
      "Air Jordan",
      "scarpe pallacanestro",
      "Air More Uptempo",
      "Lakers jersey",
      "NBA",
      "sneaker basket Nike",
    ],
  },
  {
    slug: "tennis",
    name: "Tennis",
    title: "Scarpe e Racchette da Tennis",
    icon: "ri-football-line",
    image: "/images/racchetta_1.png",
    bg: "from-[#0d3b66] via-[#1d4ed8] to-[#020617]",
    accent: "#3b82f6",
    shortDescription:
      "Linea NikeCourt e racchette professionali HEAD e Yonex. Suole multi-surface, telai ad alta rigidità, controllo assoluto.",
    description:
      "La nostra sezione tennis abbraccia l'intero ecosistema del giocatore: scarpe NikeCourt progettate insieme ai pro del circuito ATP e WTA, e una selezione curata di racchette professionali dei brand più riconosciuti come HEAD e Yonex. La tecnologia Zoom Air nell'avampiede ti dà esplosività sugli scatti, mentre le racchette in carbonio offrono potenza, controllo e stabilità per ogni livello, dal principiante al torneo.",
    keywords: [
      "scarpe tennis",
      "NikeCourt",
      "racchetta tennis",
      "HEAD Boom",
      "Yonex",
      "scarpe terra battuta",
      "tennis Nike",
    ],
  },
  {
    slug: "running",
    name: "Running",
    title: "Scarpe da Running",
    icon: "ri-run-line",
    image: "/images/tempo.png",
    bg: "from-[#404040] via-[#171717] to-[#000000]",
    accent: "#f97316",
    shortDescription:
      "Pegasus, React Infinity e tutta la famiglia daily trainer. Schiuma ReactX, doppio Zoom Air, energia ad ogni passo.",
    description:
      "Che tu corra 5 km al giorno o stia preparando una maratona, la collezione running Nike ha la scarpa giusta. La nuova schiuma ReactX restituisce il 13% di energia in più rispetto al React tradizionale. La Pegasus 41 è il daily trainer più amato dai runner italiani, mentre la React Infinity Run è la scelta per chi cerca stabilità e prevenzione infortuni nelle lunghe distanze.",
    keywords: [
      "scarpe running",
      "Pegasus",
      "React Infinity",
      "scarpe corsa",
      "running Nike",
    ],
  },
  {
    slug: "training",
    name: "Training",
    title: "Training & Palestra",
    icon: "ri-boxing-line",
    image: "/images/dtmax.png",
    bg: "from-[#0f172a] via-[#334155] to-[#84cc16]",
    accent: "#84cc16",
    shortDescription:
      "Metcon, Free Metcon e apparel tecnico per palestra, HIIT e functional training. Stabilità, grip e libertà di movimento.",
    description:
      "La categoria Training raccoglie prodotti pensati per allenamenti intensi, circuiti, sala pesi e sessioni funzionali. Scarpe stabili per gli esercizi con carico, modelli più flessibili per workout dinamici e abbigliamento tecnico traspirante per muoversi senza distrazioni.",
    keywords: [
      "scarpe training",
      "Nike Metcon",
      "palestra",
      "HIIT",
      "functional training",
      "abbigliamento palestra",
    ],
  },
  {
    slug: "football",
    name: "Calcio",
    title: "Scarpe e Abbigliamento Calcio",
    icon: "ri-football-line",
    image: "/images/tempo-2.png",
    bg: "from-[#ffedd5] via-[#ea580c] to-[#431407]",
    accent: "#fb923c",
    shortDescription:
      "Mercurial, Phantom e capi Dri-FIT per allenamento e partita. Velocità, controllo e trazione multidirezionale.",
    description:
      "La sezione calcio porta nel catalogo le linee dedicate a velocità, controllo palla e comfort da allenamento. Dai modelli Mercurial per chi attacca lo spazio alle Phantom per chi gestisce il possesso, fino ai capi Dri-FIT per muoversi leggeri in campo.",
    keywords: [
      "scarpe calcio",
      "Nike Mercurial",
      "Nike Phantom",
      "abbigliamento calcio",
      "Dri-FIT calcio",
    ],
  },
  {
    slug: "lifestyle",
    name: "Lifestyle",
    title: "Lifestyle & Heritage",
    icon: "ri-walk-line",
    image: "/images/dtmax.png",
    bg: "from-[#fb7185] via-[#9f1239] to-[#1a0307]",
    accent: "#ec4899",
    shortDescription:
      "Le icone Nike fuori dal campo. Heritage anni '80 e '90 in chiave urban contemporanea.",
    description:
      "Le sneaker che hanno fatto la storia, oggi pronte per la strada. Air Trainer Classic, modelli heritage e silhouette retrò che mescolano DNA performance con estetica streetwear. Pelle, mesh, materiali tecnici riadattati: scarpe pensate per essere indossate ogni giorno, dal lavoro al weekend.",
    keywords: ["lifestyle", "sneaker", "heritage Nike", "streetwear", "urban"],
  },
];

export const getCategoryBySlug = (slug) =>
  categories.find((c) => c.slug === slug);

// =============================================================
// GENDERS
// =============================================================
export const genders = [
  {
    slug: "uomo",
    name: "Uomo",
    title: "Collezione Uomo",
    icon: "ri-men-line",
    image: "/images/jordan.png",
    bg: "from-[#1e3a8a] via-[#0c1e4a] to-[#020617]",
    accent: "#3b82f6",
    description:
      "Tutta la potenza Nike dedicata all'uomo: dalle iconiche Air Jordan ai cross-trainer per la palestra, dalle scarpe da running per le sessioni più dure all'abbigliamento NBA ufficiale. Performance senza compromessi, stile inconfondibile.",
    keywords: ["scarpe uomo", "sneaker uomo", "Nike uomo", "abbigliamento sportivo uomo"],
  },
  {
    slug: "donna",
    name: "Donna",
    title: "Collezione Donna",
    icon: "ri-women-line",
    image: "/images/dtmax.png",
    bg: "from-[#be185d] via-[#831843] to-[#1f0510]",
    accent: "#ec4899",
    description:
      "La collezione donna Nike unisce design contemporaneo e tecnologia all'avanguardia. Modelli pensati specificamente per la biomeccanica femminile, con calzate dedicate, ammortizzazioni mirate e palette colore esclusive. Dal campo alla strada.",
    keywords: ["scarpe donna", "sneaker donna", "Nike donna", "running donna"],
  },
  {
    slug: "bambino",
    name: "Bambino",
    title: "Collezione Bambino",
    icon: "ri-emotion-happy-line",
    image: "/images/scarpa_basket.png",
    bg: "from-[#84cc16] via-[#166534] to-[#052e16]",
    accent: "#84cc16",
    description:
      "Sneaker, calcio, running e capi tecnici pensati per bambini e ragazzi: prodotti comodi, resistenti e facili da indossare ogni giorno, dalla scuola allo sport.",
    keywords: ["scarpe bambino", "Nike bambino", "sneaker junior", "abbigliamento sportivo bambino"],
  },
];

export const getGenderBySlug = (slug) => genders.find((g) => g.slug === slug);
