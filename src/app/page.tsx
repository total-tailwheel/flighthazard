import Link from "next/link";

export default function Home() {
  return (
      <main>
        <div className="header">
          <h1>Flight Hazard</h1>
        </div>

        <div className="subsections">
            <Link href="/airports" className="subsection">
                Airports
            </Link>
            <Link href="/flights" className="subsection">
                Flights
            </Link>
            <Link href="/configuration" className="subsection">
                <i className="fas fa-cog gear"></i> Configuration
            </Link>
        </div>
      </main>
  );
}
