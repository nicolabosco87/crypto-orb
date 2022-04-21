import "./Layout.scss";

import { Header } from "../Header/Header";
import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <div
        className="layout__bg"
        style={{
          backgroundImage: "url(ponder.jpg)",
        }}
      ></div>
      {children}
    </div>
  );
};

export default Layout;
