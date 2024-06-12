import { BlockDungCuYTe, createNew, getDungCuYTe } from "./DungCuYTeController";

const express = require("express");
const router = express.Router();
export default function DungCuYTeRoutes(app) {
  router.get("/get-all", getDungCuYTe);
  router.post("/create", createNew);
  router.put("/block", BlockDungCuYTe);
  return app.use("/dung-cu-y-te", router);
}
