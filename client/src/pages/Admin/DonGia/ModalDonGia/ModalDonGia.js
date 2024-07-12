import React, { useEffect, useState } from "react";
import style from "./ModalDonGia.module.scss";
import classNames from "classnames/bind";
import axios from "../../../../setup-axios/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(style);
export default function ModalDonGia({ setModalFalse, id = null }) {
  const [idDonGIa, setIdDonGia] = useState("");
  const fetchDetailDonGia = () => {
    try {
      axios.get(`/hoa-don/get-hoa-don-by-ma-hoa-don/${id}`).then((res) => {
        if (res) {
          console.log(res.data);
        }
      });
    } catch (error) {}
  };
  const handleClose = () => {
    setModalFalse();
  };
  useEffect(() => {
    if (id) {
      fetchDetailDonGia();
    }
  }, [id]);
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
            <p className="title"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
