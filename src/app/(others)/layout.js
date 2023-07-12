import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar
        bgColor="bg-white border-b"
        textColor="text-black/80"
        pageIndex={2}
        navBtn={1}
      />
      {children}
      <Footer />
    </>
  );
}
