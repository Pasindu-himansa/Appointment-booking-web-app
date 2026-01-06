import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Myappoinments = () => {
  const { doctors } = useContext(AppContext);
  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
        My Appointments
      </p>
      <div>
        {doctors.slice(0, 4).map((item, index) => (
          <div
            className="grid grid-col-[1fr_3fr] gap-4 sm:flex sm:gap-6 py-2 borde-b"
            key={index}
          >
            <div>
              <img className="w-32 bg-indigo-50" src={item.image} alt="" />
            </div>
            <div className="flex-1 text-sm text-zinc-600">
              <p className="text-neutral-800 font-semibold">{item.name}</p>
              <p>{item.speciality}</p>
              <p className="text-zinc-700 font-medium mt-1">Address:</p>
              <p className="text-xs">{item.address.line1}</p>
              <p className="text-xs">{item.address.line2}</p>
              <p className="text-xs mt-1">
                <span className="text-sm text-neutral-700 font-medium">
                  Date & Time
                </span>{" "}
                25, July, 2024 | 8:30 pm
              </p>
            </div>
            <div></div>
            <div className="flex flex-col gap-2 justify-end">
              <button className=" bg-blue-600 text-sm text-center text-white w-40 h-11 sm:min-w-18  py-2 text-blue-600 border rounded-full mr-3 hover:bg-blue-400 hover:text-white transition-all duration-300 ">
                Pay Online
              </button>
              <button className=" bg-red-500 text-sm text-center text-white w-40 h-11 sm:min-w-18 text-blue-600  py-2 border rounded-full hover:bg-red-400 hover:text-white transition-all duration-300 ">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myappoinments;
