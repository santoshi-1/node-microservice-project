import express, { Express } from "express";
import catalogRouter from "./api/catalog.route";

const app: Express = express();
app.use(express.json());

app.use("/", catalogRouter);

app.get("/", (req, res, next) => {
  return res.json({ msg: "message" });
});

export default app;
