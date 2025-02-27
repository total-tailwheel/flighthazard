type ErrorResponse = {
  developmentDetails?: { message: string; stack: string[] };
};

export default function appendDevelopmentErrorInfo(response: ErrorResponse, error: any) {
  if (process.env.NODE_ENV !== "development") return;

  const errorMessage = error instanceof Error ? error.message : "Unknown error";
  const errorStack = error instanceof Error ? error.stack : undefined;
  response.developmentDetails = {
    message: errorMessage,
    stack: errorStack ? errorStack.split("\n").map((line) => line.trim()) : [],
  };
}
