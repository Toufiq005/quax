"use client";

import "./ErrorSection.css";
import Banner from "../Banner/Banner";

export default function ErrorSection() {
  return (
    <>
      <Banner
        title="404 Not Found"
        description="Pick a template, customize the content and design elements, and launch! Or, design your next fabulous email."
      />
      <section className="w-full h-auto flex items-center justify-center bg-color">
        <div className="wrapper w-full error flex flex-col items-center justify-center">
          <h1>404</h1>
          <h2>Oops! Page Note Found</h2>
          <p>
            The European language are memb of the same family. Their separate is
            a myth.
          </p>
          <a href="/">Home Page</a>
        </div>
      </section>
    </>
  );
}
