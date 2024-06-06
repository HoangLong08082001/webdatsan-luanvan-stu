const pool = require("../../config/database");

const getChiNhanh = (req, res) => {
  try {
    pool.query(
      "SELECT * FROM chi_nhanh join quan_huyen on chi_nhanh.id_quan_huyen=quan_huyen.id_quan_huyen",
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
    return res.status(500).json({ message: "ERROR" });
  }
};
module.exports = { getChiNhanh };
