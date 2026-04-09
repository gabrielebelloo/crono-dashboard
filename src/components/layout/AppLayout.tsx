import Sidebar from "./Sidebar/Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full p-4">{children}</main>
    </div>
  );
}
