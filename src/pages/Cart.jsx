import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import useSEO from "../hook/useSEO";
import { useCart } from "../context/useCart";

const formatPrice = (value) =>
  new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);

const Cart = () => {
  const { items, cartCount, subtotal, updateQuantity, removeFromCart, clearCart } = useCart();
  const shipping = subtotal > 0 && subtotal < 120 ? 7 : 0;
  const total = subtotal + shipping;

  useSEO({
    title: "Carrello | Nike Sneaker",
    description:
      "Rivedi i prodotti selezionati, aggiorna quantità e prepara il tuo ordine Nike Sneaker.",
    image: "/images/nike-logo.png",
  });

  return (
    <>
      <section className="w-full bg-gradient-to-br from-[#0a0a0a] via-[#171717] to-[#0a0a0a] pt-28 sm:pt-32 lg:pt-40 pb-10 lg:pb-14 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Carrello" }]} />
          <span className="text-white/40 text-xs tracking-[3px] uppercase">Checkout mock</span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] font-black uppercase text-white leading-[1.05] mt-2 tracking-[-1px] lg:tracking-[-2px]">
            Il tuo
            <br /> carrello.
          </h1>
          <p className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed mt-5 lg:mt-7 max-w-2xl">
            Gestisci quantità, taglie e riepilogo ordine. Per ora il checkout resta visuale: perfetto per completare il flusso ecommerce frontend.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#0a0a0a] px-4 sm:px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto">
          {items.length === 0 ? (
            <div className="text-center py-20 bg-white/5 border border-white/10 rounded-[2rem]">
              <i className="ri-shopping-bag-line text-6xl text-white/20 block mb-4" />
              <h2 className="text-white text-3xl sm:text-4xl font-black uppercase">
                Carrello vuoto
              </h2>
              <p className="text-white/55 text-sm sm:text-base mt-3 max-w-md mx-auto">
                Aggiungi un prodotto dalla collezione e lo troverai qui con taglia, quantità e totale aggiornato.
              </p>
              <Link
                to="/collezione"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-black uppercase tracking-wide hover:bg-neutral-200 transition-colors mt-7"
              >
                Esplora la collezione
                <i className="ri-arrow-right-line" />
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_420px]">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <p className="text-white/50 text-sm tracking-[2px] uppercase">
                    {cartCount} {cartCount === 1 ? "articolo" : "articoli"}
                  </p>
                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-white/45 hover:text-white text-xs font-bold uppercase tracking-[1.5px] transition-colors"
                  >
                    Svuota carrello
                  </button>
                </div>

                {items.map((item) => (
                  <article
                    key={item.key}
                    className="grid grid-cols-[96px_1fr] sm:grid-cols-[132px_1fr_auto] gap-4 sm:gap-5 items-center rounded-3xl border border-white/10 bg-white/[0.04] p-4 sm:p-5"
                  >
                    <Link
                      to={`/prodotto/${item.product.slug}`}
                      className={`aspect-square rounded-2xl bg-gradient-to-br ${item.product.bg} flex items-center justify-center overflow-hidden`}
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="max-w-[82%] max-h-[82%] object-contain"
                        style={{ filter: "drop-shadow(0 16px 30px rgba(0,0,0,0.45))" }}
                      />
                    </Link>

                    <div className="min-w-0">
                      <Link
                        to={`/prodotto/${item.product.slug}`}
                        className="text-white text-base sm:text-xl font-black uppercase leading-tight hover:text-white/80 transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-white/50 text-xs sm:text-sm mt-1">
                        {item.product.color} · Taglia {item.size}
                      </p>

                      <div className="flex items-center gap-3 mt-4">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                          aria-label="Diminuisci quantità"
                        >
                          <i className="ri-subtract-line" />
                        </button>
                        <span className="text-white font-black w-6 text-center">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                          aria-label="Aumenta quantità"
                        >
                          <i className="ri-add-line" />
                        </button>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.key)}
                          className="text-white/45 hover:text-white text-xs font-bold uppercase tracking-[1.5px] ml-1 transition-colors"
                        >
                          Rimuovi
                        </button>
                      </div>
                    </div>

                    <div className="col-span-2 sm:col-span-1 sm:text-right border-t sm:border-t-0 border-white/10 pt-4 sm:pt-0">
                      {item.product.originalPrice && (
                        <p className="text-white/35 line-through text-sm">
                          {formatPrice(item.product.originalPrice * item.quantity)}
                        </p>
                      )}
                      <p className="text-white text-2xl font-black">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <aside className="lg:sticky lg:top-28 lg:self-start rounded-[2rem] border border-white/10 bg-white/[0.055] backdrop-blur-xl p-5 sm:p-6">
                <p className="text-white/50 text-xs tracking-[3px] uppercase">Riepilogo ordine</p>
                <h2 className="text-white text-3xl font-black uppercase mt-2">
                  Totale
                </h2>

                <div className="mt-6 space-y-4 text-sm">
                  <div className="flex items-center justify-between text-white/65">
                    <span>Subtotale</span>
                    <strong className="text-white">{formatPrice(subtotal)}</strong>
                  </div>
                  <div className="flex items-center justify-between text-white/65">
                    <span>Spedizione</span>
                    <strong className="text-white">{shipping === 0 ? "Gratis" : formatPrice(shipping)}</strong>
                  </div>
                  <div className="border-t border-white/10 pt-4 flex items-center justify-between text-white">
                    <span className="font-bold uppercase tracking-[1.5px] text-xs">Da pagare</span>
                    <strong className="text-3xl font-black">{formatPrice(total)}</strong>
                  </div>
                </div>

                <button
                  type="button"
                  disabled
                  className="w-full bg-white text-black text-sm font-black uppercase tracking-[1.5px] py-3.5 rounded-full mt-7 opacity-60 cursor-not-allowed"
                >
                  Checkout presto disponibile
                </button>

                <p className="text-white/40 text-xs leading-relaxed mt-4">
                  Checkout, pagamento e spedizione sono mock frontend. La struttura è pronta per essere collegata a backend o piattaforma ecommerce.
                </p>
              </aside>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
