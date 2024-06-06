import AdminRoutes from "./API/Admin/AdminRoutes";
import ChiNhanhRoutes from "./API/ChiNhanh/ChiNhanhRoutes";
import DoAnRoutes from "./API/DoAn/DoAnRoutes";
import DungCuYTeRoutes from "./API/DungCuYTe/DungCuYTeRoutes";
import NuocUongRoutes from "./API/NuocUong/NuocUongRoutes";
import "./config/database";
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
dotenv.config();
const app = express();
const server = http.createServer(app); // Tạo server trước khi tạo WebSocket server

const port = 4000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));
AdminRoutes(app);
ChiNhanhRoutes(app);
DoAnRoutes(app);
DungCuYTeRoutes(app);
NuocUongRoutes(app);
server.listen(port, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("server is running on the port " + port);
  }
});
