import { products as mockProducts } from "../data/products";

const DEFAULT_BG = "from-[#171717] via-[#0a0a0a] to-[#000000]";
const DEFAULT_CURRENCY = "EUR";

const findPresentationFallback = (product) => {
  if (!product) return null;
  return (
    mockProducts.find((mock) => mock.slug === product.slug) ||
    mockProducts.find((mock) => String(mock.id) === String(product.id)) ||
    null
  );
};

const getMoneyValue = (value) => {
  if (value == null) return null;

  if (typeof value === "number") {
    // Il BE salva i prezzi in centesimi. I mock FE usano euro.
    return value > 999 ? value / 100 : value;
  }

  if (typeof value === "object" && typeof value.amount === "number") {
    return value.amount / 100;
  }

  return Number(value) || null;
};

const getCategorySlug = (category) => {
  if (!category) return undefined;
  return typeof category === "string" ? category : category.slug;
};

const getProductTypeSlug = (productType, fallbackType) => {
  if (productType) {
    return typeof productType === "string" ? productType : productType.slug;
  }

  return fallbackType;
};

const normalizeImages = (apiProduct, fallback) => {
  const apiImages = Array.isArray(apiProduct.images) ? apiProduct.images : [];

  if (apiImages.length > 0) {
    const sortedImages = [...apiImages].sort(
      (a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0)
    );
    const mainImage =
      sortedImages.find((image) => image.type === "MAIN") || sortedImages[0];

    return {
      image: mainImage?.url || fallback?.image || "/images/jordan.png",
      gallery: sortedImages.map((image) => image.url).filter(Boolean),
    };
  }

  return {
    image: apiProduct.image || fallback?.image || "/images/jordan.png",
    gallery:
      apiProduct.gallery?.length > 0
        ? apiProduct.gallery
        : fallback?.gallery || [apiProduct.image || fallback?.image || "/images/jordan.png"],
  };
};

const normalizeBadges = (apiProduct, fallback) => {
  if (Array.isArray(apiProduct.badges)) {
    return apiProduct.badges.map((badge) =>
      typeof badge === "string" ? badge : badge.label
    );
  }

  if (Array.isArray(apiProduct.productBadges)) {
    return apiProduct.productBadges
      .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))
      .map((badge) => badge.label);
  }

  return fallback?.badges || [];
};

const normalizeFeatures = (apiProduct, fallback) => {
  const features = apiProduct.features || apiProduct.productFeatures;

  if (Array.isArray(features)) {
    return [...features]
      .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))
      .map((feature) => ({
        title: feature.title,
        text: feature.text,
      }))
      .filter((feature) => feature.title || feature.text);
  }

  return fallback?.features || [];
};

const normalizeVariants = (apiProduct, fallback) => {
  const variants = apiProduct.variants || apiProduct.productVariants;

  if (Array.isArray(variants) && variants.length > 0) {
    return variants
      .filter((variant) => variant.isActive !== false)
      .map((variant) => ({
        variantId: variant.id || variant.variantId,
        sku: variant.sku,
        size: String(variant.size),
        stockQuantity: Number(variant.stockQuantity ?? 0),
      }));
  }

  return (apiProduct.sizes || fallback?.sizes || []).map((size) =>
    typeof size === "object"
      ? {
          variantId: size.variantId || size.id,
          sku: size.sku,
          size: String(size.size),
          stockQuantity: Number(size.stockQuantity ?? 0),
        }
      : {
          variantId: null,
          sku: null,
          size: String(size),
          stockQuantity: 99,
        }
  );
};

export const mapApiProductToProduct = (apiProduct) => {
  if (!apiProduct) return null;

  const fallback = findPresentationFallback(apiProduct);
  const { image, gallery } = normalizeImages(apiProduct, fallback);
  const variants = normalizeVariants(apiProduct, fallback);
  const price = getMoneyValue(apiProduct.price) ?? fallback?.price ?? 0;
  const originalPrice =
    getMoneyValue(apiProduct.originalPrice) ?? fallback?.originalPrice ?? null;

  return {
    id: String(apiProduct.id ?? fallback?.id ?? apiProduct.slug),
    sku: apiProduct.sku || fallback?.sku,
    slug: apiProduct.slug || fallback?.slug,
    name: apiProduct.name || fallback?.name,
    brand: apiProduct.brand || fallback?.brand || "Nike",
    color: apiProduct.color || fallback?.color || "",
    category: getCategorySlug(apiProduct.category) || fallback?.category,
    gender: apiProduct.gender || fallback?.gender,
    type: getProductTypeSlug(apiProduct.productType, apiProduct.type) || fallback?.type,
    price,
    originalPrice,
    currency: apiProduct.currency || fallback?.currency || DEFAULT_CURRENCY,
    image,
    gallery,
    bg: apiProduct.bg || fallback?.bg || DEFAULT_BG,
    rotate: apiProduct.rotate || fallback?.rotate || "0deg",
    translateY: apiProduct.translateY || fallback?.translateY || "0px",
    scale: apiProduct.scale ?? fallback?.scale ?? 1,
    badges: normalizeBadges(apiProduct, fallback),
    rating: Number(apiProduct.rating ?? fallback?.rating ?? 0),
    reviews: Number(apiProduct.reviewsCount ?? apiProduct.reviews ?? fallback?.reviews ?? 0),
    inStock:
      typeof apiProduct.inStock === "boolean"
        ? apiProduct.inStock
        : variants.some((variant) => variant.stockQuantity > 0) || fallback?.inStock || false,
    sizes: variants,
    variants,
    shortDescription: apiProduct.shortDescription || fallback?.shortDescription || "",
    description: apiProduct.description || fallback?.description || "",
    features: normalizeFeatures(apiProduct, fallback),
    seoTitle: apiProduct.seo?.title || apiProduct.seoTitle || fallback?.seoTitle,
    seoDescription:
      apiProduct.seo?.description || apiProduct.seoDescription || fallback?.seoDescription,
    releaseYear: apiProduct.releaseYear || fallback?.releaseYear,
    newArrival: Boolean(apiProduct.isNewArrival ?? apiProduct.newArrival ?? fallback?.newArrival),
    outlet: Boolean(apiProduct.isOutlet ?? apiProduct.outlet ?? (originalPrice && originalPrice > price)),
    isFeatured: Boolean(apiProduct.isFeatured ?? fallback?.isFeatured),
    isActive: apiProduct.isActive !== false,
    weight: apiProduct.weight || fallback?.weight,
    headSize: apiProduct.headSize || fallback?.headSize,
  };
};

export const mapApiProductsToProducts = (apiProducts = []) =>
  apiProducts.map(mapApiProductToProduct).filter(Boolean);

export const getSizeValue = (sizeOption) =>
  typeof sizeOption === "object" ? String(sizeOption.size) : String(sizeOption);

export const getSizeVariantId = (sizeOption) =>
  typeof sizeOption === "object" ? sizeOption.variantId : null;
