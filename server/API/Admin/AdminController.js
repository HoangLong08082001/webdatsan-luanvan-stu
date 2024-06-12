const pool = require("../../config/database");
const bcrypt = require("bcrypt");
const { createJwtWebsite } = require("../../middleware/JWTAction");
const salt = 10;

const create = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  console.log(username);
  console.log(password);
  try {
    pool.query(
      "SELECT * FROM quantri WHERE username_admin = ?",
      [username],
      (err, data) => {
        if (err) {
          throw err;
        }
        if (data.length > 0) {
          return res.status(400).json({ message: "email đã tồn tại" });
        } else {
          bcrypt.hash(password, salt, (err, result) => {
            if (err) {
              throw err;
            }
            if (result) {
              console.log(result);
              pool.query(
                "INSERT INTO quantri (username_admin, password_admin, trang_thai) VALUES (?,?,?)",
                [username, result, 1],
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
  } catch (error) {
    return res.status(500).json("ERROR");
  }
};

const login = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  try {
    pool.query(
      "SELECT * FROM quantri WHERE username_admin=?",
      [username],
      (err, data) => {
        if (err) {
          throw err;
        }
        if (data.length > 0) {
          bcrypt.compare(password, data[0].password_admin, (err, result) => {
            if (err) {
              throw err;
            }
            if (result) {
              pool.query(
                "SELECT * FROM quantri WHERE username_admin = ?",
                [username],
                (err, data) => {
                  if (err) {
                    throw err;
                  }
                  if (data) {
                    if (data[0].trang_thai === 1) {
                      let payload = {
                        username: username,
                        data: data,
                      };
                      let token = createJwtWebsite(payload);
                      if (data && token) {
                        res.cookie("jwt", token, { httpOnly: true });
                      }
                      return res.status(200).json({
                        message: "success",
                        data: data,
                        access_token: token,
                      });
                    }
                    if (data[0].trang_thai === 0) {
                      return res
                        .status(400)
                        .json({ message: "Tài khoản đã bị khoá" });
                    }
                  }
                }
              );
            }
          });
        } else {
          return res.status(400).json({ message: "Username không tồn tại" });
        }
      }
    );
  } catch (error) {
    return res.status(500).json("ERROR");
  }
};
const forgotPassword = (req, res) => {};
const getAll = (req, res) => {
  try {
    pool.query("SELECT * FROM quantri", [], (err, data) => {
      if (err) {
        throw err;
      }
      if (data) {
        return res.status(200).json(data);
      }
    });
  } catch (error) {
    return res.status(500).json("ERROR");
  }
};
const getById = (req, res) => {
  let id = req.params.id;
  pool.query("SELECT * FROM quantri WHERE ma_quan_tri", [id], (err, data) => {
    if (err) {
      throw err;
    }
    if (data) {
      return res.status(200).json(data);
    }
  });
};
module.exports = { create, login, forgotPassword, getAll, getById };
