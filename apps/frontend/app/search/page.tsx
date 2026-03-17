import Link from "next/link";
import ProductCard from "../components/ProductCard";

const searchProducts = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD53-s5m1GUUJL4wM1pgVhfXj1nZaG9KqEfHqegL9ON05TiiuSPFdm72M9HRXQRyXiUkbSoaPUfRht7VcfyanOKRYszI5kGYHpOQ4O3ztq1XBD1LHyV7CpcdHc9wGCji7CMQkFaMwgas-jRkeUDhNfyVT4U4xT-eLNy1z_bxgT2CKFtqo0CYxUA3N_sZ_gNb_DVXmRoqEUWMaMjqBIhMqLt-REDA-G5BQP_huoPRxzLerDTAIU9bFp_UV5v3SP5knB_7bT2v_v6GkE",
    imageAlt: "Headphones",
    title: "Sony WH-XB910N Extra BASS Noise Cancelling Headphones",
    price: 148.0,
    originalPrice: 249.0,
    category: "Audio & Sound",
    stockLabel: "In Stock",
    showFavorite: true,
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA1YYweakuJYhGRYZXzEanjW7mYLi8gQSqgxj8zFu5XVKdxv8pTFiLnn7A2v52bleMRrstlgXsQ6Sg3tZ5iDj5FCRPdGrgOxohtOXv3jasJFhOyL3EjJCihCs28PuBua37nPIbfdf255IsWjQZksGP59Pr5ZGsNtXaXxxuM5nFIfUSV2ioKztBLcANPMi2QjRNGg0HlDg7oYxM1HzO2TUWMl3TI_WnYerXVDSJZF6Smz4Xc8q_iVaOart-LtiptVW-QN7Bxz6ChDyA",
    imageAlt: "White Headphones",
    title: "Premium Wireless Headphones - Silver",
    price: 299.0,
    category: "Audio & Sound",
    showFavorite: true,
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDbMLTxoN7P5lgzOYcIbxEqnHGK9KybuFchJDzZ0K2s0IcmcICoEi_SNh5Nu9-63UVnTN9qO2Ug1egpWa5iLLWyZBxaqFbHqrY4BB7kq8NW2GKG0jpXiQpywHGpezNZMdcwbIU56L_2KCrpcFUf83TmwXSv15YGeYEktw-9iFQCxknTxOKjb0OGFxFaPFsW5TF23fu5-DvJZNMl5ZWzleVN_xQhuNzorVFbeuklOAoyET5oyRyHdmRf0htAA-qSlisGqWBQSLvirq4",
    imageAlt: "Beats Headphones",
    title: "Beats Studio3 Wireless Noise Cancelling Over-Ear Headphones",
    price: 199.95,
    originalPrice: 349.95,
    category: "Audio & Sound",
    stockLabel: "Low Stock",
    showFavorite: true,
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDHw_0fHll5eTOgM86iRc7jn1dqjzeHZqJ-3CvbWsY24bY6ZifKRuFRa8GJrf7hYMWp5FsereJ7d-db608hMu7qTFkZDnPxGwK6yoTnkuag2ETn6v1jcYkabbfRVfs9n4T1B5ixXwRNzixXbs52bYSvqPqHpDncb1O2Jyc_uJwyhKayZxNVZXqOp9u8sttbJZZ3xaQOYpM0RRyXU7dV9Qexv_Dt58ghBVu2PQnUNAmLYQDp_203QKuJslKVeJWIueY8RlPaMmBlQSE",
    imageAlt: "AirPods",
    title: "Apple AirPods Pro (2nd Generation)",
    price: 239.0,
    category: "In-Ear",
    showFavorite: true,
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBowXTCYlDigUwpqFxKyro-4HLKUQhnSGSoggfWgCSpLoPfD4EcTNBIQOHTvPCczFRStpPY5AZxUpkvyAQ8IPY3Q-9GyKyPttD_qq4gfL7YZNLidJIFiyR9KbhkrVmH5WHOdc8eGktyahNLLHZi5cE6GfZWWV7vCFC63Auf5zjkXjuiJ2aJAMQy6WfkPE2SsXFNciU3bdv6gCn1ds4CEgEpk4EjAE_QgZ6rinJtcQtVDeWc0HX2-xDpMBX1sBA5D0McYIqdbmnkfUQ",
    imageAlt: "Urbanears Headphones",
    title: "Urbanears Plattan 2 Bluetooth On-Ear Headphones",
    price: 69.0,
    category: "Audio & Sound",
    showFavorite: true,
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2QgTvSzOYF_Dxrw_pkRTSLf9e_gAErvBJIt6WvlaZq3mu4hxKX7Q-5v0M6psY-J4dZpriZejwUnWe3ZaPkjHoYk0A7oOA7Nsze1KC71gWPO9iW8DFebmPYe1vJMTT43w7I0F1sum-YbUR4KrK5WuXprlTt4qdpmT6uOCyvYX_BpKaJro1KWFRkk9Yrc3QUXNg2MGrOwY8UcJIAy0BZArymoHfib9mO_pRFhgzuvj9sZcsKalIdUAKjlKFs6dcHdUgwoOLGwZ9cL4",
    imageAlt: "Jabra Earbuds",
    title: "Jabra Elite 7 Pro In Ear Bluetooth Earbuds",
    price: 199.99,
    category: "In-Ear",
    showFavorite: true,
  },
];

export default function SearchResults() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-[1600px] mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 shrink-0 w-[240px]">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-white text-[20px]">
                bolt
              </span>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              CodeRAM
            </span>
          </Link>
          <div className="flex-1 max-w-2xl">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-slate-400 group-focus-within:text-blue-500 transition-colors">
                  search
                </span>
              </div>
              <input
                className="block w-full pl-11 pr-12 py-2.5 rounded-full border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                placeholder="Search products, paste links..."
                type="text"
                defaultValue="Sony WH-1000XM5"
              />
              <div className="absolute inset-y-0 right-1.5 flex items-center">
                <button className="p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors shadow-sm flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0 w-[240px] justify-end">
            <button className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
            </button>
            <button className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
              <span className="material-symbols-outlined">shopping_cart</span>
            </button>
            <div className="w-px h-6 bg-slate-200 mx-1" />
            <button className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-full hover:bg-slate-100 transition-colors">
              <img
                alt="User Avatar"
                className="w-8 h-8 rounded-full border border-slate-200 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0zcxQrTZZ4Oi9EtPUpVzKm_8YNvA0LBMoTiKNyn6Auj7JS97136LeCR6cGCg-paYwH6Xu_DcRDqW0IU0nLfQSFp53IO85ukMfx_RFsoLGIXqnwIwGHs1UbeeAxs6FJ193edt8WH9vfuIB1gdcwzZBKuBZzazePcn-gvYFVhxrCgcB9aTxY2VBdu1og2aUpD_100_mrTjPJL6vxEnd4wgN5X3ZunKsGj7mVGSmYb0A2wZoRukInmlbnwKTfMTGfdeTUtF3Ovo8c9A"
              />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-[1600px] w-full mx-auto px-4 py-8 flex gap-8">
        {/* Filter Sidebar */}
        <aside className="hidden lg:block w-[260px] shrink-0 space-y-8">
          {/* Origen */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 pl-1">
              Origen
            </h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer group p-1 rounded-lg hover:bg-slate-50 transition-colors">
                <input
                  defaultChecked
                  className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500/20"
                  type="checkbox"
                />
                <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">
                  Bodega Local
                </span>
                <span className="ml-auto text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                  24
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group p-1 rounded-lg hover:bg-slate-50 transition-colors">
                <input
                  className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500/20"
                  type="checkbox"
                />
                <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">
                  Importación USA
                </span>
                <span className="ml-auto text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                  182
                </span>
              </label>
            </div>
          </div>

          <div className="h-px bg-slate-100 w-full" />

          {/* Price */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pl-1">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Precio
              </h3>
              <button className="text-xs text-blue-600 font-medium hover:text-blue-700">
                Reset
              </button>
            </div>
            <div className="relative pt-4 pb-2 px-1">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 rounded-full" />
              <div className="absolute top-1/2 left-[10%] right-[30%] h-1 bg-blue-500 rounded-full" />
              <input
                className="absolute w-full top-1/2 -mt-1 h-2 opacity-0 cursor-pointer z-10"
                max={1000}
                min={0}
                type="range"
                defaultValue={100}
              />
              <div className="flex justify-between items-center pt-4">
                <div className="px-3 py-1.5 rounded-md border border-slate-200 bg-white text-sm font-medium text-slate-700 shadow-sm">
                  $100
                </div>
                <div className="px-3 py-1.5 rounded-md border border-slate-200 bg-white text-sm font-medium text-slate-700 shadow-sm">
                  $700
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-slate-100 w-full" />

          {/* Category */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 pl-1">
              Categoría
            </h3>
            <nav className="flex flex-col space-y-1">
              <a
                className="flex items-center justify-between px-3 py-2 rounded-lg bg-blue-50 text-blue-600 text-sm font-medium"
                href="#"
              >
                <span>Electronics</span>
                <span className="material-symbols-outlined text-[18px]">
                  expand_less
                </span>
              </a>
              <div className="pl-3 space-y-1 pt-1 ml-3 border-l-2 border-slate-100">
                <a
                  className="block px-3 py-1.5 text-sm text-blue-600 font-medium bg-blue-50/50 rounded-md"
                  href="#"
                >
                  Audio &amp; Headphones
                </a>
                <a
                  className="block px-3 py-1.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors"
                  href="#"
                >
                  Cameras
                </a>
                <a
                  className="block px-3 py-1.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors"
                  href="#"
                >
                  Computers
                </a>
              </div>
            </nav>
          </div>

          {/* Rating */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 pl-1">
              Rating
            </h3>
            <div className="space-y-1">
              <button className="flex items-center gap-2 w-full group py-1.5 px-1 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[18px]"
                    >
                      star
                    </span>
                  ))}
                  <span className="material-symbols-outlined text-[18px] text-slate-300">
                    star
                  </span>
                </div>
                <span className="text-sm font-medium text-slate-600 group-hover:text-blue-600">
                  &amp; Up
                </span>
              </button>
              <button className="flex items-center gap-2 w-full group py-1.5 px-1 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="flex text-yellow-400">
                  {[...Array(3)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[18px]"
                    >
                      star
                    </span>
                  ))}
                  {[...Array(2)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[18px] text-slate-300"
                    >
                      star
                    </span>
                  ))}
                </div>
                <span className="text-sm font-medium text-slate-600 group-hover:text-blue-600">
                  &amp; Up
                </span>
              </button>
            </div>
          </div>
        </aside>

        {/* Results */}
        <section className="flex-1 w-full min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 mb-1">
                Search Results for &quot;Sony&quot;
              </h1>
              <p className="text-sm text-slate-500">
                Showing 1-24 of 206 results
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative inline-block text-left">
                <select className="appearance-none bg-white border border-slate-200 hover:border-slate-300 text-slate-700 py-2 pl-4 pr-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm font-medium cursor-pointer transition-all">
                  <option>Relevance</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest Arrivals</option>
                </select>
              </div>
              <div className="flex bg-white border border-slate-200 rounded-lg p-1 shadow-sm">
                <button className="p-1.5 rounded bg-slate-100 text-slate-900">
                  <span className="material-symbols-outlined text-[20px] block">
                    grid_view
                  </span>
                </button>
                <button className="p-1.5 rounded text-slate-400 hover:text-blue-600 transition-colors">
                  <span className="material-symbols-outlined text-[20px] block">
                    view_list
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Featured/Detected Card */}
          <div className="mb-8 bg-white rounded-xl border-2 border-blue-500 shadow-card overflow-hidden flex flex-col md:flex-row relative group hover:shadow-lg transition-all duration-300">
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider z-10 shadow-sm">
              Link Detected
            </div>
            <div className="w-full md:w-1/3 bg-slate-50 p-6 flex items-center justify-center relative">
              <img
                alt="Detected Product"
                className="max-h-48 object-contain rounded-lg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK_YVvvhQm4F-UxDf-wbO-9Vpp67ror7HRxdj2CfhvUmF4O6itJEYhBTTpaDSlKTsSdFYyBIZWeLD2h2zHF_I8M5cGgGTTunytvl6ATDZn1KbjxlVjcVlPh6TNYcQYdSse76p8u6D8ceYPT8iKKQMNI1N2q_Dbqh6xK1OAIrfcBA9iF4000e9iyCRJwFKHvUIihCQhcT5iR21JbnCUVb1Xk3XA7h8k_1grm_5kJQxbGHWeaApic1uiI7vflDrifkes9gx8H3X_w7E"
              />
            </div>
            <div className="flex-1 p-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <img
                  alt="Amazon"
                  className="h-5 opacity-60"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf9EM-P8O0i-n14rpIrIplJXg5QePgZsMs994D42KhzvGmf3q9QDXPIo1YhNBVJ0Q9dCTyhdB4pw1TFClb6Lka9ON5bMxdmX-bjNhq59GAqljCxctu2r7pwUbyQ8ZZ0bjB79q9L7TQ5DvqREf_10R61gA1zDqSfEZfubvJSZuuh_9cIdMKgyCe76GX59T5ppXF1wU5WAW3z-lc6NuMcFxaYgoHDQasBE9vValDqS-Z3vplGnbl6FifXzIYGHcV8OHpd_z9dFHKeZg"
                />
                <span className="text-xs text-slate-500 font-medium px-2 py-0.5 bg-slate-100 rounded-full">
                  amazon.com
                </span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
                Sony WH-1000XM5 Wireless Noise Canceling Headphones
              </h2>
              <div className="flex items-center gap-1 mb-4">
                <span className="material-symbols-outlined text-yellow-400 text-sm">
                  star
                </span>
                <span className="text-sm font-medium text-slate-700">4.8</span>
                <span className="text-sm text-slate-400">(2,402 reviews)</span>
              </div>
              <div className="flex items-end justify-between mt-auto">
                <div>
                  <span className="text-xs text-slate-500 block mb-0.5 font-medium">
                    Price found
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-slate-900">
                      $348.00
                    </span>
                    <span className="text-sm text-slate-400 line-through">
                      $399.00
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Link
                    href="/product/1"
                    className="px-5 py-2.5 rounded-lg border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors"
                  >
                    View Details
                  </Link>
                  <button className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-sm hover:shadow transition-all flex items-center gap-2">
                    <span>Import Product</span>
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {searchProducts.map((product, i) => (
              <ProductCard key={i} variant="grid" {...product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center pb-12">
            <nav aria-label="Pagination" className="flex items-center gap-1">
              <a
                className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-500 transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">
                  chevron_left
                </span>
              </a>
              <a
                className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium text-sm"
                href="#"
              >
                1
              </a>
              <a
                className="px-4 py-2 rounded-lg border border-transparent text-slate-600 font-medium text-sm hover:text-blue-600 hover:bg-blue-50 transition-colors"
                href="#"
              >
                2
              </a>
              <a
                className="px-4 py-2 rounded-lg border border-transparent text-slate-600 font-medium text-sm hover:text-blue-600 hover:bg-blue-50 transition-colors"
                href="#"
              >
                3
              </a>
              <span className="px-2 text-slate-400">...</span>
              <a
                className="px-4 py-2 rounded-lg border border-transparent text-slate-600 font-medium text-sm hover:text-blue-600 hover:bg-blue-50 transition-colors"
                href="#"
              >
                8
              </a>
              <a
                className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-500 transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">
                  chevron_right
                </span>
              </a>
            </nav>
          </div>
        </section>
      </main>
    </>
  );
}
