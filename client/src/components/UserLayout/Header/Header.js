import React, { useEffect, useState } from "react";
import style from "./Header.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faTrash,
  faLock,
  faTrashCan,
  faCartShopping,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../../Cart/Cart";
const cx = classNames.bind(style);
export default function Header() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("list-menu")}>
        <ul>
          <li className={cx("logo")}>
            <p className={cx("logo-first")}>SPORT</p>
            <p className={cx("logo-second")}>RETAL</p>
          </li>
          <li className={cx("link")} onClick={() => navigate("/")}>
            Trang chủ{" "}
          </li>
          <li className={cx("link")} onClick={() => navigate("/")}>
            Chi nhánh{" "}
          </li>
          <li className={cx("link")} onClick={() => setShow(!show)}>
            Loại sân{" "}
            <FontAwesomeIcon
              icon={show === false ? faChevronDown : faChevronUp}
            />
          </li>
          <div
            className={cx(
              show === false ? "list-yard-hidden" : "list-yard-show"
            )}
          >
            <ul>
              <li>
                <Link className={cx("link")} to="/san-cau-long">
                  Sân cầu lông
                </Link>
              </li>
              <li>
                <Link className={cx("link")} to="/san-bong-da">
                  Sân đá banh
                </Link>
              </li>
              <li>
                <Link className={cx("link")} to="/san-bong-ro">
                  Sân bóng rổ
                </Link>
              </li>
              <li>
                <Link className={cx("link")} to="/san-tennis">
                  Sân tennis
                </Link>
              </li>
            </ul>
          </div>
          <li className={cx("link")} onClick={() => navigate("/do-an")}>
            Đồ ăn
          </li>
          <li className={cx("link")} onClick={() => navigate("/nuoc-uong")}>
            Nước uống
          </li>
          <li className={cx("link")} onClick={() => navigate("/dung-cu-y-te")}>
            Dụng cụ y tế
          </li>
          <li
            className={cx("link")}
            onClick={() => navigate("/dung-cu-the-thao")}
          >
            Dụng cụ thể thao
          </li>
          <li className={cx("li")}>
            <button
              className={cx("login")}
              onClick={() => navigate("/dang-nhap")}
            >
              Đăng nhập
            </button>
            <button
              className={cx("register")}
              onClick={() => navigate("/dang-ky")}
            >
              Đăng ký
            </button>
            {/* <button className={cx("cart")}>
              <FontAwesomeIcon icon={faCartShopping} />
            </button> */}
          </li>
        </ul>
      </div>
      {/* <Cart/> */}
    </div>
  );
}
