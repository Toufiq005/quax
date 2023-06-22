"use client";

import "./CaseStudySection.css";
import { useState } from "react";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/case-study-data");

  return res.json();
}

export default async function CaseStudySection() {

  const data = await getData();


  return (
    <section className="case-study w-full min-h-screen flex items-center justify-center bg-very-light-gray">
      <div className="wrapper w-full h-auto flex flex-col items-center justify-center">
        <h3>Portfolio</h3>
        <h1>Recent Case Study</h1>
        <ul className="flex items-center justify-between">
          <li onClick={() => handleCategorySelect("all")}>
            <h4>All</h4>
          </li>
          <li onClick={() => handleCategorySelect("Marketing")}>
            <h4>Marketing</h4>
          </li>
          <li onClick={() => handleCategorySelect("Designing")}>
            <h4>Designing</h4>
          </li>
          <li onClick={() => handleCategorySelect("Development")}>
            <h4>Development</h4>
          </li>
          <li onClick={() => handleCategorySelect("E-Commerce")}>
            <h4>E-Commerce</h4>
          </li>
        </ul>
        <div className="case-study-container">
          {data.map((props) => {
            return (
              <div key={props.id} className="relative mx-4">
                <Image
                  width={370}
                  height={370}
                  src={props.img}
                  alt={props.category}
                />
                <h2>{props.title}</h2>
                <div className="flex items-center">
                  <p className="w-14 h-4 flex items-center border-r border-black/60">
                    {props.author}
                  </p>
                  <p className="ml-4">{props.date}</p>
                </div>
                <div className="relative flex items-center justify-center case-study-type">
                  <h5>{props.category}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
