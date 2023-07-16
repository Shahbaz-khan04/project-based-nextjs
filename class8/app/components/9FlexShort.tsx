import React from "react";

const FlexShortProperty = () => {
  return (
    <div className="my-8">
      <div className="flex mx-6 gap-x-6">
        <div className=" bg-orange-700">box1</div>
        <div className="flex-1 w-32 bg-slate-800">box1</div>
        <div className="flex-1 w-64  bg-red-700">box1</div>
      </div>
      <div>Hello</div>
      <div className="flex mx-6 gap-x-6">
        <div className=" bg-orange-700">box1</div>
        <div className="flex-auto w-32 bg-slate-800">box1</div>
        <div className="flex-auto w-64 bg-red-700">box1</div>
      </div>
      <div>Hello</div>
      <div className="flex mx-6 gap-x-6">
        <div className=" bg-orange-700">box1</div>
        <div className="flex-initial w-40 bg-slate-800">box1</div>
        <div className="flex-initial w-80 bg-red-700">box1</div>
      </div>
    </div>
  );
};

export default FlexShortProperty;
