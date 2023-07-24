"use client";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Loading from "@/components/ui/Loading/Loading";
import ErrorSection from "@/components/Sections/ErrorSection/ErrorSection";

export default function NotFound() {
  return (
    <Loading>
      <Navbar
        pageIndex={2}
        navBtn={1}
        bgColor="bg-white border-b"
        textColor="text-black/80"
      />
      <ErrorSection />
      <Footer />
    </Loading>
  );
}
