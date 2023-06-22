const data = [
  {
    id: 1,
    img: "/assets/sections/case-study/case-study-marketing-one.svg",
    category: "Marketing",
    title: "Built web faster & better",
    author: "Quax",
    date: "March 25, 2021",
  },
  {
    id: 2,
    img: "/assets/sections/case-study/case-study-development-one.svg",
    category: "Development",
    title: "Twice profit than before",
    author: "Quax",
    date: "March 25, 2021",
  },
  {
    id: 3,
    img: "/assets/sections/case-study/case-study-e-commerce-one.svg",
    category: "E-Commerce",
    title: "Marketing Content",
    author: "Quax",
    date: "March 25, 2021",
  },
  {
    id: 4,
    img: "/assets/sections/case-study/case-study-designing-one.svg",
    category: "Designing",
    title: "Branding SEO Twice Profit.",
    author: "Quax",
    date: "March 25, 2021",
  },
  {
    id: 5,
    img: "/assets/sections/case-study/case-study-data-entry-one.svg",
    category: "Data Entry",
    title: "Online Media Management",
    author: "Quax",
    date: "March 25, 2021",
  },
  {
    id: 6,
    img: "/assets/sections/case-study/case-study-marketing-two.svg",
    category: "Marketing",
    title: "Built web faster & better",
    author: "Quax",
    date: "March 25, 2021",
  },
];

export default function handler(req, res) {
  res.status(200).json(data);
}
