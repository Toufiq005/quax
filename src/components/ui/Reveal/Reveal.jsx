"use client";

import "./Reveal.css";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Reveal({ children, className, key }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <>
      <div ref={ref} key={key} className={className}>
        {inView ? children : null}
      </div>
    </>
  );
}
