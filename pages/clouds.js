import Cloud01 from '../components/Cloud01';
import Cloud02 from '../components/Cloud02';
import Cloud03 from '../components/Cloud03';
import Cloud04 from '../components/Cloud04';
import Cloud05 from '../components/Cloud05';
import Cloud06 from '../components/Cloud06';

const Clouds = () => {
   return (
      <div className="container">
         <div className="cloud-wrap">
            <Cloud01 />
            <Cloud02 />
            <Cloud03 />
            <Cloud04 />
            <Cloud05 />
            <Cloud06 />
         </div>
      </div>
   )
}

export default Clouds;