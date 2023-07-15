import data from "@/data/section/blog-post.js";

export default function handler(req, res) {
  res.status(200).json(data);
}
