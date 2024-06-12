import {
  BlockChiNhanh,
  createChiNhanh,
  getAllChiNhanh,
  getChiNhanh,
  getQuanPhuong,
} from "./ChiNhanhController";

const express = require("express");
const router = express.Router();
export default function ChiNhanhRoutes(app) {
  router.get("/get-all", getChiNhanh);
  router.post("/create", createChiNhanh);
  router.get("/get-phuong-quan", getQuanPhuong);
  router.put("/block", BlockChiNhanh);
  router.get("/get-chi-nhanh", getAllChiNhanh);
  return app.use("/chi-nhanh", router);
}
