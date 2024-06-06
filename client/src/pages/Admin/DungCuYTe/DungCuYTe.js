import React, { useEffect, useState } from "react";
import style from "./DungCuYTe.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faTrash,
  faLock,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const cx = classNames.bind(style);
export default function DungCuYTe() {
  const [listDungCu, setListDungCu] = useState([]);
  const fetchDungCuYTe = async () => {
    await axios
      .get("http://localhost:4000/dung-cu-y-te/get-all")
      .then((res) => {
        if (res) {
          setListDungCu(res.data);
          console.log(res.data);
        }
      });
  };
  useEffect(() => {
    fetchDungCuYTe();
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
            <th>Tên dụng cụ y tế</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Hình ảnh</th>
            <th>Xử lý</th>
          </tr>
          {listDungCu.map((item, index) => {
            const base64String = btoa(
              new Uint8Array(item.hinh_an_dung_cu).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
              )
            );
            return (
              <tr className={cx("tr-td")}>
                <td>{index + 1}</td>
                <td>{item.ten_dung_cu_y_te}</td>
                <td>{item.gia}</td>
                <td>{item.so_luong}</td>
                <td>
                  {" "}
                  <img
                    className={cx("img")}
                    src={`data:image/jpeg;base64,${base64String}`}
                    alt=""
                  />
                </td>
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
