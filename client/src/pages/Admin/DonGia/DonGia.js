import React, { useEffect, useState } from "react";
import style from "./DonGia.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import axios from "../../../setup-axios/axios";
import { useNavigate } from "react-router-dom";
import ConfirmDonGia from "./ConfirmDonGia/ConfirmDonGia";
const cx = classNames.bind(style);
export default function DonGia() {
  const [listHoaDon, setListHoaDon] = useState([]);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const [load, setLoad] = useState(true);
  const [id, setId] = useState(null);
  function formatCurrency(amount) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  }
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Thêm số 0 vào đầu nếu tháng < 10
    const day = String(today.getDate()).padStart(2, "0"); // Thêm số 0 vào đầu nếu ngày < 10

    return `${year}-${month}-${day}`;
  };
  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      navigate("/admin");
    }
  }, [navigate]);
  const closeModel = () => {
    setLoad(true);
    setModal(false);
    setId(null);
  };

  async function editModel(itemId) {
    await setModal(true);
    await setId(itemId);
  }
  const fetchHoaDon = () => {
    try {
      axios.get("/hoa-don/get-all").then((res) => {
        if (res) {
          setListHoaDon(res.data);
        }
      });
    } catch (error) {
      if (error.response.status >= 500) {
        alert("Error system");
      }
    }
  };
  useEffect(() => {
    fetchHoaDon();
  }, [listHoaDon]);
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>ĐƠN GIÁ</p>
      {/* <div className={cx("list-btn")}>
        <button className={cx("add")}>
          THÊM MỚI
        </button>
        <button className={cx("excel")}>XUẤT EXCEL</button>
      </div> */}
      <div className={cx("form-table")}>
        <table border={1} cellSpacing={0} className={cx("table")}>
          <tr className={cx("tr-th")}>
            <th>STT</th>
            <th>Tên khách hàng</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Tiền đã thanh toán(50%)</th>
            <th>Tiền còn lại cần thanh toán</th>
            <th>Phương thức thanh toán</th>
            <th>Trạng thái thanh toán</th>
            <th>Ngày thanh toán</th>
            <th>Xử lý</th>
          </tr>
          {listHoaDon.map((item, index) => {
            return (
              <tr className={cx("tr-td")}>
                <td>{index + 1}</td>
                <td>{item.ten_khach_hang}</td>
                <td>{item.email}</td>
                <td>{item.so_dien_thoai}</td>
                <td>
                  {formatCurrency(item.tien_da_thanh_toan) ===
                  formatCurrency(item.tong_tien)
                    ? formatCurrency(0)
                    : formatCurrency(item.tien_da_thanh_toan)}
                </td>
                <td>{formatCurrency(item.tong_tien)}</td>
                <td>{item.phuong_thuc}</td>
                <td>
                  {item.trang_thai === 0
                    ? "Đã thanh toán 50%"
                    : "Đã thanh toán"}
                </td>
                <td>{getTodayDate(item.ngay_tao)}</td>
                <td className={cx("action")}>
                  {item.trang_thai === 0 ? (
                    <FontAwesomeIcon
                      icon={faCheck}
                      onClick={() => editModel(item.ma_don_gia)}
                      className={cx("edit")}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={cx("edit-active")}
                    />
                  )}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      {modal === true ? (
        <ConfirmDonGia setModalFalse={closeModel} id={id} />
      ) : (
        ""
      )}
    </div>
  );
}
