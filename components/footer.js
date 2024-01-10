import React from "react";
import logo from "/public/Images/Rectangle.png"
import Image from "next/image";

const footer = () => {
  return (
    <footer>
      <div className="h-[661px] bg-[#070C29] relative">
       <div className="pt-80">
       <div className="w-[80px] h-[46px] lg:w-[112px] lg:h-[46px] flex  justify-center items-center">
          
          <Image src={logo} className="w-[100%]" alt="logo" />
          <p>sugfudshvdfgvfvfdavdfv xcvxcvx</p>
        
      </div>
       </div>
      </div>
    </footer>
  );
};

export default footer;
