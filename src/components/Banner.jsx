import React from "react";

const Banner = () => {
  return (
    <div
      className="h-[500px] md:h-[520px] bg-cover bg-center items-end"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/736x/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)",
      }}
    >
      <div className="flex flex-col justify-end h-full ">
        <h1 className="bg-gray-400 bg-opacity-10 text-white px-4 py-2 mt-5 text-center ">
          Avengers: Endgame
        </h1>
      </div>
    </div>
  );
};

export default Banner;
