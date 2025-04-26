import type { NextApiRequest, NextApiResponse } from "next";
import { getPageData } from "@/lib/notion";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "Missing or invalid id" });
  }

  try {
    const data = await getPageData(id);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching page data:", error);
    return res.status(500).json({ error: "Failed to fetch page data" });
  }
}
