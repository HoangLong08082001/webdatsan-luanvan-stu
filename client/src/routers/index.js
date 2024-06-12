import ChiNhanh from "../pages/Admin/ChiNhanh/ChiNhanh";
import DoAn from "../pages/Admin/DoAn/DoAn";
import DungCuTheThao from "../pages/Admin/DungCuTheThao/DungCuTheThao";
import DungCuYTe from "../pages/Admin/DungCuYTe/DungCuYTe";
import ForgotPassword from "../pages/Admin/ForgotPassword/ForgotPassword";
import HomeAdmin from "../pages/Admin/HomeAdmin/HomeAdmin";
import LoginAdmin from "../pages/Admin/LoginAdmin/LoginAdmin";
import NuocUong from "../pages/Admin/NuocUong/NuocUong";
import San from "../pages/Admin/San/San";
import BadmintonPages from "../pages/User/BadmintonPages/BadmintonPages";
import BasketballPages from "../pages/User/BasketballPages/BasketballPages";
import Bill from "../pages/User/Bill/Bill";
import Branch from "../pages/User/Branch/Branch";
import Category from "../pages/User/Category/Category";
import Details from "../pages/User/Details/Details";
import Drinks from "../pages/User/Drinks/Drinks";
import Foods from "../pages/User/Foods/Foods";
import FootballPages from "../pages/User/FootballPages/FootballPages";
import Forgot from "../pages/User/Forgot/Forgot";
import Home from "../pages/User/Home/Home";
import LoginUser from "../pages/User/LoginUser/LoginUser";
import Medical from "../pages/User/Medical/Medical";
import RegisterUser from "../pages/User/RegisterUser/RegisterUser";
import Sport from "../pages/User/Sport/Sport";
import TennisPages from "../pages/User/TennisPages/TennisPages";

const AdminRouter = [
  { path: "/admin", component: LoginAdmin },
  { path: "/admin-quen-mat-khau", component: ForgotPassword },
  { path: "/admin-trang-chu", component: HomeAdmin },
  { path: "/admin-chi-nhanh", component: ChiNhanh },
  { path: "/admin-do-an", component: DoAn },
  { path: "/admin-dung-cu-y-te", component: DungCuYTe },
  { path: "/admin-dung-cu-the-thao", component: DungCuTheThao },
  { path: "/admin-nuoc-uong", component: NuocUong },
  { path: "/admin-san", component: San },
];
const UserRouter = [
  { path: "/", component: Home },
  { path: "/trang-chu", component: Home },
  { path: "/dang-nhap", component: LoginUser },
  { path: "/dang-ky", component: RegisterUser },
  { path: "/quen-mat-khau", component: Forgot },
  { path: "/do-an", component: Foods },
  { path: "/nuoc-uong", component: Drinks },
  { path: "/loai-san", component: Category },
  { path: "/chi-tiet", component: Details },
  { path: "/san-bong-da", component: FootballPages },
  { path: "/san-bong-ro", component: BasketballPages },
  { path: "/san-cau-long", component: BadmintonPages },
  { path: "/san-tennis", component: TennisPages },
  { path: "/thanh-toan", component: Bill },
  { path: "/chi-nhanh", component: Branch },
  { path: "/dung-cu-y-te", component: Medical },
  { path: "/dung-cu-the-thao", component: Sport },
];

export { AdminRouter, UserRouter };
