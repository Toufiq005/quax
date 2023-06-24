const data = [
  {
    id: 1,
    name: "Polear Vainte",
    profile: "/assets/blog-post/icon-polear-vainte.png",
    date: "October 25, 2021",
    comment:
      "To achieve this, it would be necessary to have uniform grammar, pronunciatio and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.",
    reply: false,
  },
  {
    id: 2,
    name: "Peter Vine",
    profile: "/assets/blog-post/icon-polear-vainte.png",
    date: "October 25, 2021",
    comment:
      "The new common language will be more simple and regular than the existing European languages. The European languag are member of the same family. Their separate existence is a myth.",
    reply: true,
  },
  {
    id: 3,
    name: "Polear Vainte",
    profile: "/assets/blog-post/icon-polear-vainte.png",
    date: "October 25, 2021",
    comment:
      "Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.",
    reply: true,
  },
  {
    id: 4,
    name: "Peter Vine",
    profile: "/assets/blog-post/icon-polear-vainte.png",
    date: "October 25, 2021",
    comment:
      "If several languages coalesce, the grammar of the resulting language is more simple manegment system.",
    reply: true,
  },
  {
    id: 5,
    name: "Jecica Milaen",
    profile: "/assets/blog-post/icon-jecica-milaen.png",
    date: "October 25, 2021",
    comment:
      "To achieve this, it would be necessary to have uniform grammar, pronunciatio and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.",
    reply: false,
  },
  {
    id: 6,
    name: "Jecica Milaen",
    profile: "/assets/blog-post/icon-jecica-milaen.png",
    date: "October 25, 2021",
    comment:
      "The new common language will be more simple and regular than the existing European languages. The European languag are member of the same family. Their separate existence is a myth.",
    reply: true,
  },
];
export default function (req, res) {
  res.status(200).json(data);
}
