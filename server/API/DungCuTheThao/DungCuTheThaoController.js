const pool = require("../../config/database");

const getall = (req, res) => {
  pool.query("SELECT * FROM dung_cu_the_thao", [], (err, data) => {
    if (err) {
      throw err;
    }
    if (data) {
      return res.status(200).json(data);
    }
  });
};

module.exports = {getall}