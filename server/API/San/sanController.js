const pool = require("../../config/database");
const createNew = (req, res) => {
  //ten_san	description	hinh_anh	trang_thai	ma_chi_nhanh
  let ten = req.body.ten;
  let hinhanh = req.body.hinhanh;
  let mota = req.body.mota;
  let machinhanh = req.body.machinhanh;
  let loaisan = req.body.loaisan;

  try {
    pool.query("SELECT * FROM san WHERE ten_san LIKE ?", [ten], (err, data) => {
      if (err) {
        throw err;
      }
      if (data.length > 0) {
        return res.status(400).json({ message: "Sân này đã tồn tại" });
      } else {
        pool.query(
          "INSERT INTO san(ten_san, loai_san, description, hinh_anh, trang_thai, ma_chi_nhanh) VALUES (?,?,?,?,?,?)",
          [ten, loaisan, mota, hinhanh, 0, machinhanh],
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
    });
  } catch (error) {}
};
const Block = (req, res) => {
  let masan = req.body.ma_san;
  pool.query("SELECT * FROM san WHERE ma_san=?", [masan], (err, data) => {
    if (err) {
      throw err;
    }
    if (data.length > 0) {
      if (data[0].trang_thai === 0) {
        pool.query(
          "UPDATE san SET trang_thai=1 WHERE ma_san=?",
          [masan],
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
          "UPDATE san SET trang_thai=0 WHERE ma_san=?",
          [masan],
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
  });
};
const getAll = (req, res) => {
  try {
    pool.query(
      "SELECT * FROM san join chi_nhanh on san.ma_chi_nhanh=chi_nhanh.ma_chi_nhanh join quan_huyen on chi_nhanh.ma_quan_huyen=quan_huyen.ma_quan_huyen",
      [],
      (err, data) => {
        if (err) {
          throw err;
        }
        if (data) {
          console.log(data);
          return res.status(200).json(data);
        }
      }
    );
  } catch (error) {}
};
module.exports = { createNew, Block, getAll };
