import { ChevronDown } from "lucide-react";
import { Logo } from "./logo";

export const Navbar = () => {
  return (
    <div className="p-2">
      <div className="flex justify-between items-center">
        <p className="font-bold text-lg">Timetable Generator</p>
        <Logo />
        <div className="flex space-x-2 items-center">
          <span className="text-base font-normal">Account</span>
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  );
};
