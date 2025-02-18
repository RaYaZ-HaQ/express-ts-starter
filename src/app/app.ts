import express from "express";
import { RootRouter } from "./routes";
import {
  Compression,
  Cors,
  Helmet,
  Json,
  Morgan,
  UrlEncoded,
} from "@middlewares/base";

const app = express();

app.use(Helmet);
app.use(Json);
app.use(UrlEncoded);
app.use(Compression);
app.use(Cors);
app.use(Morgan);

app.use(RootRouter);

export default app;
