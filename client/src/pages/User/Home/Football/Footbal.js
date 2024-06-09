import React from "react";
import style from "./Footal.module.scss";
import classNames from "classnames/bind";
import Item from "../../../../components/Item/Item";
import { Link, useNavigate } from "react-router-dom";
const cx = classNames.bind(style);
export default function Footbal() {
  const navigate = useNavigate();
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>SÂN BÓNG ĐÁ</p>
      <div className={cx("list-yard")}>
        <Item
          clickDetails={() => navigate("/chi-tiet")}
          name="San quan 8"
          address="32 Cao Lo, phuong 1, TPHCM"
          phone="0999888999"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/S%C3%A2n_v%E1%BA%ADn_%C4%91%E1%BB%99ng_Thi%C3%AAn_Tr%C6%B0%E1%BB%9Dng.jpg/1200px-S%C3%A2n_v%E1%BA%ADn_%C4%91%E1%BB%99ng_Thi%C3%AAn_Tr%C6%B0%E1%BB%9Dng.jpg"
        />
        <Item
          clickDetails={() => navigate("/chi-tiet")}
          name="San quan 8"
          address="32 Cao Lo, phuong 1, TPHCM"
          phone="0999888999"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/S%C3%A2n_v%E1%BA%ADn_%C4%91%E1%BB%99ng_Thi%C3%AAn_Tr%C6%B0%E1%BB%9Dng.jpg/1200px-S%C3%A2n_v%E1%BA%ADn_%C4%91%E1%BB%99ng_Thi%C3%AAn_Tr%C6%B0%E1%BB%9Dng.jpg"
        />
        <Item
          clickDetails={() => navigate("/chi-tiet")}
          name="San quan 8"
          address="32 Cao Lo, phuong 1, TPHCM"
          phone="0999888999"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/S%C3%A2n_v%E1%BA%ADn_%C4%91%E1%BB%99ng_Thi%C3%AAn_Tr%C6%B0%E1%BB%9Dng.jpg/1200px-S%C3%A2n_v%E1%BA%ADn_%C4%91%E1%BB%99ng_Thi%C3%AAn_Tr%C6%B0%E1%BB%9Dng.jpg"
        />
        <Item
          clickDetails={() => navigate("/chi-tiet")}
          name="San quan 8"
          address="32 Cao Lo, phuong 1, TPHCM"
          phone="0999888999"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/S%C3%A2n_v%E1%BA%ADn_%C4%91%E1%BB%99ng_Thi%C3%AAn_Tr%C6%B0%E1%BB%9Dng.jpg/1200px-S%C3%A2n_v%E1%BA%ADn_%C4%91%E1%BB%99ng_Thi%C3%AAn_Tr%C6%B0%E1%BB%9Dng.jpg"
        />
        <Item
          clickDetails={() => navigate("/chi-tiet")}
          name="San quan 8"
          address="32 Cao Lo, phuong 1, TPHCM"
          phone="0999888999"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/S%C3%A2n_v%E1%BA%ADn_%C4%91%E1%BB%99ng_Thi%C3%AAn_Tr%C6%B0%E1%BB%9Dng.jpg/1200px-S%C3%A2n_v%E1%BA%ADn_%C4%91%E1%BB%99ng_Thi%C3%AAn_Tr%C6%B0%E1%BB%9Dng.jpg"
        />
      </div>
      <Link className={cx("show-more")} to="/san-bong-da">
        XEM THÊM
      </Link>
    </div>
  );
}