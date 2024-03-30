import Link from "next/link";
import { Button } from "./ui/button";

export const Ready = () => {
  return (
    <div className="flex flex-col space-y-8 py-12">
      <h3 className="font-bold text-3xl text-left">
        Ready to Create Your Own TimeTable
      </h3>
      <Link href="/create">
        <Button
          variant="default"
          className="bg-green-500 text-white font-semibold p-6 hover:bg-green-500/60"
        >
          Create
        </Button>
      </Link>
    </div>
  );
};
