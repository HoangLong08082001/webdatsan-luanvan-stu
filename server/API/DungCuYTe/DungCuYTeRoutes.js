import { getDungCuYTe } from "./DungCuYTeController";

const express = require("express");
const router = express.Router();
export default function DungCuYTeRoutes(app) {
  router.get("/get-all", getDungCuYTe);
  return app.use("/dung-cu-y-te", router);
}
