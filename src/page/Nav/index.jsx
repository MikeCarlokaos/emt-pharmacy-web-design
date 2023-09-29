import React from "react";
import navBg from "../../assets/images/nav-bg.png";
import logo from "../../assets/logo/logo.png";
import searchButton from "../../assets/icons/search.png";
import userLink from "../../assets/icons/user.png";
import basketLink from "../../assets/icons/cart.png";

const Nav = () => {
  return (
    <section className="w-screen">
      <div className="w-full min-w-[20px] flex flex-col">
        <div
          style={{ backgroundImage: `url(${navBg})` }}
          className="w-full gap-5 pb-5 bg-cover flex flex-col justify-between items-center px-16 shrink-0 md:h-24 md:flex-row md:gap-0 md:pb-0"
        >
          <div className="w-30 h-full flex">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src={logo} alt="logo" className="w-32 md:w-full md:h-full" />
            </a>
          </div>
          <div>
            <div className="w-96 flex shrink border rounded-3xl">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search"
                className="w-[90%] h-10 pl-5 justify-center self-center shrink-0 rounded-s-3xl border-1"
              />
              <button
                type="submit"
                className="w-[10%] px-2 bg-primary/70 rounded-e-3xl hover:bg-primary hover:shadow"
              >
                <img src={searchButton} alt="search" />
              </button>
            </div>
          </div>
          <div>
            <ul className="w-30% flex items-center gap-10 px-2">
              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-2"
                >
                  <img
                    src={userLink}
                    alt="account"
                    className="p-px rounded-full group-hover:shadow group-hover:shadow-white"
                  />
                  <span className="capitalize group-hover:text-white">
                    account
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-2"
                >
                  <img
                    src={basketLink}
                    alt="basket"
                    className="p-px group-hover:shadow group-hover:shadow-white"
                  />
                  <span className="text-xl font-bold  group-hover:text-white">
                    0
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <nav className="w-full  bg-primary/10 px-16">
          <ul className="flex">
            <li className="flex w-20 justify-center items-center self-stretch border-x-2 border-primary">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex justify-center items-center text-center p-2 hover:shadow hover:font-bold"
              >
                <span className="capitalize text-sm">home</span>
              </a>
            </li>
            <li className="flex w-20 justify-center items-center self-stretch border-r-2 border-primary">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full  flex justify-center items-center text-center p-2 hover:shadow hover:font-bold"
              >
                <span className="capitalize text-sm">about us</span>
              </a>
            </li>
            <li className="flex w-20 justify-center items-center self-stretch border-r-2 border-primary">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full  flex justify-center items-center text-center p-2 hover:shadow hover:font-bold"
              >
                <span className="capitalize text-sm">shop</span>
              </a>
            </li>
            <li className="flex w-20 justify-center items-center self-stretch border-r-2 border-primary">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full  flex justify-center items-center text-center p-2 hover:shadow hover:font-bold"
              >
                <span className="capitalize text-sm">contacts</span>
              </a>
            </li>
            <li className="flex w-20 justify-center items-center self-stretch border-r-2 border-primary">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full  flex justify-center items-center text-center p-2 hover:shadow hover:font-bold"
              >
                <span className="capitalize text-sm">news</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Nav;
