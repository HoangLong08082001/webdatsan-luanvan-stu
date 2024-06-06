const pool = require("../../config/database");
const bcrypt = require("bcrypt");
const salt = 10;
const create = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  try {
    pool.query(
      "SELECT * FROM admin WHERE username_admin=?",
      [username],
      (err, data) => {
        if (err) {
          throw err;
        }
        if (data.length > 0) {
          return res.status(400).json({ message: "email đã tồn tại" });
        } else {
          bcrypt.hash(password, salt, (err, hash) => {
            if (err) {
              throw err;
            }
            if (hash) {
              pool.query(
                "INSERT INTO admin (username_admin, password_admin) VALUES (?,?)",
                [username, hash],
                (err, result) => {
                  if (err) {
                    throw err;
                  }
                  if (result) {
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
      "SELECT * FROM admin WHERE username_admin=?",
      [username],
      (err, data) => {
        if (err) {
          throw err;
        }
        if (data.length > 0) {
          bcrypt.compare(
            password.toString(),
            data[0].password_admin,
            (err, result) => {
              if (err) {
                throw err;
              }
              if (result) {
                return res.status(200).json({ message: "success" });
              }
            }
          );
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
    pool.query("SELECT * FROM admin", [], (err, data) => {
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

module.exports = { create, login, forgotPassword, getAll };
