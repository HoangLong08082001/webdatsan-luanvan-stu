const bcrypt = require("bcrypt");
const pool = require("../../config/database");
const salt = 10;
const randomNumberCodeVerfify = () => {
  return Math.floor(100000 + Math.random() * 900000);
};
const createNew = (req, res) => {
  let ten_nguoi_dung = req.body.ten_nguoi_dung;
  let email = req.body.email;
  let password = req.body.password;
  let sodienthoai = req.body.sodienthoai;
  pool.query(
    "SELECT * FROM khach_hang WHERE email=? OR so_dien_thoai=?",
    [email, sodienthoai],
    (err, data) => {
      if (err) {
        throw err;
      }
      if (data.length > 0) {
        return res
          .status(400)
          .json({ message: "Email hoặc số điện thoại này đã tồn tại" });
      } else {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) {
            throw err;
          }
          if (hash) {
            pool.query(
              "INSERT INTO khach_hang( ten_khach_hang,email,password, so_dien_thoai) VALUES (?,?,?,?)",
              [
                ten_nguoi_dung,
                email,
                hash,
                sodienthoai,
              ],
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
      }
    }
  );
};
const Login = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  try {
    pool.query(
      "SELECT * FROM khach_hang WHERE email=?",
      [username],
      (err, data) => {
        if (err) {
          throw err;
        }
        if (data.length > 0) {
          bcrypt.compare(password, data[0].password, (err, data) => {
            if (err) {
              throw err;
            }
            if (data) {
              return res.status(200).json({ message: "success" });
            }
            if (!data) {
              return res.status(400).json({ message: "Password không hợp lệ" });
            }
          });
        } else {
          return res.status(400).json({ message: "Email không hợp lệ" });
        }
      }
    );
  } catch (error) {
    return res.status(500).json({ message: "Lỗi hệ thống" });
  }
};
const getAll = (req, res) => {
  try {
    pool.query("SELECT * FROM khach_hang", [], (err, data) => {
      if (err) {
        throw err;
      }
      if (data) {
        return res.status(200).json(data);
      }
    });
  } catch (error) {
    return res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

module.exports = { createNew, Login, getAll };
