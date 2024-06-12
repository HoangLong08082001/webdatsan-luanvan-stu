import React, { useEffect, useState } from "react";
import style from "./Basketball.module.scss";
import classNames from "classnames/bind";
import Item from "../../../../components/Item/Item";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const cx = classNames.bind(style);
export default function Basketball() {
  const [listSan, setListSan] = useState([]);
  const fetchListSan = () => {
    axios.get("http://localhost:4000/san/get-all").then((res) => {
      if (res) {
        setListSan(res.data);
      }
    });
  };

  const navigate = useNavigate();
  useEffect(() => {
    fetchListSan();
  }, [listSan]);
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>SÂN BÓNG RỔ</p>
      <div className={cx("list-yard")}>
        {listSan.map((item, index) => {
          if (index >= 0 && index <= 5 && item.loai_san === "Sân bóng rổ") {
            return (
              <Item
                clickDetails={() => navigate("/chi-tiet")}
                name={item.ten_san}
                quan={item.ten_quan}
                phuong={item.ten_phuong}
                address={item.dia_chi}
                img={item.hinh_anh}
                phone={item.so_dien_thoai}
              />
            );
          }
        })}
      </div>
      <Link className={cx("show-more")} to="/san-bong-ro">
        XEM THÊM
      </Link>
    </div>
  );
}
