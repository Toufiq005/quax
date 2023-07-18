"use client";

import "./Loading.css";
import { useState, useEffect } from "react";

export default function Loading({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    },300)
  });

  return (
    <>
      {isLoading ? (
        <section className="w-full h-screen flex items-center justify-center loading-section">
          <div className="w-8 h-8 rounded-full bg-red-500 loading-dot"></div>
        </section>
      ) : (
        children
      )}
    </>
  );
}
