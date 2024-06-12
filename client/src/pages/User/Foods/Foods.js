import React, { useEffect, useState } from "react";
import style from "./Foods.module.scss";
import classNames from "classnames/bind";
import Other from "../../../components/Other/Other";
import axios from "axios";
const cx = classNames.bind(style);
export default function Foods() {
  const [listFood, setListFood] = useState([]);
  const fetchListFood = () => {
    axios.get("http://localhost:4000/do-an/get-all").then((res) => {
      if (res) {
        setListFood(res.data);
      }
    });
  };
  useEffect(() => {
    fetchListFood();
  }, [listFood]);
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>DANH SÁCH ĐỒ ĂN</p>
      <div className={cx("list-foods")}>
        {listFood.map((item, index) => {
          if (item.trang_thai === 1) {
            return (
              <Other
                img={item.hinh_anh}
                name={item.ten_do_an}
                soluong={item.so_luong}
                gia={item.gia_do_an}
                key={index}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
