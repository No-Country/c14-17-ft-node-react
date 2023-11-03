import { VscGraph } from "react-icons/vsc";
import { BsArrowRepeat } from "react-icons/bs";
import Image from "next/image";
import { BiImport } from "react-icons/bi";
import { BiWindowOpen } from "react-icons/bi";
import { BiSolidFolder } from "react-icons/bi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import logo from "@/assets/shared/logo.png";

export default function NavHomeClose({ handleSetSection, setOpen }) {
  return (
    <section className="lg:flex  flex-col   h-[52rem] mt-4 dark:bg-mLightGray bg-black w-20 text-white rounded-xl ml-2 py-5 hidden justify-between">
      <div className="flex justify-center items-center">
        <Image src={logo} width={35} height={35} alt="logo.png" />
      </div>

      <div className="flex flex-col justify-center items-center gap-7 p-10 text-2xl">
        <div className="cursor-pointer">
          <VscGraph onClick={() => handleSetSection("dashboard")} />
        </div>
        <div className="cursor-pointer">
          <BiSolidFolder onClick={() => handleSetSection("cards")} />
        </div>
        <div className="cursor-pointer">
          <BiWindowOpen onClick={() => handleSetSection("bills")} />
        </div>
        <div className="cursor-pointer">
          <BiImport onClick={() => handleSetSection("earnings")} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-7 pt-10 text-2xl">
        <div className="text-2xl cursor-pointer h-7 w-7 ml-16 pl-2">
          <BsFillArrowRightCircleFill onClick={() => setOpen(true)} />
        </div>
      </div>
    </section>
  );
}
