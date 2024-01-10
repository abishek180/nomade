import React from "react";
import { TbHierarchy3 } from "react-icons/tb";
import { BiCube } from "react-icons/bi";


const card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-between items-center">
      <div className="group p-[30px] h-full lg:h-[400px] bg-[#fff] dark:bg-black/5 rounded-[16px] hover:bg-[#F87B50] hover:duration-300 shadow-2xl">
        <TbHierarchy3 size={40} color="#E5B250"/>
        <h1 className="text-[#080C2E] text-[16px] lg:text-[22px] font-bold pt-5 group-hover:text-white dark:text-white">
          Chez Nomade Agency
        </h1>
        <p className="text-[#5D5D7C] text-sm lg:text-[16px] font-medium pt-2 group-hover:text-white dark:text-white">
          Nous aidons nos clients à se faire connaitre, développer leur image,
          diffuser leurs offres et services et générer des contacts et des
          ventes.
        </p>
      </div>
      <div className="group p-[30px] h-full lg:h-[400px] bg-[#fff]  dark:bg-black/5 rounded-[16px] hover:bg-[#F87B50] hover:duration-300 shadow-2xl">
        <BiCube size={40} color="#E5B250" />
        <h1 className="text-[#080C2E] text-[16px] lg:text-[22px] font-bold pt-5 group-hover:text-white dark:text-white">
          Chez Nomade Agency
        </h1>
        <p className="text-[#5D5D7C] text-sm lg:text-[16px] font-medium pt-2 group-hover:text-white dark:text-white">
          Nous aidons nos clients à se faire connaitre, développer leur image,
          diffuser leurs offres et services et générer des contacts et des
          ventes.
        </p>
      </div>
      <div className="group p-[30px] h-full lg:h-[400px] bg-[#fff] dark:bg-black/5 rounded-[16px] hover:bg-[#F87B50] hover:duration-300 shadow-2xl">
        <TbHierarchy3 size={40} color="#E5B250" />
        <h1 className="text-[#080C2E] text-[16px] lg:text-[22px] font-bold pt-5 group-hover:text-white dark:text-white">
          Chez Nomade Agency
        </h1>
        <p className="text-[#5D5D7C] text-sm lg:text-[16px] font-medium pt-2 group-hover:text-white dark:text-white">
          Nous aidons nos clients à se faire connaitre, développer leur image,
          diffuser leurs offres et services et générer des contacts et des
          ventes.
        </p>
      </div>
      <div className="group p-[30px] h-full lg:h-[400px] bg-[#fff] dark:bg-black/5 rounded-[16px] hover:bg-[#F87B50] hover:duration-300 shadow-2xl">
        <TbHierarchy3 size={40} color="#E5B250" />
        <h1 className="text-[#080C2E] text-[16px] lg:text-[22px] font-bold pt-5 group-hover:text-white dark:text-white">
          Chez Nomade Agency
        </h1>
        <p className="text-[#5D5D7C] text-sm lg:text-[16px] font-medium pt-2 group-hover:text-white dark:text-white">
          Nous aidons nos clients à se faire connaitre, développer leur image,
          diffuser leurs offres et services et générer des contacts et des
          ventes.
        </p>
      </div>
    </div>
     
  );
};

export default card;
