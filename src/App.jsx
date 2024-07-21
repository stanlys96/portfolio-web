/* eslint-disable react/no-unescaped-entities */

import "./App.css";

import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
  return (
    <>
      <Aside />
      <div className="main-content">
        <Navbar />
        <section
          style={{
            scrollBehavior: "smooth",
          }}
        >
          <Outlet />
        </section>
      </div>
    </>
  );
}

export default App;
