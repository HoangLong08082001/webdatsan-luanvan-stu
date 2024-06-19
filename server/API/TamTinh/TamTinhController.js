const pool = require("../../config/database");

const addNuocUong = (req, res) => {
  let id_nuoc_uong = req.body.id_nuoc_uong;
  let id_tam_tinh = req.body.id_tam_tinh;
  pool.query(
    "SELECT * FROM tam_tinh_nuoc_uong WHERE ma_tam_tinh=? AND ma_nuoc_uong_loai=?",
    [id_tam_tinh, id_nuoc_uong],
    (err, data) => {
      if (err) {
        throw err;
      }
      if (data.length > 0) {
        let quality = data[0].so_luong;
        pool.query(
          "UPDATE tam_tinh_nuoc_uong SET so_luong=? WHERE ma_tam_tinh=? AND ma_nuoc_uong_loai=?",
          [quality + 1, id_tam_tinh, id_nuoc_uong],
          (err, data) => {
            if (err) {
              throw err;
            }
            if (data) {
              return res.status(200).json({ message: "success" });
            }
          }
        );
      } else {
        pool.query(
          "INSERT INTO tam_tinh_nuoc_uong (ma_nuoc_uong_loai, so_luong, ma_tam_tinh) VALUES(?,?,?)",
          [id_nuoc_uong, 1, id_tam_tinh],
          (err, data) => {
            if (err) {
              throw err;
            }
            if (data) {
              return res.status(200).json({ message: "success" });
            }
          }
        );
      }
    }
  );
};

const addDoAn = (req, res) => {
  let id_do_an = req.body.id_do_an;
  let id_tam_tinh = req.body.id_tam_tinh;
  pool.query(
    "SELECT * FROM tam_tinh_do_an WHERE ma_tam_tinh=? AND ma_do_an=?",
    [id_tam_tinh, id_do_an],
    (err, data) => {
      if (err) {
        throw err;
      }
      if (data.length > 0) {
        let quality = data[0].so_luong;
        pool.query(
          "UPDATE tam_tinh_do_an SET so_luong=? WHERE ma_tam_tinh=? AND ma_do_an=?",
          [quality + 1, id_tam_tinh, id_do_an],
          (err, data) => {
            if (err) {
              throw err;
            }
            if (data) {
              return res.status(200).json({ message: "success" });
            }
          }
        );
      } else {
        pool.query(
          "INSERT INTO tam_tinh_do_an (ma_do_an, so_luong, ma_tam_tinh) VALUES(?,?,?)",
          [id_do_an, 1, id_tam_tinh],
          (err, data) => {
            if (err) {
              throw err;
            }
            if (data) {
              return res.status(200).json({ message: "success" });
            }
          }
        );
      }
    }
  );
};
const addDungCuYTe = (req, res) => {
  let id_dung_cu_y_te = req.body.id_dung_cu_y_te;
  let id_tam_tinh = req.body.id_tam_tinh;
  pool.query(
    "SELECT * FROM tam_tinh_dung_cu_y_te WHERE ma_dung_cu_y_te=? AND ma_tam_tinh=?",
    [id_dung_cu_y_te, id_tam_tinh],
    (err, data) => {
      if (err) {
        throw err;
      }
      if (data.length > 0) {
        let quality = data[0].so_luong;
        pool.query(
          "UPDATE tam_tinh_dung_cu_y_te SET so_luong=? WHERE WHERE ma_dung_cu_y_te=? AND ma_tam_tinh=?",
          [quality + 1, id_dung_cu_y_te, id_tam_tinh],
          (err, data) => {
            if (err) {
              throw err;
            }
            if (data) {
              return res.status(200).json({ message: "success" });
            }
          }
        );
      } else {
        pool.query(
          "INSERT INTO tam_tinh_dung_cu_y_te (ma_dung_cu_y_te, so_luong, ma_tam_tinh) VALUES(?,?,?)",
          [id_dung_cu_y_te, 1, id_tam_tinh],
          (err, data) => {
            if (err) {
              throw err;
            }
            if (data) {
              return res.status(200).json({ message: "success" });
            }
          }
        );
      }
    }
  );
};
const addTheThao = (req, res) => {
  let id_dung_cu_the_thao = req.body.id_dung_cu_the_thao;
  let id_tam_tinh = req.body.id_tam_tinh;
  pool.query(
    "SELECT * FROM tam_tinh_dung_cu_the_thao WHERE ma_tam_tinh=? AND ma_dung_cu_the_thao=?",
    [id_tam_tinh, id_dung_cu_the_thao],
    (err, data) => {
      if (err) {
        throw err;
      }
      if (data.length > 0) {
        let quality = data[0].so_luong;
        pool.query(
          "UPDATE tam_tinh_dung_cu_the_thao SET so_luong=? WHERE ma_tam_tinh=? AND ma_dung_cu_the_thao=?",
          [quality + 1, id_tam_tinh, id_dung_cu_the_thao],
          (err, data) => {
            if (err) {
              throw err;
            }
            if (data) {
              return res.status(200).json({ message: "success" });
            }
          }
        );
      } else {
        pool.query(
          "INSERT INTO tam_tinh_dung_cu_the_thao (ma_dung_cu_the_thao, so_luong, ma_tam_tinh) VALUES(?,?,?)",
          [id_dung_cu_the_thao, 1, id_tam_tinh],
          (err, data) => {
            if (err) {
              throw err;
            }
            if (data) {
              return res.status(200).json({ message: "success" });
            }
          }
        );
      }
    }
  );
};
const addSan = (req, res) => {
  let id_san = req.body.id_san;
  let id_tam_tinh = req.body.id_tam_tinh;
  let start = req.body.start;
  let end = req.body.end;
  let date = req.body.date;
  console.log(id_san);
  console.log(id_tam_tinh);
  console.log(start);
  console.log(end);
  console.log(date);
  pool.query(
    "INSERT INTO khung_gio (gio_bat_dau, gio_ket_thuc, thoi_gian, ma_san) VALUES(?,?,?,?)",
    [start, end, date, id_san],
    (err, data) => {
      if (err) {
        throw err;
      }
      if (data) {
        pool.query(
          "INSERT INTO tam_tinh_san (ma_san, ma_tam_tinh) VALUES (?,?)",
          [id_san, id_tam_tinh],
          (err, data) => {
            if (err) {
              throw err;
            }
            if (data) {
              return res.status(200).json({ message: "success" });
            }
          }
        );
      }
    }
  );
};

const getTamTinhDoAn = (req, res) => {
  let id_tam_tinh = req.params.id_tam_tinh;
  pool.query(
    "SELECT * FROM tam_tinh join tam_tinh_do_an on tam_tinh_do_an.ma_tam_tinh = tam_tinh.ma_tam_tinh join do_an on tam_tinh_do_an.ma_do_an = do_an.ma_do_an WHERE tam_tinh_do_an.ma_tam_tinh=?",
    [id_tam_tinh],
    (err, data) => {
      if (err) {
        throw err;
      }
      if (data.length > 0) {
        return res.status(200).json(data);
      }
    }
  );
};
const getTamTinhSan = (req, res) => {
  let id_tam_tinh = req.params.id_tam_tinh;
  pool.query(
    "SELECT * FROM tam_tinh join tam_tinh_san on tam_tinh_san.ma_tam_tinh = tam_tinh.ma_tam_tinh join san on tam_tinh_san.ma_san = san.ma_san WHERE tam_tinh_san.ma_tam_tinh=?",
    [id_tam_tinh],
    (err, data) => {
      if (err) {
        throw err;
      }
      if (data.length > 0) {
        return res.status(200).json(data);
      }
    }
  );
};
const getTamTinhNuocUong = (req, res) => {
  let id_tam_tinh = req.params.id_tam_tinh;
  pool.query(
    "SELECT * FROM tam_tinh join tam_tinh_nuoc_uong on tam_tinh_nuoc_uong.ma_tam_tinh = tam_tinh.ma_tam_tinh join nuoc_uong_loai on tam_tinh_nuoc_uong.ma_nuoc_uong_loai = nuoc_uong_loai.ma_nuoc_uong_loai join nuoc_uong on nuoc_uong_loai.ma_nuoc_uong = nuoc_uong.ma_nuoc_uong WHERE tam_tinh_nuoc_uong.ma_tam_tinh=?",
    [id_tam_tinh],
    (err, data) => {
      if (err) {
        throw err;
      }
      if (data.length > 0) {
        return res.status(200).json(data);
      }
    }
  );
};
const getTamTinhYTe = (req, res) => {
  let id_tam_tinh = req.params.id_tam_tinh;
  pool.query(
    "SELECT * FROM tam_tinh join tam_tinh_dung_cu_y_te on tam_tinh_dung_cu_y_te.ma_tam_tinh = tam_tinh.ma_tam_tinh join dung_cu_y_te on tam_tinh_dung_cu_y_te.ma_dung_cu_y_te = dung_cu_y_te.ma_dung_cu_y_te WHERE tam_tinh_dung_cu_y_te.ma_tam_tinh=?",
    [id_tam_tinh],
    (err, data) => {
      if (err) {
        throw err;
      }
      if (data.length > 0) {
        return res.status(200).json(data);
      }
    }
  );
};
const getTamTinhTheThao = (req, res) => {
  let id_tam_tinh = req.params.id_tam_tinh;
  pool.query(
    "SELECT * FROM tam_tinh join tam_tinh_dung_cu_the_thao on tam_tinh_dung_cu_the_thao.ma_tam_tinh = tam_tinh.ma_tam_tinh join dung_cu_the_thao on tam_tinh_dung_cu_the_thao.ma_dung_cu_the_thao = dung_cu_the_thao.ma_dung_cu_the_thao WHERE tam_tinh_dung_cu_the_thao.ma_tam_tinh=?",
    [id_tam_tinh],
    (err, data) => {
      if (err) {
        throw err;
      }
      if (data.length > 0) {
        return res.status(200).json(data);
      }
    }
  );
};
module.exports = {
  addSan,
  addNuocUong,
  addDoAn,
  addDungCuYTe,
  addTheThao,
  getTamTinhSan,
  getTamTinhDoAn,
  getTamTinhNuocUong,
  getTamTinhYTe,
  getTamTinhTheThao,
};
