import React, { useState } from "react";
import style from "./AddDoAn.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import axios from "../../../../setup-axios/axios";
const cx = classNames.bind(style);
export default function AddDoAn({ handleClose }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const handleSubmit = async () => {
    await axios
      .post("/do-an/create", {
        tendoan: name,
        gia: price,
        hinhanh: img,
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
            <label htmlFor="">Tên đò ăn</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nhập tên đồ ăn"
            />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">Giá đồ ăn</label>
            <input
              type="number"
              placeholder="Nhập giá đồ ăn"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className={cx("form-input")}>
            <label htmlFor="">Hình ảnh</label>
            <input
              type="text"
              placeholder="Dán đường link hình ảnh"
              value={img}
              onChange={(e) => setImg(e.target.value)}
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
