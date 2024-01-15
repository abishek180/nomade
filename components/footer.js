import React from "react";
import logo from "/public/Images/Rectangle.png";
import Image from "next/image";
import { IoMailOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { FiGlobe } from "react-icons/fi";
import { TfiVideoClapper } from "react-icons/tfi";
import { useRouter } from 'next/router';
import Link from "next/link";


const Footer = () => {
  const router = useRouter();
  const pathname = router.pathname;
  console.log(pathname);
  return (
    <footer>
      <div className="bg-[#070C29] relative">
        <div className={`${pathname === '/contact'? "pt-20" : "pt-80"} max-w-screen-xl mx-auto px-[16px]`}>
          <div className="flex flex-col gap-[250px] lg:flex-row justify-between">
            <div className="w-[80px] h-[46px] lg:w-[112px] lg:h-[46px] flex flex-col gap-12">
              <Image src={logo} className="w-[100%]" alt="logo" />
              <p className="w-[250px] h-[56px] text-[#8D90A8] text-[16px] font-medium leading-[28px]">
                #7th Street, abc , Mauritania North West Africa 425680{" "}
              </p>
              <div className="flex gap-5">
                <div className="rounded-[100px] p-[10px] bg-[#fff] hover:bg-[#F87B50] hover:duration-300">
                  <IoMailOutline color="#E5B250" size={24} />
                </div>
                <div className="rounded-[100px] p-[10px] bg-[#fff] hover:bg-[#F87B50] hover:duration-300">
                  <LuPhone color="#E5B250" size={24} />
                </div>
                <div className="rounded-[100px] p-[10px] bg-[#fff] hover:bg-[#F87B50] hover:duration-300">
                  <FiGlobe color="#E5B250" size={24} />
                </div>
                <div className="rounded-[100px] p-[10px] bg-[#fff] hover:bg-[#F87B50] hover:duration-300">
                  <TfiVideoClapper color="#E5B250" size={24} />
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-60 pr-0 lg:pr-40">
              <div className="flex flex-col gap-5 lg:gap-[30px]">
                <p className="text-[#fff] text-[18px] font-bold leading-normal">
                  <Link href="/">Home</Link>
                </p>
                <p className="text-[#8D90A8] text-[16px] font-medium leading-normal hover:text-[#fff]">
                  <Link href="/">Services</Link>
                </p>
                <p className="text-[#8D90A8] text-[16px] font-medium leading-normal hover:text-[#fff]">
                  <Link href="/">FAQ</Link>
                </p>
                <p className="text-[#8D90A8] text-[16px] font-medium leading-normal hover:text-[#fff]">
                  <Link href="/">Auto-Backup</Link>
                </p>
                <p className="text-[#8D90A8] text-[16px] font-medium leading-normal hover:text-[#fff]">
                  Contact
                </p>
              </div>
              <div className="flex flex-col gap-5 lg:gap-[30px]">
                <p className="text-[#fff] text-[18px] font-bold leading-normal">
                   <Link href="/">Company</Link>
                </p>
                <p className="text-[#8D90A8] text-[16px] font-medium leading-normal hover:text-[#fff]">
                   <Link href="/">Privacy and Policy</Link>
                </p>
                <p className="text-[#8D90A8] text-[16px] font-medium leading-normal hover:text-[#fff]">
                   <Link href="/">Terms and Conditions</Link>
                </p>
                <p className="text-[#8D90A8] text-[16px] font-medium leading-normal hover:text-[#fff]">
                   <Link href="/">Join With Us</Link>
                </p>
                <p className="text-[#8D90A8] text-[16px] font-medium leading-normal hover:text-[#fff]">
                   <Link href="/">Our Statistics</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center pt-[50px] pb-[20px]">
            <p className="text-[#61647D] text-[12px] lg:text-[16px] font-medium">All Rights Reserved • Copyright Weserve by Nomade Agency  2024 in India</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
