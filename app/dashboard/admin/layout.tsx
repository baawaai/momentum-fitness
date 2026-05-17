import { AdminSidebar } from "@/components/dashboard/admin-sidebar";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-pure-black text-on-surface">
      <AdminSidebar />
      <div className="ml-0 min-h-screen flex-1 md:ml-64 md:p-8 p-5">
        {children}
      </div>
    </div>
  );
}
