import type { NextApiRequest, NextApiResponse } from 'next';

export type Airport = {
  icao_code: string;
  name: string;
};

// Mocked data for airports
const airports: Airport[] = [
  { icao_code: 'KLAX', name: 'Los Angeles International Airport' },
  { icao_code: 'KJFK', name: 'John F. Kennedy International Airport' }
];

export default function handler(req: NextApiRequest, res: NextApiResponse<Airport[] | { message: string }>) {
  if (req.method === 'GET') {
    res.status(200).json(airports);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
