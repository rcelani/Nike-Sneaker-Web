// Articoli editoriali per arricchire il contenuto SEO
export const articles = [
  {
    id: 1,
    slug: "come-scegliere-scarpe-basket",
    title: "Come scegliere le scarpe da basket giuste",
    category: "basketball",
    date: "2026-03-12",
    readTime: 5,
    image: "/images/jordan.png",
    excerpt:
      "Pronazione, posizione in campo, tipo di parquet: scopri come orientarti tra centinaia di modelli e trovare la scarpa che fa per te.",
    content:
      "La scelta delle scarpe da basket non è mai banale. Ogni giocatore ha esigenze diverse: il playmaker cerca leggerezza per i cambi di direzione, il centro pretende cushioning massimo per assorbire i contrasti sotto canestro, l'ala vuole versatilità totale. Il primo fattore da considerare è il tipo di superficie: parquet indoor richiede una mescola morbida, mentre cemento outdoor pretende suole in gomma carbonio. Il secondo fattore è il drop, ovvero la differenza di altezza tra tallone e punta: drop alti (10-12 mm) favoriscono la spinta verticale, drop bassi (4-6 mm) la sensibilità sul terreno. Infine il sistema di ammortizzazione: Zoom Air per reattività esplosiva, Max Air per assorbimento massimo, ReactX per l'equilibrio tra le due.",
  },
  {
    id: 2,
    slug: "tennis-superficie-rosso-vs-cemento",
    title: "Tennis: scarpa per terra battuta o cemento?",
    category: "tennis",
    date: "2026-03-08",
    readTime: 4,
    image: "/images/racchetta_1.png",
    excerpt:
      "La superficie cambia tutto: pattern del battistrada, durabilità, scivolata. Ecco la guida definitiva per non sbagliare.",
    content:
      "Una scarpa da tennis sbagliata non solo riduce le tue prestazioni, ma può causare infortuni seri. Sulla terra battuta serve un battistrada con pattern a spina di pesce molto pronunciato per scivolare e bloccarti correttamente. Sul cemento il discorso si ribalta: serve un battistrada XDR (Extra Durable Rubber) con pattern multi-direzionale, perché ogni movimento consuma materiale.",
  },
  {
    id: 3,
    slug: "racchetta-peso-bilanciamento",
    title: "Racchetta da tennis: peso, bilanciamento e piatto",
    category: "tennis",
    date: "2026-03-02",
    readTime: 6,
    image: "/images/racchetta_3.png",
    excerpt:
      "Tre numeri determinano come si comporta la tua racchetta in campo. Capirli ti farà risparmiare tempo, soldi e infortuni.",
    content:
      "Il peso a vuoto di una racchetta da tennis varia tipicamente tra 270 e 320 grammi: sotto i 285g siamo nel territorio delle racchette amatoriali, sopra i 300g entriamo nel professionistico. Il bilanciamento misurato in cm dal manico determina come la racchetta si 'sente'. Il piatto in pollici quadrati determina il sweet spot: 95-98 sq in sono per giocatori tecnici, 100-105 sono il sweet spot del segmento all-round.",
  },
  {
    id: 4,
    slug: "running-quanti-km-stessa-scarpa",
    title: "Quanti chilometri durano davvero le scarpe da running?",
    category: "running",
    date: "2026-02-28",
    readTime: 6,
    image: "/images/tempo.png",
    excerpt:
      "La regola dei 600-800 km, le eccezioni e i segnali da non ignorare: quando è il momento di cambiare scarpe.",
    content:
      "La regola classica dice 600-800 km per scarpa, ma la verità è più complessa. La schiuma dell'intersuola si comprime con l'uso, perdendo le proprietà di energy return: dopo 500 km la maggior parte delle schiume ha già perso il 20-30% delle prestazioni iniziali. La nuova schiuma ReactX della Pegasus 41 è progettata per durare di più.",
  },
  {
    id: 5,
    slug: "storia-air-jordan-1985-oggi",
    title: "La storia delle Air Jordan: dal 1985 a oggi",
    category: "basketball",
    date: "2026-02-15",
    readTime: 8,
    image: "/images/tempo.png",
    excerpt:
      "40 anni di sneaker che hanno cambiato per sempre il rapporto tra sport, cultura e moda.",
    content:
      "Quando Nike presentò la prima Air Jordan nel 1985, l'NBA la vietò per il suo schema cromatico nero/rosso che violava le regole sull'uniformità delle calzature. Michael Jordan continuò a indossarla pagando 5.000 dollari di multa a partita: Nike pagò volentieri ogni multa, perché la mossa generò una pubblicità inestimabile.",
  },
  {
    id: 6,
    slug: "lakers-storia-divisa-icon",
    title: "Lakers: la storia della divisa più iconica della NBA",
    category: "basketball",
    date: "2026-02-08",
    readTime: 5,
    image: "/images/lakers.png",
    excerpt:
      "Giallo e viola dal 1967. La storia della Icon Edition dei Los Angeles Lakers e perché è diventata un'icona pop.",
    content:
      "I Lakers indossano il giallo e il viola dal 1967, quando la franchigia si trasferì a Los Angeles. Il giallo doveva richiamare il sole californiano, il viola la regalità: una combinazione che divenne immediatamente riconoscibile. Da Magic Johnson a Kobe Bryant, da Shaquille O'Neal a LeBron James: tutti i grandi della franchigia hanno indossato questa divisa.",
  },
];

export const getArticleBySlug = (slug) => articles.find((a) => a.slug === slug);

export const getArticlesByCategory = (category) =>
  articles.filter((a) => a.category === category);
