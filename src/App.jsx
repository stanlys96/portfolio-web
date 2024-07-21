/* eslint-disable react/no-unescaped-entities */

import "./App.css";

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

function App() {
  const scrollToTop = useRef(null);
  const location = useLocation();

  useEffect(() => {
    scrollToTop.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }, [location.pathname]);
  return (
    <>
      <div ref={scrollToTop}>
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
      </div>
    </>
  );
}

export default App;
