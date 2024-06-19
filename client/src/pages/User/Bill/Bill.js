import React from "react";
import style from "./Bill.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faLocationDot, faTrash } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

export default function Bill() {
  return (
    <div className={cx("small-container", "cart-page")}>
      <div className={cx("flex-item")}>
        <table>
          <thead>
            <tr>
              <th width={50}></th>
              <th width={200}></th>
              <th>Sản phẩm</th>
              <th width={200}>Số lượng</th>
              <th className={cx("thRight")} width={200}>Tạm tính</th>
              <th width={80}></th>
            </tr>
          </thead>
          <tbody className={cx("scrollable-tbody")}>
            <tr>
              <td width={50}>
                <input type="checkbox" style={{width:"20px"}}/>
              </td>
              <td width={200}>
                <div className={cx("cart-info")}>
                  <img className={cx("productImage")} src="https://i.ibb.co/B3vYjvw/buy-1.jpg" alt="" />
                </div>
              </td>
              <td>
                  <p className={cx("productName")}>Red Printed T-Shirt</p>
                  <small className={cx("productPrice")}>500.000đ</small>
              </td>
              <td width={200}><input type="number" value="1" /></td>
              <td className={cx("tdRight")} width={200}>500.000đ</td>
              <td width={80} className={cx("tdAction")}>
                <button className={cx("btn", "btn-danger")}>
                  <FontAwesomeIcon icon={faTrash}/>
                </button>
              </td>
            </tr>
           
          </tbody>
        </table>
      </div>

      <div className={cx("total-price")}>
        <table>
          <tbody>
            <tr>
              <td>Tạm tính</td>
              <td>500.000đ</td>
            </tr>
            <tr>
              <td>Thuế</td>
              <td>15.000đ</td>
            </tr>
            <tr>
              <td>Tổng tiền</td>
              <td>515.000đ</td>
            </tr>
            <tr>
              <td>
                <button className={cx("btn", "btn-intermediate")}>Momo</button>
              </td>
              <td>
                <button className={cx("btn", "btn-beginner")}>Thanh toán</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
