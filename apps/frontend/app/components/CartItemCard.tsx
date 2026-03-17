interface CartItemCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  stockLabel: string;
  stockColor?: "green" | "amber";
}

export default function CartItemCard({
  image,
  title,
  description,
  price,
  originalPrice,
  quantity,
  stockLabel,
  stockColor = "green",
}: CartItemCardProps) {
  const stockClasses =
    stockColor === "green" ? "text-green-600" : "text-amber-600";
  const stockIcon = stockColor === "green" ? "check_circle" : "inventory_2";

  return (
    <div className="p-4 sm:p-6 border-b border-border-light last:border-0 hover:bg-slate-50/50 transition-colors">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        {/* Image */}
        <div className="w-full sm:w-28 h-28 shrink-0 bg-slate-100 rounded-lg overflow-hidden border border-border-light group">
          <img
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            src={image}
          />
        </div>

        {/* Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex justify-between items-start gap-4">
            <div>
              <h3 className="font-semibold text-slate-900 text-base sm:text-lg leading-tight">
                {title}
              </h3>
              <p className="text-sm text-slate-500 mt-1">{description}</p>
              <p
                className={`text-xs ${stockClasses} font-medium mt-2 flex items-center gap-1`}
              >
                <span className="material-symbols-outlined text-[16px]">
                  {stockIcon}
                </span>
                {stockLabel}
              </p>
            </div>
            <div className="text-right shrink-0">
              <p className="font-bold text-lg text-slate-900">
                ${price.toFixed(2)}
              </p>
              {originalPrice && (
                <p className="text-xs text-slate-400 line-through">
                  ${originalPrice.toFixed(2)}
                </p>
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-between items-end mt-4">
            <div className="flex items-center border border-border-light rounded-md bg-white shadow-sm">
              <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded-l-md transition text-slate-500">
                <span className="material-symbols-outlined text-sm">
                  remove
                </span>
              </button>
              <input
                className="w-10 text-center bg-transparent border-none p-0 text-sm font-medium focus:ring-0 text-slate-900"
                readOnly
                type="text"
                value={quantity}
              />
              <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded-r-md transition text-slate-500">
                <span className="material-symbols-outlined text-sm">add</span>
              </button>
            </div>
            <button className="text-sm text-slate-400 hover:text-red-500 font-medium flex items-center gap-1 transition-colors px-2 py-1 rounded hover:bg-red-50">
              <span className="material-symbols-outlined text-[18px]">
                delete
              </span>
              <span className="hidden sm:inline">Eliminar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
