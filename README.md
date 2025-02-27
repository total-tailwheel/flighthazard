# FlightHazard

This is an API server that provides information about the weather and the flight hazards in a given location. The API server is built using Next.js and the data is fetched from a variety of official source including the Aviation Weather Center (AWC) and the National Weather Service (NWS).

## Development

You need Node.js 22, Yarn, and Docker.

Run dependencies and configure the environment. This script starts dependency services in docker, extracts dynamic information such as assigned port numbers, and sets environment variables.

```bash
eval $(./dev.sh)
```

Create the database using `prisma`.

| Command              | Use Case                                                                    |
| -------------------- | --------------------------------------------------------------------------- |
| `prisma db push`     | Prototyping, quick schema sync, local dev without migration tracking        |
| `prisma migrate dev` | Version-controlled migrations for structured development and production use |

For example:

```bash
yarn prisma db push
```

Run the development server:

```bash
yarn dev
```
