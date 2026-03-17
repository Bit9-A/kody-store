import Link from "next/link";

interface ProductCardProps {
  image: string;
  imageAlt: string;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  badge?: string;
  badgeColor?: string;
  showFavorite?: boolean;
  category?: string;
  stockLabel?: string;
  variant?: "standard" | "grid";
}

export default function ProductCard({
  image,
  imageAlt,
  title,
  price,
  originalPrice,
  discount,
  badge,
  badgeColor = "bg-slate-900",
  showFavorite = false,
  category,
  stockLabel,
  variant = "standard",
}: ProductCardProps) {
  if (variant === "grid") {
    return (
      <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-card-hover transition-all duration-300 flex flex-col h-full">
        <div className="relative aspect-square p-6 flex items-center justify-center overflow-hidden bg-white">
          <img
            alt={imageAlt}
            className="object-contain h-full w-full transform group-hover:scale-105 transition-transform duration-500"
            src={image}
          />
          {showFavorite && (
            <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-500 transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-200">
              <span className="material-symbols-outlined text-[18px]">
                favorite
              </span>
            </button>
          )}
          {stockLabel && (
            <div className="absolute top-3 left-3">
              <span
                className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded-md tracking-wide border ${
                  stockLabel === "In Stock"
                    ? "bg-green-50 text-green-700 border-green-100"
                    : "bg-orange-50 text-orange-700 border-orange-100"
                }`}
              >
                {stockLabel}
              </span>
            </div>
          )}
        </div>
        <div className="p-4 flex-1 flex flex-col border-t border-slate-100">
          {category && (
            <div className="mb-1 text-xs font-medium text-slate-500">
              {category}
            </div>
          )}
          <h3 className="text-sm font-medium text-slate-900 leading-snug mb-3 line-clamp-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <div className="mt-auto flex items-center justify-between">
            <div>
              <span className="block text-lg font-bold text-slate-900">
                ${price.toFixed(2)}
              </span>
              {originalPrice && (
                <span className="text-xs text-slate-400 line-through font-medium">
                  ${originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <button className="h-8 w-8 rounded-full bg-blue-50 hover:bg-accent text-accent hover:text-white flex items-center justify-center transition-all shadow-sm">
              <span className="material-symbols-outlined text-[20px]">add</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Standard variant (Home page rails)
  return (
    <div className="min-w-[240px] max-w-[240px] bg-surface-light rounded-xl shadow-soft hover:shadow-hover transition-all duration-300 group flex flex-col relative border border-slate-100">
      <div className="relative aspect-square p-4 bg-white rounded-t-xl overflow-hidden">
        {discount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">
            {discount}
          </span>
        )}
        {badge && (
          <span
            className={`absolute top-3 left-3 ${badgeColor} text-white text-[10px] font-bold px-2 py-1 rounded-full z-10`}
          >
            {badge}
          </span>
        )}
        <img
          alt={imageAlt}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          src={image}
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="mb-2">
          <h3
            className="font-medium text-primary leading-snug line-clamp-2 text-sm"
            title={title}
          >
            {title}
          </h3>
        </div>
        <div className="mt-auto flex items-end justify-between">
          <div>
            {originalPrice && (
              <div className="text-xs text-slate-400 line-through">
                ${originalPrice.toFixed(2)}
              </div>
            )}
            <div className="text-lg font-bold text-primary">
              ${price.toFixed(2)}
            </div>
          </div>
          <button className="w-8 h-8 rounded-full bg-accent hover:bg-accent-hover text-white flex items-center justify-center shadow-lg shadow-accent/30 transition-transform hover:scale-110 active:scale-95">
            <span className="material-icons-round text-sm">add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
