import { mockFlightPlans } from "@/mock-data";

export default function FlightsPage() {
  const flights = mockFlightPlans;

  return (
    <main>
      <div className="header">
        <a href="/" className="text-blue-600 hover:underline">
          Home
        </a>{" "}
        / Flights
      </div>

      <div className="p-4">
        <ul className="space-y-4">
          {flights.map((flight, index) => (
            <li key={index} className="border p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold">
                    {flight.departure_airport.icao_code} → {flight.destination_airport.icao_code}
                  </h2>
                  <p className="text-gray-600">From: {flight.departure_airport.name}</p>
                  <p className="text-gray-600">To: {flight.destination_airport.name}</p>
                </div>
                <div className="text-right text-gray-500">{new Date(flight.departure_time).toLocaleDateString()}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
