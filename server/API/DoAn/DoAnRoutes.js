import { getDoAn } from "./DoAnController";

const express = require("express");
const router = express.Router();
export default function DoAnRoutes(app) {
  router.get("/get-all", getDoAn);
  return app.use("/do-an", router);
}
