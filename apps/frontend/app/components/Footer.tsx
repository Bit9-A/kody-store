import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold text-white text-sm">
                CR
              </div>
              <span className="font-bold text-xl tracking-tight text-primary">
                CodeRAM
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              The developer-first e-commerce platform bridging global markets
              with local convenience.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-bold text-primary mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Flash Deals
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Global Import
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-primary mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Returns &amp; Refunds
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Developer API
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-primary mb-4">Stay Updated</h4>
            <div className="flex gap-2">
              <input
                className="bg-background-light border-none rounded-lg px-4 py-2 text-sm w-full outline-none"
                placeholder="Email address"
                type="email"
              />
              <button className="bg-primary text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-primary-hover transition-colors">
                Sub
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            © 2023 CodeRAM Commerce, Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="w-8 h-5 bg-slate-200 rounded"></span>
            <span className="w-8 h-5 bg-slate-200 rounded"></span>
            <span className="w-8 h-5 bg-slate-200 rounded"></span>
            <span className="w-8 h-5 bg-slate-200 rounded"></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
