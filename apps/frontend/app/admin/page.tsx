import AdminTopBar from "../components/AdminTopBar";
import MetricCard from "../components/MetricCard";

const recentOrders = [
  {
    id: "#ORD-10234",
    customer: "Alice Smith",
    amount: "$120.00",
    items: "2 items",
    status: "Paid",
    statusColor: "green",
    icon: "shopping_bag",
  },
  {
    id: "#ORD-10235",
    customer: "Bob Jones",
    amount: "$45.50",
    items: "1 item",
    status: "Pending",
    statusColor: "yellow",
    icon: "shopping_bag",
  },
  {
    id: "#ORD-10236",
    customer: "Charlie Day",
    amount: "$900.00",
    items: "5 items",
    status: "Shipped",
    statusColor: "blue",
    icon: "local_shipping",
  },
  {
    id: "#ORD-10237",
    customer: "Dana White",
    amount: "$210.00",
    items: "3 items",
    status: "Paid",
    statusColor: "green",
    icon: "shopping_bag",
  },
  {
    id: "#ORD-10238",
    customer: "Evan Long",
    amount: "$55.00",
    items: "1 item",
    status: "Cancelled",
    statusColor: "red",
    icon: "cancel",
  },
];

const statusClasses: Record<string, string> = {
  green: "bg-green-100 text-green-800 border-green-200",
  yellow: "bg-yellow-100 text-yellow-800 border-yellow-200",
  blue: "bg-blue-100 text-blue-800 border-blue-200",
  red: "bg-red-100 text-red-800 border-red-200",
};

const chartBars = [
  { height: "30%", value: "$15k" },
  { height: "45%", value: "$22k" },
  { height: "35%", value: "$18k" },
  { height: "60%", value: "$30k" },
  { height: "50%", value: "$25k" },
  { height: "75%", value: "$38k" },
  { height: "90%", value: "$45k" },
  { height: "65%", value: "$32k" },
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

const avatars = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCktJcoBK2b4bugefwNQaYAoZjxa0ynhr-Iye9qSJt1NFphrfX8kZRYwGjHCa5RXQIfrD9MsrbA97_oDMB3GwAxvs6UihOPA1ko7dqUaDgBQ3jzdmfAwskDxnH8Zxm_IYOHh9I1HTDA0jjlPEpb76pOEtdAWDOF8JTrgaSSgy_ckehekNTE4gCRJZV2RBdriOE2ICLWE-t56X7L5RKFxzwLMObSIMuiBr7pv6goKCc2M7_mefZMjk7ZHmSXtB296B-VlQOClct6L_c",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCtGqwzfIyyzmusqkbNu8uKjsUa6zKOnyi5yU_dMnb4b4LDnOkz8vKDslrPiYEDIcePnJHTTs1jQzBG1xMCfOwJNEcf3kLRssmwEFDRKTkjIGWM4y8vJkgb8-ueo9HMF6WZObhrRDrzf-xwYt2ygGjHIxaNR37T5iZLnWN-Q9MeToMALYPt3tJVtFHYtnUHjmGANO8i2ALD1FPzSm_YG04t2nfRGJwR1D2yAC7E5YpJ-KhJgtZVs9x7RfuihBo-ofLC0WcNv7OWz48",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBhNpPP_yXYcCsfy2lrWC0HvkIEobmSI2sRyKiWE13BMrNlk8wTgGRW5i3BxGA1HzBjSW8_h09IbvNQBLzPWjWykQCes3-u7jznQ06eAInJB2HuBWHXCBsVk7Hc-RN7mKkGQ1Y44dMXOc2KpVR9h2_nraX_nDTy_8bmAQAlURNX7mPTWxhCdIATZ6i6rR1SZJ1HNlnYRisOn4I-CZuSkbLOJwnsH6Wd9r4SMohrtq37IxZgVYa7rmsUlTkpyDXVZABpSs93pieX4Qk",
];

export default function AdminDashboard() {
  return (
    <>
      <AdminTopBar title="Dashboard Overview" />

      <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Sales */}
            <MetricCard
              title="Total Sales"
              value="$124,592"
              badge={
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                  <span className="material-icons text-[14px] mr-1">
                    trending_up
                  </span>{" "}
                  12.5%
                </span>
              }
            >
              <div className="absolute bottom-0 left-0 right-0 h-16 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg
                  className="w-full h-full"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 40"
                >
                  <path
                    className="text-accent"
                    d="M0 30 C 20 20, 40 35, 60 10 S 80 25, 100 5 V 40 H 0 Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </MetricCard>

            {/* Active Orders */}
            <MetricCard
              title="Active Orders"
              value="45"
              badge={
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-800">
                  Processing
                </span>
              }
            >
              <div className="mt-2">
                <div className="w-full bg-slate-100 rounded-full h-1.5">
                  <div
                    className="bg-accent h-1.5 rounded-full"
                    style={{ width: "70%" }}
                  />
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  12 pending shipment
                </p>
              </div>
            </MetricCard>

            {/* Local vs Import */}
            <MetricCard
              title="Local vs Import"
              value="60/40"
              badge={
                <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="material-icons text-orange-500 text-sm">
                    inventory
                  </span>
                </div>
              }
            >
              <div className="flex gap-2 mt-4">
                <div className="flex-1 h-2 bg-accent rounded-l-full" />
                <div className="w-[40%] h-2 bg-slate-300 rounded-r-full" />
              </div>
              <div className="flex justify-between mt-2 text-xs text-slate-500">
                <span>Local Stock</span>
                <span>Imported</span>
              </div>
            </MetricCard>

            {/* New Users */}
            <MetricCard
              title="New Users"
              value="+120"
              badge={
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                  <span className="material-icons text-[14px] mr-1">
                    arrow_upward
                  </span>{" "}
                  This week
                </span>
              }
            >
              <div className="flex -space-x-2 overflow-hidden pt-2">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    alt="User avatar"
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src={src}
                  />
                ))}
                <div className="h-8 w-8 rounded-full ring-2 ring-white bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-500">
                  +117
                </div>
              </div>
            </MetricCard>
          </div>

          {/* Chart + Recent Orders */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Revenue Chart */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col h-[500px]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    Revenue Analytics
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    Monthly revenue performance vs target.
                  </p>
                </div>
                <div className="flex items-center bg-slate-100 rounded-lg p-1">
                  <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-white shadow-sm text-slate-900">
                    12 Months
                  </button>
                  <button className="px-3 py-1.5 text-xs font-medium rounded-md text-slate-500 hover:text-slate-900 transition-colors">
                    30 Days
                  </button>
                  <button className="px-3 py-1.5 text-xs font-medium rounded-md text-slate-500 hover:text-slate-900 transition-colors">
                    7 Days
                  </button>
                </div>
              </div>

              <div className="flex-1 w-full relative pt-10 px-2">
                {/* Y-axis */}
                <div className="absolute left-0 top-0 bottom-8 w-10 flex flex-col justify-between text-xs text-slate-400 text-right pr-2">
                  <span>$50k</span>
                  <span>$40k</span>
                  <span>$30k</span>
                  <span>$20k</span>
                  <span>$10k</span>
                  <span>0</span>
                </div>
                {/* Grid */}
                <div className="absolute left-12 right-0 top-2 bottom-8 flex flex-col justify-between z-0">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-full border-b border-slate-100 border-dashed"
                    />
                  ))}
                  <div className="w-full border-b border-slate-200" />
                </div>
                {/* Bars */}
                <div className="absolute left-12 right-0 top-2 bottom-8 flex items-end justify-between px-4 z-10 gap-2">
                  {chartBars.map((bar, i) => (
                    <div
                      key={i}
                      className={`w-full rounded-t-sm relative group cursor-pointer transition-all ${
                        i === 6
                          ? "bg-accent hover:bg-accent/90 shadow-lg shadow-accent/30"
                          : `bg-accent/${(i + 1) * 10} hover:bg-accent/${(i + 1) * 10 + 10}`
                      }`}
                      style={{ height: bar.height }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {bar.value}
                      </div>
                    </div>
                  ))}
                </div>
                {/* X-axis */}
                <div className="absolute left-12 right-0 bottom-0 h-6 flex justify-between text-xs text-slate-400 px-4">
                  {months.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col h-[500px]">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-slate-800">
                  Recent Orders
                </h3>
                <a
                  className="text-accent text-sm font-medium hover:underline"
                  href="#"
                >
                  View All
                </a>
              </div>
              <div className="flex-1 overflow-y-auto p-0">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-50 sticky top-0 z-10">
                    <tr>
                      <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Order
                      </th>
                      <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider text-center">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {recentOrders.map((order) => (
                      <tr
                        key={order.id}
                        className="hover:bg-slate-50 transition-colors cursor-pointer group"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 mr-3">
                              <span className="material-icons text-sm">
                                {order.icon}
                              </span>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-slate-900 group-hover:text-accent transition-colors">
                                {order.id}
                              </div>
                              <div className="text-xs text-slate-500">
                                {order.customer}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="text-sm font-medium text-slate-900">
                            {order.amount}
                          </div>
                          <div className="text-xs text-slate-400">
                            {order.items}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusClasses[order.statusColor]}`}
                          >
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="pt-6 pb-2 text-center text-xs text-slate-400">
            <p>© 2023 CodeRAM Commerce. Internal System v2.4.0</p>
          </footer>
        </div>
      </div>
    </>
  );
}
