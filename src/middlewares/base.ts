import compression from "compression";
import cors from "cors";
import { json, urlencoded } from "express";
import helmet from "helmet";
import morgan from "morgan";

export const Json = json();
export const UrlEncoded = urlencoded({
  extended: true,
});
export const Compression = compression();
export const Cors = cors();
export const Morgan = morgan("combined");
export const Helmet = helmet();
