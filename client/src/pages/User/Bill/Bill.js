import React from "react";
import style from "./Bill.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(style);
export default function Bill() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("left")}>
        <div className={cx("item")}>
          <div className={cx("action")}>
            <button className={cx("delete")}>XOÁ</button>
          </div>
          <div className={cx("form-img")}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/S%C3%A2n_v%E1%BA%ADn_%C4%91%E1%BB%99ng_Thi%C3%AAn_Tr%C6%B0%E1%BB%9Dng.jpg/1200px-S%C3%A2n_v%E1%BA%ADn_%C4%91%E1%BB%99ng_Thi%C3%AAn_Tr%C6%B0%E1%BB%9Dng.jpg"
              alt=""
            />
          </div>
          <div className={cx("info")}>
            <p className={cx("name-item")}>San bong da</p>
            <p className={cx("item-1")}>Don gia: 50.000d</p>
            <div className={cx("item-2")}>thanh tien: 300.000d</div>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("action")}>
            <button className={cx("delete")}>XOÁ</button>
          </div>
          <div className={cx("form-img")}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/S%C3%A2n_v%E1%BA%ADn_%C4%91%E1%BB%99ng_Thi%C3%AAn_Tr%C6%B0%E1%BB%9Dng.jpg/1200px-S%C3%A2n_v%E1%BA%ADn_%C4%91%E1%BB%99ng_Thi%C3%AAn_Tr%C6%B0%E1%BB%9Dng.jpg"
              alt=""
            />
          </div>
          <div className={cx("info")}>
            <p className={cx("name-item")}>San bong da</p>
            <p className={cx("item-1")}>Don gia: 50.000d</p>
            <div className={cx("item-2")}>thanh tien: 300.000d</div>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("action")}>
            <button className={cx("delete")}>XOÁ</button>
          </div>
          <div className={cx("form-img")}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/S%C3%A2n_v%E1%BA%ADn_%C4%91%E1%BB%99ng_Thi%C3%AAn_Tr%C6%B0%E1%BB%9Dng.jpg/1200px-S%C3%A2n_v%E1%BA%ADn_%C4%91%E1%BB%99ng_Thi%C3%AAn_Tr%C6%B0%E1%BB%9Dng.jpg"
              alt=""
            />
          </div>
          <div className={cx("info")}>
            <p className={cx("name-item")}>San bong da</p>
            <p className={cx("item-1")}>Don gia: 50.000d</p>
            <div className={cx("item-2")}>thanh tien: 300.000d</div>
          </div>
        </div>{" "}
        <div className={cx("item")}>
          <div className={cx("action")}>
            <button className={cx("delete")}>XOÁ</button>
          </div>
          <div className={cx("form-img")}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/S%C3%A2n_v%E1%BA%ADn_%C4%91%E1%BB%99ng_Thi%C3%AAn_Tr%C6%B0%E1%BB%9Dng.jpg/1200px-S%C3%A2n_v%E1%BA%ADn_%C4%91%E1%BB%99ng_Thi%C3%AAn_Tr%C6%B0%E1%BB%9Dng.jpg"
              alt=""
            />
          </div>
          <div className={cx("info")}>
            <p className={cx("name-item")}>San bong da</p>
            <p className={cx("item-1")}>Don gia: 50.000d</p>
            <div className={cx("item-2")}>thanh tien: 300.000d</div>
          </div>
        </div>
      </div>
      <div className={cx("right")}>
        <p className={cx("title")}>HOÁ ĐƠN TẠM TÍNH</p>
        <table>
          <tr>
            <th>Sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
          </tr>
          <tr>
            <td>Sân bóng dá quận 8</td>
            <td>300.000</td>
            <td className={cx("action")}>
              <button className={cx("prev")}>-</button>
              <p className={cx("num")}>1</p>
              <button className={cx("next")}>+</button>
            </td>
            <td>100000</td>
          </tr>
          <tr>
            <td>Sân bóng dá quận 8</td>
            <td>300.000</td>
            <td className={cx("action")}>
              <button className={cx("prev")}>-</button>
              <p className={cx("num")}>1</p>
              <button className={cx("next")}>+</button>
            </td>
            <td>100000</td>
          </tr>
          <tr>
            <td>Sân bóng dá quận 8</td>
            <td>300.000</td>
            <td className={cx("action")}>
              <button className={cx("prev")}>-</button>
              <p className={cx("num")}>1</p>
              <button className={cx("next")}>+</button>
            </td>
            <td>100000</td>
          </tr>
        </table>
        <div className={cx("bottom")}>
          <div className={cx("comment")}>
            <p className={cx("title-commet")}>Ghi chú</p>
            <input type="text" />
          </div>
          <div className={cx("total")}>
            <p className={cx("money")}>
              <strong>Tạm tinh:</strong> 1.550.000
            </p>
            <p className={cx("deposit")}>
              <strong>Tiền cọc(50%):</strong> 600.000
            </p>
            <p className={cx("sale")}>
              <strong>Khuyến mãi:</strong> 0
            </p>
            <p className={cx("money-total")}>
              <strong>Tổng cộng:</strong>
              <p className={cx("red")}>2.150.000</p>
            </p>
          </div>
        </div>{" "}
        <button className={cx("momo")}>THANH TOÁN MOMO</button>
      </div>
    </div>
  );
}
