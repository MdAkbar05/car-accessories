import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

export const metadata = {
  title: "E-commerce platform",
  description: "A modern e-commerce platform for online shopping.",
};

export default function HomeLayout({ children, modal }) {
  return (
    <>
      <Header />

      <main className="container mx-auto px-2">
        {" "}
        {modal} {children}
      </main>
      <Footer />
    </>
  );
}
