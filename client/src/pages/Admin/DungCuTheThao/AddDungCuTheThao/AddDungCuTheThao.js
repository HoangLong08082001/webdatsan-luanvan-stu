import React, { useState } from "react";
import style from "./AddDungCuTheThao.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const cx = classNames.bind(style);

export default function AddDungCuTheThao({ handleClose }) {
  const [ten, setTen] = useState("");
  const [gia, setGia] = useState("");
  const [soluong, setSoLuong] = useState("");
  const [hinhanh, setHinhAnh] = useState("");
  const handleSubmit = () => {
    axios
      .post("http://localhost:4000/dung-cu-the-thao/create", {
        hinhanh: hinhanh,
        soluong: soluong,
        tendungcuthethao: ten,
        gia: gia,
      })
      .then((res) => {
        if (res) {
          alert("Create new successfully");
        }
      });
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("form")}>
        <FontAwesomeIcon
          onClick={handleClose}
          icon={faX}
          className={cx("icon")}
        />
        <div className={cx("form-add")}>
          <div className={cx("form-input")}>
            <label htmlFor="">Tên dụng cụ</label>
            <input
              type="text"
              placeholder="Nhập tên"
              value={ten}
              onChange={(e) => setTen(e.target.value)}
            />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">Giá dụng cụ</label>
            <input
              type="text"
              placeholder="Nhập giá"
              value={gia}
              onChange={(e) => setGia(e.target.value)}
            />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">Số lượng</label>
            <input
              type="text"
              placeholder="Nhập số lượng"
              value={soluong}
              onChange={(e) => setSoLuong(e.target.value)}
            />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">Hình ảnh</label>
            <input
              type="text"
              placeholder="Dán đường link hình ảnh"
              value={hinhanh}
              onChange={(e) => setHinhAnh(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit} className={cx("add")}>
            THÊM MỚI
          </button>
        </div>
      </div>
    </div>
  );
}
