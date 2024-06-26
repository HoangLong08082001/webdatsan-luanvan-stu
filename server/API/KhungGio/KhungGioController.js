const pool = require("../../config/database");
const getAll = (req, res) => {
  pool.query(
    "SELECT khung_gio.thoi_gian, khung_gio.gio_bat_dau, khung_gio.gio_ket_thuc FROM khung_gio ",
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
};
module.exports = { getAll };
