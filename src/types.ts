export type Airport = {
  icao_code: string;
  name: string;
};

export type FlightPlan = {
  departure_airport: Airport;
  destination_airport: Airport;
  departure_time: Date;
};

export type DevelopmentErrorInfo = {
  developmentDetails?: { message: string; stack: string[] };
};

export type MethodNotAllowedError = {
  error: "Method Not Allowed";
  allowedMethods: string[];
};

export type InternalServerError = DevelopmentErrorInfo & {
  error: string;
};
