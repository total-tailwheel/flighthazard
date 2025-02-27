import { FlightPlan, InternalServerError, MethodNotAllowedError } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";
import { mockFlightPlans } from "@/mock-data";
import appendDevelopmentErrorInfo from "@/lib/development-error-info";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FlightPlan[] | InternalServerError | MethodNotAllowedError>
) {
  try {
    switch (req.method) {
      case "GET":
        res.status(200).json(mockFlightPlans);
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
