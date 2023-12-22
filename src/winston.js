import winston from "winston";
import config from "./config.js";

const customeLevel = {
  levels: {
    fatal: 0,
    warning: 1,
    information: 2,
  },
  colors: {
    fatal: "red",
    warning: "yellow",
    information: "green",
  },
};

export let logger;

if (config.environment === "production") {
  logger = winston.createLogger({
    levels: customeLevel.levels,
    transports: [
      new winston.transports.File({
        filename: "./prodLogs.log",
        level: "warning",
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.prettyPrint()
        ),
      }),
    ],
  });
} else {
  logger = winston.createLogger({
    levels: customeLevel.levels,
    transports: [
      new winston.transports.Console({
        level: "information",
        format: winston.format.combine(
          winston.format.colorize({ colors: customeLevel.colors }),
          winston.format.simple()
        ),
      }),
    ],
  });
}