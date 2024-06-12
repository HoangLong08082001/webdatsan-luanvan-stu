import React, { useEffect, useState } from "react";
import style from "./NuocUong.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faTrash,
  faLock,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import AddDoAn from "../DoAn/AddDoAn/AddDoAn";
import AddNuocUong from "./AddNuocUong/AddNuocUong";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(style);
export default function NuocUong() {
  const [modal, setModal] = useState(false);
  const [listNuocUong, setListNuocUong] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      navigate("/admin");
    }
  }, [navigate]);
  const fetchNuocUong = async () => {
    await axios.get("http://localhost:4000/nuoc-uong/get-all").then((res) => {
      if (res) {
        setListNuocUong(res.data);
      }
    });
  };
  const handleBlock = (item) => {
    axios
      .put("http://localhost:4000/nuoc-uong/block", {
        id_nuoc_uong: item,
      })
      .then((res) => {
        if (res) {
        }
      });
  };
  useEffect(() => {
    fetchNuocUong();
  }, [listNuocUong]);
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>NƯỚC UỐNG </p>
      <div className={cx("list-btn")}>
        <button className={cx("add")} onClick={() => setModal(true)}>
          THÊM MỚI
        </button>
        <button className={cx("excel")}>XUẤT EXCEL</button>
      </div>
      <div className={cx("form-table")}>
        <table border={1} cellSpacing={0} className={cx("table")}>
          <tr className={cx("tr-th")}>
            <th>STT</th>
            <th>Tên nước uống</th>
            <th>Giá</th>
            <th>Số lượng</th>
            {/* <th>Trạng thái</th> */}
            <th>Hình ảnh</th>
            <th>Xử lý</th>
          </tr>
          {listNuocUong.map((item, index) => {
            return (
              <tr className={cx("tr-td")}>
                <td>{index + 1}</td>
                <td>{item.ten_nuoc_uong}</td>
                <td>{item.gia_nuoc}</td>
                <td>{item.so_luong_kho}</td>
                {/* <td>{item.trang_thai === 0 ? "Chưa hiển thị" : "Hiển thị"}</td> */}
                <td>
                  <img className={cx("img")} src={item.hinh_anh} alt="" />
                </td>
                <td className={cx("action")}>
                  <FontAwesomeIcon icon={faPen} className={cx("edit")} />
                  <FontAwesomeIcon
                    icon={faLock}
                    className={cx("lock")}
                    onClick={() => handleBlock(item.ma_nuoc_uong_loai)}
                  />
                  <FontAwesomeIcon icon={faTrash} className={cx("delete")} />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      {modal === true ? (
        <AddNuocUong handleClose={() => setModal(false)} />
      ) : (
        ""
      )}
    </div>
  );
}
