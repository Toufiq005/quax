import data from "@/data/section/team-members.js";

export default function (req, res) {
  res.status(200).json(data);
}
