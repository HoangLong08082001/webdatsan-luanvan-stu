import React from "react";
import style from "./Forgot.modules.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
const cx = classNames.bind(style);
export default function Forgot() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("form")}>
        <p className={cx("title-login")}>NHẬP USERNAME ĐĂNG NHẬP</p>
        <div className={cx("form-login")}>
          <div className={cx("form-input")}>
            <input type="text" name="" id="" placeholder="Nhập email" />
          </div>

          <button className={cx("btn-login")}>XÁC NHẬN</button>
          <div className={cx("list-link")}>
            <Link className={cx("dont")} to="/dang-nhap">
              Quay lại trang đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
