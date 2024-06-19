import React, { useEffect, useState } from "react";
import style from "./DoAn.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faTrash,
  faLock,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import AddDoAn from "./AddDoAn/AddDoAn";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(style);
export default function DoAn() {
  const [listDoAn, setListDoAn] = useState([]);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      navigate("/admin");
    }
  }, [navigate]);
  const fetchChiNhanh = async () => {
    await axios.get("http://localhost:4000/do-an/get-all").then((res) => {
      if (res) {
        setListDoAn(res.data);
        console.log(res.data);
      }
    });
  };
  const close = () => {
    setModal(false);
  };
  const handleBlock = (item) => {
    axios
      .put("http://localhost:4000/do-an/block", {
        id_do_an: item,
      })
      .then((res) => {
        if (res) {
        }
      });
  };
  useEffect(() => {
    fetchChiNhanh();
  }, [listDoAn]);
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>ĐỒ ĂN </p>
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
            <th>Tên đồ ăn</th>
            <th>Giá đồ ăn</th>
            <th>Trạng thái</th>
            <th>Hình ảnh</th>
            <th>Xử lý</th>
          </tr>
          {listDoAn.map((item, index) => {
            return (
              <tr className={cx("tr-td")}>
                <td>{index + 1}</td>
                <td>{item.ten_do_an}</td>
                <td>{item.gia_do_an}</td>
                <td>{item.trang_thai === 0 ? "Chưa hiển thị" : "Hiển thị"}</td>
                <td>
                  {" "}
                  <img className={cx("img")} src={item.hinh_anh} alt="" />
                </td>
                <td className={cx("action")}>
                  <FontAwesomeIcon icon={faPen} className={cx("edit")} />
                  <FontAwesomeIcon
                    icon={faLock}
                    className={cx("lock")}
                    onClick={() => handleBlock(item.ma_do_an)}
                  />
                  <FontAwesomeIcon icon={faTrash} className={cx("delete")} />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      {modal === true ? <AddDoAn handleClose={close} /> : ""}
    </div>
  );
}
