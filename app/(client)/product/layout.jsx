import Benefits from "@/components/Home/Benefits";

export const metadata = {
  title: "Product Page",
  description: "Product details page.",
};

export default function ProductLayout({ children }) {
  return (
    <div className="container mx-auto">
      {children}
      <Benefits />
    </div>
  );
}
