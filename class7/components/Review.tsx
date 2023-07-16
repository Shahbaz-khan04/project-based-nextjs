import React from "react";

export default function Review() {
  return (
    <div className="flex flex-col shadow-xl bg-gray-200 w-80  p-8 rounded-xl my-20 mx-auto">
      <img
        src="https://res.cloudinary.com/thirus/image/upload/v1629308145/logos/quote-left_tsopjj_zviayy.svg"
        alt="Quote Image"
        className="h-10 w-10"
      />
      <p className="my-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque dolore
        sequi, consequuntur doloribus temporibus, numquam natus, amet
        repellendus maxime perspiciatis tempore earum beatae excepturi alias
        suscipit sit?
      </p>
      <p className="text-xl font-bold">Full Name</p>
      <p>Role</p>
    </div>
  );
}
