import React, { useState } from "react";
import style from "./LoginUser.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUnlock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const cx = classNames.bind(style);
export default function LoginUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hide, setHide] = useState(false);
  const handleLogin = async () => {
    try {
      await axios
        .post("http://localhost:4000/khach-hang/login", {
          username: username,
          password: password,
        })
        .then((res) => {
          if (res) {
            alert("Login successfully");
            setUsername("");
            setPassword("");
            console.log(res.data.data + " " + res.data.access_token);
            console.log(res.data.data);
            localStorage.setItem("id", res.data.data.ma_khach_hang);
            localStorage.setItem("email", res.data.data.email);
            localStorage.setItem("tam_tinh", res.data.data.ma_tam_tinh);
            window.location.reload();
          }
        });
    } catch (error) {
      if (error.response.status >= 500) {
        alert("Error system");
      } else {
        alert(error.response.data.message);
      }
    }
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("form")}>
        <p className={cx("title-login")}>TRANG ĐĂNG NHẬP</p>
        <div className={cx("form-login")}>
          <div className={cx("form-input")}>
            <input
              type="text"
              name=""
              id=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nhập email"
            />
          </div>
          <div className={cx("form-input")}>
            <input
              type={hide === false ? "password" : "text"}
              name=""
              id=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
            />
            <p className={cx("hide")} onClick={() => setHide(!hide)}>
              Hiện mật khẩu{" "}
              <FontAwesomeIcon icon={hide === false ? faLock : faUnlock} />
            </p>
          </div>
          <button className={cx("btn-login")} onClick={handleLogin}>
            ĐĂNG NHẬP
          </button>
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
