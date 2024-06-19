import React, { useEffect, useState } from "react";
import style from "./Details.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faEnvelope,
  faLocationDot,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
const cx = classNames.bind(style);
export default function Details() {
  const Navigate = useNavigate();
  const [click, setClick] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const location = useLocation();
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [des, setDes] = useState("");
  const [quan, setQuan] = useState("");
  const [phuong, setPhuong] = useState("");
  const [id, setId] = useState("");
  const [object, setObject] = useState([]);
  const getLocation = () => {
    setName(location.state.ten_san);
    setImg(location.state.hinh_anh);
    setPhone(location.state.so_dien_thoai);
    setAddress(location.state.dia_chi);
    setDes(location.state.description);
    setQuan(location.state.ten_quan);
    setPhuong(location.state.ten_phuong);
  };
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
  const listSlot = [
    { id: 1, start: "8:00", end: "9:00" },
    { id: 2, start: "9:30", end: "10:30" },
    { id: 3, start: "11:00", end: "12:00" },
    { id: 4, start: "12:30", end: "13:30" },
    { id: 5, start: "14:00", end: "15:00" },
    { id: 6, start: "15:30", end: "16:30" },
    { id: 7, start: "17:00", end: "18:00" },
    { id: 8, start: "18:30", end: "19:30" },
  ];
  const handleClick = (item) => {
    if (click === item.id) {
      return setClick(null);
    }
    console.log(item.id);
    setClick(item.id);
    listSlot.forEach((element) => {
      if (element.id === item.id) {
        console.log(element);
        setObject(element);
      }
    });
  };
  useEffect(() => {
    getLocation();
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("up")}>
        <div className={cx("img")}>
          <img src={img} alt="" />
        </div>
        <div className={cx("list-info")}>
          <div className={cx("description")}>
            <p className={cx("name-yard")}>{name}</p>
            <p className={cx("list-description")}>
              <p className={cx("title-des")}>Mô tả: </p>
              {des}
            </p>
          </div>
          <div className={cx("info-host")}>
            <p className={cx("title-host")}>Thông tin sân</p>
            <p className={cx("email")}>
              <FontAwesomeIcon icon={faPhone} />: {phone}
            </p>
            <p className={cx("address")}>
              <FontAwesomeIcon icon={faLocationDot} />: {address}, phường{" "}
              {phuong}, quận {quan}
            </p>
          </div>
          <div className={cx("booking")}>
            <button
              className={cx("btn-booking")}
              onClick={() => Navigate("/thanh-toan", { state: object })}
            >
              ĐẶT SÂN
            </button>
          </div>
        </div>
      </div>
      <div className={cx("calendar")}>
        <div className={cx("date-time")}>
          {/* <p>{formatDate(currentDate)}</p> */}
          <input type="date" className={cx("date")} />
        </div>
        <div className={cx("list-calendar")}>
          {listSlot.map((item, index) => {
            return (
              <div
                className={cx(click === item.id ? "slot-active" : "slot")}
                onClick={() => handleClick(item)}
              >
                <p className={cx("item")}>
                  {item.start} - {item.end}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
