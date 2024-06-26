import React, { useEffect, useState } from "react";
import style from "./Sport.module.scss";
import classNames from "classnames/bind";
import Other from "../../../components/Other/Other";
import axios from "../../../setup-axios/axios";
const cx = classNames.bind(style);
export default function Sport() {
  const [listMedical, setListMedical] = useState([]);
  const fetchListMedical = () => {
    axios.get("/dung-cu-the-thao/get").then((res) => {
      if (res) {
        setListMedical(res.data);
      }
    });
  };
  const handleAdd = (id_do_an) => {
    if (localStorage.getItem("id")) {
      axios
        .post("/tam-tinh/add-the-thao", {
          id_dung_cu_the_thao: id_do_an,
          id_tam_tinh: localStorage.getItem("tam_tinh"),
        })
        .then((res) => {
          alert("Thêm thành công dụng cụ y tế vào tạm tính");
        });
    } else {
      alert("Vui lòng đăng nhập trước khi thêm sản phẩm");
    }
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
                name={item.ten_dung_cu_the_thao}
                soluong={item.so_luong}
                gia={item.gia_dung_cu}
                key={index}
                handleClick={() => handleAdd(item.ma_dung_cu_the_thao)}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
