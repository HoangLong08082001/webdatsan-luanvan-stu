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
const cx = classNames.bind(style);
export default function ChiNhanh() {
  const navigate = useNavigate();
  const [listChiNhanh, setListChiNhanh] = useState([]);
  const { local } = localStorage.getItem("jwt");
  const fetchChiNhanh = async () => {
    await axios.get("http://localhost:4000/chi-nhanh/get-all").then((res) => {
      if (res) {
        setListChiNhanh(res.data);
        console.log(res.data);
      }
    });
  };
  useEffect(() => {
    fetchChiNhanh();
  }, []);
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>CHI NHÁNH </p>
      <div className={cx("list-btn")}>
        <button className={cx("add")}>THÊM MỚI</button>
        <button className={cx("excel")}>XUẤT EXCEL</button>
      </div>
      <div className={cx("form-table")}>
        <table border={1} cellSpacing={0} className={cx("table")}>
          <tr className={cx("tr-th")}>
            <th>STT</th>
            <th>Tên chi nhánh</th>
            <th>Quận huyện</th>
            <th>Số điện thoaị</th>
            <th>Xử lý</th>
          </tr>
          {listChiNhanh.map((item, index) => {
            return (
              <tr className={cx("tr-td")}>
                <td>{index + 1}</td>
                <td>{item.ten_chi_nhanh}</td>
                <td>{item.ten_quan_huyen}</td>
                <td>{item.SDT}</td>
                <td className={cx("action")}>
                  <FontAwesomeIcon icon={faPen} className={cx("edit")} />
                  <FontAwesomeIcon icon={faLock} className={cx("lock")} />
                  <FontAwesomeIcon icon={faTrash} className={cx("delete")} />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
