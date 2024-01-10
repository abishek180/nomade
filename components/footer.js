import React from "react";
import logo from "/public/Images/Rectangle.png";
import Image from "next/image";

const footer = () => {
  return (
    <footer>
      <div className="h-[661px] bg-[#070C29] relative">
        <div className="pt-80 max-w-screen-xl mx-auto px-[16px]">
          <div className="w-[80px] h-[46px] lg:w-[112px] lg:h-[46px]">
            <Image src={logo} className="w-[100%]" alt="logo" />
            <p className="text-[#8D90A8] text-[16px] font-medium leading-[28px]">#7th Street, abc , Mauritania North West Africa 425680 </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
