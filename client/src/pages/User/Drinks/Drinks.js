import React, { useEffect, useState } from "react";
import style from "./Drinks.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Other from "../../../components/Other/Other";
import axios from "axios";
const cx = classNames.bind(style);
export default function Drinks() {
  const [listDrink, setListDrink] = useState([]);
  const fetchListDrink = () => {
    axios.get("http://localhost:4000/nuoc-uong/get-all").then((res) => {
      if (res) {
        setListDrink(res.data);
      }
    });
  };
  useEffect(() => {
    fetchListDrink();
  }, [listDrink]);
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>DANH SÁCH NƯỚC UỐNG</p>
      <div className={cx("list-foods")}>
        {listDrink.map((item, index) => {
          return (
            <Other
              category={item.ten_loai}
              name={item.ten_nuoc_uong}
              img={item.hinh_anh}
              soluong={item.so_luong_kho}
              gia={item.gia_nuoc}
            />
          );
        })}
      </div>
    </div>
  );
}
