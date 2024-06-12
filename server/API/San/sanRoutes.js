import { Block, createNew, getAll } from "./sanController";

const express = require("express");
const router = express.Router();
export default function sanRoutes(app) {
  router.post("/create", createNew);
  router.get("/get-all", getAll);
  router.put("/block", Block);
  return app.use("/san", router);
}
