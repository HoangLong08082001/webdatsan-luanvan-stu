import { create, getAll, login } from "./AdminController";

const express = require("express");
const router = express.Router();

export default function AdminRoutes(app) {
  router.post("/create", create);
  router.post("/login", login);
  router.get("/get", getAll);
  return app.use("/admin", router);
}
