import {
  addDoAn,
  addDungCuYTe,
  addNuocUong,
  addSan,
  addTheThao,
  getTamTinhDoAn,
  getTamTinhNuocUong,
  getTamTinhSan,
  getTamTinhTheThao,
  getTamTinhYTe,
} from "./TamTinhController";

const express = require("express");
const router = express.Router();
export default function TamTinhRoutes(app) {
  router.post("/add-nuoc-uong", addNuocUong);
  router.post("/add-do-an", addDoAn);
  router.post("/add-y-te", addDungCuYTe);
  router.post("/add-the-thao", addTheThao);
  router.post("/add-san", addSan);
  router.get("/get-tam-tinh-san/:id_tam_tinh", getTamTinhSan);
  router.get("/get-tam-tinh-do-an/:id_tam_tinh", getTamTinhDoAn);
  router.get("/get-tam-tinh-nuoc-uong/:id_tam_tinh", getTamTinhNuocUong);
  router.get("/get-tam-tinh-dung-cu-the-thao/:id_tam_tinh", getTamTinhTheThao);
  router.get("/get-tam-tinh-dung-cu-y-te/:id_tam_tinh", getTamTinhYTe);
  return app.use("/tam-tinh", router);
}
