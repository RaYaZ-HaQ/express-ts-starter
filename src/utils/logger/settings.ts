import winston from "winston";

export const LOG_LEVELS = {
  ERROR: "error",
  WARN: "warn",
  INFO: "info",
  HTTP: "http",
  DEBUG: "debug",
} as const;

export const levels = {
  [LOG_LEVELS.ERROR]: 0,
  [LOG_LEVELS.WARN]: 1,
  [LOG_LEVELS.INFO]: 2,
  [LOG_LEVELS.HTTP]: 3,
  [LOG_LEVELS.DEBUG]: 4,
} as const;

type LogLevel = keyof typeof levels;

export const colors: Record<LogLevel, string> = {
  [LOG_LEVELS.ERROR]: "red",
  [LOG_LEVELS.WARN]: "yellow",
  [LOG_LEVELS.INFO]: "green",
  [LOG_LEVELS.HTTP]: "magenta",
  [LOG_LEVELS.DEBUG]: "white",
};

export const format = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

export const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: "logs/error.log",
    level: LOG_LEVELS.ERROR,
  }),
  new winston.transports.File({ filename: "logs/all.log" }),
];
