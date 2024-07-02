const {
  create,
  getAll,
  getById,
  confrimPayment,
} = require("./HoaDonController");

const express = require("express");
const router = express.Router();
export default function HoaDonRoutes(app) {
  router.post("/create", create);
  router.get("/get-all", getAll);
  router.get("/get-by-id/:id", getById);
  router.put("/confirm", confrimPayment);
  return app.use("/hoa-don", router);
}
