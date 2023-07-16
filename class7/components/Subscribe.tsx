import React from "react";

export default function Subscribe() {
  return (
    <div className="flex justify-center my-3">
      <div className="flex bg-gray-300 justify-center rounded-md px-6 py-4 w-7/12">
        <input
          type="email"
          className="flex flex-grow border-gray-400 border-2 rounded-md h-10 px-5 "
          placeholder="Email Adress.."
        />
        <button className="bg-green-800 text-white rounded-md px-6 ">
          Subscribe
        </button>
      </div>
    </div>
  );
}
