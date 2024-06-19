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
  const handleAdd = (id_do_an)=>{
    if(localStorage.getItem('id'))
      {
        axios.post("http://localhost:4000/tam-tinh/add-do-an", {
          id_do_an: id_do_an,
          id_tam_tinh: localStorage.getItem("tam_tinh"),
        }).then(res=>{
          alert("Thêm thành công món ăn vào tạm tính");
        });
      }else{
        alert("Vui lòng đăng nhập trước khi thêm sản phẩm");
      }
  }
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
                handleClick={()=>handleAdd(item.ma_do_an)}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
