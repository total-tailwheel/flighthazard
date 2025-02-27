-- CreateTable
CREATE TABLE "Airport" (
    "icaoCode" TEXT NOT NULL,

    CONSTRAINT "Airport_pkey" PRIMARY KEY ("icaoCode")
);

-- CreateTable
CREATE TABLE "FlightPlan" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "departureAirportIcaoCode" TEXT NOT NULL,
    "waypoints" TEXT[],
    "destinationAirportIcaoCode" TEXT NOT NULL,
    "departureTime" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "airportIcaoCode" TEXT,

    CONSTRAINT "FlightPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "iosDeviceToken" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AirportToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Airport_icaoCode_key" ON "Airport"("icaoCode");

-- CreateIndex
CREATE UNIQUE INDEX "_AirportToUser_AB_unique" ON "_AirportToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_AirportToUser_B_index" ON "_AirportToUser"("B");

-- AddForeignKey
ALTER TABLE "FlightPlan" ADD CONSTRAINT "FlightPlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlightPlan" ADD CONSTRAINT "FlightPlan_departureAirportIcaoCode_fkey" FOREIGN KEY ("departureAirportIcaoCode") REFERENCES "Airport"("icaoCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlightPlan" ADD CONSTRAINT "FlightPlan_destinationAirportIcaoCode_fkey" FOREIGN KEY ("destinationAirportIcaoCode") REFERENCES "Airport"("icaoCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlightPlan" ADD CONSTRAINT "FlightPlan_airportIcaoCode_fkey" FOREIGN KEY ("airportIcaoCode") REFERENCES "Airport"("icaoCode") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AirportToUser" ADD CONSTRAINT "_AirportToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Airport"("icaoCode") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AirportToUser" ADD CONSTRAINT "_AirportToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
