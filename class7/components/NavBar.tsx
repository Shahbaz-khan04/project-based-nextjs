import React from "react";

export default function NavBar() {
  return (
    <div className="flex bg-gray-800 text-gray-300 text-xl justify-end ">
      <div className="px-2 m-4 hover:scale-125 ">Home</div>
      <div className="px-2 m-4 hover:scale-125 ">About</div>
      <div className="px-2 m-4 hover:scale-125 ">Contact</div>
    </div>
  );
}
