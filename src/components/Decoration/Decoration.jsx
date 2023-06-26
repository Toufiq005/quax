"use client";
import { useState, useEffect } from "react";
import "./Decoration.css";

export default function Decoration() {
  const [positions, setPositions] = useState([
    { top: 138, left: 583 },
    { top: 513, left: 200 },
    { top: 750, left: 750 },
    { top: 168, left: 1170 },
    { top: 150, left: 150 },
  ]);
  const [parentSize, setParentSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const parent = document.querySelector(".parent");
    setParentSize({ width: parent.offsetWidth, height: parent.offsetHeight });
  }, []);

  function floatImages() {
    const newPositions = positions.map((position) => ({
      top: `${Math.random() * (950 - 100)}px`,
      left: `${Math.random() * (1750 - 100)}px`,
    }));
    setPositions(newPositions);
  }

  useEffect(() => {
    const intervalId = setInterval(floatImages, 9500);
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
    <div className=" absolute top-0">
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
        className="decoration-dots dots-four "
        style={{ top: positions[3].top, left: positions[3].left }}
      ></div>
      <div className="decoration-dots parallax-element" data-speed="0.5">
        <img src='/assets/header-decoration.svg' alt="decoration" className="decoration-img" />
      </div>
    </div>
  );
}
