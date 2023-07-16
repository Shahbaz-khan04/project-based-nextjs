import React from "react";
import TeamMember from "./TeamMember";

export default function Team() {
  return (
    <div className="flex flex-wrap justify-center ">
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
    </div>
  );
}
