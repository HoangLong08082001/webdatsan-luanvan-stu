const pool = require("../../config/database");
const randomNumberCodeVerfify = () => {
  return Math.floor(100000 + Math.random() * 900000);
};
const getChiNhanh = (req, res) => {
  try {
    pool.query(
      "SELECT * FROM chi_nhanh join quan_huyen on chi_nhanh.ma_quan_huyen=quan_huyen.ma_quan_huyen",
      [],
      (err, data) => {
        if (err) {
          throw err;
        }
        if (data) {
          return res.status(200).json(data);
        }
      }
    );
  } catch (error) {
    return res.status(500).json({ message: "Lỗi hệ thống" });
  }
};
const createChiNhanh = (req, res) => {
  let tenchinhanh = req.body.ten_chi_nhanh;
  let diachi = req.body.di_chi;
  let maquanhuyen = req.body.ma_quan_huyen;
  let quan = req.body.quan;
  let phuong = req.body.phuong;
  try {
    pool.query(
      "SELECT * FROM chi_nhanh WHERE ten_chi_nhanh LIKE ? OR dia_chi LIKE ?",
      [tenchinhanh, diachi],
      (err, data) => {
        if (err) {
          throw err;
        }
        if (data.length > 0) {
          return res.status(400).json({ message: "Chi nhánh này đã tồn tại" });
        } else {
          if (
            (quan !== undefined || quan !== "") &&
            (phuong !== "" || phuong !== undefined) &&
            (maquanhuyen === undefined || maquanhuyen === "")
          ) {
            pool.query(
              "INSERT INTO quan_huyen (ten_quan, ten_phuong) VALUES (?,?)",
              [quan, phuong],
              (err, data) => {
                pool.query(
                  "INSERT INTO chi_nhanh ( ten_chi_nhanh,dia_chi,trang_thai,ma_quan_huyen) VALUES (?,?,?,?)",
                  [tenchinhanh, diachi, 0, data.insertId],
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
            );
          }
        }
      }
    );
  } catch (error) {
    return res.status(500).json({ message: "Lỗi hệ thống" });
  }
};
const BlockChiNhanh = (req, res) => {
  let id_chinhanh = req.body.id_chi_nhanh;
  try {
    pool.query(
      "SELECT * FROM chi_nhanh WHERE ma_chi_nhanh=?",
      [id_chinhanh],
      (err, data) => {
        if (err) {
          throw err;
        }
        if (data.length > 0) {
          if (data[0].trang_thai === 0) {
            pool.query(
              "UPDATE chi_nhanh SET trang_thai = 1 WHERE ma_chi_nhanh=?",
              [id_chinhanh],
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
          if (data[0].trang_thai === 1) {
            pool.query(
              "UPDATE chi_nhanh SET trang_thai = 0 WHERE ma_chi_nhanh=?",
              [id_chinhanh],
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
      }
    );
  } catch (error) {
    return res.status(500).json({ message: "Lỗi hệ thống" });
  }
};
const getQuanPhuong = (req, res) => {
  try {
    pool.query("SELECT * FROM quan_huyen", [], (err, data) => {
      if (err) {
        throw err;
      }
      if (data) {
        return res.status(200).json(data);
      }
    });
  } catch (error) {}
};
const updateChiNhanh = (req, res) => {
  let id_chinhanh = req.body.id_chinhanh;
  let tenchinhanh = req.body.ten_chi_nhanh;
  let diachi = req.body.dia_chi;
  let id_quan_huyen = req.body.id_quan_huyen;
  let quan = req.body.quan;
  let huyen = req.body.huyen;
};
const getAllChiNhanh = (req, res) => {
  try {
    pool.query("SELECT * FROM chi_nhanh", [], (err, data) => {
      if (err) {
        throw err;
      }
      if (data) {
        return res.status(200).json(data);
      }
    });
  } catch (error) {}
};
module.exports = {
  getQuanPhuong,
  getChiNhanh,
  createChiNhanh,
  BlockChiNhanh,
  updateChiNhanh,
  getAllChiNhanh
};
