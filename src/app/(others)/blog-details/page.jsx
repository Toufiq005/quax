"use client";
import "./blog-details.css";
import Banner from "@/components/Sections/Banner/Banner";
import Image from "next/image";
import BlogSection from "@/components/Sections/BlogSection/BlogSection";
import relatedBlog from "@/data/section/home-blogpost.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";

require("dotenv").config();
async function getData() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_REST_API_ENDPOINT + "/blog-post"
  );
  return res.json();
}

export default async function page() {
  const data = await getData();

  return (
    <>
      <Banner
        title="Blog Details"
        description="Pick a template, customize the content and design elements, and launch! Or, design your next fabulous email."
      />
      <section className="w-full min-h-screen bg-color flex items-center justify-center">
        <div className="wrapper max-xl:w-full h-auto blog-details">
          <div className="max-xl:w-full">
            <div className="blog-details-post">
              <h1>
                Seven Advices That You Must Listen Before Studying Business
                Strategy.
              </h1>
              <Image
                width={770}
                height={500}
                src="/assets/blog-post/blog-post-two.png"
                sizes="(max-width: 868px) 80%"
                alt="img"
                className="my-6"
              />
              <p>
                The European languag are member of the same family. Their
                separate existence is a myth. For science, music, sport, etc,
                Europe uses the same vocabulary. The languages only differ in
                their grammar, their pronunciation and their most common words.
                <br />
                <br />
                Everyone realizes why a new common language would be desirable:
                one could refuse to pay expensive translators. To achieve this,
                it would be necessary to have uniform grammar, pronunciation and
                more common words. If several languages coalesce, the grammar of
                the resulting language is more simple and regular than that of
                the individual languages. The new common language will be more
                simple and regular than the existing European languages.
              </p>
              <div className="w-full bg-very-light-gray h-auto rounded-lg my-10 max-xl:w-4/5">
                <h2 className="p-10">
                  Everyone realizes why a new common language would be
                  desirable: one could re to pay expensive translators. To
                  achieve this, it would be necessary to have uniform grammar,
                  pronunciation and more common words. If several languages
                  coalesce, the grammar of the resulting language is more simple
                  and regular.
                </h2>
              </div>
              <p>
                The new common language will be more simple and regular than the
                existing European languages. The European languag are member of
                the same family. Their separate existence is a myth. For
                science, music, sport, etc, Europe uses the same vocabulary. The
                languages only differ in their grammar, their pronunciation and
                their most common words. To achieve this, it would be necessary
                to have uniform grammar, pronunciation and more common words. If
                several languages coalesce, the grammar of the resulting
                language is more simple.
                <br />
                <br />
                Everyone realizes why a new common language would be desirable:
                one could refuse to pay expensive translators. To achieve this,
                it would be necessary to have uniform grammar, pronunciation and
                more common words.
              </p>
            </div>
            <div className="flex items-center justify-between mt-10 max-sm:flex-col">
              <div className="flex items-center justify-center gap-3 max-sm:flex-col">
                <div className="w-40 h-10 bg-very-light-gray flex items-center justify-center">
                  <h3 className="text-black/60">Business Strategy</h3>
                </div>
                <div className="w-40 h-10 bg-very-light-gray flex items-center justify-center">
                  <h3 className="text-black/60">Business</h3>
                </div>
                <div className="w-40 h-10 bg-very-light-gray flex items-center justify-center">
                  <h3 className="text-black/60">Technology</h3>
                </div>
              </div>
              <div>
                <Image
                  width={95}
                  height={15}
                  src="/assets/blog-post/social-icon.svg"
                  alt="icon"
                  className="max-sm:mt-5"
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-10 my-7 blog-details-about-author max-xl:w-4/5">
              <div>
                <Image
                  width={115}
                  height={115}
                  src="/assets/blog-post/blog-post-author.svg"
                  alt="img"
                />
              </div>
              <div>
                <h1>Peter Vine</h1>
                <p>
                  The languages only differ in their grammar, their
                  pronunciation and their most common words. To achieve this, it
                  would.
                </p>
              </div>
            </div>
            <div className="bolg-details-related-post">
              <h5>Related Post</h5>
              <div className="flex max-sm:flex-col">
                {relatedBlog.slice(0, 2).map((items) => {
                  return (
                    <div
                      key={items.id}
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      className="post max-sm:hover:scale-100 hover:scale-105 duration-500 flex flex-col items-center justify-center"
                    >
                      <Image
                        width={370}
                        height={250}
                        src={items.img}
                        alt="img"
                        className="postImg"
                      />
                      <div className="flex items-center justify-center post-info">
                        <h2 className="text-black/40 font-medium pr-3 flex items-center border-r">
                          <span>
                            <Image
                              src="/assets/icon-user.svg"
                              width={12}
                              height={12}
                              alt="icon"
                              className="w-3 h-3 mx-2"
                            />
                          </span>
                          By {items.author}
                        </h2>

                        <h2 className="text-black/40 font-medium pr-5 flex items-center">
                          <span>
                            <Image
                              src="/assets/icon-folder.svg"
                              width={14}
                              height={10}
                              alt="icon"
                              className="w-3 h-3 mx-2"
                            />
                          </span>
                          {items.category}
                        </h2>
                      </div>
                      <h1>{items.title}</h1>
                      <p>{items.description}</p>
                      <div className="pb-8">
                        <a href={items.link}>View Details</a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="blog-details-comments">
              <h1>6 Comments</h1>
              <div className="flex flex-col items-end">
                <div className="flex items-start mt-7">
                  <Image
                    width={120}
                    height={120}
                    src="/assets/blog-post/icon-polear-vainte.png"
                    alt="img"
                  />
                  <div>
                    <div className="flex justify-between items-center">
                      <h2>Polear Vainte</h2>
                      <h3>AUGUST 25, 2021</h3>
                    </div>
                    <p>
                      To achieve this, it would be necessary to have uniform
                      grammar, pronunciatio and more common words. If several
                      languages coalesce, the grammar of the resulting language
                      is more simple and regular than that of the individual
                      languages.
                    </p>
                    <div className="flex items-center justify-start gap-1 mt-4">
                      <h4>Reply</h4>
                      <FontAwesomeIcon
                        icon={faReply}
                        className="text-gray-600/60"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-start mt-7 w-11/12">
                  <Image
                    width={120}
                    height={120}
                    src="/assets/blog-post/icon-polear-vainte.png"
                    alt="img"
                  />
                  <div>
                    <div className="flex justify-between items-center">
                      <h2>Polear Vainte</h2>
                      <h3>AUGUST 25, 2021</h3>
                    </div>
                    <p>
                      To achieve this, it would be necessary to have uniform
                      grammar, pronunciatio and more common words.
                    </p>
                    <div className="flex items-center justify-start gap-1 mt-4">
                      <h4>Reply</h4>
                      <FontAwesomeIcon
                        icon={faReply}
                        className="text-gray-600/60"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-start mt-7 w-11/12">
                  <Image
                    width={120}
                    height={120}
                    src="/assets/blog-post/icon-polear-vainte.png"
                    alt="img"
                  />
                  <div>
                    <div className="flex justify-between items-center">
                      <h2>Polear Vainte</h2>
                      <h3>AUGUST 25, 2021</h3>
                    </div>
                    <p>
                      To achieve this, it would be necessary to have uniform
                      grammar, pronunciatio and more common words.
                    </p>
                    <div className="flex items-center justify-start gap-1 mt-4">
                      <h4>Reply</h4>
                      <FontAwesomeIcon
                        icon={faReply}
                        className="text-gray-600/60"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-details-reply">
              <h1>Leave a Comment</h1>
              <form className="max-md:w-4/5">
                <div className="flex max-md:flex-col max-md:justify-center items-center justify-start gap-7 mt-8">
                  <input type="text" placeholder="Full Name" required />
                  <input type="text" placeholder="Your Email" required />
                </div>
                <textarea
                  name="message"
                  placeholder="Add comment"
                  cols="30"
                  rows="10"
                  className="mt-8"
                ></textarea>
                <button className="">Submit Comment</button>
              </form>
            </div>
          </div>
          <BlogSection />
        </div>
      </section>
    </>
  );
}
