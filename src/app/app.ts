import express from "express";
import { RootRouter } from "./routes";

const app = express();

app.use(RootRouter);

export default app;
