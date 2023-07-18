"use client";
import { useState, useEffect } from "react";
import "./Decoration.css";

export default function Decoration() {
  const [positions, setPositions] = useState([
    { top: 138, left: 583 },
    { top: 413, left: 199 },
    { top: 676, left: 711 },
    { top: 68, left: 1470 },
    { top: 227, left: 871 },
    { top: 780, left: 377 },
  ]);
  const [parentSize, setParentSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setParentSize({ width: 200, height: 200 });
  }, []);

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
  }, [parentSize]);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var parallaxElements = document.querySelectorAll(".parallax-element");
      for (var i = 0; i < parallaxElements.length; i++) {
        var parallaxElement = parallaxElements[i];
        var speed = parallaxElement.getAttribute("data-speed");
        parallaxElement.style.transform =
          "translateY(" + scrollTop * speed + "px)";
      }
    });
  }, []);
  return (
    <>
    <div
        className="decoration-dots dots-one"
        style={{ top: positions[0].top, left: positions[0].left }}
      ></div>
      <div
        className="decoration-dots dots-two"
        style={{ top: positions[1].top, left: positions[1].left }}
      ></div>
      <div
        className="decoration-dots dots-three"
        style={{ top: positions[2].top, left: positions[2].left }}
      ></div>
      <div
        className="decoration-dots dots-four"
        style={{ top: positions[3].top, left: positions[3].left }}
      ></div>
      <div
        className="decoration-dots dots-five"
        style={{ top: positions[4].top, left: positions[4].left }}
      ></div>
      <div
        className="decoration-dots dots-six"
        style={{ top: positions[5].top, left: positions[5].left }}
      ></div>
      <div className="decoration-dots parallax-element parallax-element-one" data-speed="0.8">
        <img
          src="/assets/header-decoration.svg"
          alt="decoration"
          className="decoration-img"
        />
      </div>
      <div className="decoration-dots parallax-element-two" data-speed="1.5">
        <img
          src="/assets/header-decoration.svg"
          alt="decoration"
          className="decoration-img"
        />
      </div>
    </>
  );
}
