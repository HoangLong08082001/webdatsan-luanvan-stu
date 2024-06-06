import React from "react";
import style from "./Footer.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);
export default function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div>Footer</div>
    </div>
  );
}
