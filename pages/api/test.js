import dbConnect from "../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
  res.status(200).json({ test: "test" });
};
