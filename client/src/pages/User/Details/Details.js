import React, { useState } from "react";
import style from "./Details.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faEnvelope,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(style);
export default function Details() {
  const Navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  const formatDate = (date) => {
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  const handlePrev = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 1);
      return newDate;
    });
  };

  const handleNext = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 1);
      return newDate;
    });
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("up")}>
        <div className={cx("img")}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/S%C3%A2n_v%E1%BA%ADn_%C4%91%E1%BB%99ng_Thi%C3%AAn_Tr%C6%B0%E1%BB%9Dng.jpg/1200px-S%C3%A2n_v%E1%BA%ADn_%C4%91%E1%BB%99ng_Thi%C3%AAn_Tr%C6%B0%E1%BB%9Dng.jpg"
            alt=""
          />
        </div>
        <div className={cx("list-info")}>
          <div className={cx("description")}>
            <p className={cx("name-yard")}>San bong da</p>
            <p className={cx("list-description")}>
              <p className={cx("title-des")}>Mô tả: </p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className={cx("info-host")}>
            <p className={cx("title-host")}>Thông tin chủ sân</p>
            <p className={cx("name-info")}>
              <FontAwesomeIcon icon={faUser} />: Do mixi
            </p>
            <p className={cx("email")}>
              <FontAwesomeIcon icon={faEnvelope} />: ixi@gmail.com
            </p>
            <p className={cx("address")}>
              <FontAwesomeIcon icon={faLocationDot} />:
            </p>
          </div>
          <div className={cx("booking")}>
            <button
              className={cx("btn-booking")}
              onClick={() => Navigate("/thanh-toan")}
            >
              ĐẶT SÂN
            </button>
          </div>
        </div>
      </div>
      <div className={cx("calendar")}>
        <div className={cx("date-time")}>
          <button className={cx("btn-next")} onClick={handleNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          {/* <p>{formatDate(currentDate)}</p> */}
          <p className={cx("date")}>12 thang 6 nam 2024</p>
        </div>
        <div className={cx("list-calendar")}>
          <div
            className={cx(click === false ? "slot" : "slot-active")}
            onClick={() => setClick(!click)}
          >
            <p className={cx("item")}>12:30 - 3:30</p>
          </div>
        </div>
      </div>
    </div>
  );
}
