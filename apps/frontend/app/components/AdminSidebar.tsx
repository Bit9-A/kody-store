import Link from "next/link";

interface NavItem {
  icon: string;
  label: string;
  href: string;
  active?: boolean;
  badge?: string;
}

const mainNav: NavItem[] = [
  { icon: "dashboard", label: "Dashboard", href: "/admin", active: true },
  {
    icon: "shopping_cart",
    label: "Orders",
    href: "/admin/orders",
    badge: "12",
  },
  { icon: "inventory_2", label: "Products", href: "/admin/products" },
  { icon: "people", label: "Customers", href: "/admin/customers" },
];

const systemNav: NavItem[] = [
  { icon: "article", label: "CMS", href: "/admin/cms" },
  { icon: "settings", label: "Site Config", href: "/admin/settings" },
];

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-sidebar-dark text-white shrink-0 flex flex-col h-full border-r border-slate-800 transition-all duration-300">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-slate-800 bg-sidebar-dark">
        <Link
          href="/admin"
          className="flex items-center gap-2 font-bold text-xl tracking-tight"
        >
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center shadow-lg shadow-accent/30">
            <span className="material-icons text-white text-sm">code</span>
          </div>
          <span>CodeRAM</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto scrollbar-hide py-6 px-3 space-y-1">
        <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
          Main Menu
        </p>

        {mainNav.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center px-3 py-2.5 rounded-lg group transition-colors relative overflow-hidden ${
              item.active
                ? "bg-accent/20 text-white"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {item.active && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-l-lg" />
            )}
            <span
              className={`material-icons mr-3 transition-colors ${
                item.active
                  ? "text-accent"
                  : "text-slate-500 group-hover:text-white"
              }`}
            >
              {item.icon}
            </span>
            <span className="font-medium text-sm">{item.label}</span>
            {item.badge && (
              <span className="ml-auto bg-accent text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                {item.badge}
              </span>
            )}
          </Link>
        ))}

        <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mt-6 mb-2">
          System
        </p>

        {systemNav.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center px-3 py-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg group transition-colors"
          >
            <span className="material-icons mr-3 text-slate-500 group-hover:text-white transition-colors">
              {item.icon}
            </span>
            <span className="font-medium text-sm">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-800 bg-sidebar-dark">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              alt="Admin Profile"
              className="w-9 h-9 rounded-full border border-slate-600 shadow-sm"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm6MAleLeHu85IqYMy3k171rbHOuuu7DFCUcmKPwjLSM8TYZrdNU0YxOBXi-6eYfv2sZueK5zf7WLG-N9W8B_Q_K50Ctc_VgBf7P1z1cYO21STme628b5rmWq84OKkawE--HLvaz3gyMnKO7jm79QCRgNFvEE5MJsL5-TkMaz-5KHVW2NmLU4orzbu5WxzqAHCZ5lT1NCj66T1aOOSjxLw1biANA0YN76lEjpxoptYhbCdEkalTCJ-fZVMKpMz4RAVYA8kPmy381Q"
            />
            <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-sidebar-dark" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">Admin User</span>
            <span className="text-xs text-slate-400">Super Admin</span>
          </div>
          <button className="ml-auto text-slate-400 hover:text-white transition-colors">
            <span className="material-icons text-sm">logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
