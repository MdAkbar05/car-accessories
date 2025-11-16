import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

export const metadata = {
  title: "E-commerce platform",
  description: "A modern e-commerce platform for online shopping.",
  openGraph: {
    title: "E-commerce platform",
    description: "A modern e-commerce platform for online shopping.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/og`,
        width: 1200,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-commerce platform",
    description: "A modern e-commerce platform for online shopping.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/og`,
        width: 1200,
        height: 600,
      },
    ],
  },
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
