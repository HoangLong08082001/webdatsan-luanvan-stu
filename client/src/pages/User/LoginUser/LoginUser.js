import React, { useState } from "react";
import style from "./LoginUser.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUnlock } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(style);
export default function LoginUser() {
  const [hide, setHide] = useState(false);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("form")}>
        <p className={cx("title-login")}>TRANG ĐĂNG NHẬP</p>
        <div className={cx("form-login")}>
          <div className={cx("form-input")}>
            <input type="text" name="" id="" placeholder="Nhập email" />
          </div>
          <div className={cx("form-input")}>
            <input
              type={hide === false ? "password" : "text"}
              name=""
              id=""
              placeholder="Nhập mật khẩu"
            />
            <p className={cx("hide")} onClick={() => setHide(!hide)}>
              Hiện mật khẩu{" "}
              <FontAwesomeIcon icon={hide === false ? faLock : faUnlock} />
            </p>
          </div>
          <button className={cx("btn-login")}>ĐĂNG NHẬP</button>
          <div className={cx("list-link")}>
            <Link className={cx("dont")} to="/dang-ky">
              Đăng ký nếu chưa có tài khoản
            </Link>
            <Link className={cx("dont")} to="/quen-mat-khau">
              Quên mật khẩu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
