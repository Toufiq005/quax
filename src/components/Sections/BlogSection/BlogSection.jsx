import "./BlogSection.css";
import Image from "next/image";

const blogFollowUsLinks = [
  {
    id: 1,
    name: "facebook",
    icon: "/assets/blog-post/blog-follow-us-facebook.svg",
    link: "/",
  },
  {
    id: 2,
    name: "twitter",
    icon: "/assets/blog-post/blog-follow-us-twitter.svg",
    link: "/",
  },
  {
    id: 3,
    name: "google plus",
    icon: "/assets/blog-post/blog-follow-us-google.svg",
    link: "/",
  },
  {
    id: 4,
    name: "dribble",
    icon: "/assets/blog-post/blog-follow-us-dribble.svg",
    link: "/",
  },
  {
    id: 5,
    name: "vimeo",
    icon: "/assets/blog-post/blog-follow-us-vimeo.svg",
    link: "/",
  },
  {
    id: 6,
    name: "linkedin",
    icon: "/assets/blog-post/blog-follow-us-linkedin.svg",
    link: "/",
  },
];

const blogTags = [
  {
    id: 1,
    tag: "Analytics",
    href: "/",
  },
  {
    id: 2,
    tag: "Marketing",
    href: "/",
  },
  {
    id: 3,
    tag: "Design",
    href: "/",
  },
  {
    id: 4,
    tag: "Studying",
    href: "/",
  },
  {
    id: 5,
    tag: "SEO",
    href: "/",
  },
  {
    id: 6,
    tag: "Social",
    href: "/",
  },
  {
    id: 7,
    tag: "Analytics",
    href: "/",
  },
  {
    id: 8,
    tag: "Marketing",
    href: "/",
  },
  {
    id: 9,
    tag: "Design",
    href: "/",
  },
  {
    id: 10,
    tag: "Development",
    href: "/",
  },
  {
    id: 11,
    tag: "SEO",
    href: "/",
  },
];

const blogCategories = [
  {
    id: 1,
    category: "Business",
    href: "/",
  },
  {
    id: 2,
    category: "SEO Optimization",
    href: "/",
  },
  {
    id: 3,
    category: "Business Strategy",
    href: "/",
  },
  {
    id: 4,
    category: "Market Analysis",
    href: "/",
  },
  {
    id: 5,
    category: "Technology",
    href: "/",
  },
  {
    id: 6,
    category: "Business Startup",
    href: "/",
  },
];

require("dotenv").config();

async function getData() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_REST_API_ENDPOINT + "/blog-post"
  );

  return res.json();
}

export default async function BlogSection() {
  const data = await getData();

  return (
    <>
      <div className="w-full">
        <div className="blog-div w-full h-auto mb-4">
          <h1 className="font-semibold text-black/70 text-3xl m-7">
            Recent Posts
          </h1>
          {data.slice(0, 5).map((items) => {
            return (
              <a href="/blog" key={items.id}>
                <div className="flex items-start justify-center gap-5 my-10 mx-7">
                  <Image
                    width={120}
                    height={80}
                    src={items.thumbnail}
                    alt="img"
                  />
                  <h2 className="text-black/70">{items.title}</h2>
                </div>
              </a>
            );
          })}
        </div>
        <div className="blog-div my-4">
          <h1 className="font-semibold text-black/70 text-3xl m-7">
            Categories
          </h1>
          <div>
            {blogCategories.map(({ id, category, href }) => {
              return (
                <a href={href} key={id} target="_blank">
                  <h2 className="text-lg text-black/70 hover:text-red-500 font-medium mx-7 my-3">
                    {category}
                  </h2>
                </a>
              );
            })}
          </div>
        </div>
        <div className="blog-div my-4">
          <h1 className="font-semibold text-black/70 text-3xl m-7">
            Follow Us
          </h1>
          <div className="follow-us-icons pb-3">
            {blogFollowUsLinks.map((items) => {
              return (
                <a
                  href={items.link}
                  key={items.id}
                  target="_blank"
                  className="hover:scale-105"
                >
                  <Image width={90} height={90} src={items.icon} alt="icon" />
                </a>
              );
            })}
          </div>
        </div>
        <div className="blog-div my-4">
          <h1 className="font-semibold text-black/70 text-3xl m-7">Tags</h1>
          <div className="blog-tags ">
            {blogTags.map(({ id, tag, href }) => {
              return (
                <a href={href} key={id} target="_blank">
                  <h2 className="px-3 py-2 hover:bg-red-500 bg-very-light-gray text-black/30 hover:text-white rounded m-1 text-center">
                    {tag}
                  </h2>
                </a>
              );
            })}
          </div>
        </div>
        <div className="blog-div my-4">
          <h1 className="font-semibold text-black/70 text-3xl m-7">
            About Author
          </h1>
          <p className="text-light-gray m-7">
            Pick a template, customize the content and design elements, and
            launc design your next fabulous email on your with our simple visual
            builder. Pick a template, customize the content and design elements.
          </p>
        </div>
      </div>
    </>
  );
}
