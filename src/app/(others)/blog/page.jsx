import "./blog.css";
import Image from "next/image";
import Banner from "@/components/Sections/Banner/Banner";
import Button from "@/components/Buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import BlogSection from "@/components/Sections/BlogSection/BlogSection";

require("dotenv").config();

async function getData() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_REST_API_ENDPOINT + "/blog-post"
  );

  return res.json();
}

export default async function page() {
  const data = await getData();

  const otherPages = [
    {
      id: 1,
      href: "#",
      name: "1",
    },
    {
      id: 2,
      href: "#",
      name: "2",
    },
    {
      id: 3,
      href: "#",
      name: "3",
    },
    {
      id: 4,
      href: "#",
      name: "...",
    },
  ];

  return (
    <>
      <Banner
        title="Blog"
        description="Pick a template, customize the content and design elements, and launch! Or, design your next fabulous email."
      />
      <section className="w-full min-h-screen bg-color flex items-center justify-center">
        <div className="wrapper h-auto blog py-32">
          <div>
            {data.map((items) => {
              return (
                <div key={items.id} className="blog-post relative">
                  <Image
                    width={768}
                    height={499}
                    src={items.thumbnail}
                    sizes="(max-width: 868px) 80%"
                    alt="img"
                  />
                  <div className="flex items-center justify-start mt-10 ml-10">
                    <div className="flex  items-center justify-start gap-4">
                      <Image
                        width={40}
                        height={40}
                        src={items.author.profile}
                        alt="icon"
                      />
                      <h3 className="text-black/50 font-medium mr-10">
                        {items.author.name}
                      </h3>
                    </div>
                    <div className="flex items-center justify-start gap-4 text-black/50 font-medium">
                      <FontAwesomeIcon icon={faClock} />
                      <h3>{items.date}</h3>
                    </div>
                  </div>
                  <a href={"/blog-details/" + items.id}>
                    <h1>{items.title}</h1>
                  </a>
                  <p>{items.summary}</p>
                  <div className="m-10 max-md:pb-10">
                    <Button title="Continue" link="/" />
                  </div>
                  <div className="w-32 h-10 flex items-center justify-center bg-red-500/50 rounded-md blog-post-catagory max-md:hidden">
                    <h2>{items.catagory}</h2>
                  </div>
                </div>
              );
            })}
            <div className="flex items-center justify-center gap-3 mt-5">
              <a
                href="#"
                className="w-10 h-10 rounded-sm border text-xl text-gray-500 hover:text-white duration-300 hover:bg-red-500 flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </a>
              {otherPages.map(({ id, name, href }) => {
                return (
                  <a
                    key={id}
                    href={href}
                    className="w-10 h-10 rounded-sm border text-xl text-gray-500 hover:text-white duration-300 hover:bg-red-500 flex items-center justify-center"
                  >
                    {name}
                  </a>
                );
              })}
              <a
                href="#"
                className="w-10 h-10 rounded-sm border text-xl text-gray-500 hover:text-white duration-300 hover:bg-red-500 flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
          <BlogSection />
        </div>
      </section>
    </>
  );
}
