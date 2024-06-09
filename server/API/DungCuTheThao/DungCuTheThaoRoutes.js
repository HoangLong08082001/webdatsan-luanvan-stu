import { getall } from "./DungCuTheThaoController";

const express = require("express");
const router = express.Router();
export default function DungCuTheThaoRoutes(app) {
  router.get("/get", getall);
  return app.use("/dung-cu-the-thao", router);
}
