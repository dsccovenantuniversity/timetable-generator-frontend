import Image from "next/image";
import { Button } from "./ui/button";
import { reading } from "@/public/images";

export const HeroSection = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col space-y-8">
        <h1 className="font-extrabold leading-normal text-4xl capitalize text-start w-3/6">
          Generate Your Personalized Timetable Today
        </h1>
        <p className="font-light text-start w-3/5">
          Efficiently manage your courses with our easy-to-use timetable
          generator.
        </p>
        <div className="flex space-x-8">
          <Button
            variant="default"
            className="bg-green-500 text-white font-semibold p-6 hover:bg-green-500/60"
          >
            Create
          </Button>
          <Button
            variant="outline"
            className="font-semibold py-6 border-[#414D5C] border text-[#414D5C]"
          >
            Learn More
          </Button>
        </div>
      </div>
      <Image
        src={reading}
        alt="hero"
        width={500}
        height={500}
        className="object-cover aspect-square"
      />
    </div>
  );
};
