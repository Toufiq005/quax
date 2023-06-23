import Navbar from "@/components/Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar bgColor="bg-white border-b" textColor="text-black/80" />
      {children}
    </>
  );
}
