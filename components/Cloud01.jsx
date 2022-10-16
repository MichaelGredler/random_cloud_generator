import { useState } from 'react';
import { cloudPropFunctions } from '../utilities/cloudPropFunctions';

const Cloud01 = () => {

   const { randDelay, randColor, randTop, randScale, randDuration} = cloudPropFunctions;

   const [animationName01, setAnimationName01] = useState(true);
   const [animationDelay01, setAnimationDelay01] = useState("0")
   const [animationDuration01, setAnimationDuration01] = useState("11")
   const [color01, setColor01] = useState("255")
   const [scale01, setScale01] = useState("1.2")
   const [top01, setTop01] = useState("10")

   const handleEndCloud01 = (e) => {
      console.log("handleEndCloud01");
      setAnimationDelay01(randDelay(0, 3));
      setColor01(randColor(240, 255));
      setTop01(randTop(0, 50));
      setScale01(randScale(50, 200));
      setAnimationDuration01(randDuration(9, 18));
      setAnimationName01(!animationName01);
      
      // if (e.target === e.currentTarget) {
      //    e.nativeEvent.stopImmediatePropagation();
      //    e.bubbles = false;
      //    console.log("EVENT 01", e);
      //    setCloud01(false);
      //    handleMakeCloud01();
      // } 
      
      e.stopPropagation();
      // setCloud01(false);
      // handleMakeCloud01();
   }

   const cloudStyles01 = {
      animationName: `${animationName01 ? "moveCloud01-A" : "moveCloud01-B"}`,
      animationDelay: `${animationDelay01}s`,
      animationDuration: `${animationDuration01}s`,
      animationDirection: "forwards",
      animationTimingFunction: "linear",
      backgroundColor: `rgb(${color01}, ${color01}, ${color01})`,
      transform: `scale(${scale01})`,
      top: `${top01}%`
   }

   return (
      <div
         className="cloud-img move-cloud cloud01" 
         style={cloudStyles01} 
         onAnimationEnd={(e) => handleEndCloud01(e)} 
         onClick={(e) => handleEndCloud01(e)}>
      </div>
   )
}

export default Cloud01;