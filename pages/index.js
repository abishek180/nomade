import Page from "@/components/page";
import Image from "next/image";
import png from "/public/Images/Rectangle 3.png";
import png1 from "/public/Images/jcb.jpg";
import png2 from "/public/Images/rectangle2.png";
import png3 from "/public/Images/rectangle3.png";
import png4 from "/public/Images/rectangle4.png";
import Swiper from "@/components/swiper";
import Card from "@/components/card";
import { FiGlobe } from "react-icons/fi";
import { VscProject } from "react-icons/vsc";
import { FaRunning } from "react-icons/fa";
import communication from "/public/Images/communication.svg";
import digital from "/public/Images/digital.svg";
import commercial from "/public/Images/commercial.svg";
import ImageScroll from "@/components/imagescroll";
import Accordian from "@/components/accordian";
import Footer from "@/components/footer";
import React from "react";
import { useRef } from "react";
import Typewrite from "@/components/Typewrite";

export default function Home() {
  const myAppRef = useRef(null);
  return (
    <Page>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-screen-xl mx-auto px-[16px]">
          <div className="flex flex-col justify-center gap-5">
            <p className="flex gap-1 text-[#080C2E] font-semibold text-[10px] lg:text-[16px] dark:text-white">
              <span className="pt-[2px] lg:pt-[6px]">
                <FiGlobe size={10} />{" "}
              </span>
              We host more than 120,000 websites
            </p>
            <h1 className="text-[40px] lg:text-[70px] text-[#080C2E] font-semibold leading-[100%] pt-5 dark:text-white">
              <Typewrite />
            </h1>
            <p className="text-[#5D5D7C] text-[10px] lg:text-[16px] font-medium leading-[20px] pt-3 lg:pt-2">
              Presentations are tools that can be used as lectures, speeches,
              reports, and more it is mostly presented.
            </p>
            <div>
              <button className="rounded-[100px] py-4 px-10 bg-[#E5B250] hover:bg-[#F87B50] text-white dark:bg-white dark:text-black">
                Explore more
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center relative pt-10 md:pt-0 lg:pt-0">
            <Image src={png} alt="image" className="w-full h-full object-cover object-center"/>
            <div className="w-[120px] h-[130px] lg:w-[160px] lg:h-[180px] p-[20px] rounded-[26px] absolute bg-[#fff] -right-3 bottom-7 lg:right-12 lg:bottom-10 flex flex-col justify-center items-center gap-5 dark:text-white">
              <VscProject size={40} color="#E5B250" />
              <p className="text-[20px] lg:text-[30px] font-bold text-center text-[#080C2E] leading-none">
                1230+{" "}
                <span className="text-[#5D5D7C] text-[11px] lg:text-[16px] font-normal">
                  New Projects
                </span>
              </p>
            </div>
            <div className="w-[220px] h-[80px] lg:w-[270px] lg:h-[96px] p-[20px] rounded-[26px] absolute bg-[#fff] -left-3 -top-1 lg:left-12 lg:-top-8 flex justify-center items-center gap-5">
              <FaRunning size={40} color="#E5B250" />
              <p className="text-[16px] lg:text-[20px] font-bold text-center text-[#080C2E]">
                Super Reliable
                <br />
                <span className="text-[#5D5D7C] text-[11px] lg:text-[16px] font-normal">
                  24/7 Always Active
                </span>
              </p>
            </div>
            <div className="rounded-[100px] bg-[#E5B250] absolute p-[8px] lg:p-[20px] -right-4 top-10 lg:right-16 lg:top-10">
              <FiGlobe size={40} color="#fff" />
            </div>
          </div>
        </div>
        <section
          className="h-[100%] max-w-screen-xl mx-auto px-[16px]"
          id="features"
        >
          <h1 className="pt-20 text-[#080C2E] text-[23px] lg:text-[46px] font-semibold text-center dark:text-white">
            Welcome To Digital Agency
          </h1>
          <div className="pt-20">
            <Card />
          </div>
        </section>
        <section
          className="h-[100%] max-w-screen-xl mx-auto px-[16px] flex flex-col justify-center items-center"
          id="services"
        >
          <div className="flex flex-col lg:flex lg:flex-row pt-20 gap-0 lg:gap-20">
            <div className="">
              <Image src={communication} width={500} alt="image" />
            </div>
            <div className="">
              <h1 className="text-[#080C2E] text-[20px] lg:text-[46px] font-semibold dark:text-white leading-normal">
                COMMUNICATION PUBLIQUE
              </h1>
              <div className="pl-5">
                <ul className="ul-list text=[#080C2E] text-[14px] lg:text-[16px] font-normal leading-[32px] dark:text-white">
                  <li>Conseil en communication publique et territorial</li>
                  <li>
                    Conception éditoriale et rédactionnelle (magazine, wobzine,
                    lettre d information.
                  </li>
                  <li>
                    Création graphique et realisation de support d information
                    (ste web.
                  </li>
                  <li>dépliant, plaquette, rapport d activité)</li>
                  <li>ifhvfvwefvrefewfew</li>
                  <li>Identité visuelle, logo et charte graphique</li>
                  <li>Présentation audiovisuelle, vidéo</li>
                  <li>Diffusion online (e-citoyenneté)</li>
                  <li>Campagne d interêt genéral, concertation publique</li>
                  <li>Assistance à maitrise d ouvrage (AMO)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex lg:flex-row pt-20 gap-10 lg:gap-20">
            <div className="">
              <h1 className="text-[#080C2E] text-[20px] lg:text-[46px] font-semibold dark:text-white leading-normal">
                COMMUNICATION DIGITALE
              </h1>
              <div className="pl-5">
                <ul className="ul-list text=[#080C2E] text-[14px] lg:text-[16px]  font-normal leading-[32px] dark:text-white">
                  <li>Conseil en communication publique et territorial</li>
                  <li>
                    Conception éditoriale et rédactionnelle (magazine, wobzine,
                    lettre d’information.
                  </li>
                  <li>
                    Création graphique et realisation de support d information
                    (ste web.
                  </li>
                  <li>dépliant, plaquette, rapport d activité)</li>
                  <li>ifhvfvwefvrefewfew</li>
                  <li>Identité visuelle, logo et charte graphique</li>
                  <li>Présentation audiovisuelle, vidéo</li>
                  <li>Diffusion online (e-citoyenneté)</li>
                  <li>Campagne d interêt genéral, concertation publique</li>
                  <li>Assistance à maitrise d ouvrage (AMO)</li>
                </ul>
              </div>
            </div>
            <div className="">
              <Image src={digital} width={400} alt="image" />
            </div>
          </div>
          <div className="flex flex-col lg:flex lg:flex-row pt-20 gap-10 lg:gap-20">
            <div className="">
              <Image src={commercial} width={400} alt="image" />
            </div>
            <div className="">
              <h1 className="text-[#080C2E] text-[20px] lg:text-[46px] font-semibold dark:text-white leading-normal">
                COMMUNICATION COMMERCIALE
              </h1>
              <div className="pl-5">
                <ul className="ul-list text=[#080C2E] text-[14px] lg:text-[16px] font-normal leading-[32px] dark:text-white">
                  <li>Conseil en communication publique et territorial</li>
                  <li>
                    Conception éditoriale et rédactionnelle (magazine, wobzine,
                    lettre d’information.
                  </li>
                  <li>
                    Création graphique et realisation de support d information
                    (ste web.
                  </li>
                  <li>dépliant, plaquette, rapport d activité)</li>
                  <li>ifhvfvwefvrefewfew</li>
                  <li>Identité visuelle, logo et charte graphique</li>
                  <li>Présentation audiovisuelle, vidéo</li>
                  <li>Diffusion online (e-citoyenneté)</li>
                  <li>Campagne d interêt genéral, concertation publique</li>
                  <li>Assistance à maitrise d ouvrage (AMO)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section
          className="h-[100%] max-w-screen-xl mx-auto px-[16px] pt-20"
          id="projects"
        >
          <div className="flex flex-col justify-center items-center pb-10">
            <p className="text-[#080C2E] text-[23px] lg:text-[46px] font-semibold text-center dark:text-white">
              Project Completed
            </p>
            <p className="w-full lg:w-[439px] text-[#5D5D7C] text-sm lg:text-[16px] font-medium lg:leading-8 text-center">
              Nomade Agency transcende les frontières sectorielles, collaborant
              avec des entreprises de divers horizons.
            </p>
          </div>
          <Swiper />
        </section>
        <div className="w-full h-auto lg:h-[322px] bg-[#303553] flex items-center dark:bg-black overflow-hidden">
          <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center max-w-screen-xl mx-auto pt-20  px-[16px] py-20 gap-10 lg:gap-[125px] overflow-hidden">
            <div className="w-[250px] lg:w-[336px] h-[151px] mor relative flex flex-col justify-center items-center">
              <h1 className="text-[50px] lg:text-[48px] font-bold leading-[96px] text-[#fff] hover:text-[#E5B250]">
                100+
              </h1>
              <p className="text-[16px] lg:text-[24px] font-normal leading-8 text-[#ccc] hover:text-[#E5B250]">
                Clients
              </p>
              <div className="w-[80px] h-[94px] bg-[#303553] dark:bg-black absolute rotate-45 -bottom-[43px] -right-[36px] bl"></div>
            </div>
            <div className="w-[250px] lg:w-[336px] h-[151px] mor relative flex flex-col justify-center items-center">
              <h1 className="text-[50px] lg:text-[48px] font-bold leading-[96px] text-[#fff] hover:text-[#E5B250]">
                +80%
              </h1>
              <p className="text-[16px] lg:text-[24px] font-normal leading-8 text-[#ccc] hover:text-[#E5B250]">
                Completed
              </p>
              <div className="w-[80px] h-[95px] bg-[#303553] dark:bg-black absolute rotate-45 -bottom-[43px] -right-[36px] bl"></div>
            </div>
            <div className="w-[250px] lg:w-[336px] h-[151px] mor relative flex flex-col justify-center items-center sm:mb-20 md:mb-0 lg:mb-0">
              <h1 className="text-[50px] lg:text-[48px] font-bold leading-[96px] text-[#fff] hover:text-[#E5B250]">
                1230+
              </h1>
              <p className="text-[16px] lg:text-[24px] font-normal leading-8 text-[#ccc] hover:text-[#E5B250]">
                New Project
              </p>
              <div className="w-[80px] h-[95px] bg-[#303553] dark:bg-black absolute rotate-45 -bottom-[43px] -right-[36px] bl"></div>
            </div>
          </div>
        </div>
        <div className="h-[100%] pt-10 max-w-screen-xl mx-auto px-[16px]">
          <div>
            <ImageScroll />
          </div>
        </div>
        <div className="h-[100%] pt-20 max-w-screen-xl mx-auto px-[16px] flex flex-col gap-10">
          <div className="">
            <p className="text-[#080C2E] text-[23px] lg:text-[46px] font-bold dark:text-white">
              Recent Projects
            </p>
            <p className="text-[#080C2E] text-[14px] lg:text-[16px] font-normal dark:text-white">
              Nomade Agency transcende les frontières sectorielles, collaborant
              avec des entreprises de divers horizons. Notre adaptabilité et
              notre expertise s étendent audelà des limites industrielles,
              créant des synergies uniques. Que vous soyez dans la technologie,
              la finance, ou d autres secteurs, notre agilité nous permet de
              naviguer avec succès à travers une variété de domaines. En
              associant une approche polyvalente à une compréhension
              approfondie, nous nous positionnons comme le partenaire idéal pour
              accompagner votre entreprise vers de nouveaux horizons. Chez
              Nomade Agency, la diversité des secteurs n est pas un défi, c est
              une opportunité.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="h-full p-2 lg:h-[252.679px] shadow-2xl flex flex-col justify-center items-center gap-5 border-2 border-[#fff] hover:border-2 hover:border-[#F87B50] hover:duration-300 rounded-[21px] dark:border-black dark:bg-white/15">
              <div className="w-full rounded-[21px] overflow-hidden">
                <Image
                  src={png1}
                  className=" object-cover object-center w-full h-full"
                  alt="image"
                />
              </div>
              <div className="flex justify-center items-center">
                <p className="text-center text-[#080C2E] text-[16px] font-bold dark:text-white">
                  SPOT ONUDC
                </p>
              </div>
            </div>
            <div className="h-full p-2 lg:h-[252.679px] shadow-2xl flex flex-col justify-center items-center gap-5 border-2 border-[#fff] hover:border-2 hover:border-[#F87B50] hover:duration-300 rounded-[21px] dark:border-black dark:bg-white/15">
              <div className="w-full rounded-[21px] overflow-hidden">
                <Image
                  src={png2}
                  className=" object-cover object-center w-full h-full"
                  alt="image"
                />
              </div>
              <div className="flex justify-center items-center">
                <p className="text-center text-[#080C2E] text-[16px] font-bold dark:text-white">
                  SPOT AMC TRAVAUX
                </p>
              </div>
            </div>
            <div className="h-full p-2 lg:h-[252.679px] shadow-2xl flex flex-col justify-center items-center gap-5 border-2 border-[#fff] hover:border-2 hover:border-[#F87B50] hover:duration-300 rounded-[21px] dark:border-black dark:bg-white/15">
              <div className="w-full rounded-[21px] overflow-hidden">
                <Image
                  src={png3}
                  className=" object-cover object-center w-full h-full"
                  alt="image"
                />
              </div>
              <div className="flex justify-center items-center">
                <p className="text-center text-[#080C2E] text-[16px] font-bold dark:text-white">
                  SPOT EIFFAGE
                </p>
              </div>
            </div>
            <div className="h-full p-2 lg:h-[252.679px] shadow-2xl flex flex-col justify-center items-center gap-5 border-2 border-[#fff] hover:border-2 hover:border-[#F87B50] hover:duration-300 rounded-[21px] dark:border-black dark:bg-white/15">
              <div className="w-full rounded-[21px] overflow-hidden">
                <Image
                  src={png4}
                  className=" object-cover object-center w-full h-full"
                  alt="image"
                />
              </div>
              <div className="flex justify-center items-center">
                <p className="text-center text-[#080C2E] text-[16px] font-bold dark:text-white">
                  SPOT RIMGAZ
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[100%] pt-20 max-w-screen-xl mx-auto px-[16px] flex flex-col gap-10">
          <div>
            <p className="text-[#080C2E] text-[23px] lg:text-[46px] font-normal text-center dark:text-white">
              LA RECETTE EN MOINS DE SEPT
            </p>
          </div>
          <div>
            <Accordian />
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-[16px]">
          <div className="flex gap-5 justify-between bg-[#F87B50] h-auto lg:h-[465px] w-[calc(100%_-_5%)] mx-auto relative -bottom-[200px] rounded-[16px] z-30 p-[50px]">
            <div className="flex flex-col gap-8">
              <p className="flex gap-1 text-[16px] text-[#080C2E] font-semibold bg-[#fff] py-2 px-4 rounded-[16px]">
                <span className="pt-[2px]">
                  <FiGlobe size={20} />
                </span>
                More than 1000+ clients worldwide
              </p>
              <div>
                <p className="text-[#fff] text-[36px] lg:text-[46px] font-semibold">
                  Start Growing Today
                </p>
                <p className="w-auto h-auto lg:w-[437px] lg:h-[67px] text-[#fff] text-[12px] lg:text-[16px] font-medium leading-8">
                  We provide a variety of servers to grow your users acquisition
                  much user-friendly and boosting up sales.
                </p>
              </div>
              <div className="pt-3">
                <button className="rounded-[100px] py-4 px-10 bg-[#E5B250] hover:bg-[#F87B50] font-bold text-[#080C2E] dark:bg-white dark:text-black">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-3 gap-6">
                <div className="py-14 px-14 bg-[#fff] rounded-[26px]">
                  <FiGlobe size={40} />
                </div>
                <div className="py-14 px-14 bg-[#fff] rounded-[26px]">
                  <FiGlobe size={40} />
                </div>
                <div className="py-14 px-14 bg-[#fff] rounded-[26px]">
                  <FiGlobe size={40} />
                </div>
                <div className="py-14 px-14 bg-[#fff] rounded-[26px]">
                  <FiGlobe size={40} />
                </div>
                <div className="py-14 px-14 bg-[#fff] rounded-[26px]">
                  <FiGlobe size={40} />
                </div>
                <div className="py-14 px-14 bg-[#fff] rounded-[26px]">
                  <FiGlobe size={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </Page>
  );
}
