import { getNuocUong } from "./NuocUongController";

const express = require("express");
const router = express.Router();
export default function NuocUongRoutes(app) {
  router.get("/get-all", getNuocUong);
  return app.use("/nuoc-uong", router);
}
