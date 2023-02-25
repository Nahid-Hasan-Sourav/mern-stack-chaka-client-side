// import { useEffect, useState } from "react";


// function Clock() {
  // const targetTime = new Date("2023-03-01T00:00:00Z");
  // const [remainingTime, setRemainingTime] = useState(calculateRemainingTime(targetTime));

  // function calculateRemainingTime(targetTime) {
  //   const currentTime = new Date();
  //   const difference = targetTime - currentTime;
  //   return {
  //     hours: Math.floor(difference / (1000 * 60 * 60)),
  //     minutes: Math.floor((difference / (1000 * 60)) % 60),
  //     seconds: Math.floor((difference / 1000) % 60),
  //   };
  // }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setRemainingTime(calculateRemainingTime(targetTime));
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [targetTime]);

//   return (
//     <div>
//       <p>Remaining time:</p>
//       <p>
//         {remainingTime.hours}h {remainingTime.minutes}m {remainingTime.seconds}s
//       </p>
//     </div>
//   );
// }

// export default Clock();
import { useEffect, useState } from "react";
  

const Clock = () => {
  const targetTime = new Date("2023-03-01T00:00:00Z");
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime(targetTime));

  function calculateRemainingTime(targetTime) {
    const currentTime = new Date();
    const difference = targetTime - currentTime;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(calculateRemainingTime(targetTime));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);

  
  return (
    <div className="text-white">
    
      <div className="flex justify-content-center text-[3rem]">

        <div className="font-bold flex flex-col justify-center items-center">  
          <p className="text-[3rem] text-[#E22937]"> {remainingTime.days}</p>
          <p className="text-[1rem] ">DAYS</p>
        </div>

        <div className="text-[3rem] font-bold mx-1">
        <p className="text-[#E22937]">:</p>
        </div>

        <div className="font-bold flex flex-col justify-center items-center">  
          <p className="text-[3rem] text-[#E22937]"> {remainingTime.days}</p>
          <p className="text-[1rem] ">HOURS</p>
        </div>

        <div className="text-[3rem] font-bold mx-1">
          <p className="text-[#E22937]">:</p>
        </div>

        <div className="font-bold flex flex-col justify-center items-center">  
          <p className="text-[3rem] text-[#E22937]"> {remainingTime.days}</p>
          <p className="text-[1rem] ">MIN</p>
        </div>

        <div className="text-[3rem] font-bold flex mx-1">
        <p className="text-[#E22937]">:</p>
        </div>

        <div className="font-bold flex flex-col justify-center items-center">  
          <p className="text-[3rem] text-[#E22937]"> {remainingTime.seconds}</p>
          <p className="text-[1rem] ">SEC</p>
        
         {/* <p className="text-white"> {remainingTime.days}d {remainingTime.hours}h {remainingTime.minutes}m {remainingTime.seconds}s</p>
         */}
        </div>
    
      </div>
    </div>
  );
};

export default Clock;