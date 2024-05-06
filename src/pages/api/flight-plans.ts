import type { NextApiRequest, NextApiResponse } from 'next';
import { Airport } from './airports';

type FlightPlan = {
  departure_airport: Airport,
  destination_airport: Airport,
  departure_time: Date;
}

// Mocked data for flight plans
const flightPlans: FlightPlan[] = [
  {
    departure_airport: { icao_code: 'KLAX', name: 'Los Angeles International Airport' },
    destination_airport: { icao_code: 'KJFK', name: 'John F. Kennedy International Airport' },
    departure_time: new Date('2021-07-01T12:00:00Z')
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse<FlightPlan[] | { message: string }>) {
  if (req.method === 'GET') {
    res.status(200).json(flightPlans);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

