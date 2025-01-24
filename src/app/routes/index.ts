import { Router } from "express";

export const RootRouter = Router();

RootRouter.get("/", (req, res) => {
  return res.json({
    status: 200,
    message: "OK",
  });
});
