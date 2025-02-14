import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({pageNo, handleNext,handlePrev}) => {
  return (
    <div className="bg-gray-100 flex justify-center items-center p-4 mt-4 rounded-lg shadow-md">
      <button className="p-2 mx-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300" onClick={handlePrev}>
        <FaArrowLeft />
      </button>
      <span className="mx-3 text-lg font-semibold text-gray-700">{pageNo}</span>
      <button className="p-2 mx-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300" onClick={handleNext}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;