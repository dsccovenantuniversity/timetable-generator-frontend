import { gdsc } from "@/public/images";
import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src={gdsc}
      alt="logo"
      width={200}
      height={200}
      className="object-cover"
    />
  );
};
