import Navbar from "@/components/Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <body>
      <main>
        <Navbar bgColor="bg-white border-b" textColor="text-black/80" />
        {children}
      </main>
    </body>
  );
}
