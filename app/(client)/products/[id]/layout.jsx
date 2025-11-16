import Benefits from "@/components/Home/Benefits";

export default function ProductLayout({ children }) {
  return (
    <div className="container mx-auto">
      {children}
      <Benefits />
    </div>
  );
}
