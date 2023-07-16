import CarWheel from "@/components/Wheel";
import CarHeadlight from "@/components/Headlight";
import CarSeat from "@/components/Seat";

export default function Home() {
  return (
    <div>
{/* Look below the function first
      Body of car */}
      <p>modified using hover:h/w</p>
      <div className="bg-blue-500 h-24 w-52 hover:h-32 hover:w-60"></div>
      <p>modified using hover:scale</p>
      <div className="bg-blue-500 h-24 w-52 hover:scale-150"></div>
      {/* Difference b/w hover:h/w and hover:scale is that hover:h/w moves other element away to expand and do not cover other text or elements while hover:scale blocks and covers other elements andf texts.*/}

      {/* Wheels of car */}
      <CarWheel />
      <CarWheel />
      <CarWheel />
      <CarWheel />

      {/* Headlights of car */}
      <CarHeadlight />
      <CarHeadlight />

      {/* Seats of car */}
      <CarSeat />
      <CarSeat />
      <CarSeat />
      <CarSeat />
      <CarSeat />
    </div>
  );
}

/*
 <div>
      Body of car
      <div className="bg-blue-500 h-24 w-52"></div> 
      Wheels of car
      <div className="bg-black h-12 w-12"></div>
      <div className="bg-black h-12 w-12"></div>
      <div className="bg-black h-12 w-12"></div>
      <div className="bg-black h-12 w-12"></div>
      Headlights of car
      <div className="bg-yellow-500 h-5 w-5"></div>
      <div className="bg-yellow-500 h-5 w-5"></div>
    </div> 
 
Now we are writing same code again and again so to avoid repition and enhance reuseabilty we will create a react component for wheel of car.
Same repition is for headlights so we will make a component for it too

So Above is the modified version of code.

   */
