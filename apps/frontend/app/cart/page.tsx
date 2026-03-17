import Link from "next/link";
import CartItemCard from "../components/CartItemCard";

const nationalItems = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBn9HPdydvPahKTaVJQBR5OE2nmYWlKG0VHFWxDN3T3L5VT82aqJn4CbHjuP7eWMY1lqhP_mqlqfHWwTSf90Dy7h-QxUHxZlkSHEJCl2n9zqj3Pk1HqXRWi7Y_A0ov1evZFkOzSBj2u3fzJAjX6nO7pz9pLBvCXZ5eeSlm3ZSfJIJVL3VFRf14P3-dxqCx54UYWDQj_SoV1Ub-Q8y_KH0r3h-W67E3iKxzFpopqX1mXxhq7lBQ8hEDqrxHCvvn-ZBXCa6TzGgbI6Hk",
    title: "Teclado Mecánico CodeKey Pro",
    description: "Switches Brown · Layout ISO · RGB Per-Key",
    price: 120.0,
    quantity: 1,
    stockLabel: "En Stock",
    stockColor: "green" as const,
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBQMhE11avZc7YMOZDpGUgCZ3QZuQ4XqxN9ASAY7l8sTqfjqDg3bK1emBpx24ZSA2y8lDkxvbJTv1ARhnX2tTv8JlcCj1PzLuCk1xL6J5Yth2V5-w-ww3l2c9z31IW119VjqKBFMRVkfT3qiRBXlsDqOB0FccHv8nIPjkXwuEUc-R_3FPCvQQ3Cm7o99hqpflcrERXKi4h68A8UZj1RN_9VpqN7V-VZbkBBIQXCGaYP-ygPkHkacPaE0Z5FqfPrCbzLPYO1fQw8P0",
    title: "Hub USB-C Ultra Slim",
    description: "HDMI 4K · 3x USB 3.0 · SD/MicroSD",
    price: 45.0,
    originalPrice: 55.0,
    quantity: 1,
    stockLabel: "En Stock",
    stockColor: "green" as const,
  },
];

const internationalItems = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBnJLj7MIiDMDAGipQkqQqXKWCf5UoswlE8x0FpYxpKLU9NW0NZNXi1cJb_ioR8DP9c39vMTIBYhCd7I84GD2oaB0_rVb_7qJiUJnpNMj3I-q_9tWl9nM_ZFfgjEcRD3GF1bwqj3PVfupKuF9IgI2AhSHEpKWZeO5_FPqIkj5_HpA-pD-E2jQyNx5mlJyDFifFVTZjR4TqS1VkR5Xtqp2TdMEm1WM2aNrTYeM5Xaue3DnpQ9sjGMkB26SaC1atnvhp3xxuQLfeMzk",
    title: "Keycaps Artisan Set — Limited Edition",
    description: "PBT · Cherry Profile · 117 Teclas · Diseño Sakura",
    price: 35.0,
    quantity: 1,
    stockLabel: "Últimas 3 unidades",
    stockColor: "amber" as const,
  },
];

const frequentlyBought = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCeD-g_Y59N3C5QolNjLJ62mKgpbNAW6I3pUMiDHX3v7W_bHmQlDIDdl6xaSVSiRRHaanGRfq_YnGmojCsaKfpaBjDfRCRPhJlmCpJj2R0YHPHDPdjpgaJWjE5OxIJOCBmA2Rl-XSb9uCu-g0j1P9FQ9q6Wb5Ga1INR4qGlYHBZiAz8bqRjLWL7EgUwpfLaHCu6rrMXOHLHm-P2VPCmcPAB5kZQCY90E1VRmSbgpWzqL2mbE_Sq8h1DK2gR21Ux8mgYLDV_mZqcso",
    title: "Alfombrilla de Escritorio XL",
    price: "$15.00",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuANVs8bMdYwE_1vHoehHkGf9GZ8fypHBwEkjG7B4s5BVCLQqFb9fCrF1N1EVD3O_PoVXn8Z1bTFLo-Tqp_EO1uiB4h0yMTEGFUbvQ3xLfxHaWjA7Mxg80cfvNwTcmJLXHdpZ8i1N1w7W99IbBxdtE3IhGy08h3YM1_nJRniCHHGhFWKxgwxMruhOPKKy3QJQR7liFnnJdnHxqLt4fO3wXHOKDj4-DJYAZb4Gy_b7Yz3bGKTKPfB_cXqsKkPJxdjY5Uhu9cAFBp0YdVY",
    title: "Cable Type-C Coiled Pro",
    price: "$22.00",
  },
];

export default function Cart() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary text-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center font-bold text-lg shadow-lg shadow-accent/30">
              CR
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">
              CodeRAM
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            <Link
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-[18px] mr-1 align-middle">
                bolt
              </span>
              Flash Deals
            </Link>
            <Link
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-[18px] mr-1 align-middle">
                language
              </span>
              Import
            </Link>
          </nav>
          <div className="flex items-center gap-5 shrink-0">
            <button className="relative p-2 text-slate-300 hover:text-white transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-primary" />
            </button>
            <div className="h-5 w-px bg-white/20" />
            <button className="flex items-center gap-3 group">
              <img
                alt="User Profile"
                className="w-9 h-9 rounded-full border-2 border-white/20 shadow-sm group-hover:border-accent transition-colors"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxoqf4CX7XE38qIPAOCk4XoZqMewFi_OvKb32o1VvHT0nOIFCsomZxWHlcQMrpTbxkPYrq_LGZm2Gc2sBjvFuaupxcNt_gvtm2eBg3CkCNShSsAo-ZVMkIJnJFXFT-5AwDTSj9zT8v3M12k-A5c8tmhM-p8Ay6sLMN9VlLzKQqZUlHOdL9yD2CdQDYClYdHpUcYUaWFqYWGm2TBELZBv_5t3HczzDnFqtBHhSJoOqfbq2YK5WIZwfHkAyxyPtPuYuV1LkHBu2Q7j1Q"
              />
              <div className="hidden lg:flex flex-col items-start">
                <span className="text-sm font-semibold text-white">Adrian</span>
                <span className="text-xs text-accent">Pro Member</span>
              </div>
            </button>
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Title */}
          <div className="flex items-center gap-4 mb-8">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              Tu Carrito
            </h1>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-accent text-white shadow-sm shadow-accent/30">
              3 artículos
            </span>
          </div>

          <div className="lg:grid lg:grid-cols-3 lg:gap-8 items-start">
            {/* Left: Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {/* National */}
              <div className="bg-white rounded-xl shadow-card border border-border-light overflow-hidden border-l-4 border-l-green-500">
                <div className="flex items-center justify-between bg-slate-50 px-6 py-4 border-b border-border-light">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="material-symbols-outlined text-green-600 text-[18px]">
                        inventory_2
                      </span>
                    </div>
                    <h2 className="font-semibold text-slate-800 text-lg">
                      Envíos Nacionales
                    </h2>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px]">
                      local_shipping
                    </span>
                    Envío GRATIS
                  </span>
                </div>
                {nationalItems.map((item, i) => (
                  <CartItemCard key={i} {...item} />
                ))}
              </div>

              {/* International */}
              <div className="bg-white rounded-xl shadow-card border border-border-light overflow-hidden border-l-4 border-l-amber-500">
                <div className="flex items-center justify-between bg-slate-50 px-6 py-4 border-b border-border-light">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                      <span className="material-symbols-outlined text-amber-600 text-[18px]">
                        flight
                      </span>
                    </div>
                    <h2 className="font-semibold text-slate-800 text-lg">
                      Envíos Internacionales
                    </h2>
                  </div>
                  <div className="relative group cursor-help">
                    <span className="text-xs bg-amber-100 text-amber-700 font-medium px-3 py-1 rounded-full flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px]">
                        info
                      </span>
                      Aduana Incluida
                    </span>
                  </div>
                </div>
                {internationalItems.map((item, i) => (
                  <CartItemCard key={i} {...item} />
                ))}
              </div>

              {/* Frequently Bought Together */}
              <div>
                <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-accent text-[20px]">
                    interests
                  </span>
                  Comprados juntos frecuentemente
                </h3>
                <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                  {frequentlyBought.map((item, i) => (
                    <div
                      key={i}
                      className="min-w-[200px] bg-white rounded-xl border border-border-light p-4 flex flex-col items-center hover:shadow-card-hover transition-all group"
                    >
                      <div className="w-full aspect-square rounded-lg overflow-hidden bg-slate-50 mb-3">
                        <img
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          src={item.image}
                        />
                      </div>
                      <p className="text-sm font-medium text-slate-800 text-center line-clamp-2">
                        {item.title}
                      </p>
                      <p className="text-sm font-bold text-slate-900 mt-1">
                        {item.price}
                      </p>
                      <button className="mt-3 text-xs font-bold text-accent hover:text-accent-hover transition-colors flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">
                          add
                        </span>
                        Añadir
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Order Summary */}
            <div className="mt-8 lg:mt-0">
              <div className="sticky top-24">
                <div className="bg-white rounded-xl shadow-card border border-border-light overflow-hidden">
                  <div className="bg-slate-50 px-6 py-4 border-b border-border-light">
                    <h2 className="font-semibold text-slate-800 text-lg">
                      Resumen del Pedido
                    </h2>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Subtotal Nacional</span>
                      <span className="font-medium text-slate-900 tabular-nums">
                        $165.00
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">
                        Subtotal Internacional
                      </span>
                      <span className="font-medium text-slate-900 tabular-nums">
                        $35.00
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">
                        Envío{" "}
                        <span className="text-xs text-slate-400">
                          (express)
                        </span>
                      </span>
                      <span className="font-medium text-slate-900 tabular-nums">
                        $15.00
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Impuestos</span>
                      <span className="font-medium text-green-600 tabular-nums">
                        $0.00
                      </span>
                    </div>
                    <div className="h-px bg-border-light" />

                    {/* Promo Code */}
                    <div className="flex items-center gap-2">
                      <input
                        className="border border-border-light rounded-lg px-3 py-2.5 text-sm flex-1 outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all placeholder-slate-400"
                        placeholder="Código de descuento"
                        type="text"
                      />
                      <button className="bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm">
                        Aplicar
                      </button>
                    </div>

                    <div className="h-px bg-border-light" />

                    {/* Total */}
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-slate-900">
                        Total
                      </span>
                      <span className="text-2xl font-bold text-primary tabular-nums">
                        $215.00
                      </span>
                    </div>

                    <button className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-accent/20 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 group text-base mt-4">
                      <span className="material-symbols-outlined group-hover:translate-x-0.5 transition-transform">
                        lock
                      </span>
                      Proceder al Pago
                    </button>

                    {/* Trust Badges */}
                    <div className="flex items-center justify-center gap-6 pt-4 border-t border-border-light mt-4">
                      <div className="flex flex-col items-center gap-1">
                        <span className="material-symbols-outlined text-slate-400 text-[20px]">
                          verified_user
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          Secure
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <span className="material-symbols-outlined text-slate-400 text-[20px]">
                          cached
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          Returns
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <span className="material-symbols-outlined text-slate-400 text-[20px]">
                          support_agent
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          Support
                        </span>
                      </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="flex items-center justify-center gap-3 pt-2">
                      <span className="w-10 h-6 bg-slate-100 rounded border border-slate-200" />
                      <span className="w-10 h-6 bg-slate-100 rounded border border-slate-200" />
                      <span className="w-10 h-6 bg-slate-100 rounded border border-slate-200" />
                      <span className="w-10 h-6 bg-slate-100 rounded border border-slate-200" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
