import React from "react";

const Pricing = () => {
  return (
    <div className="flex bg-zinc-200 p-6 rounded-lg mx-40 shadow-xl gap-x-6">
      <div className="basis-1/3 p-4 bg-white rounded-lg shadow-md">
        <h1 className="font-black text-2xl">Standard</h1>
        <h2>Monthly Plan</h2>
        <h1 className="font-black text-4xl mt-6">$25</h1>
      </div>
      <div className="basis-1/3 p-4 text-white bg-rose-600 rounded-lg">
        <h1 className="font-black text-2xl">Popular</h1>
        <h2>Monthly Plan</h2>
        <h1 className="font-black text-4xl mt-6">$40</h1>
      </div>
      <div className="basis-1/3 p-4 bg-white rounded-lg shadow-md">
        <h1 className="font-black text-2xl">Premium</h1>
        <h2>Monthly Plan</h2>
        <h1 className="font-black text-4xl mt-6">$55</h1>
      </div>
    </div>
  );
};

export default Pricing;
