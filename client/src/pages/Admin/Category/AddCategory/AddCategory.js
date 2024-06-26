import React, { useState } from "react";
import style from "./AddCategory.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import axios from "../../../../setup-axios/axios";
const cx = classNames.bind(style);
export default function AddCategory({ handleClose }) {
  const [category, setCategory] = useState("");
  const handleSubmit = async () => {
    try {
      await axios
        .post("/loai-san/create", {
          loai_san: category,
        })
        .then((res) => {
          if (res) {
            alert("Add successfully");
            setCategory("");
          }
        });
    } catch (error) {
      if (error.response.status >= 500) {
        alert("Error System");
      } else {
        alert(error.response.data.message);
      }
    }
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
            <label htmlFor="">Loại sân</label>
            <input
              type="text"
              placeholder="Nhập loại sân"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <button className={cx("add")} onClick={handleSubmit}>
            THÊM MỚI
          </button>
        </div>
      </div>
    </div>
  );
}
