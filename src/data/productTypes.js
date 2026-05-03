// =============================================================
// PRODUCT TYPES
// =============================================================
// Un solo punto per etichette, filtri e logiche di taglia.
// Così il catalogo resta scalabile quando aggiungiamo nuove famiglie prodotto.
// =============================================================

export const productTypes = [
  {
    slug: "shoe",
    singular: "Scarpa",
    plural: "Scarpe",
    sizeLabel: "Seleziona taglia (EU)",
  },
  {
    slug: "apparel",
    singular: "Abbigliamento",
    plural: "Abbigliamento",
    sizeLabel: "Seleziona taglia",
  },
  {
    slug: "racket",
    singular: "Racchetta",
    plural: "Racchette",
    sizeLabel: "Seleziona Grip Size",
  },
  {
    slug: "equipment",
    singular: "Attrezzatura",
    plural: "Attrezzatura",
    sizeLabel: "Seleziona misura",
  },
  {
    slug: "accessory",
    singular: "Accessorio",
    plural: "Accessori",
    sizeLabel: "Seleziona taglia",
  },
];

export const getProductTypeBySlug = (slug) =>
  productTypes.find((type) => type.slug === slug);

export const getProductTypeLabel = (slug, mode = "singular") =>
  getProductTypeBySlug(slug)?.[mode] || slug;

export const getProductSizeLabel = (slug) =>
  getProductTypeBySlug(slug)?.sizeLabel || "Seleziona taglia";
