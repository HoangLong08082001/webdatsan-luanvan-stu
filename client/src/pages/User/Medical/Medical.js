import React, { useEffect, useState } from "react";
import style from "./Medical.module.scss";
import classNames from "classnames/bind";
import Other from "../../../components/Other/Other";
import axios from "axios";
const cx = classNames.bind(style);

export default function Medical() {
  const [listMedical, setListMedical] = useState([]);
  const fetchListMedical = () => {
    axios.get("http://localhost:4000/dung-cu-y-te/get-all").then((res) => {
      if (res) {
        setListMedical(res.data);
      }
    });
  };
  useEffect(() => {
    fetchListMedical();
  }, [listMedical]);
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>DANH SÁCH DỤNG CỤ Y TẾ</p>
      <div className={cx("list-foods")}>
        {listMedical.map((item, index) => {
          if (item.trang_thai === 1) {
            return (
              <Other
                img={item.hinh_anh}
                name={item.ten_dung_cu_y_te}
                soluong={item.so_luong}
                gia={item.gia_dung_cu}
                key={index}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
