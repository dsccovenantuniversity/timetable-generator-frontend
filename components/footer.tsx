import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <div className="flex flex-col w-full space-y-20">
      <div className="flex justify-between w-full">
        <p className="font-semibold text-lg">Timetable Generator</p>
        <div className="flex space-x-4 items-center"></div>
      </div>
      <Separator orientation="horizontal" />
      <footer className="flex w-full justify-between">
        <p className="font-semibold text-lg">
          ©2023 Timetable Generator. All rights reserved
        </p>
        <div className="flex items-center space-x-10">
          <Link
            href="/privacy-policy"
            className="font-thin text-base hover:text-slate-500"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="font-thin text-base hover:text-slate-500"
          >
            Terms of Service
          </Link>
          <Link
            href="/contact"
            className="font-thin text-base hover:text-slate-500"
          >
            Contact
          </Link>
        </div>
      </footer>
    </div>
  );
};
