const data = [
  {
    id: 1,
    catagory: "Business",
    thumbnail: "/assets/blog-post/blog-post-one.png",
    date: "October 25, 2021",
    title: "Ten Great Sass Ideas That You Can Share With Your Friends.",
    summary:
      "Pick a template, customize the content and design elements, and launch! Or, design your next fabulous email on your own with our simple visual builder. Pick a template, customize the content and design elements.",
    href: "/",
    author: {
      name: "Charles Mabery",
      profile: "/assets/blog-post/blog-post-author.svg",
    },
  },
  {
    id: 2,
    catagory: "Business",
    thumbnail: "/assets/blog-post/blog-post-two.png",
    date: "October 25, 2021",
    title:
      "Seven Advices That You Must Listen Before Studying Business Strategy.",
    summary:
      "Pick a template, customize the content and design elements, and launch! Or, design your next fabulous email on your own with our simple visual builder. Pick a template, customize the content and design elements.",
    href: "/",
    author: {
      name: "Charles Mabery",
      profile: "/assets/blog-post/blog-post-author.svg",
    },
  },
  {
    id: 3,
    catagory: "Business",
    thumbnail: "/assets/blog-post/blog-post-three.png",
    date: "October 25, 2021",
    title:
      "You Will Never Believe These Bizarre Truths Behind Business Strategy.",
    summary:
      "Pick a template, customize the content and design elements, and launch! Or, design your next fabulous email on your own with our simple visual builder. Pick a template, customize the content and design elements.",
    href: "/",
    author: {
      name: "Charles Mabery",
      profile: "/assets/blog-post/blog-post-author.svg",
    },
  },
];
export default function handler(req, res) {
  res.status(200).json(data);
}
