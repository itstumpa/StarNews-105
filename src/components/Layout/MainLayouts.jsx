// import React from 'react';
import { Outlet } from "react-router";
import LatestNews from "../LatestNews";
import Header from "../Header";
import Navbar from "../Navbar";

const MainLayouts = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <HeroSection></HeroSection> */}
      <header className="">
            <Header></Header>
            <section className="w-11/12 mx-auto my-3">
                  <LatestNews></LatestNews>
            </section>
            <nav className="w-11/12 mx-auto my-3">
                  <Navbar></Navbar>
            </nav>
      </header>
      <main>
            <section className="left_nav"></section>
            <section className="main">
                  
        <Outlet />
            </section>
            <section className="right_nav"></section>
      </main>
    </div>
  );
};

export default MainLayouts;
