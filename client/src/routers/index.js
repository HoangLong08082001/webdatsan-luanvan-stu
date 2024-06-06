import ChiNhanh from "../pages/Admin/ChiNhanh/ChiNhanh";
import DoAn from "../pages/Admin/DoAn/DoAn";
import DungCuYTe from "../pages/Admin/DungCuYTe/DungCuYTe";
import ForgotPassword from "../pages/Admin/ForgotPassword/ForgotPassword";
import HomeAdmin from "../pages/Admin/HomeAdmin/HomeAdmin";
import LoginAdmin from "../pages/Admin/LoginAdmin/LoginAdmin";
import NuocUong from "../pages/Admin/NuocUong/NuocUong";

const AdminRouter = [
  { path: "/admin", component: LoginAdmin },
  { path: "/admin-quen-mat-khau", component: ForgotPassword },
  { path: "/admin-trang-chu", component: HomeAdmin },
  { path: "/admin-chi-nhanh", component: ChiNhanh },
  { path: "/admin-do-an", component: DoAn },
  { path: "/admin-dung-cu-y-te", component: DungCuYTe },
  { path: "/admin-nuoc-uong", component: NuocUong },
];
const UserRouter = [
  { path: "/", component: LoginAdmin },
  { path: "/trang-chu", component: ForgotPassword },
  { path: "/dang-nhap", component: HomeAdmin },
  { path: "/dang-ky", component: HomeAdmin },
];

export { AdminRouter, UserRouter };
