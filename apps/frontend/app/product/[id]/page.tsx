import Link from "next/link";

const thumbnails = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMP3WbrMq5egWkk3FlVhMLK1VilM4gn4hVBAMuzGat4pv3AuHdIBzzV5H2TfVH_ronhQ_twN2ypnP4zeBWoAJCT7Q7OWInlqV-bPKFjHKpoaGmMuowam1r_GKWmcV8l8VQqVOffljoRb72vRUES6X8hQBtYgpdstKpstANBBU7ggBd9hri3orAbcQXLlhdNNO2ErA_UqOWp8UtWJ91vdVFCZm8-LI61AhWeEzTMYh8fzXSYqCAhFSJwStP3xokyKfSYic8uw-Fs30",
    alt: "Front view thumbnail",
    active: true,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_Fl7JK-aqxfJelFNmac1Bp2CnVlDm2kXNr1II1GvyStmWoFUl1JrQ1tT1ZVzG2ozat8d6lQVbODcJSJfShP565q8nAgMo6QvGS5guFW9xVKjgivpUovMk6Y2NpuUFUZ7LrlB_H0OIH0CYVIllX6YD34xFuPj7c2G5Da_LLJZLOH2envw3iF84BZjh6LzPKHgAJhT6NYC14wSKfLjRS3WSGvnhKSMZjLeTVwW7yHFK-huzM-BXWY8GIzd8OTCGRy9Ls9KbxCuIVkY",
    alt: "Side profile thumbnail",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkULvbQwDL6stdCh6YqiJB45wjiNgSx0CEO7lg426WurxHSj8X7V90P1pnNlymyBsRGo-mVfBssnwySqxAURKK86DqfadOGumQ8QFIu8OFILcL7g3P1DHfxBvYqZVXWBqYPwkoZ3Q8nyUnN4tdv2FaF6cN5jaZYXDSNshguShFkyOsroq9Jh504d0pWiKxPFgvO6xQyhmnxp8HS03EPRt2C2oqAfMw_yHqRWu8FCJsq8RTiDPW6w2Gp2jCKi95k7o5CdbNbGmZoYE",
    alt: "Lifestyle usage thumbnail",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBq70OWnY6PiE2HiRz9XjQQ4TaMaaA-sqUu5bK2JsCHsjtIdXrZFb9yn_7_40XWnsIe6x2iH0ghiR0zHHKp--tK1KiyzV0NC95mqKbTPsbGsp47gOnNJfRUxxgJOF-JJo2E_yFzwJLS4dTcDFU4kmgIxv02STifohlKR7HOuYd5ZlySocbhS5Vyik0-nOBjitYef4Xk-gSf2Tg_c48loB3g9og5mvWUERJ4LzOd4Y7olb25_7rnPE7In-3vWjfjA4Kq1IUMp4QTCw",
    alt: "Case and accessories thumbnail",
  },
];

export default function ProductDetail() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md shadow-sm border-b border-white/5 h-[72px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 shrink-0 w-[200px]">
            <div className="w-10 h-10 rounded-[0.5rem] bg-accent flex items-center justify-center text-white font-bold text-xl">
              C
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              CodeRAM
            </span>
          </Link>
          <div className="flex-1 max-w-2xl flex justify-center w-1/2">
            <div className="relative group w-full">
              <div className="flex items-center bg-slate-800/50 rounded-full border border-slate-700 hover:border-slate-600 focus-within:border-accent focus-within:ring-1 focus-within:ring-accent transition-all duration-200 shadow-inner">
                <div className="pl-4 flex items-center pointer-events-none">
                  <span className="material-icons-outlined text-slate-400">
                    search
                  </span>
                </div>
                <input
                  className="w-full bg-transparent border-none text-slate-200 placeholder-slate-400 focus:ring-0 px-3 py-2.5 sm:text-sm outline-none"
                  placeholder="Search for products, brands, and more..."
                  type="text"
                />
                <div className="pr-1 py-1">
                  <button className="bg-accent hover:bg-blue-600 text-white rounded-full p-2 shadow-sm transition-colors flex items-center justify-center">
                    <span className="material-icons-outlined text-[20px]">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-6 text-slate-300 w-[200px]">
            <button className="hover:text-white transition-colors flex items-center gap-1 text-sm font-medium">
              <span className="material-icons-outlined text-[24px]">
                person
              </span>
              <span className="hidden lg:inline">Sign In</span>
            </button>
            <div className="h-5 w-px bg-slate-700" />
            <button className="group hover:text-white transition-colors flex items-center gap-2 relative">
              <span className="material-icons-outlined text-[28px]">
                shopping_cart
              </span>
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-[11px] flex items-center justify-center text-white font-bold ring-2 ring-primary">
                2
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <ol className="flex items-center space-x-2 text-sm text-slate-500">
          <li>
            <Link href="#" className="hover:text-primary transition-colors">
              Electronics
            </Link>
          </li>
          <li>
            <span className="material-icons-outlined text-sm">
              chevron_right
            </span>
          </li>
          <li>
            <Link href="#" className="hover:text-primary transition-colors">
              Audio
            </Link>
          </li>
          <li>
            <span className="material-icons-outlined text-sm">
              chevron_right
            </span>
          </li>
          <li>
            <Link href="#" className="hover:text-primary transition-colors">
              Headphones
            </Link>
          </li>
          <li>
            <span className="material-icons-outlined text-sm">
              chevron_right
            </span>
          </li>
          <li className="font-medium text-primary">Sony WH-1000XM5</li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
          {/* Left Column: Gallery + Tabs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Image */}
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-200/50 group">
              <img
                alt="Sony WH-1000XM5 Headphones Main View"
                className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6VTMg7fm33GUmVl8nIpDvNLQ8U17Yg58bs5aIf85ZbzbFt2LRCSBzUYsGEEatNlxD6cvzAZI5prD_ZTZrLPNlKbNxxoHpx8CwzehUIGoROhQSfp5YQzaMA8bu7kAVw437oXRdBDFQMofxbCe_iGbd84MlWJTxlsTaDP9RsGg1BAbgCVaU3y1N2f0NfJBXT12qM5lOnQWEmey4GObo8dIKJnYgOH3zyQMzjZ_5l5fCnV67jM8hNgg1TyXFNBMapM-aanpPruxlF90"
              />
              <button className="absolute bottom-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full shadow-lg hover:bg-white transition-all">
                <span className="material-icons-outlined text-slate-700">
                  zoom_in
                </span>
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {thumbnails.map((thumb, i) => (
                <button
                  key={i}
                  className={`flex-none w-24 h-24 rounded-xl border-2 bg-white overflow-hidden p-2 ${
                    thumb.active
                      ? "border-accent"
                      : "border-slate-200 hover:border-accent/50 transition-colors"
                  }`}
                >
                  <img
                    alt={thumb.alt}
                    className="w-full h-full object-contain"
                    src={thumb.src}
                  />
                </button>
              ))}
            </div>

            {/* Tabs */}
            <div className="mt-12">
              <div className="border-b border-slate-200">
                <nav aria-label="Tabs" className="-mb-px flex gap-8">
                  <a
                    className="border-accent text-accent whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                    href="#"
                  >
                    Product Description
                  </a>
                  <a
                    className="border-transparent text-slate-500 hover:text-slate-700 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                    href="#"
                  >
                    Tech Specs
                  </a>
                  <a
                    className="border-transparent text-slate-500 hover:text-slate-700 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                    href="#"
                  >
                    Reviews (1,240)
                  </a>
                </nav>
              </div>
              <div className="py-6 text-slate-600 leading-relaxed">
                <p className="mb-4">
                  The Sony WH-1000XM5 Wireless Noise Canceling Headphones
                  rewrite the rules for distraction-free listening. With two
                  processors controlling 8 microphones, Auto NC Optimizer for
                  automatically optimizing noise canceling based on your wearing
                  conditions and environment, and a specially designed driver
                  unit, the WH-1000XM5 headphones with industry-leading noise
                  canceling rewrite the rules for distraction-free listening and
                  call clarity.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Industry-leading noise cancellation optimized to you</li>
                  <li>Magnificent Sound, engineered to perfection</li>
                  <li>Crystal clear hands-free calling</li>
                  <li>Up to 30-hour battery life with quick charging</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Product Info */}
          <div className="mt-8 lg:mt-0 lg:col-span-5 relative">
            <div className="sticky top-24 space-y-6">
              {/* Badges */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
                    <span className="material-icons-outlined text-[14px] mr-1">
                      flight
                    </span>
                    Importado USA
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                    In Stock
                  </span>
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-primary mb-2">
                  Sony WH-1000XM5 Wireless Noise Canceling Headphones
                </h1>
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex text-amber-400">
                    <span className="material-icons-outlined text-[18px]">
                      star
                    </span>
                    <span className="material-icons-outlined text-[18px]">
                      star
                    </span>
                    <span className="material-icons-outlined text-[18px]">
                      star
                    </span>
                    <span className="material-icons-outlined text-[18px]">
                      star
                    </span>
                    <span className="material-icons-outlined text-[18px]">
                      star_half
                    </span>
                  </div>
                  <span className="text-slate-500 font-medium">
                    4.8 (2,102 ratings)
                  </span>
                </div>
              </div>

              {/* Price Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-medium text-slate-500">
                      Total Landed Cost
                    </span>
                    <span className="text-4xl font-bold text-primary tabular-nums">
                      $342.00
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 text-right mt-1">
                    Includes all duties &amp; fees
                  </p>
                </div>
                <div className="p-6 space-y-3 bg-white">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600">Item Price</span>
                    <span className="font-medium text-slate-900 tabular-nums">
                      $298.00
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600 flex items-center gap-1">
                      Intl. Shipping
                      <span
                        className="material-icons-outlined text-[14px] text-slate-400 cursor-help"
                        title="Express Air Freight from Miami Hub"
                      >
                        info
                      </span>
                    </span>
                    <span className="font-medium text-slate-900 tabular-nums">
                      $15.00
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600">Import Taxes (19%)</span>
                    <span className="font-medium text-slate-900 tabular-nums">
                      $24.00
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600">Service Fee</span>
                    <span className="font-medium text-slate-900 tabular-nums">
                      $5.00
                    </span>
                  </div>
                  <div className="h-px bg-slate-100 my-4" />
                  <div className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="material-icons-outlined text-accent mt-0.5">
                      local_shipping
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        Arrives by Oct 24 - Oct 26
                      </p>
                      <p className="text-xs text-slate-500">
                        Express delivery to{" "}
                        <span className="underline decoration-dotted cursor-pointer hover:text-primary">
                          New York, NY
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="p-6 pt-0 bg-white space-y-3">
                  <button className="w-full bg-accent hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-full shadow-lg shadow-blue-500/20 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 group">
                    <span className="material-icons-outlined group-hover:animate-bounce">
                      shopping_cart
                    </span>
                    Agregar al Carrito
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-3 px-4 rounded-full transition-colors flex items-center justify-center gap-2 text-sm">
                      <span className="material-icons-outlined text-[18px]">
                        favorite_border
                      </span>
                      Save
                    </button>
                    <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-3 px-4 rounded-full transition-colors flex items-center justify-center gap-2 text-sm">
                      <span className="material-icons-outlined text-[18px]">
                        share
                      </span>
                      Share
                    </button>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-2 text-center pt-2">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                    <span className="material-icons-outlined text-[20px]">
                      verified_user
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">
                    Secure
                    <br />
                    Payment
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <span className="material-icons-outlined text-[20px]">
                      cached
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">
                    30-Day
                    <br />
                    Returns
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                    <span className="material-icons-outlined text-[20px]">
                      support_agent
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">
                    24/7
                    <br />
                    Support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500">
          <p>© 2023 CodeRAM Commerce. Designed with precision.</p>
        </div>
      </footer>
    </>
  );
}
