import React, { useEffect, useState } from "react";
import style from "./DoAn.module.scss";
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
export default function DoAn() {
  const [listDoAn, setListDoAn] = useState([]);
  const fetchChiNhanh = async () => {
    await axios.get("http://localhost:4000/do-an/get-all").then((res) => {
      if (res) {
        setListDoAn(res.data);
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
            <th>Tên đồ ăn</th>
            <th>Giá đồ ăn</th>
            <th>Số lượng</th>
            <th>Hình ảnh</th>
            <th>Xử lý</th>
          </tr>
          {listDoAn.map((item, index) => {
            const base64String = btoa(
              new Uint8Array(item.hinh_an_do_an).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
              )
            );
            return (
              <tr className={cx("tr-td")}>
                <td>{index + 1}</td>
                <td>{item.ten_do_an}</td>
                <td>{item.gia_do_an}</td>
                <td>{item.so_luong}</td>
                <td>
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
