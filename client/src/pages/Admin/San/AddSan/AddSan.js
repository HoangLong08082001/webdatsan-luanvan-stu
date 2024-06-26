import React, { useEffect, useState } from "react";
import style from "./AddSan.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import axios from "../../../../setup-axios/axios";
const cx = classNames.bind(style);
export default function AddSan({ handleClose }) {
  const [ten, setTen] = useState("");
  const [hinhanh, setHinhAnh] = useState("");
  const [mota, setMota] = useState("");
  const [machinhanh, setMaChinhNhanh] = useState("");
  const [loaisan, setLoaisan] = useState("");
  const [giatien, setGiaTien] = useState("");
  const [listChiNhanh, setListChiNhanh] = useState([]);
  const [listLoai, setListLoai] = useState([]);
  const fetchChiNhanh = () => {
    axios.get("/chi-nhanh/get-chi-nhanh").then((res) => {
      if (res) {
        setListChiNhanh(res.data);
      }
    });
  };
  const data = [
    { id: 1, loai: "Sân bóng đá" },
    { id: 2, loai: "Sân bóng chuyền" },
    { id: 3, loai: "Sân cầu lông" },
    { id: 4, loai: "Sân bóng rổ" },
    { id: 5, loai: "Sân tennis" },
  ];
  const fetchLoai = async () => {
    await axios.get("/loai-san/get-all").then((res) => {
      if (res) {
        setListLoai(res.data);
      }
    });
  };
  const handleSubmit = () => {
    axios
      .post("/san/create", {
        ten: ten,
        hinhanh: hinhanh,
        mota: mota,
        machinhanh: machinhanh,
        loaisan: loaisan,
        giatien: giatien,
      })
      .then((res) => {
        if (res) {
          alert("Create new successfully");
          fetchChiNhanh();
        }
      });
  };
  useEffect(() => {
    fetchLoai();
    fetchChiNhanh();
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("form")}>
        <FontAwesomeIcon
          onClick={handleClose}
          icon={faX}
          className={cx("icon")}
        />
        <div className={cx("form-add")}>
          <div className={cx("form-input")}>
            <label htmlFor="">Tên sân</label>
            <input
              type="text"
              placeholder="Nhập tên sân"
              value={ten}
              onChange={(e) => setTen(e.target.value)}
            />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">Giá sân</label>
            <input
              type="text"
              placeholder="Nhập giá sân"
              value={giatien}
              onChange={(e) => setGiaTien(e.target.value)}
            />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">Chi nhánh</label>
            <select
              name=""
              id=""
              value={machinhanh}
              onChange={(e) => {
                setMaChinhNhanh(e.target.value);
                console.log(e.target.value);
              }}
            >
              <option value={""}>Vui long chon</option>
              {listChiNhanh.map((item, index) => {
                return (
                  <option value={item.ma_chi_nhanh}>
                    {item.ten_chi_nhanh}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">Loại sân</label>
            <select
              name=""
              id=""
              value={loaisan}
              onChange={(e) => setLoaisan(e.target.value)}
            >
              <option value={""}>Vui long chon</option>
              {listLoai.map((item, index) => {
                return (
                  <option key={index} value={item.ma_loai_san}>
                    {item.ten_loai_san}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">Hình ảnh</label>
            <input
              type="text"
              placeholder="Dán đường link hình ảnh"
              value={hinhanh}
              onChange={(e) => setHinhAnh(e.target.value)}
            />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">Mô tả sân</label>
            <textarea
              value={mota}
              onChange={(e) => setMota(e.target.value)}
              type="text"
              placeholder="Nhập mô tả"
            />
          </div>
          <button onClick={handleSubmit} className={cx("add")}>
            THÊM MỚI
          </button>
        </div>
      </div>
    </div>
  );
}
