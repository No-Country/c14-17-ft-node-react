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
        <div className=" flex mt-5 bg-black relative flex-col transition-all duration-100 rounded-xl ml-2  p-5">
          <div className="text-white">
            <div className="flex p-10 gap-2 place-items-center text-xl">
              <Image
                src={"/logo_app.png"}
                width={30}
                height={30}
                alt="logo.png"
              />
              <h2 className="">miFinanz</h2>
            </div>
            <div className="p-10 flex flex-col xl:gap-5 md:gap-5 2xl:gap-10">
              <div className="flex gap-2 text-xl place-items-center cursor-pointer">
                <VscGraph />
                <p onClick={() => handleSetSection("dashboard")}> Dashboard</p>
              </div>
              <div className="flex gap-2 text-xl place-items-center cursor-pointer">
                <BiSolidFolder />
                <p onClick={() => handleSetSection("cards")}>Tarjetas</p>
              </div>
              <div className="flex gap-2 text-xl place-items-center cursor-pointer">
                <BiWindowOpen />
                <p onClick={() => handleSetSection("bills")}>Gastos</p>
              </div>
              <div className="flex gap-2 text-xl place-items-center cursor-pointer">
                <BiImport />
                <p onClick={() => handleSetSection("earnings")}>Ingresos</p>
              </div>
            </div>
            <div
              className={`${
                !open && "hidden"
              } bg-gray-300 xl:w-48 xl:h-60 2xl:h-72  md:h-52 rounded-2xl m-5 flex flex-col  text-gray-600`}
            >
              <div className="flex flex-col gap-4 justify-center items-center text-center">
                <GoEye className="text-8xl" />
                <p className="text-black">Conoce toda las herramientas</p>
                <button className="border border-blue-400	w-32 h-14 text-blue-400 rounded-xl">
                  TUTORIAL
                </button>
              </div>
            </div>
            <div className="flex flex-col items-end relative">
              <i
                className="text-3xl cursor-pointer  h-7 w-7"
                onClick={() => setOpen(false)}
              >
                <BsFillArrowLeftCircleFill />
              </i>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
