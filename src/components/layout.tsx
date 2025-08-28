import Sidebar from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar />
      <main>{children}</main>
    </SidebarProvider>
  );
}
