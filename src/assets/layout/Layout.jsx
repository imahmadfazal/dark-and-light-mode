import { Outlet } from "react-router-dom";
import { Nav } from "../smallcomponents/Nav";

import React from "react";

const Layout = () => {
  return (
    <div>
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
