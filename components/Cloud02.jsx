import { useState } from 'react';
import { cloudPropFunctions } from '../utilities/cloudPropFunctions';

const Cloud02 = () => {

   const { randDelay, randColor, randTop, randScale, randDuration} = cloudPropFunctions;

   const [animationName02, setAnimationName02] = useState(true);
   const [animationDelay02, setAnimationDelay02] = useState("2")
   const [animationDuration02, setAnimationDuration02] = useState("35")
   const [color02, setColor02] = useState("250")
   const [scale02, setScale02] = useState("3")
   const [top02, setTop02] = useState("20")

   const handleEndCloud02 = (e) => {
      console.log("handleEndCloud02");
      setAnimationDelay02(randDelay(0, 3));
      setColor02(randColor(240, 255));
      setTop02(randTop(-5, 50));
      setScale02(randScale(50, 200));
      setAnimationDuration02(randDuration(30, 75));
      setAnimationName02(!animationName02);
   }

   const cloudStyles02 = {
      animationName: `${animationName02 ? "moveCloud02-A" : "moveCloud02-B"}`,
      animationDelay: `${animationDelay02}s`,
      animationDuration: `${animationDuration02}s`,
      animationDirection: "forwards",
      animationTimingFunction: "linear",
      backgroundColor: `rgb(${color02}, ${color02}, ${color02})`,
      transform: `scale(${scale02})`,
      top: `${top02}%`
   }

   return (
      <div
         className="cloud-img move-cloud cloud02" 
         style={cloudStyles02} 
         onAnimationEnd={(e) => handleEndCloud02(e)} 
         onClick={(e) => handleEndCloud02(e)}>
      </div>
   )
}

export default Cloud02;