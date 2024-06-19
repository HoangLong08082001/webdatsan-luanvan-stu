import React, { useEffect, useState } from "react";
import style from "./Bill.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faLocationDot,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const cx = classNames.bind(style);

export default function Bill() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [listSan, setListSan] = useState([]);
  const [listNuocUong, setListNuocUong] = useState([]);
  const [listDoAn, setListDoAn] = useState([]);
  const [listDungCuTheThao, setListDungCuTheThao] = useState([]);
  const [listDungCuYTe, setListDungCuYTe] = useState([]);
  const [totalSan, setTotalSan] = useState(0);
  const [totalNuoc, setTotalNuoc] = useState(0);
  const [totalDoAn, setTotalDoAn] = useState(0);
  const [totalTheThao, setTotalTheThao] = useState(0);
  const [totalYTe, setTotalYTe] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const fetchSan = () => {
    axios
      .get(
        `http://localhost:4000/tam-tinh/get-tam-tinh-san/${localStorage.getItem(
          "tam_tinh"
        )}`
      )
      .then((res) => {
        if (res) {
          console.log(res.data);
          setListSan(res.data);
          const totalSum = res.data.reduce((sum, current) => {
            return sum + current.gia_san;
          }, 0);
          setTotalSan(totalSum);
        }
      });
  };
  const fetchDoAn = () => {
    axios
      .get(
        `http://localhost:4000/tam-tinh/get-tam-tinh-do-an/${localStorage.getItem(
          "tam_tinh"
        )}`
      )
      .then((res) => {
        if (res) {
          console.log(res.data);
          setListDoAn(res.data);
          const totalSum = res.data.reduce((sum, current) => {
            return sum + current.gia_do_an;
          }, 0);
          setTotalDoAn(totalSum);
        }
      });
  };
  const fetchNuoc = () => {
    axios
      .get(
        `http://localhost:4000/tam-tinh/get-tam-tinh-nuoc-uong/${localStorage.getItem(
          "tam_tinh"
        )}`
      )
      .then((res) => {
        if (res) {
          console.log(res.data);
          setListNuocUong(res.data);
          const totalSum = res.data.reduce((sum, current) => {
            return sum + current.gia_nuoc;
          }, 0);
          setTotalNuoc(totalSum);
        }
      });
  };
  const fetchTheThao = () => {
    axios
      .get(
        `http://localhost:4000/tam-tinh/get-tam-tinh-dung-cu-the-thao/${localStorage.getItem(
          "tam_tinh"
        )}`
      )
      .then((res) => {
        if (res) {
          console.log(res.data);
          setListDungCuTheThao(res.data);
          const totalSum = res.data.reduce((sum, current) => {
            return sum + current.gia_dung_cu;
          }, 0);
          setTotalTheThao(totalSum);
        }
      });
  };
  const fetchYTe = () => {
    axios
      .get(
        `http://localhost:4000/tam-tinh/get-tam-tinh-dung-cu-y-te/${localStorage.getItem(
          "tam_tinh"
        )}`
      )
      .then((res) => {
        if (res) {
          console.log(res.data);
          setListDungCuYTe(res.data);
          const totalSum = res.data.reduce((sum, current) => {
            return sum + current.gia_dung_cu;
          }, 0);
          setTotalYTe(totalSum);
        }
      });
  };
  const handlePayment = () => {
    axios
      .post("http://localhost:4000/payment/momo", {
        total: (totalDoAn + totalNuoc + totalSan + totalTheThao + totalYTe) / 2,
      })
      .then((res) => {
        if (res) {
          window.location.href =
            "https://test-payment.momo.vn/v2/gateway/pay?t=TU9NT3xNT01PMTcxODgxMDIyMzE3OA&s=3cd2880558df6c64fd8c655e7d7c9d6be39ac678ee2ca7f567d8811aa33bc489";
        }
      });
  };
  useEffect(() => {
    // setStart(location.state.start);
    // setEnd(location.state.end);
    fetchDoAn();
    fetchNuoc();
    fetchSan();
    fetchTheThao();
    fetchYTe();
  }, []);
  if (localStorage.getItem("id") && localStorage.getItem("email")) {
    return (
      <div className={cx("small-container", "cart-page")}>
        <div className={cx("flex-item")}>
          <p className={cx("title")}>Sân</p>
          <table>
            <thead>
              <tr>
                <th width={50}></th>
                <th width={200}></th>
                <th>Sản phẩm</th>
                <th className={cx("thRight")} width={200}>
                  Tạm tính
                </th>
                <th width={80}></th>
              </tr>
            </thead>
            <tbody className={cx("scrollable-tbody")}>
              {listSan.map((item, index) => {
                return (
                  <tr key={index}>
                    {/* <td width={50}>
                  <input type="checkbox" style={{ width: "20px" }} />
                </td> */}
                    <td width={200}>
                      <div className={cx("cart-info")}>
                        <img
                          className={cx("productImage")}
                          src={item.hinh_anh}
                          alt=""
                        />
                      </div>
                    </td>
                    <td>
                      <p className={cx("productName")}>{item.ten_san}</p>
                      <small className={cx("productPrice")}>
                        {item.gia_san}
                      </small>
                    </td>
                    <td className={cx("tdRight")} width={200}>
                      {item.gia_san}
                    </td>
                    <td width={80} className={cx("tdAction")}>
                      <button className={cx("btn", "btn-danger")}>
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={cx("flex-item")}>
          <p className={cx("title")}>Nước</p>
          <table>
            <thead>
              <tr>
                <th width={50}></th>
                <th width={200}></th>
                <th>Sản phẩm</th>
                <th width={200}>Số lượng</th>
                <th className={cx("thRight")} width={200}>
                  Tạm tính
                </th>
                <th width={80}></th>
              </tr>
            </thead>
            <tbody className={cx("scrollable-tbody")}>
              {listNuocUong.map((item, index) => {
                return (
                  <tr key={index}>
                    {/* <td width={50}>
                  <input type="checkbox" style={{ width: "20px" }} />
                </td> */}
                    <td width={200}>
                      <div className={cx("cart-info")}>
                        <img
                          className={cx("productImage")}
                          src={item.hinh_anh}
                          alt=""
                        />
                      </div>
                    </td>
                    <td>
                      <p className={cx("productName")}>{item.ten_nuoc_uong}</p>
                      <small className={cx("productPrice")}>
                        {item.gia_nuoc}
                      </small>
                    </td>
                    <td width={200}>
                      <input type="number" value={item.gia_nuoc} />
                    </td>
                    <td className={cx("tdRight")} width={200}>
                      {item.gia_nuoc}
                    </td>
                    <td width={80} className={cx("tdAction")}>
                      <button className={cx("btn", "btn-danger")}>
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={cx("flex-item")}>
          <p className={cx("title")}>Đồ ăn</p>
          <table>
            <thead>
              <tr>
                <th width={50}></th>
                <th width={200}></th>
                <th>Sản phẩm</th>
                <th width={200}>Số lượng</th>
                <th className={cx("thRight")} width={200}>
                  Tạm tính
                </th>
                <th width={80}></th>
              </tr>
            </thead>
            <tbody className={cx("scrollable-tbody")}>
              {listDoAn.map((item, index) => {
                return (
                  <tr key={index}>
                    {/* <td width={50}>
                  <input type="checkbox" style={{ width: "20px" }} />
                </td> */}
                    <td width={200}>
                      <div className={cx("cart-info")}>
                        <img
                          className={cx("productImage")}
                          src={item.hinh_anh}
                          alt=""
                        />
                      </div>
                    </td>
                    <td>
                      <p className={cx("productName")}>{item.ten_do_an}</p>
                      <small className={cx("productPrice")}>
                        {item.gia_do_an}
                      </small>
                    </td>
                    <td width={200}>
                      <input type="number" value="1" />
                    </td>
                    <td className={cx("tdRight")} width={200}>
                      {item.gia_do_an}
                    </td>
                    <td width={80} className={cx("tdAction")}>
                      <button className={cx("btn", "btn-danger")}>
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={cx("flex-item")}>
          <p className={cx("title")}>Dụng cụ thể thao</p>
          <table>
            <thead>
              <tr>
                <th width={50}></th>
                <th width={200}></th>
                <th>Sản phẩm</th>
                <th width={200}>Số lượng</th>
                <th className={cx("thRight")} width={200}>
                  Tạm tính
                </th>
                <th width={80}></th>
              </tr>
            </thead>
            <tbody className={cx("scrollable-tbody")}>
              {listDungCuTheThao.map((item, index) => {
                return (
                  <tr key={index}>
                    {/* <td width={50}>
                  <input type="checkbox" style={{ width: "20px" }} />
                </td> */}
                    <td width={200}>
                      <div className={cx("cart-info")}>
                        <img
                          className={cx("productImage")}
                          src={item.hinh_anh}
                          alt=""
                        />
                      </div>
                    </td>
                    <td>
                      <p className={cx("productName")}>
                        {item.ten_dung_cu_the_thao}
                      </p>
                      <small className={cx("productPrice")}>
                        {item.gia_dung_cu}
                      </small>
                    </td>
                    <td width={200}>
                      <input type="number" value="1" />
                    </td>
                    <td className={cx("tdRight")} width={200}>
                      {item.gia_dung_cu}
                    </td>
                    <td width={80} className={cx("tdAction")}>
                      <button className={cx("btn", "btn-danger")}>
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={cx("flex-item")}>
          <p className={cx("title")}>Dụng cụ y tế</p>
          <table>
            <thead>
              <tr>
                <th width={50}></th>
                <th width={200}></th>
                <th>Sản phẩm</th>
                <th width={200}>Số lượng</th>
                <th className={cx("thRight")} width={200}>
                  Tạm tính
                </th>
                <th width={80}></th>
              </tr>
            </thead>
            <tbody className={cx("scrollable-tbody")}>
              {listDungCuYTe.map((item, index) => {
                return (
                  <tr key={index}>
                    {/* <td width={50}>
                  <input type="checkbox" style={{ width: "20px" }} />
                </td> */}
                    <td width={200}>
                      <div className={cx("cart-info")}>
                        <img
                          className={cx("productImage")}
                          src={item.hinh_anh}
                          alt=""
                        />
                      </div>
                    </td>
                    <td>
                      <p className={cx("productName")}>
                        {item.ten_dung_cu_y_te}
                      </p>
                      <small className={cx("productPrice")}>
                        {item.gia_dung_cu}
                      </small>
                    </td>
                    <td width={200}>
                      <input type="number" value="1" />
                    </td>
                    <td className={cx("tdRight")} width={200}>
                      {item.gia_dung_cu}
                    </td>
                    <td width={80} className={cx("tdAction")}>
                      <button className={cx("btn", "btn-danger")}>
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className={cx("total-price")}>
          <table>
            <tbody>
              <tr>
                <td>Tạm tính</td>
                <td>
                  {totalDoAn + totalNuoc + totalSan + totalTheThao + totalYTe}đ
                </td>
              </tr>

              <tr>
                <td>Tổng tiền</td>
                <td>
                  {totalDoAn + totalNuoc + totalSan + totalTheThao + totalYTe}đ
                </td>
              </tr>
              <tr>
                <td>Tiền cần thanh toán (50% tổng tiền)</td>
                <td>
                  {(totalDoAn +
                    totalNuoc +
                    totalSan +
                    totalTheThao +
                    totalYTe) /
                    2}
                  đ
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className={cx("btn", "btn-intermediate")}
                    onClick={handlePayment}
                  >
                    Thanh toán Momo
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    alert("Vui lòng đăng nhập trước khi thanh toán");
    navigate("/dang-nhap");
  }
}
