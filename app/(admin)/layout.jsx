export const metadata = {
  title: "Dashboard Panel",
  description: "A modern e-commerce platform for online shopping.",
};
export default function DashboardLayout({ children }) {
  return (
    <main className="max-w-full  flex  bg-[#101828] text-[#E8E8EA]">
      {children}
    </main>
  );
}
