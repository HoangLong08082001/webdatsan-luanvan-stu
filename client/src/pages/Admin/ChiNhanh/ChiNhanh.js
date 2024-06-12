import React, { useEffect, useState } from "react";
import style from "./ChiNhanh.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faTrash,
  faLock,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddChiNhanh from "./AddChiNhanh/AddChiNhanh";
const cx = classNames.bind(style);
export default function ChiNhanh() {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const [listChiNhanh, setListChiNhanh] = useState([]);
  const fetchChiNhanh = async () => {
    await axios.get("http://localhost:4000/chi-nhanh/get-all").then((res) => {
      if (res) {
        setListChiNhanh(res.data);
      }
    });
  };
  const handleLock = (item) => {
    axios
      .put("http://localhost:4000/chi-nhanh/block", {
        id_chi_nhanh: item,
      })
      .then((res) => {
        alert("Block successfully")
      });
  };
  useEffect(() => {
    fetchChiNhanh();
  }, [listChiNhanh]);
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>CHI NHÁNH </p>
      <div className={cx("list-btn")}>
        <button className={cx("add")} onClick={() => setModal(true)}>
          THÊM MỚI
        </button>
        <button className={cx("excel")}>XUẤT EXCEL</button>
      </div>
      <div className={cx("form-table")}>
        <table border={1} cellSpacing={0} className={cx("table")}>
          <tr className={cx("tr-th")}>
            <th>STT</th>
            <th>Tên chi nhánh</th>
            <th>Địa chỉ</th>
            <th>Trạng thái</th>
            <th>Xử lý</th>
          </tr>
          {listChiNhanh.map((item, index) => {
            return (
              <tr className={cx("tr-td")}>
                <td>{index + 1}</td>
                <td>{item.ten_chi_nhanh}</td>
                <td>
                  {item.dia_chi}, {item.ten_phuong}, {item.ten_quan}
                </td>
                <td>{item.trang_thai === 0 ? "Chưa hiển thị" : "Hiển thị"}</td>
                <td className={cx("action")}>
                  <FontAwesomeIcon icon={faPen} className={cx("edit")} />
                  <FontAwesomeIcon
                    icon={faLock}
                    className={cx("lock")}
                    onClick={()=>handleLock(item.ma_chi_nhanh)}
                  />
                  <FontAwesomeIcon icon={faTrash} className={cx("delete")} />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      {modal === true ? (
        <AddChiNhanh handleClose={() => setModal(false)} />
      ) : (
        ""
      )}
    </div>
  );
}
