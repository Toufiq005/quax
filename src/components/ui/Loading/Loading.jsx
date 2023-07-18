"use client";

import "./Loading.css";
import { useState, useEffect } from "react";

export default function Loading({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 1500);
  });

  return (
    <>
      {isLoading ? (
        <div className="circles-preloader">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
          <div className="circle circle-5"></div>
          <div className="circle circle-6"></div>
        </div>
      ) : (
        children
      )}
    </>
  );
}
