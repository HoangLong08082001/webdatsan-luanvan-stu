import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import style from "./RegisterUser.module.scss";
import classNames from "classnames/bind";
import { faLock, faUnlock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const cx = classNames.bind(style);
export default function RegisterUser() {
  const [hide, setHide] = useState(false);
  const [hideConfirm, setHideConfirm] = useState(false);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("form")}>
        <p className={cx("title-login")}>TRANG ĐĂNG KÝ</p>
        <div className={cx("form-login")}>
          <div className={cx("form-input")}>
            <input type="text" name="" id="" placeholder="Nhập email" />
          </div>
          <div className={cx("form-input")}>
            <input type="text" name="" id="" placeholder="Nhập số điện thoại" />
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
          <div className={cx("form-input")}>
            <input
              type={hideConfirm === false ? "password" : "text"}
              name=""
              id=""
              placeholder="Nhập lại mật khẩu"
            />
            <p
              className={cx("hide")}
              onClick={() => setHideConfirm(!hideConfirm)}
            >
              Hiện mật khẩu{" "}
              <FontAwesomeIcon
                icon={hideConfirm === false ? faLock : faUnlock}
              />
            </p>
          </div>
          <button className={cx("btn-login")}>ĐĂNG KÝ</button>
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
