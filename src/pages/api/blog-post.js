import data from "@/data/blog-post.js";

export default function handler(req, res) {
  res.status(200).json(data);
}
