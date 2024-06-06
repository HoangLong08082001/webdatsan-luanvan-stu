const pool = require("../../config/database");

const getNuocUong = (req, res) => {
  try {
    pool.query("SELECT * FROM nuoc_uong", [], (err, data) => {
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
module.exports = { getNuocUong };
