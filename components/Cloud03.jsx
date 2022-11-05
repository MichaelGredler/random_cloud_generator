import { useState } from 'react';
import { cloudPropFunctions } from '../utilities/cloudPropFunctions';

const Cloud03 = () => {

   const { randDelay, randColor, randTop, randScale, randDuration} = cloudPropFunctions;

   const [animationName03, setAnimationName03] = useState(true);
   const [animationDelay03, setAnimationDelay03] = useState("4")
   const [animationDuration03, setAnimationDuration03] = useState("30")
   const [color03, setColor03] = useState("255")
   const [scale03, setScale03] = useState("0.75")
   const [top03, setTop03] = useState("17")

   const handleEndCloud03 = (e) => {
      console.log("handleEndCloud03");
      setAnimationDelay03(randDelay(0, 3));
      setColor03(randColor(240, 255));
      setTop03(randTop(0, 50));
      setScale03(randScale(50, 200));
      setAnimationDuration03(randDuration(30, 75));
      setAnimationName03(!animationName03);
   }

   const cloudStyles03 = {
      animationName: `${animationName03 ? "moveCloud03-A" : "moveCloud03-B"}`,
      animationDelay: `${animationDelay03}s`,
      animationDuration: `${animationDuration03}s`,
      animationDirection: "forwards",
      animationTimingFunction: "linear",
      backgroundColor: `rgb(${color03}, ${color03}, ${color03})`,
      transform: `scale(${scale03})`,
      top: `${top03}%`
   }

   return (
      <div
         className="cloud-img move-cloud cloud03" 
         style={cloudStyles03} 
         onAnimationEnd={(e) => handleEndCloud03(e)} 
         onClick={(e) => handleEndCloud03(e)}>
      </div>
   )
}

export default Cloud03;