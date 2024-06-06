const pool = require("../../config/database");

const getDungCuYTe = (req, res) => {
  try {
    pool.query("SELECT * FROM dung_cu_y_te", [], (err, data) => {
      if (err) {
        throw err;
      }
      if (data) {
        return res.status(200).json(data);
      }
    });
  } catch (error) {
    return res.status(500).json({ message: "ERROR" });
  }
};
module.exports = { getDungCuYTe };
