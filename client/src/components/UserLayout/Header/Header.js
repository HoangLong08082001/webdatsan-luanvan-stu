import React from "react";
import style from './Header.module.scss'
import classNames from "classnames/bind";
const cx = classNames.bind(style);
export default function Header() {
  return (
    <div className={cx("wrapper")}>
      <div>Header</div>
    </div>
  );
}
