import React from "react";
import { data } from "../../data/Ex18b";
import Link from "next/link";

function Example18b() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 m-9 p-3 gap-x-3 gap-y-6 bg-gray-200">
      {data.map((data, index) => (
        <div key={index} className="bg-white">
          <img
            src={data.image_Link}
            alt="Random Picsum Image"
            className="rounded-t-lg object-cover h-28 w-full"
          />
          <div className="py-3 px-3">
            <h1 className="font-bold text-lg">Hello</h1>
            <p className="py-2 ">{data.content}</p>
            <Link className="font-bold text-purple-600" href="#">
              Read more
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Example18b;
