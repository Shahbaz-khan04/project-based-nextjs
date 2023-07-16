import React from "react";

function Example16b() {
  return (
    <div className="mx-auto max-w-2xl grid grid-cols-[22rem,1fr]">
      <div className="bg-pink-600 text-white p-5">
        <h1>Sidebar</h1>
        <ul>
          <li className="h-1 bg-pink-400 my-4"></li>
          <li className="h-1 bg-pink-400 "></li>
          <li></li>
        </ul>
      </div>
      <div className="bg-slate-600 p-5">
        <h1>Main Content</h1>
        <p className="h-1 bg-gray-200 my-4"></p>
        <p className="h-1 bg-gray-200 "></p>
      </div>
    </div>
  );
}

export default Example16b;
