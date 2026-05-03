# Modifiche ecommerce - blocco Home / Shop / Carrello

Interventi applicati mantenendo lo stile premium, animazioni GSAP e approccio mobile-first.

## Navigazione

- Navbar riorganizzata in: Home, Shop, Sport, Novità, Outlet, Contatti.
- Shop è diventato un dropdown con: Tutta la collezione, Uomo, Donna, Bambino.
- Sport resta un dropdown con tutte le categorie sportive.
- Aggiunta icona carrello con badge quantità.
- Aggiunta ricerca visuale: al click sulla lente apre un input glass, senza logica API o risultati.

## Home

- Aggiunto `HomeIntro.jsx`, un pannello introduttivo breve e commerciale prima dell'hero prodotto.
- La home resta compatta: intro elegante, CTA verso Shop e Novità, badge fiducia, poi tutto il resto già presente.

## Catalogo e prodotti

- Rimossa la logica `unisex` dai prodotti e dai filtri.
- Aggiunta collezione `Bambino`.
- Catalogo portato a 26 prodotti.
- Aggiunti prodotti junior per running, calcio, lifestyle e training.
- Aggiunti prezzi outlet con `originalPrice` su prodotti selezionati.

## Collezione

- Mantenuta la struttura esistente della pagina.
- Aggiunto filtro Bambino tramite il gruppo Shop.
- Aggiunto filtro Prezzo: Tutti, Fino a €100, €100-€150, €150-€200, Oltre €200.
- Sostituita la select nativa con `GlassSelect.jsx`, dropdown custom glass più coerente con il design.
- Le card non dipendono più dallo scroll: la griglia usa comparsa iniziale tramite `ProductGrid.jsx`.

## Pagine Sport

- Rimossa l'animazione scroll-trigger dalle card prodotto.
- Aggiunta animazione unica della griglia prodotti a caricamento pagina.
- Hero, filtri e magazine restano invariati.

## Nuove pagine

- `/novita` con prodotti new arrival.
- `/outlet` con prodotti dotati di `originalPrice` maggiore del prezzo attuale.
- `/carrello` con carrello frontend-only, localStorage, quantità, rimozione, totale e checkout mock.

## Carrello

- Aggiunto `CartContext.jsx` + `useCart.js`.
- Persistenza carrello in `localStorage`.
- Da `ProductDetail.jsx` si può aggiungere un prodotto al carrello solo dopo aver selezionato la taglia.

## SEO

- Aggiornata `sitemap.xml` con Novità, Outlet, Carrello, Bambino e nuovi prodotti.
- Le nuove pagine usano `useSEO` per title e description.

## Controlli tecnici

Eseguiti:

```bash
npm run lint
npm run build
```

Entrambi superati.

Nota: durante `npm ci` rimane una vulnerabilità moderata segnalata da npm audit già presente nell'albero dipendenze. Verificare con:

```bash
npm audit
npm audit fix
```

Vite segnala anche un warning sul chunk JS superiore a 500 kB. Non blocca la build; più avanti si può migliorare con code splitting sulle pagine.
