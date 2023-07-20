import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Loading from "@/components/ui/Loading/Loading";

export default function Layout({ children }) {
  return (
    <Loading>
      <Navbar
        bgColor="bg-white border-b"
        textColor="text-black/80"
        pageIndex={2}
        navBtn={1}
      />
      {children}
      <Footer />
    </Loading>
  );
}
