import type { NextApiRequest, NextApiResponse } from "next";
import { mockAirports } from ".";

export function deleteAirport(icao_code: string): boolean {
  const index = mockAirports.findIndex((airport) => airport.icao_code === icao_code);
  if (index === -1) {
    return false;
  }
  return true;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case "DELETE":
        const { icao_code } = req.query;
        if (typeof icao_code !== "string") {
          res.status(400).json({ error: "icao_code parameter is required" });
          return;
        }
        if (deleteAirport(icao_code)) res.status(200).json({ message: "Airport deleted." });
        else res.status(404).json({ message: "Airport not found." });
        break;
      default:
        res.setHeader("Allow", ["DELETE"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
