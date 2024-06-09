import React from "react";
import style from "./Bill.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(style);
export default function Bill() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("yard")}>
        <p className={cx("title-yard")}>SÂN</p>
        <div className={cx("item-yard")}>
          <div className={cx("form-img")}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/S%C3%A2n_v%E1%BA%ADn_%C4%91%E1%BB%99ng_Thi%C3%AAn_Tr%C6%B0%E1%BB%9Dng.jpg/1200px-S%C3%A2n_v%E1%BA%ADn_%C4%91%E1%BB%99ng_Thi%C3%AAn_Tr%C6%B0%E1%BB%9Dng.jpg"
              alt=""
            />
          </div>
          <div className={cx("info")}>
            <p className={cx("address")}>
              <FontAwesomeIcon icon={faLocationDot} />:
            </p>
            <p className={cx("date")}>
              <FontAwesomeIcon icon={faCalendar} />:
            </p>
            <p className={cx("time")}>
              <FontAwesomeIcon icon={faClock} />:
            </p>
            <p className={cx("price-yard")}>700000</p>
          </div>
          <div className={cx("action-yard")}>
            <button className={cx("delete-yard")}>XOÁ</button>
          </div>
        </div>
      </div>
      <div className={cx("other")}>
        <p className={cx("title-other")}>KHÁC</p>
        <div className={cx("item-other")}>
          <div className={cx("form-img")}>
            <img src="" alt="" />
          </div>
          <div className={cx("info")}>
            <p className={cx("name")}>Sting</p>
            <p className={cx("quality")}>1 thung</p>
            <p className={cx("price-yard")}>300000</p>
          </div>
          <div className={cx("action")}>
            <button className={cx("delete")}>XOÁ</button>
            <div className={cx("list-next-prev")}>
              <button className={cx("prev")}>-</button>
              <p className={cx("num")}>1</p>
              <button className={cx("next")}>+</button>
            </div>
          </div>
        </div>
      </div>
      <button className={cx("payment")}>THANH TOÁN MOMO</button>
    </div>
  );
}
