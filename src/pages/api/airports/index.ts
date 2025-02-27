import appendDevelopmentErrorInfo from "@/lib/development-error-info";
import { mockAirports } from "@/mock-data";
import { Airport, InternalServerError, MethodNotAllowedError } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

export function listAirports(): Airport[] {
  return Object.values(mockAirports);
}

export function deleteAirport(icao_code: string): boolean {
  const airport = mockAirports[icao_code];
  if (!airport) {
    return false;
  }
  return true;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Airport[] | MethodNotAllowedError | InternalServerError>
) {
  try {
    switch (req.method) {
      case "GET":
        res.status(200).json(listAirports());
        break;
      default:
        res.setHeader("Allow", ["GET"]);
        res.status(405).json({ error: "Method Not Allowed", allowedMethods: ["GET"] });
    }
  } catch (error) {
    console.error("Error occurred:", error);
    const response: InternalServerError = {
      error: "Internal server error",
    };
    appendDevelopmentErrorInfo(response, error);
    res.status(500).json(response);
  }
}
