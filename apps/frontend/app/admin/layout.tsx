import AdminSidebar from "../components/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-hidden flex bg-background-light text-slate-600 antialiased">
      <AdminSidebar />
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-background-light relative">
        {children}
      </main>
    </div>
  );
}
