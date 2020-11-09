require("make-promises-safe");
import express = require("express");
import cors = require("cors");
import morgan = require("morgan");
import compression = require("compression");
import { app as appConfig } from "./config";
import router from "./routes";
import { expressLogger, logger } from "./logger";

const app = express();

app.use(expressLogger);
app.use(express.json());
app.use(cors());
app.use(compression());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.get(appConfig.paths.healthCheck, (_, res) => {
  res.send({
    status: "OK",
  });
});

app.use(appConfig.paths.base, router);

try {
  app.listen(appConfig.port, () => {
    logger.info(`Listening on port ${appConfig.port}`);
  });
} catch (err) {
  logger.error(`Failed to start`, err);
}
