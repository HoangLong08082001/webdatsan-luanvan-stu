import React from "react";
import style from "./Drinks.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Other from "../../../components/Other/Other";
const cx = classNames.bind(style);
export default function Drinks() {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>DANH SÁCH NƯỚC UỐNG</p>
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
