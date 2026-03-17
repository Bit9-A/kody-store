import Link from "next/link";

interface HeaderProps {
  cartCount?: number;
  cartTotal?: string;
}

export default function Header({
  cartCount = 3,
  cartTotal = "$142.50",
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 h-[72px] bg-primary text-white shadow-soft flex items-center justify-between px-6">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 shrink-0 w-48">
        <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-bold text-xl tracking-tighter">
          CR
        </div>
        <span className="font-bold text-xl tracking-tight hidden md:block">
          CodeRAM
        </span>
      </Link>

      {/* Search Bar */}
      <div className="flex-1 max-w-3xl mx-4 hidden md:flex">
        <div className="flex w-full bg-white text-primary rounded-full overflow-hidden shadow-sm group focus-within:ring-2 focus-within:ring-accent transition-all duration-200">
          <button className="px-4 py-2.5 bg-gray-100 border-r border-gray-200 text-sm font-medium hover:bg-gray-200 transition-colors flex items-center gap-1 text-slate-600 whitespace-nowrap">
            All
            <span className="material-icons-round text-base">
              arrow_drop_down
            </span>
          </button>
          <input
            className="flex-1 border-none focus:ring-0 px-4 py-2.5 text-sm placeholder-slate-400 outline-none"
            placeholder="Search for products, brands and more..."
            type="text"
          />
          <button className="bg-accent hover:bg-accent-hover px-6 flex items-center justify-center transition-colors">
            <span className="material-icons-round text-white">search</span>
          </button>
        </div>
      </div>

      {/* Right Utility */}
      <div className="flex items-center gap-6 shrink-0">
        {/* Mobile Search */}
        <button className="md:hidden text-slate-300 hover:text-white">
          <span className="material-icons-round">search</span>
        </button>

        <Link
          href="#"
          className="hidden lg:flex flex-col items-start leading-tight group"
        >
          <span className="text-xs text-slate-400 group-hover:text-white transition-colors">
            Hello, Sign in
          </span>
          <span className="text-sm font-semibold group-hover:text-accent transition-colors">
            Account &amp; Lists
          </span>
        </Link>

        <Link
          href="#"
          className="hidden lg:flex flex-col items-start leading-tight group"
        >
          <span className="text-xs text-slate-400 group-hover:text-white transition-colors">
            Returns
          </span>
          <span className="text-sm font-semibold group-hover:text-accent transition-colors">
            &amp; Orders
          </span>
        </Link>

        <Link href="/cart" className="flex items-center gap-3 group relative">
          <div className="relative">
            <span className="material-icons-round text-3xl group-hover:text-accent transition-colors">
              shopping_cart
            </span>
            <span className="absolute -top-1 -right-1 h-5 w-5 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-primary">
              {cartCount}
            </span>
          </div>
          <div className="hidden xl:block font-bold group-hover:text-accent transition-colors">
            {cartTotal}
          </div>
        </Link>
      </div>
    </header>
  );
}
