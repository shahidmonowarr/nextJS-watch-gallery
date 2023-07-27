import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
}
