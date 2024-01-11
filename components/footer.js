import React from "react";
import logo from "/public/Images/Rectangle.png";
import Image from "next/image";
import { IoMailOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { FiGlobe } from "react-icons/fi";
import { TfiVideoClapper } from "react-icons/tfi";
import { useRouter } from 'next/router';


const Footer = () => {
  const router = useRouter();
  const pathname = router.pathname;
  console.log(pathname);
  return (
    <footer>
      <div className="bg-[#070C29] relative">
        <div className={`${pathname === '/contact'? "py-20" : "pt-80"} max-w-screen-xl mx-auto px-[16px]`}>
          <div className="flex flex-col gap-[250px] lg:flex-row justify-between">
            <div className="w-[80px] h-[46px] lg:w-[112px] lg:h-[46px] flex flex-col gap-12">
              <Image src={logo} className="w-[100%]" alt="logo" />
              <p className="w-[250px] h-[56px] text-[#8D90A8] text-[16px] font-medium leading-[28px]">
                #7th Street, abc , Mauritania North West Africa 425680{" "}
              </p>
              <div className="flex gap-5">
                <div className="rounded-[100px] p-[10px] bg-[#fff]">
                  <IoMailOutline color="#E5B250" size={24} />
                </div>
                <div className="rounded-[100px] p-[10px] bg-[#fff]">
                  <LuPhone color="#E5B250" size={24} />
                </div>
                <div className="rounded-[100px] p-[10px] bg-[#fff]">
                  <FiGlobe color="#E5B250" size={24} />
                </div>
                <div className="rounded-[100px] p-[10px] bg-[#fff]">
                  <TfiVideoClapper color="#E5B250" size={24} />
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-60 pr-0 lg:pr-40">
              <div className="flex flex-col gap-5 lg:gap-[30px]">
                <p className="text-[#fff] text-[18px] font-bold leading-normal">
                  Home
                </p>
                <p className="text-[#8D90A8] text-[16px] font-medium leading-normal">
                  Services
                </p>
                <p className="text-[#8D90A8] text-[16px] font-medium leading-normal">
                  FAQ
                </p>
                <p className="text-[#8D90A8] text-[16px] font-medium leading-normal">
                  Auto-Backup
                </p>
                <p className="text-[#8D90A8] text-[16px] font-medium leading-normal">
                  Contact
                </p>
              </div>
              <div className="flex flex-col gap-5 lg:gap-[30px]">
                <p className="text-[#fff] text-[18px] font-bold leading-normal">
                  Company
                </p>
                <p className="text-[#8D90A8] text-[16px] font-medium leading-normal">
                  Privacy and Policy
                </p>
                <p className="text-[#8D90A8] text-[16px] font-medium leading-normal">
                  Terms and Conditions
                </p>
                <p className="text-[#8D90A8] text-[16px] font-medium leading-normal">
                  Join With Us
                </p>
                <p className="text-[#8D90A8] text-[16px] font-medium leading-normal">
                  Our Statistics
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
