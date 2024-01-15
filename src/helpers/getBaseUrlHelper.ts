export const getBaseUrl = (): string => {
  return process.env.NEXT_BASE_URL || "http://localhost:5000/api/v1";
};

// https://digital-car-marketplace-backend.vercel.app/api/v1
