export const getBaseUrl = (): string => {
  return (
    process.env.NEXT_BASE_URL ||
    "https://digital-car-marketplace-backend.vercel.app/api/v1"
  );
};
