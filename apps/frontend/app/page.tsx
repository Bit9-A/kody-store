import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import Link from "next/link";

const flashDeals = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDwWDLpzoc27pXVLJJwHRFE_cbxop0JxFUhaFyla0VQfBwpGsYYvUgTgjip-yXrpaPcOATBeha6r1Acbf49uvFuTfe-iNYZynOYvk-HPsd8T1EIlxeT-Ai5iN7CSWCkZjMhkL6avmzKSEVT61ck4korcBtjP-dnuGYTSpiQafM31xx4hD3hpZKnC9_ilMJImWtHRBkFCbEGJY4ZVb4DRbWsHHm5zVg5Bf1nSptc-nrPipGr2XaPN1HGdPZs8i8rrF4z6mvN0Wq2Xzg",
    imageAlt: "Nike Sneakers",
    title: "Nike Air Zoom Pegasus 39 Men's Road Running Shoes",
    price: 89.99,
    originalPrice: 120.0,
    discount: "-25%",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBmYNOBmCM494NNk-uEDrULwjGC5vbBthbT63gbni8y6__MXLElLd-NgqggC-UiV0xd3RRf1rxPbCXY9VnfJAWKfRnqnYOSBC99i3-o5nKE4yokSwb4SO9waIbJad4RGHrzrmQqM__yJkA50zBLnwwhQv98b3MCMaYTdTBmPTik0XVkqzix9mofoLhdK-31vfl0uXB0oUxEAsUTSASTNyGobi7pr0hiLeeJb-590xd4hFZoptQu0GBgqhOk5UjE0lecRlt3wYldzRA",
    imageAlt: "Polaroid Camera",
    title: "Polaroid Originals OneStep 2 VF Instant Camera",
    price: 99.0,
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBQM5oldaNa6uxX7F_Xra5PPz8dLRhAvmlO_-XAT7QA2kn8E7U-8g2PwBdlJFHI-kRZZIZviEdeFNR48HWHMDpNN68giyGmAfXfq7rl8QE65qoeP-okpWwYKLASjc2L14ARRovhXVtlcVdsy34gz_P-w0s4Vs205VG11hkC6QRs_ZeOIPNFfZRQ5dVneRQ9ErqYORfa4-SvlHhzAfUglHwmuL-PmXhEWjvNbNg5zJvSrOKgMqaU46DIhH0sg__dmk-bwPJ1RuT61mM",
    imageAlt: "Headphones",
    title: "Sony WH-1000XM4 Wireless Noise Canceling Headphones",
    price: 312.99,
    originalPrice: 348.0,
    discount: "-10%",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2vjWi3FxFFQT8gzHxziKpES73DDGS8wL7A_LBySpPxva2ZWdPk6oiznIlfveLDR2emxykp3MGFMY7j0SBoiDLDP76RRVOmVWaYQtijxkVhWfEH0XWB9IRtxliWdlNIUVAoYfzE8O0jVphmiCjf6vbm58qHHfpiSIaNzACPiEV1zp94u_3zm7UQ4NBlWsQ4gb0akjHKIjHX3xdlgGldpgasvSPZqA3KX5-Huvd9eoNkbjTGUqW13GF224kpKgt_K39s7b-Q9BskT0",
    imageAlt: "Apple Watch",
    title: "Apple Watch Series 8 GPS 45mm Midnight Aluminum Case",
    price: 429.0,
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsLz7HkUxKnQMq-UiFodM8JXdIqQON2TwjiRijrsT47fFy9DZq_YVOwgmNYhMr3kNZ9FUYzILhUrwEn47oo6BrHd5D4cJqiysp9Imz6X9Cqn3Q0R9ChhMTztt7Z0EWa5eE_jS3nDPhI5cmzgm3YrL3RoFTogO3kqup9Q-l5SgJ-fYa-3DH-7aNo72A5yxf1jsz4sZhPdDUk1x4Jt8MxDzTpD-bPUeM4YesLZnHm9Oz3YIkltNvckYNrcbE96Adn7zvwWG7SX6eoyQ",
    imageAlt: "Mechanical Keyboard",
    title: "Keychron K2 Wireless Mechanical Keyboard RGB",
    price: 66.0,
    originalPrice: 110.0,
    discount: "-40%",
  },
];

const trends = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbHVRjM0485bSyj9r-aaXSocxftfzCCezspBYyMnvHNHDHVgiWHyimMaHXn4g1-AkFbfz1gWLCwsYyDintQuGGmTccM6cCuhNdprmGuYG7XYUAHJQmryX25jnSrSgFpYtLAHewLNrhgMlKQ8lsZ0NMuWZgF8GANd58FGfwRMDAp3gdQp1a_0jPpdsnqwWvtQFf3ka7IHOPtHHvHDVo_wWlF3fLcCb0o0aLr2KBNfh5Dax5nsBVt2ZMSDibbPrvkfSL8fMP_zMIN8A",
    imageAlt: "Ceramic Vase",
    title: "Nordic Minimalist Ceramic Vase Set",
    price: 24.5,
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnYJn95rFGKM_Soa9m81so08AxU0yenrd_V2ED_J7uyQVxtFqwx9Co_IS6T6DOr1g9luCPXJ2BkiY1aSvn9onhuUXBcPu8URg06hyns--t3HpCQ4d1xvcJCrf5g6J0udq38Sy0tG1OZ31PeBK3-Kz6YmwMKctEGf4C4Dcj8Ose__MRadgFlsRQ45rPizFgdrCTy8HcsqM0mRm8QMvk6aj6wPXe4DDQ-h5llf2MA3LuE7MLpd1edxOkQxB72AEHxJD4F08pppoKZwY",
    imageAlt: "Smart Watch",
    title: "Fitbit Versa 3 Health & Fitness Smartwatch",
    price: 149.95,
    badge: "Best Seller",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRyVGPbNY1fHyr7DgLbGVIG0-JkwhvaTRzWmZeh0S_SdKOC_--NchFWiiTbED7MkgjjFFlFHTuUcdjDmVsW1srVgR6TRbNWqKjmpAj-JRt-bk5N5b_9WIcwqE47X9vRtLqdgxMfiO0dAfnZNB6ypA_kNXORcXzmsE7Y-0gemRdFdkSHo5p1S148M3KGsua75xOfnjtPm3mCoHRjJZgxQFnPwFy1OggrW5K34Va6pSK3FgWETHakmZmGCMWyQWQtmkh_ulxGkHQ0m0",
    imageAlt: "iPad Air",
    title: "Apple iPad Air (5th Gen) 64GB WiFi Space Gray",
    price: 559.0,
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDoRByN8L3ezt1KtmQHJMNj-yKOiQ6dP5tyIVDqCf5Nfp9OBw52sd7_UW2hxpmDcdCPnGa8OE86cHaDW4XWgR_LOqys6VE7lJ6S6l3B4IcXQqS-POIq5rnuryZ6IS7MNqvILFmP1eWvUDoV7ct-3CAlEQtRD_Xy7zFZ8_kJfB4BmxHlOUyuv-EHYnwp44PWXgQ5PUPJnSF2inkyaRfLV7vNhHekZ9S_GaRlo0HekExcYiTlQ02mly5YXZ4iZFIBSlVWmSt-Jr_ckw",
    imageAlt: "Smart Watch Band",
    title: "Silicone Sport Band for Apple Watch 45mm",
    price: 12.99,
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZA2PC45przp1BsoK6OGhEZNlOKYykeDoLl9gqImXPLAFoBkiN74AjmkQZv8IhNb3azqmecL2ACO-uCeaO8LrezBu6vCJ__4B1S22UR7Qwg922Fu7y9WUD4Bz8dzyd4Z_BmImnQdDRo4MAUJrp_7Tt3i7O3z89AIa7VPRTTl91INWAy_qUK6RtwQF4yPRqHFxMyKiBBGEYxkerAR3MT7suRPPqRwVuzBEiarMOGw41UMOa5MfIBq7p6MfMaHC-PzmtH1Zs4VTVdFw",
    imageAlt: "Coffee Maker",
    title: "Nespresso Vertuo Next Coffee Machine",
    price: 169.0,
  },
];

const categories = [
  { icon: "laptop_mac", label: "Laptops" },
  { icon: "checkroom", label: "Fashion" },
  { icon: "sports_esports", label: "Gaming" },
  { icon: "chair", label: "Home" },
  { icon: "directions_run", label: "Sports" },
  { icon: "pets", label: "Pets" },
  { icon: "camera_alt", label: "Photo", desktopOnly: "md" },
  { icon: "menu", label: "More", desktopOnly: "lg" },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen pb-20">
        {/* Hero Section */}
        <section className="relative bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-slate-900 opacity-90 z-10" />
          <img
            alt="Global Network Background"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 z-0"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhWo4WgGFCWZbFJWXZEDmq35uf8RDj3ZFOx1Yzz66iLjWey7UfdVhy3Z74NrhYjmcbe5X_qYMDqvBPp2eW7n3A5vqLFKd9EuyJSAjYc0OZHmokdYhsoz5E5jC59ucwZAo2kyDK1dNE9lngJv6V85Zu1b5mTIxU0rg0rXvOjrCqrDCB8tWlwvFVgByNmlLSHi0Ws25FLxh3-M9dnEt9OZX4UzOZzbKV_cQwMRI3EPvrpG1HT07amJsKWQWlxzeIgFqkbjbUBV5gmqc"
          />
          <div className="relative z-20 container mx-auto px-6 py-20 lg:py-28 flex flex-col items-center text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-medium mb-6 backdrop-blur-sm">
              New Feature: Global Import API
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight max-w-4xl leading-tight">
              Traemos el mundo <br className="hidden md:block" /> a tu puerta.
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mb-10 font-light">
              Experience seamless cross-border shopping with automated customs
              handling and real-time tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-accent/25 flex items-center justify-center gap-2">
                Start Shopping
                <span className="material-icons-round text-sm">
                  arrow_forward
                </span>
              </button>
              <button className="bg-transparent border border-slate-600 hover:border-white text-white px-8 py-4 rounded-full font-semibold transition-all hover:bg-white/5 flex items-center justify-center gap-2">
                <span className="material-icons-round">
                  play_circle_outline
                </span>
                Ver Tutorial de Importación
              </button>
            </div>
          </div>
        </section>

        {/* Quick Access Categories */}
        <div className="container mx-auto px-6 -mt-10 relative z-30">
          <div className="bg-surface-light rounded-xl shadow-soft p-6 md:p-8">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center">
              {categories.map((cat) => (
                <Link
                  key={cat.label}
                  href="#"
                  className={`flex flex-col items-center gap-3 group ${
                    cat.desktopOnly === "md"
                      ? "hidden md:flex"
                      : cat.desktopOnly === "lg"
                        ? "hidden lg:flex"
                        : ""
                  }`}
                >
                  <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300 border border-slate-100">
                    <span className="material-icons-round text-slate-600 group-hover:text-accent text-2xl">
                      {cat.icon}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-slate-600 group-hover:text-primary">
                    {cat.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Flash Deals */}
        <section className="container mx-auto px-6 py-12">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-primary tracking-tight flex items-center gap-2">
                <span className="material-icons-round text-orange-500">
                  bolt
                </span>
                Ofertas Flash en Bodega
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Limited time offers ending soon.
              </p>
            </div>
            <Link
              href="#"
              className="text-accent hover:text-accent-hover font-semibold text-sm flex items-center gap-1"
            >
              See All{" "}
              <span className="material-icons-round text-sm">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="flex overflow-x-auto gap-6 pb-8 hide-scroll -mx-6 px-6 scroll-smooth">
            {flashDeals.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>
        </section>

        {/* Promo Banner */}
        <section className="container mx-auto px-6 py-4">
          <div className="bg-primary rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-16 -mt-16" />
            <div className="relative z-10 max-w-lg">
              <h3 className="text-3xl font-bold text-white mb-2">
                Join CodeRAM Prime
              </h3>
              <p className="text-slate-300 mb-6">
                Get free 2-day global shipping, exclusive access to developer
                tools, and early access to deals.
              </p>
              <button className="bg-white text-primary px-6 py-3 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">
                Start 30-Day Free Trial
              </button>
            </div>
            <div className="relative z-10 shrink-0">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
                <span className="material-icons-round text-white text-3xl">
                  rocket_launch
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Amazon Trends */}
        <section className="container mx-auto px-6 py-12">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-primary tracking-tight flex items-center gap-2">
                <span className="material-icons-round text-accent">
                  trending_up
                </span>
                Tendencias en Amazon
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                What the world is buying right now.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full border border-slate-200 hover:bg-slate-100 flex items-center justify-center transition-colors">
                <span className="material-icons-round text-slate-600 text-sm">
                  arrow_back
                </span>
              </button>
              <button className="w-8 h-8 rounded-full border border-slate-200 hover:bg-slate-100 flex items-center justify-center transition-colors">
                <span className="material-icons-round text-slate-600 text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {trends.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
