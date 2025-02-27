import { Airport, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function processAirport(airport: Airport) {
  // Fetch data from external URLs
  const response = await fetch("YOUR_API_URL");
  const data = await response.json();

  // const extractedData = data.data;
  // Process and save to database
  // await prisma.airport.create({
  //   data: {
  //     // your data structure
  //   },
  // });
}

async function processAirports() {
  const airports = await prisma.airport.findMany();
  for (const airport of airports) {
    await processAirport(airport);
  }
}

export function startBackgroundTask() {
  // Run every X minutes (e.g., every 5 minutes = 5 * 60 * 1000)
  const interval = 5 * 60 * 1000;

  setInterval(processAirports, interval);
}
