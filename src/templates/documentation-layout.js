import React from "react";

import './documentation-layout.css';
import Nav from "../components/nav";
const Layout = ({children}) => {
  return (
    <div className="container">
      <Nav />
      <main className="main">
      {children}
      </main>
    </div>
  )
}

export default Layout;