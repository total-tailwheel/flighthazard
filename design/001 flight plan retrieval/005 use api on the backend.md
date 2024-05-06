**Title:** Implement /api/airports endpoint in Next.js backend

**Story:** Our application currently lacks a specific API endpoint for accessing airport data which is essential for users looking to retrieve airport-specific information efficiently. By adding this endpoint, we enhance the functionality of our application, directly benefiting users who require quick access to detailed airport data.

**Changes:**
- `pages/api/airports.js` Create a new API endpoint file to handle requests for airport data.
- `pages/api/airports.js` Implement a GET method in the endpoint to retrieve airport information.
- `test/api/airports.test.js` Set up tests for the new `/api/airports` endpoint ensuring it correctly handles various request scenarios.

**Context:**

- No existing API endpoint at /api/airports in the Next.js project. This addition will establish a direct route for fetching airport data.
- Given the user's project setup and configuration file types (JavaScript, Next.js), create and manage API routes using the pages/api directory pattern common in Next.js applications.
- Appropriate use of Jest or a similar testing framework should be considered to validate the functionality of the new
