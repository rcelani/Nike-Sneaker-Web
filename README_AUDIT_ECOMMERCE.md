# Audit e migliorie ecommerce Nike Sneaker

## Esito generale

Il progetto è impostato bene per una vetrina ecommerce frontend-only: struttura React chiara, routing già separato per home, collezione, categoria, genere e dettaglio prodotto, animazioni GSAP coerenti e buon approccio responsive/mobile-first.

La parte più debole era il catalogo: pochi prodotti, categorie sbilanciate e ripetizione dei path immagine direttamente dentro i prodotti. Anche la SEO era presente, ma migliorabile su sitemap, robots, canonical dinamiche, Open Graph URL e coerenza valuta.

## Modifiche effettuate

### Catalogo

- Prodotti passati da 14 a 22.
- Categorie passate da 4 a 6:
  - Basketball
  - Tennis
  - Running
  - Training
  - Calcio
  - Lifestyle
- Aggiunti prodotti per Training, Calcio e Lifestyle.
- Mantenute le animazioni esistenti e lo stile visuale originale.
- Mantenuto approccio mobile-first.

### Organizzazione dati

Aggiunti due file dedicati:

- `src/data/productTypes.js`
  - centralizza le tipologie prodotto: scarpe, abbigliamento, racchette, attrezzatura, accessori;
  - evita label duplicate nei componenti;
  - gestisce le label di taglia in base al tipo prodotto.

- `src/data/media.js`
  - centralizza gli alias delle immagini;
  - rende più semplice sostituire in futuro le immagini placeholder con foto prodotto reali.

### SEO

- Aggiornati title e description principali.
- Migliorato `useSEO`:
  - canonical dinamica più pulita;
  - `og:url` dinamico;
  - `twitter:card` gestito dal hook;
  - rimozione controllata del JSON-LD precedente.
- Corretto JSON-LD prodotto usando brand più coerente per Nike, HEAD e Yonex.
- Aggiunti:
  - `public/robots.txt`
  - `public/sitemap.xml`

Nota: prima della produzione devi sostituire `https://nike-sneaker.example.com` con il dominio reale in `index.html`, `robots.txt` e `sitemap.xml`.

### UI/UX

- Aggiornato testo della home per includere Training e Calcio.
- La sezione sport ora supporta 6 categorie senza rompere la griglia.
- Corretto prezzo da `$` a `€`, coerente con JSON-LD in EUR.
- Filtri prodotto ora leggono le tipologie da una fonte centralizzata.
- Rimossa una duplicazione di prop `className` in `ProductDetail.jsx`.

### Qualità codice

- Eseguito `npm run lint`: passato.
- Eseguito `npm run build`: passato.
- Il bundle finale JS è circa 482 kB prima di gzip e 153 kB gzip.

## Cosa migliorerei ancora dopo

1. Foto reali prodotto
   - Le nuove schede usano alcune immagini già presenti come placeholder coerenti per categoria.
   - Per un ecommerce più credibile servono immagini dedicate per ogni prodotto: fronte, lato, suola/dettaglio, indossato/lifestyle.

2. Carrello vero
   - Ora i pulsanti sono visuali.
   - Step successivo: stato carrello, drawer mobile, quantità, rimozione, totale, checkout mock.

3. Ricerca reale
   - L'icona search in navbar è presente ma non apre una ricerca.
   - Aggiungerei una search overlay animata con filtro live su nome, sport, colore e tag.

4. Pagine categoria più editoriali
   - Il sito ha già una base premium.
   - Per aumentare qualità ecommerce: hero categoria con microcopy, banner collezione, sezioni “Best for”, “Novità”, “Top rated”.

5. SEO avanzata
   - Per una SPA Vite client-only, Google può renderizzare JavaScript, ma una versione prerenderizzata/SSR resta più solida.
   - Step successivo consigliato: prerender delle rotte principali o migrazione a framework SSR/SSG se il progetto deve posizionarsi seriamente.

6. Performance immagini
   - Convertire PNG pesanti in WebP/AVIF.
   - Creare versioni responsive delle immagini.
   - Usare preload solo per l'immagine realmente above-the-fold.

7. Dati prodotto più realistici
   - Aggiungere campi come `brand`, `materiali`, `sportUseCase`, `stock`, `newArrival`, `discount`, `tags`, `careInstructions`.
   - Separare meglio prodotti reali Nike da prodotti HEAD/Yonex nel brand e nella comunicazione.
