import React from "react";
import style from "./Other.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(style);
export default function Other() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("form-img")}>
        <img src="" alt="" />
      </div>
      <p className={cx("name")}>STING</p>
      <p className={cx("price")}>120000/chai</p>
      <p className={cx("price")}>300000/thung</p>
      <button className={cx("add")}>
        THÊM VÀO TẠM TÍNH <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}
