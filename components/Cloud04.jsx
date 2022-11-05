import { useState } from 'react';
import { cloudPropFunctions } from '../utilities/cloudPropFunctions';

const Cloud04 = () => {

   const { randDelay, randColor, randTop, randScale, randDuration} = cloudPropFunctions;

   const [animationName04, setAnimationName04] = useState(true);
   const [animationDelay04, setAnimationDelay04] = useState("1.5")
   const [animationDuration04, setAnimationDuration04] = useState("80")
   const [color04, setColor04] = useState("255")
   const [scale04, setScale04] = useState("2.25")
   const [top04, setTop04] = useState("40")

   const handleEndCloud04 = (e) => {
      console.log("handleEndCloud04");
      setAnimationDelay04(randDelay(0, 3));
      setColor04(randColor(240, 255));
      setTop04(randTop(0, 50));
      setScale04(randScale(50, 200));
      setAnimationDuration04(randDuration(30, 75));
      setAnimationName04(!animationName04);
   }

   const cloudStyles04 = {
      animationName: `${animationName04 ? "moveCloud04-A" : "moveCloud04-B"}`,
      animationDelay: `${animationDelay04}s`,
      animationDuration: `${animationDuration04}s`,
      animationDirection: "forwards",
      animationTimingFunction: "linear",
      backgroundColor: `rgb(${color04}, ${color04}, ${color04})`,
      transform: `scale(${scale04})`,
      top: `${top04}%`
   }

   return (
      <div
         className="cloud-img move-cloud cloud04" 
         style={cloudStyles04} 
         onAnimationEnd={(e) => handleEndCloud04(e)} 
         onClick={(e) => handleEndCloud04(e)}>
      </div>
   )
}

export default Cloud04;