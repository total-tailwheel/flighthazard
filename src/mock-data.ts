import { Airport, FlightPlan } from "@/types";

export const mockAirports: Record<string, Airport> = {
  KLAX: { icao_code: "KLAX", name: "Los Angeles International Airport" },
  KJFK: { icao_code: "KJFK", name: "John F. Kennedy International Airport" },
};

export const mockFlightPlans: FlightPlan[] = [
  {
    departure_airport: mockAirports.KLAX,
    destination_airport: mockAirports.KJFK,
    departure_time: new Date("2021-07-01T12:00:00Z"),
  },
];
