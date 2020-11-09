import ExpressLogger from "express-pino-logger";
import Logger from "pino";
import { app } from "./config";

export const logger = Logger({
  level: app.logLevel,
  formatters: {
    level: (level, number) => {
      return {
        level,
      };
    },
  },
});

export const expressLogger = ExpressLogger({
  logger,
  autoLogging: false,
});
