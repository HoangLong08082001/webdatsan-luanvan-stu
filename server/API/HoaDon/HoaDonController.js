const pool = require("../../config/database");
const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Thêm số 0 vào đầu nếu tháng < 10
  const day = String(today.getDate()).padStart(2, "0"); // Thêm số 0 vào đầu nếu ngày < 10

  return `${year}-${month}-${day}`;
};
const create = (req, res) => {
  let method = req.body.orderInfo;
  let half = req.body.amount;
  let total = req.body.total_amount;
  let id_tam_tinh = req.body.id_tam_tinh;
  try {
    pool.query(
      "INSERT INTO don_gia (ma_tam_tinh, tong_tien, tien_da_thanh_toan, phuong_thuc, trang_thai, ngay_tao) VALUES(?,?,?,?,?,?)",
      [id_tam_tinh, total, half, method, 0, getTodayDate(new Date())],
      (err, data) => {
        if (err) {
          throw err;
        }
        if (data) {
          pool.query(
            `
                UPDATE tam_tinh_san SET trang_thai_tam_tinh=1 WHERE ma_tam_tinh=?
                `,
            [id_tam_tinh],
            (err, data) => {
              if (err) {
                throw err;
              }
              if (data) {
                pool.query(
                  `
                UPDATE tam_tinh_do_an SET trang_thai_tam_tinh=1 WHERE ma_tam_tinh=?;
                `,
                  [id_tam_tinh],
                  (err, data) => {
                    if (err) {
                      throw err;
                    }
                    if (data) {
                      pool.query(
                        `
                UPDATE tam_tinh_nuoc_uong SET trang_thai_tam_tinh=1 WHERE ma_tam_tinh=?;
                `,
                        [id_tam_tinh],
                        (err, data) => {
                          if (err) {
                            throw err;
                          }
                          if (data) {
                            pool.query(
                              `
                UPDATE tam_tinh_dung_cu_the_thao SET trang_thai_tam_tinh=1 WHERE ma_tam_tinh=?;
                `,
                              [id_tam_tinh],
                              (err, data) => {
                                if (err) {
                                  throw err;
                                }
                                if (data) {
                                  pool.query(
                                    `
                UPDATE tam_tinh_dung_cu_y_te SET trang_thai_tam_tinh=1 WHERE ma_tam_tinh=?;
                `,
                                    [id_tam_tinh],
                                    (err, data) => {
                                      if (err) {
                                        throw err;
                                      }
                                      if (data) {
                                        return res
                                          .status(200)
                                          .json({ message: "success" });
                                      }
                                    }
                                  );
                                }
                              }
                            );
                          }
                        }
                      );
                    }
                  }
                );
              }
            }
          );
        }
      }
    );
  } catch (error) {
    return res.status(500).json({ message: "fails" });
  }
};
const getAll = (req, res) => {
  try {
    pool.query(
      "SELECT * FROM don_gia join tam_tinh on don_gia.ma_tam_tinh=tam_tinh.ma_tam_tinh join khach_hang on tam_tinh.ma_khach_hang = khach_hang.ma_khach_hang",
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
    return res.status(500).json({ message: "fails" });
  }
};

const getById = (req, res) => {
  let id = req.params.id;
  try {
    pool.query(
      "SELECT * FROM don_gia WHERE ma_don_gia=?",
      [id],
      (err, data) => {
        if (err) {
          throw err;
        }
        if (data.length > 0) {
          return res.status(200).json(data);
        }
      }
    );
  } catch (error) {
    return res.status(500).json({ message: "fails" });
  }
};
const confrimPayment = (req, res) => {
  let id = req.body.id;
  let half = req.body.half;
  let price_return = req.body.price_return;
  try {
    pool.query(
      "UPDATE don_gia SET tien_da_thanh_toan=?, trang_thai = 1 WHERE ma_don_gia=?",
      [parseInt(parseInt(half) + parseInt(price_return)), id],
      (err, data) => {
        if (err) {
          throw err;
        }
        if (data) {
          return res.status(200).json({ message: "success" });
        }
      }
    );
  } catch (error) {
    return res.status(500).json({ message: "fails" });
  }
};
module.exports = { getById, create, getAll, confrimPayment };
