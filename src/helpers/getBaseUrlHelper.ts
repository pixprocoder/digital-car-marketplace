export const getBaseUrl = (): string => {
  return (
    process.env.NEXT_BASE_URL ||
    "https://digital-car-marketplace-backend.vercel.app/api/v1"
  );
};

// http://localhost:5000/api/v1
