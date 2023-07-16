import Link from "next/link";
import React from "react";
// Icons imported from react icons website by first downloading it through npm
import { GoKebabHorizontal } from "react-icons/go"; // kebab-->search tags
import { FaRegComment } from "react-icons/fa"; // comment
import { FaRetweet } from "react-icons/fa"; // retweet
import { AiOutlineHeart } from "react-icons/ai"; // Heart
import { BsUpload } from "react-icons/bs"; // upload
import { FiBarChart2 } from "react-icons/fi"; // chart

export default function Tweet() {
  return (
    // Main div for Tweet rectangle box
    // It conatains 2 child elements, the profile pic and everything else
    <div className="flex my-5 p-3 mx-auto max-w-xl border bg-white ">
      {/* This is the profile pic */}
      <img
        src="/vercel.svg"
        alt="next logo"
        className="rounded-full h-12 w-12 mr-3"
      />
      {/* This is the div that will contain everything else */}
      <div className="w-full">
        {/* this is the flexbox with name, handle, date and kabab icon*/}
        <div className="flex">
          <div className="flex">
            <Link href="https://twitter.com/heyhira1">
              <strong className="text-gray-900 mr-1">Hira Khan</strong>
              <span className="text-gray-500 mr-1">@heyhira1</span>
            </Link>
            <span className="text-gray-500 mr-1">&middot;</span>
            <span className="text-gray-500 mr-1">May 5</span>
          </div>
          {/* This is kebab icon */}
          <div className="ml-auto">
            <GoKebabHorizontal />
          </div>
        </div>
        {/* This is a div that contains tweet text */}
        <div>
          “You must be the change you wish to see in the world.”
          <br /> — Gandhi.
        </div>
        {/* This is a flexbox that contains all the action buttons*/}
        <div className="flex justify-between mt-3">
          <div className="flex items-center text-gray-600">
            <FaRegComment className="mr-2" />
            <span>20</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaRetweet className="mr-2" />
            <span>17</span>
          </div>
          <div className="flex items-center text-gray-600">
            <AiOutlineHeart className="mr-2" />
            <span>215</span>
          </div>
          <div className="flex items-center text-gray-600">
            <BsUpload className="mr-2" />
          </div>
          <div className="flex items-center text-gray-600">
            <FiBarChart2 className="mr-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
