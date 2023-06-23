import "./blog.css";
import Image from "next/image";
import Banner from "@/components/Sections/Banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

async function getData() {
  const res = await fetch("https://quax-psi.vercel.app/api/blog-post");

  return res.json();
}

export default async function page() {
  const data = await getData();

  return (
    <>
      <Banner
        title="Blog"
        description="Pick a template, customize the content and design elements, and launch! Or, design your next fabulous email."
      />
      <section className="w-full min-h-screen bg-color">
        <div className="wrapper w-full h-auto blog">
          <div>
            {data.map((items) => {
              return (
                <div key={items.id} className="blog-post">
                  <Image width={768} height={499} src={items.thumbnail} />
                  <div className="flex items-center justify-start">
                    <div className="flex items-center justify-start gap-4">
                      <Image
                        width={40}
                        height={40}
                        src={items.author.profile}
                      />
                      <h3>{items.author.name}</h3>
                    </div>
                    <div className="flex items-center justify-start gap-4">
                      <FontAwesomeIcon icon={faClock} />
                      <h3>{items.date}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
