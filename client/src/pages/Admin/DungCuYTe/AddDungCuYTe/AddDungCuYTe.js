import React, { useState } from "react";
import style from "./AddDungCuYTe.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import axios from "../../../../setup-axios/axios";
const cx = classNames.bind(style);
export default function AddDungCuYTe({ handleClose }) {
  const [ten, setTen] = useState("");
  const [gia, setGia] = useState("");
  const [soluong, setSoluong] = useState("");
  const [hinhanh, setHinhanh] = useState("");
  const handleSubmit = () => {
    axios
      .post("/dung-cu-y-te/create", {
        hinhanh: hinhanh,
        soluong: soluong,
        tendungcuyte: ten,
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
              value={ten}
              onChange={(e) => setTen(e.target.value)}
              placeholder="Nhập tên"
            />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">Giá dụng cụ</label>
            <input
              type="number"
              placeholder="Nhập giá"
              value={gia}
              onChange={(e) => setGia(e.target.value)}
            />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">Số lượng</label>
            <input
              type="number"
              placeholder="Nhập số lượng"
              value={soluong}
              onChange={(e) => setSoluong(e.target.value)}
            />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">Hình ảnh</label>
            <input
              value={hinhanh}
              onChange={(e) => setHinhanh(e.target.value)}
              type="text"
              placeholder="Dán đường link hình ảnh"
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
