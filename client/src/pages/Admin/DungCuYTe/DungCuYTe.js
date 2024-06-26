import React, { useEffect, useState } from "react";
import style from "./DungCuYTe.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faTrash,
  faLock,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import axios from "../../../setup-axios/axios";
import AddDungCuYTe from "./AddDungCuYTe/AddDungCuYTe";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(style);
export default function DungCuYTe() {
  const [modal, setModal] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [listDungCu, setListDungCu] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      navigate("/admin");
    }
  }, [navigate]);
  const fetchDungCuYTe = async () => {
    await axios.get("/dung-cu-y-te/get-all").then((res) => {
      if (res) {
        setListDungCu(res.data);
      }
    });
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/dung-cu-y-te/delete/${id}`).then((res) => {
        if (res) {
          alert("Delete successfully");
        }
      });
    } catch (error) {
      if (error.response.status >= 500) {
        alert("Error system");
      } else {
        alert(error.response.data.message);
      }
    }
  };
  useEffect(() => {
    fetchDungCuYTe();
  }, [listDungCu]);
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>DỤNG CỤ Y TẾ </p>
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
            <th>Tên dụng cụ y tế</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Trạng thái</th>
            <th>Hình ảnh</th>
            <th>Xử lý</th>
          </tr>
          {listDungCu.map((item, index) => {
            return (
              <tr className={cx("tr-td")}>
                <td>{index + 1}</td>
                <td>{item.ten_dung_cu_y_te}</td>
                <td>{item.gia_dung_cu}</td>
                <td>{item.so_luong}</td>
                <td>{item.trang_thai === 0 ? "Chưa hiển thị" : "Hiển thị"}</td>
                <td>
                  {" "}
                  <img className={cx("img")} src={item.hinh_anh} alt="" />
                </td>
                <td className={cx("action")}>
                  <FontAwesomeIcon icon={faPen} className={cx("edit")} />
                  <FontAwesomeIcon icon={faLock} className={cx("lock")} />
                  <FontAwesomeIcon
                    icon={faTrash}
                    className={cx("delete")}
                    onClick={() => handleDelete(item.ma_dung_cu_y_te)}
                  />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      {modal === true ? (
        <AddDungCuYTe handleClose={() => setModal(false)} />
      ) : (
        ""
      )}
    </div>
  );
}
