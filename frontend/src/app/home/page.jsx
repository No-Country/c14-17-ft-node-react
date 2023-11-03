"use client";
import Profile from "@/components/home/dropProfile/Profile";
import AddTransaction from "@/components/home/billsAndEarnings/AddTransaction";
import CreditCard from "@/components/views/CreditCard";
import Dashboard from "@/components/views/Dashboard";
import { useAppSelector } from "@/redux/hooks";
import Bill from "@/components/views/Bill";
import Earning from "@/components/views/Earning";

const AppHome = () => {
  const activeSection = useAppSelector(
    (state) => state?.activeSection?.activeSection || "exception"
  );
  switch (activeSection) {
    case "dashboard":
      return (
        <div className="w-full ">
          <Dashboard />
        </div>
      );
    case "cards":
      return (
        <div className="w-full ">
          <CreditCard />
        </div>
      );
    case "bills":
      return (
        <div className="w-full">
          <Bill />
        </div>
      );
    case "earnings":
      return (
        <div className="w-full ">
          <Earning />
        </div>
      );
    case "addTransaction":
      return (
        <div className=" w-full ">
          <AddTransaction />
        </div>
      );
    case "profile":
      return (
        <div className="w-full ">
          <Profile />
        </div>
      );
    case "exception":
      return (
        <div className="w-full ">
          <Dashboard />
        </div>
      );
    default:
      return (
        <div className="w-full ">
          <Dashboard />
        </div>
      );
  }
};

export default AppHome;
