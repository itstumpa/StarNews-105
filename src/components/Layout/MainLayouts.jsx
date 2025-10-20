// import React from 'react';
import { Outlet } from "react-router";
import LatestNews from "../LatestNews";
import Header from "../Header";
import Navbar from "../Navbar";
import LeftAside from "../HomeLayouts/LeftAside";
import RightAside from "../HomeLayouts/RightAside";

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
      <main className="w-11/12 mx-auto my-3 grid grid-cols-12">
            <aside className="col-span-3">
                  <LeftAside></LeftAside>
            </aside>
            <section className="main col-span-6">
                  
        <Outlet />
            </section>
            <aside className="col-span-3">
                  <RightAside></RightAside>
            </aside>
            
      </main>
    </div>
  );
};

export default MainLayouts;
