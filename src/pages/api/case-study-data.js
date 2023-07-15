import data from "@/data/section/case-study.js";

export default function handler(req, res) {
  res.status(200).json(data);
}
