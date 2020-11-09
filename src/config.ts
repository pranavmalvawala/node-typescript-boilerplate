export const app = {
  logLevel: process.env.LOG_LEVEL || "info",
  port: process.env.PORT || 5000,
  paths: {
    base: process.env.BASE_PATH,
    healthCheck: process.env.HEALTH_CHECK_PATH,
  },
};
