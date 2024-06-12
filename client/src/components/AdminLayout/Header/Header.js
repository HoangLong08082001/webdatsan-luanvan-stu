import React from "react";
import style from "./Header.module.scss";
import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
const cx = classNames.bind(style);
export default function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear("jwt");
    navigate("/admin");
  };
  return (
    <div className={cx("wrapper")}>
      <ul>
        <li>
          <Link className={cx("link")} to="/admin-trang-chu">
            Trang chủ
          </Link>
        </li>
        <li>
          <Link className={cx("link")} to="/admin-chi-nhanh">
            Chi nhánh
          </Link>
        </li>
        <li>
          <Link className={cx("link")} to="/admin-do-an">
            Đồ ăn
          </Link>
        </li>
        <li>
          <Link className={cx("link")} to="/admin-dung-cu-y-te">
            Dụng cụ y tế
          </Link>
        </li>
        <li>
          <Link className={cx("link")} to="/admin-dung-cu-the-thao">
            Dụng cụ thể thao
          </Link>
        </li>
        <li>
          <Link className={cx("link")} to="">
            Khách hàng
          </Link>
        </li>
        <li>
          <Link className={cx("link")} to="/admin-nuoc-uong">
            Nước uống
          </Link>
        </li>

        <li>
          <Link className={cx("link")} to="/admin-san">
            Sân
          </Link>
        </li>
        <li>
          <Link className={cx("link")} to="">
            Hoá đơn
          </Link>
        </li>
        <li>
          <p className={cx("name")}>Name</p>
          <p className={cx("logout")} onClick={handleLogout}>
            Đăng xuất
          </p>
        </li>
      </ul>
    </div>
  );
}
