interface AdminTopBarProps {
  title?: string;
}

export default function AdminTopBar({
  title = "Dashboard Overview",
}: AdminTopBarProps) {
  return (
    <header className="h-16 flex items-center justify-between px-6 bg-white border-b border-slate-200 z-10 shrink-0">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold text-slate-800">{title}</h1>
      </div>
      <div className="flex items-center gap-6">
        {/* Search */}
        <div className="relative hidden md:block w-96">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-icons text-slate-400 text-lg">
              search
            </span>
          </span>
          <input
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all placeholder-slate-400"
            placeholder="Search orders, products or customers..."
            type="text"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            <kbd className="hidden sm:inline-block border border-slate-200 rounded px-1.5 text-[10px] font-bold text-slate-400">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
            <span className="material-icons">notifications_none</span>
            <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-white" />
          </button>
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
            <span className="material-icons">help_outline</span>
          </button>
        </div>
      </div>
    </header>
  );
}
