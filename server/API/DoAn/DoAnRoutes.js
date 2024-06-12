import { BlockDoAn, createNew, getDoAn } from "./DoAnController";

const express = require("express");
const router = express.Router();
export default function DoAnRoutes(app) {
  router.get("/get-all", getDoAn);
  router.post("/create", createNew);
  router.put("/block", BlockDoAn);
  return app.use("/do-an", router);
}
