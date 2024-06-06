import { getChiNhanh } from "./ChiNhanhController";

const express = require("express");
const router = express.Router();
export default function ChiNhanhRoutes(app) {
  router.get("/get-all", getChiNhanh);
  return app.use("/chi-nhanh", router);
}
