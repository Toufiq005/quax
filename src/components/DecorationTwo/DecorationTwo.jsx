"use client";

import "./DecorationTwo.css";
import { useState, useEffect } from "react";

export default function DecorationTwo() {

    const [positions, setPositions] = useState([
        { top: 604, left: 250 },
        { top: 190, left: 350 },
        { top: 750, left: 582 },
        { top: 452, left: 731 },
        { top: 283, left: 966 },
        { top: 742, left: 961 },
        {top: 222, left: 1500 },
    ])

    const [parentSize, setParentSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setParentSize({ width: 200, height: 200 });
    },[])

    function floatImages() {
        const newPositions = positions.map((position) => ({
            top: `${(Math.random() * (100)) + (position.top)}px`,
            left: `${(Math.random() * (100)) + (position.left)}px`,
        }));
        setPositions(newPositions);
    }

    useEffect(() => {
        const intervalId = setInterval(floatImages, 2500);
        return () => clearInterval(intervalId);
    },[])

  return (
    <>
      <img
        src="/assets/home-two/decoration/decoration-two-shape-one.svg"
        alt="icon"
        className="absolute shape-one max-xl:hidden"
        style={{ top: positions[0].top, left: positions[0].left }}
      />
      <img
        src="/assets/home-two/decoration/decoration-two-shape-two.svg"
        alt="icon"
        className="absolute shape-two max-xl:hidden"
        style={{ top: positions[1].top, left: positions[1].left }}
      />
      <img
        src="/assets/home-two/decoration/decoration-two-shape-three.svg"
        alt="icon"
        className="absolute shape-three max-xl:hidden"
        style={{ top: positions[2].top, left: positions[2].left }}
      />
      <img
        src="/assets/home-two/decoration/decoration-two-shape-four.svg"
        alt="icon"
        className="absolute shape-four max-xl:hidden"
        style={{ top: positions[3].top, left: positions[3].left }}
      />
      <img
        src="/assets/home-two/decoration/decoration-two-shape-five.svg"
        alt="icon"
        className="absolute shape-five max-xl:hidden"
        style={{ top: positions[4].top, left: positions[4].left }}
      />
      <img
        src="/assets/home-two/decoration/decoration-two-shape-six.svg"
        alt="icon"
        className="absolute shape-six max-xl:hidden"
        style={{ top: positions[5].top, left: positions[5].left }}
      />
      <img
        src="/assets/home-two/decoration/decoration-two-shape-seven.svg"
        alt="icon"
        className="absolute shape-seven max-xl:hidden"
        style={{ top: positions[6].top, left: positions[6].left }}
      />
    </>
  );
}
