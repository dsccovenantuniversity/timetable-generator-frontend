import { CalendarDays, Edit, FileIcon } from "lucide-react";
import { PiExport } from "react-icons/pi";

export const Steps = () => {
  return (
    <div className="flex flex-col space-y-12">
      <h3 className="text-3xl text-left font-bold">Steps to Take</h3>
      <div className="flex space-x-4 items-center justify-center">
        <div className="flex flex-col space-y-4 items-center">
          <div className="flex items-center justify-center p-6 bg-[#414D5C] rounded-full">
            <FileIcon size={40} className="text-white" />
          </div>
          <h3 className="font-semibold text-2xl text-center">Import Files</h3>
          <p className="text-center font-light text-sm w-3/5">
            Choose the file you wish to make a timetable and import your course
            registration.
          </p>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <div className="flex items-center justify-center p-6 bg-[#414D5C] rounded-full">
            <CalendarDays size={40} className="text-white" />
          </div>
          <h3 className="font-semibold text-2xl text-center">
            Generate Timetable
          </h3>
          <p className="text-center font-light text-sm w-3/5">
            Click on the generate button to generate the timetable
          </p>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <div className="flex items-center justify-center p-6 bg-[#414D5C] rounded-full">
            <Edit size={40} className="text-white" />
          </div>
          <h3 className="font-semibold text-2xl text-center">Edit</h3>
          <p className="text-center font-light text-sm w-3/5">
            Customize the timetable to suit your needs.
          </p>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <div className="flex items-center justify-center p-6 bg-[#414D5C] rounded-full">
            <PiExport size={40} className="text-white" />
          </div>
          <h3 className="font-semibold text-2xl text-center">Export</h3>
          <p className="text-center font-light text-sm w-3/5">
            Once done editing export the timetable to any of the formats you
            prefer
          </p>
        </div>
      </div>
    </div>
  );
};
