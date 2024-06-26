import React, { useEffect, useState } from "react";
import style from "./AddChiNhanh.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import axios from "../../../../setup-axios/axios";
const cx = classNames.bind(style);

export default function AddChiNhanh({ handleClose }) {
  const [listDistrict, setListDistrict] = useState([]);
  const [name, setName] = useState("");
  const [diachi, setDiaChi] = useState("");
  const [maquan, setMaquan] = useState("");
  const [quan, setQuan] = useState("");
  const [phuong, setPhuong] = useState("");
  const [sdt, setSdt] = useState("");
  const fetchDistrict = () => {
    axios.get("/chi-nhanh/get-phuong-quan").then((res) => {
      if (res) {
        setListDistrict(res.data);
      }
    });
  };
  const handleSubmit = () => {
    axios
      .post("/chi-nhanh/create", {
        ten_chi_nhanh: name,
        di_chi: diachi,
        ma_quan_huyen: maquan,
        quan: quan,
        phuong: phuong,
      })
      .then((res) => {
        if (res) {
          alert("Create new Successfully");
        }
      });
  };
  useEffect(() => {
    fetchDistrict();
  }, [listDistrict]);
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
            <label htmlFor="">Tên chi nhánh</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nhập tên"
            />
          </div>{" "}
          <div className={cx("form-input")}>
            <label htmlFor="">Số điện thoai</label>
            <input
              type="number"
              value={sdt}
              onChange={(e) => setSdt(e.target.value)}
              placeholder="Nhập số điện thoại"
            />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">Địa chỉ</label>
            <input
              type="text"
              value={diachi}
              onChange={(e) => setDiaChi(e.target.value)}
              placeholder="Nhập Địa chỉ"
            />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">Chọn phường quận có sẵn</label>
            {quan !== "" || phuong !== "" ? (
              <select
                name=""
                id=""
                value={maquan}
                disabled
                onChange={(e) => setMaquan(e.target.value)}
              >
                <option value={""}>Vui long chon</option>
                {listDistrict.map((item, index) => {
                  return (
                    <option value={item.ma_quan_huyen}>
                      phường {item.ten_phuong} - quận {item.ten_quan}
                    </option>
                  );
                })}
              </select>
            ) : (
              <select
                name=""
                id=""
                value={maquan}
                onChange={(e) => setMaquan(e.target.value)}
              >
                <option value={""}>Vui long chon</option>{" "}
                {listDistrict.map((item, index) => {
                  return (
                    <option value={item.ma_quan_huyen}>
                      phường {item.ten_phuong} - quận {item.ten_quan}
                    </option>
                  );
                })}
              </select>
            )}
          </div>
          {maquan !== "" ? (
            <div className={cx("form-input")}>
              <label htmlFor="">Tên quận</label>
              <input
                disabled
                type="number"
                placeholder="Nhập số quận"
                value={quan}
                onChange={(e) => setQuan(e.target.value)}
              />
            </div>
          ) : (
            <div className={cx("form-input")}>
              <label htmlFor="">Tên quận</label>
              <input
                type="number"
                placeholder="Nhập số quận"
                value={quan}
                onChange={(e) => setQuan(e.target.value)}
              />
            </div>
          )}
          {maquan !== "" ? (
            <div className={cx("form-input")}>
              <label htmlFor="">Tên phường</label>
              <input
                disabled
                type="number"
                placeholder="Nhập số phường"
                value={phuong}
                onChange={(e) => setPhuong(e.target.value)}
              />
            </div>
          ) : (
            <div className={cx("form-input")}>
              <label htmlFor="">Tên phường</label>
              <input
                type="number"
                placeholder="Nhập số phường"
                value={phuong}
                onChange={(e) => setPhuong(e.target.value)}
              />
            </div>
          )}
          <button onClick={handleSubmit} className={cx("add")}>
            THÊM MỚI
          </button>
        </div>
      </div>
    </div>
  );
}
