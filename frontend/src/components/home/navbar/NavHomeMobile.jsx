import { BiWindowOpen } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSection } from "@/redux/features/activeSectionSlice";
import { BiImport } from "react-icons/bi";
import { BiSolidFolder } from "react-icons/bi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";

export default function NavHomeMobile() {
  const dispatch = useAppDispatch();

  const handleSetSection = (section) => {
    dispatch(setSection(section));
  };
  return (
<<<<<<< HEAD
    <section className="flex fixed lg:hidden z-40 bottom-0 left-0 w-full bg-black rounded-t-lg text-sm">
      <div className="container mx-auto flex justify-between items-center p-4 text-gray-400 gap-2">
        <div className="flex flex-col items-center">
          <BiWindowOpen className="text-xl" />
=======
    <section className="flex fixed lg:hidden z-40 bottom-0 left-0 w-full bg-black dark:bg-mLightGray rounded-t-lg text-sm">
      <div className="container mx-auto flex justify-between items-center p-4 text-gray-400 gap-2">
        <div onClick={() => handleSetSection("dashboard")} className="flex flex-col items-center">
          <VscGraph className="text-xl" />
>>>>>>> 430d6b467ae113c00ddc5cd4620f3dd7a46440ff
          <p>Panel</p>
        </div>
        <div
          onClick={() => handleSetSection("cards")}
          className="flex flex-col items-center cursor-pointer"
        >
<<<<<<< HEAD
          <BiWindowOpen className="text-xl" />
          <p>Cuentas</p>
=======
          <BiSolidFolder className="text-xl" />
          <p>Tarjetas</p>
>>>>>>> 430d6b467ae113c00ddc5cd4620f3dd7a46440ff
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 rounded-full h-10 w-10 flex items-center justify-center">
            <BiPlus className="text-3xl " />
          </div>
          <p>Agregar</p>
        </div>
        <div
          onClick={() => handleSetSection("bills")}
          className="flex flex-col items-center cursor-pointer"
        >
          <BiWindowOpen className="text-xl" />
          <p>Gastos</p>
        </div>
        <div
          onClick={() => handleSetSection("earnings")}
          className="flex flex-col items-center cursor-pointer"
        >
<<<<<<< HEAD
          <BiWindowOpen className="text-xl" />
=======
          <BiImport className="text-xl" />
>>>>>>> 430d6b467ae113c00ddc5cd4620f3dd7a46440ff
          <p>Ingresos</p>
        </div>
      </div>
    </section>
  );
}
