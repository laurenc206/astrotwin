import matchDef from './MatchDefinitions';
import AriesIcon from '../../images/aries.png'
import TaurusIcon from '../../images/taurus.png'
import GeminiIcon from '../../images/gemini.png'
import CancerIcon from '../../images/cancer.png'
import LeoIcon from '../../images/leo.png'
import VirgoIcon from '../../images/virgo.png'
import LibraIcon from '../../images/libra.png'
import ScorpioIcon from '../../images/scorpio.png'
import SagittariusIcon from '../../images/sagittarius.png'
import CapricornIcon from '../../images/capricorn.png'
import AquariusIcon from '../../images/aquarius.png'
import PiscesIcon from '../../images/pisces.png'
import EarthIcon from '../../images/earth.svg'
import FireIcon from '../../images/fire.svg'
import WaterIcon from '../../images/water.svg'
import AirIcon from '../../images/air.svg'
import CardinalIcon from '../../images/cardinal.svg'
import FixedIcon from '../../images/fixed.svg'
import MutableIcon from '../../images/fixed.svg'

const MatchRow = ({planet, icon, userData, celebData, planetMeaning, planetImg}) => {
    let zodiac = (userData?.[0] === celebData?.[0]) ? `Matches zodiac (${userData?.[0]})` : ""
    let element = (userData?.[1] === celebData?.[1]) ? `Matches element (${userData?.[1]})` : ""
    let mode = (userData?.[2] === celebData?.[2]) ? `Matches mode (${userData?.[2]})` : ""
    let house = (userData?.[3] === celebData?.[3]) ? `${userData?.[3]}` : ""

    let match = zodiac ? zodiac : (element ? element : (mode ? mode : ""))

    const matchMap = new Map(Object.entries(matchDef))
  
    let matchInfo = match === zodiac && zodiac ? matchMap.get(userData?.[0]).get(planet)
                    : (match === element && element ? matchMap.get("Element").get(userData?.[1]) 
                    : (match === mode && mode ? matchMap.get("Mode").get(userData?.[2]) : ""))

    



  const imageDef = {
    "Matches zodiac (Capricorn)": AriesIcon,
    "Matches zodiac (Taurus)": TaurusIcon,
    "Matches zodiac (Gemini)" : GeminiIcon,
    "Matches zodiac (Cancer)" : CancerIcon,
    "Matches zodiac (Leo)": LeoIcon,
    "Matches zodiac (Virgo)": VirgoIcon,
    "Matches zodiac (Libra)": LibraIcon,
    "Matches zodiac (Scorpio)": ScorpioIcon,
    "Matches zodiac (Sagittarius)": SagittariusIcon,
    "Matches zodiac (Capricorn)": CapricornIcon,
    "Matches zodiac (Aquarius)": AquariusIcon,
    "Matches zodiac (Pisces)": PiscesIcon,
    "Matches element (Earth)": EarthIcon,
    "Matches element (Fire)": FireIcon,
    "Matches element (Water)": WaterIcon,
    "Matches element (Air)": AirIcon,
    "Matches mode (Cardinal)": CardinalIcon,
    "Matches mode (Fixed)": FixedIcon,
    "Matches mode (Mutable)": MutableIcon
  }
  
  const imageMap = new Map(Object.entries(imageDef))
    
    return (
    <>
     <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d21a-e3b8d21a" className="w-layout-layoutb quick-stack-8 wf-layout-layout">
        <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d322-e3b8d21a" className="w-layout-cell cell-2">
          <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d323-e3b8d21a" className="w-layout-layout quick-stack-7 cell-2 wf-layout-layout">
            <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d324-e3b8d21a" className="w-layout-cell"><img src={planetImg} loading="lazy" alt=""/></div>
            <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d326-e3b8d21a" className="w-layout-cell">
              <h4>{planet} in {userData?.[0]}</h4>
            </div>
            <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d329-e3b8d21a" className="w-layout-cell">
              <div>{planetMeaning}</div>
            </div>
          </div>
        </div>
        <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d32c-e3b8d21a" className="w-layout-cell cell-2">
          <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d32d-e3b8d21a" className="w-layout-layout quick-stack-10 wf-layout-layout">
            <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d32e-e3b8d21a" className="w-layout-cell">
              {match && <img src={imageMap.get(match)} loading="lazy" className="image"  style={{"max-height": "70%", "max-width": "70%"}} />}
              
              </div>
            <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d330-e3b8d21a" className="w-layout-cell cell-5">
              <h4>{planet} in {celebData?.[0]}</h4>
            </div>
            <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d333-e3b8d21a" className="w-layout-cell">
              <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d334-e3b8d21a" className="w-layout-layout quick-stack-11 wf-layout-layout">
                <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d335-e3b8d21a" className="w-layout-cell">
                  <h6>{match}</h6>
                </div>
                <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d338-e3b8d21a" className="w-layout-cell">
                  <div><p><small>{matchInfo}</small></p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </>    
       
    );
};

export default MatchRow;
