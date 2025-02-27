import { mockAirports } from "@/mock-data";

export default function AirportsPage() {
  const airports = Object.values(mockAirports);

  return (
    <main>
      <div className="header">
        <h1>
          <a href="/" className="text-blue-600 hover:underline">
            Home
          </a>{" "}
          / Airports
        </h1>
      </div>

      <div className="p-4">
        <ul className="space-y-4">
          {airports.map((airport) => (
            <li key={airport.icao_code} className="border p-4 rounded-lg">
              <h2 className="text-xl font-semibold">{airport.icao_code}</h2>
              <p className="text-gray-600">{airport.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
