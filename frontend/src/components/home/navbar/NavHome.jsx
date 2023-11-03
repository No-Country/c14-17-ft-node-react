"use client";
import { use, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSection } from "@/redux/features/activeSectionSlice";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import NavHomeClose from "./NavHomeClose";

import { VscGraph } from "react-icons/vsc";
import { GoEye } from "react-icons/go";
import { BiSolidFolder } from "react-icons/bi";
import { BiWindowOpen } from "react-icons/bi";
import { BiImport } from "react-icons/bi";
import Image from "next/image";
import logo from "@/assets/shared/logo.png";
import NavHomeMobile from "./NavHomeMobile";

export default function NavHome() {
  const [open, setOpen] = useState(true);
  const dispatch = useAppDispatch();

  const handleSetSection = (section) => {
    dispatch(setSection(section));
  };
  return (
    <section className="flex flex-col">
      {!open ? (
        <NavHomeClose handleSetSection={handleSetSection} setOpen={setOpen} />
      ) : (
        <div className=" lg:flex mt-5 lg:h-[36rem] 2xl:h-[50rem] xl:h-[40rem] dark:bg-mLightGray bg-black relative flex-col transition-all duration-100 rounded-xl hidden ml-2 p-3 ">
          <div className="text-white">
            <div className="flex p-10 gap-2 place-items-center text-xl">
              <Image src={logo} width={30} height={30} alt="logo.png" />
              <h2 className="">miFinanz</h2>
            </div>
            <div className="xl:p-10 lg:p-5 flex flex-col xl:gap-4 md:gap-5 2xl:gap-10">
              <div
                onClick={() => handleSetSection("dashboard")}
                className="flex gap-2 text-xl place-items-center cursor-pointer"
              >
                <VscGraph />
                <p>Panel</p>
              </div>
              <div
                onClick={() => handleSetSection("cards")}
                className="flex gap-2 text-xl place-items-center cursor-pointer"
              >
                <BiSolidFolder />
                <p>Tarjetas</p>
              </div>
              <div
                onClick={() => handleSetSection("bills")}
                className="flex gap-2 text-xl place-items-center cursor-pointer"
              >
                <BiWindowOpen />
                <p>Gastos</p>
              </div>
              <div
                onClick={() => handleSetSection("earnings")}
                className="flex gap-2 text-xl place-items-center cursor-pointer"
              >
                <BiImport />
                <p>Ingresos</p>
              </div>
            </div>
            <div className="bg-gray-300 xl:w-48 xl:h-52 2xl:h-72 xl md:h-52 rounded-2xl m-5 flex flex-col  text-gray-600 lg:h-[10rem]">
              <div className="flex flex-col gap-4 justify-center items-center text-center ">
                <GoEye className="2xl:text-8xl xl:text-7xl lg:text-6xl " />
                <p className="text-black xl:text-lg lg:text-sm">
                  Conoce toda las herramientas
                </p>
                <button className="border border-blue-400	w-32 xl:text-lg lg:h-8 xl:w-28  xl:h-14 lg:w-24 h-14 text-blue-400 rounded-xl lg:text-sm">
                  TUTORIAL
                </button>
              </div>
            </div>
            <div className="flex flex-col items-end relative">
              <i
                className="text-3xl cursor-pointer   h-7 w-7"
                onClick={() => setOpen(false)}
              >
                <BsFillArrowLeftCircleFill />
              </i>
            </div>
          </div>
        </div>
      )}
      <NavHomeMobile />
    </section>
  );
}
