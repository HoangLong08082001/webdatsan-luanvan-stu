import React from "react";
import style from "./ForgotPassword.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
const cx = classNames.bind(style);
export default function ForgotPassword() {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>TRANG QUÊN MẬT KHẨU</p>
      <div className={cx("form")}>
        <input
          type="text"
          placeholder="Nhập username đăng nhập"
          className={cx("form-input")}
        />
      </div>

      <button className={cx("login")}>GỬI MAIL</button>
      <Link className={cx("forgot")} to="/admin">
        Quay lại trang đăng nhập
      </Link>
    </div>
  );
}
