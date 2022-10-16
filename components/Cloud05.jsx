import { useState } from 'react';
import { cloudPropFunctions } from '../utilities/cloudPropFunctions';

const Cloud05 = () => {

   const { randDelay, randColor, randTop, randScale, randDuration} = cloudPropFunctions;

   const [animationName05, setAnimationName05] = useState(true);
   const [animationDelay05, setAnimationDelay05] = useState("10")
   const [animationDuration05, setAnimationDuration05] = useState("13")
   const [color05, setColor05] = useState("255")
   const [scale05, setScale05] = useState("1.25")
   const [top05, setTop05] = useState("30")

   const handleEndCloud05 = (e) => {
      console.log("handleEndCloud05");
      setAnimationDelay05(randDelay(0, 3));
      setColor05(randColor(240, 255));
      setTop05(randTop(0, 50));
      setScale05(randScale(50, 200));
      setAnimationDuration05(randDuration(9, 18));
      setAnimationName05(!animationName05);
      e.stopPropagation();
   }

   const cloudStyles05 = {
      animationName: `${animationName05 ? "moveCloud05-A" : "moveCloud05-B"}`,
      animationDelay: `${animationDelay05}s`,
      animationDuration: `${animationDuration05}s`,
      animationDirection: "forwards",
      animationTimingFunction: "linear",
      backgroundColor: `rgb(${color05}, ${color05}, ${color05})`,
      transform: `scale(${scale05})`,
      top: `${top05}%`
   }

   return (
      <div
         className="cloud-img move-cloud cloud05" 
         style={cloudStyles05} 
         onAnimationEnd={(e) => handleEndCloud05(e)} 
         onClick={(e) => handleEndCloud05(e)}>
      </div>
   )
}

export default Cloud05;