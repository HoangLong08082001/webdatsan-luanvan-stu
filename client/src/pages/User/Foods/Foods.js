import React from "react";
import style from "./Foods.module.scss";
import classNames from "classnames/bind";
import Other from "../../../components/Other/Other";
const cx = classNames.bind(style);
export default function Foods() {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>DANH SÁCH ĐỒ ĂN</p>
      <div className={cx("list-foods")}>
        <Other />
        <Other />
        <Other />
        <Other />
        <Other />
        <Other />
        <Other />
        <Other />
        <Other />
        <Other />
        <Other />
        <Other />
      </div>
    </div>
  );
}
