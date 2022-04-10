import React from "react";
import Main from "../../container/Main";

import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto p-2 ">
      <div className="bg-gray-200">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
