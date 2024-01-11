import React from "react";
import { useState } from "react";
// import Link from "next/link";
import Image from "next/image";
import logo from "/public/Images/Rectangle.png";
import { TbMenuDeep } from "react-icons/tb";
import Theme from "@/components/theme";
import { MdClose } from "react-icons/md";


export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const menu = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Features",
      href: "#features",
    },
    {
      title: "Services",
      href: "#services",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Contact Us",
      href: "/contact",
    },
  ];

  return (
    <div className="w-full fixed top-0 z-[999] border-b-[1px] border-[#DCE1FD] bg-white/30 backdrop-blur-[20px] backdrop-filter py-[20px]">
      <nav className="flex max-w-screen-xl mx-auto justify-between items-center px-[16px]">
        <div className="w-[80px] h-[46px] lg:w-[112px] lg:h-[46px] flex  justify-center items-center">
          <a href="#home">
            <Image src={logo} className="w-[100%]" alt="logo" />
          </a>
        </div>
        <div className="hidden lg:block dark:text-white">
          <ul className="flex gap-10">
            {menu.map((item, index) => (
              <li className="hover:text-[#F87B50]" key={index}>
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <div className="flex gap-3 justify-center items-center">
            <div>
              <Theme />
            </div>
            <div className="block lg:hidden">
              <TbMenuDeep size={30} onClick={handleNav} />
            </div>
            <button className="rounded-[100px] bg-[#15162F] py-[10px] px-[30px] text-white hover:bg-[#F87B50] dark:bg-white dark:text-black hidden lg:block">
              Get in touch
            </button>
          </div>
        </div>
        <div
          className={
            menuOpen
              ? "fixed left-0 top-0 w-[55%] lg:hidden h-screen bg-[#fff] p-10 ease-in duration-500 shadow-2xl dark:bg-black"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full justify-end items-center">
            <div onClick={handleNav} className=" cursor-pointer dark:text-white">
              <MdClose size={30} />
            </div>
          </div>
          <div>
              <ul className="flex gap-10 text-[22px] flex-col  md:flex md:flex-col md:gap-20 md:text-[24px] dark:text-white">
                {menu.map((item, index) => (
                  <li className="hover:text-[#F87B50]" key={index}>
                    <a href={item.href}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </nav>
    </div>
  );
}
