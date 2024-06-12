import React, { useEffect, useState } from "react";
import style from "./HomeAdmin.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(style);
export default function HomeAdmin() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      navigate("/admin");
    }
  }, [navigate]);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("statis")}>
        <div className={cx("item")}></div>
      </div>
    </div>
  );
}
