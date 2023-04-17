import { Outlet, Link } from "react-router-dom";

import Header from "./Header";
import SideBar from "./Sidebar";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <footer>Footer</footer>
      <SideBar />
    </>
  );
}

export default Layout;
