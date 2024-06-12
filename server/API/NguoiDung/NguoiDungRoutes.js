import { Login, createNew, getAll } from "./NguoiDungController";

const express = require("express");
const router = express.Router();
export default function NguoiDungRoutes(app) {
  router.get("/get-all", getAll);
  router.post("/login", Login);
  router.post("/register", createNew);
  return app.use("/khach-hang", router);
}
