import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="flex m-10 p-10 shadow-2xl bg-blue-100 rounded-xl mx-6">
      <div>
        <Image src="/next.svg" alt="Next logo" height="100" width="100" />
        <h1>circleai</h1>
        <p>Lorem, ipsum dolor.</p>
      </div>
      <div className="flex ml-auto justify-left space-x-5">
        <div>
          <h2 className="text-lg font-bold">Quick Links</h2>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Contact us</h2>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Social</h2>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
