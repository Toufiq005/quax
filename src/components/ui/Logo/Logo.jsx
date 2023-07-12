"use client";

import { useState, useEffect } from "react";

export default function Logo(props) {
  const [logoColor, setLogoColor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100) {
        setLogoColor(true);
      } else {
        setLogoColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //pageIndex 1 for Homepage one
  //pageIndex 2 for ohter pages
  //pageIndex 3 for Homepage two

  if (props.pageIndex === 1) {
    return (
      <>
        {logoColor ? (
          <img src="/assets/logo-dark.svg" alt="logo" />
        ) : (
          <img src="/assets/logo-white.svg" alt="logo" />
        )}
      </>
    );
  } else if (props.pageIndex === 2) {
    return <img src="/assets/logo-dark.svg" alt="logo" />;
  } else if (props.pageIndex === 3) {
    return (
      <>
        {!logoColor ? (
          <img src="/assets/logo-white.svg" alt="logo" />
        ) : (
          <img src="/assets/logo-dark.svg" alt="logo" />
        )}
      </>
    );
  }
}
