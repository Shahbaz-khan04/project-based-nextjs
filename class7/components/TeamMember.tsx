import React from "react";

export default function TeamMember() {
  return (
    <div className="flex m-8 items-end">
      <img
        src="https://via.placeholder.com/150"
        alt="User Avatar"
        className="rounded-full"
      />
      <div className="ml-4">
        <p className="text-2xl font-semibold">Full Name</p>
        <p className="text-lg">Role</p>
      </div>
    </div>
  );
}
