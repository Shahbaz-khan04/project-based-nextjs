import React from "react";

const MyProfile = () => {
  return (
    <div className="m-6 flex items-center">
      <img
        className="flex-shrink-0 w-20 h-20 rounded-full mr-2"
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=80"
        alt="Profile Pic"
      />
      <div>
        <h1 className="font-bold text-xl">Matt Cooper</h1>
        <p>A front end web developer from New York, USA.</p>
      </div>
    </div>
  );
};

export default MyProfile;
