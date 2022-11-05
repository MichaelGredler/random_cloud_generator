import { useState } from 'react';
import { cloudPropFunctions } from '../utilities/cloudPropFunctions';

const Cloud06 = () => {

   const { randDelay, randColor, randTop, randScale, randDuration} = cloudPropFunctions;

   const [animationName06, setAnimationName06] = useState(true);
   const [animationDelay06, setAnimationDelay06] = useState("20")
   const [animationDuration06, setAnimationDuration06] = useState("25")
   const [color06, setColor06] = useState("255")
   const [scale06, setScale06] = useState("3")
   const [top06, setTop06] = useState("-10")

   const handleEndCloud06 = (e) => {
      console.log("handleEndCloud06");
      setAnimationDelay06(randDelay(0, 3));
      setColor06(randColor(240, 255));
      setTop06(randTop(-5, 50));
      setScale06(randScale(50, 200));
      setAnimationDuration06(randDuration(30, 75));
      setAnimationName06(!animationName06);
   }

   const cloudStyles06 = {
      animationName: `${animationName06 ? "moveCloud06-A" : "moveCloud06-B"}`,
      animationDelay: `${animationDelay06}s`,
      animationDuration: `${animationDuration06}s`,
      animationDirection: "forwards",
      animationTimingFunction: "linear",
      backgroundColor: `rgb(${color06}, ${color06}, ${color06})`,
      transform: `scale(${scale06})`,
      top: `${top06}%`
   }

   return (
      <div
         className="cloud-img move-cloud cloud06" 
         style={cloudStyles06} 
         onAnimationEnd={(e) => handleEndCloud06(e)} 
         onClick={(e) => handleEndCloud06(e)}>
      </div>
   )
}

export default Cloud06;