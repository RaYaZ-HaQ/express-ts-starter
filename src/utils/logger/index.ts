import winston from "winston";
import { colors, levels, format, transports } from "./settings";

winston.addColors(colors);

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL,
  levels,
  format,
  transports,
});

export default logger;
