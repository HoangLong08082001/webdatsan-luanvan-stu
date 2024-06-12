import {
  BlockDungCuTheThao,
  createNew,
  getall,
} from "./DungCuTheThaoController";

const express = require("express");
const router = express.Router();
export default function DungCuTheThaoRoutes(app) {
  router.get("/get", getall);
  router.post("/create", createNew);
  router.put("/block", BlockDungCuTheThao);
  return app.use("/dung-cu-the-thao", router);
}
