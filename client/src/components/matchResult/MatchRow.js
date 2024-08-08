import * as React from 'react';
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
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';


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

  const zodiacIcon = {
    "Aries": AriesIcon,
    "Taurus": TaurusIcon,
    "Gemini": GeminiIcon,
    "Cancer": CancerIcon,
    "Leo": LeoIcon,
    "Virgo": VirgoIcon,
    "Libra": LibraIcon,
    "Scorpio": ScorpioIcon,
    "Sagittarius": SagittariusIcon,
    "Capricorn": CapricornIcon,
    "Aquarius": AquariusIcon,
    "Pisces": PiscesIcon
  }
  const zodiacIconMap = new Map(Object.entries(zodiacIcon));

  const imageMap = new Map(Object.entries(imageDef))

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `.5px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} color="#99a4af"/>}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: '#f5f6f7',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

 
    const [expanded, setExpanded] = React.useState('');
  
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  
 
    
    return (
    <>
     
        <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d323-e3b8d21ac" className="w-layout-layoutc quick-stack-8 wf-layout-layout">
          
  
          <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d323-e3b8d21a" className="w-layout-layout quick-stack-7 cell-2b wf-layout-layout">
            <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d324-e3b8d21a" className="w-layout-cell"><img src={planetImg} loading="lazy" style={{"max-height": "80px"}}/></div>
            <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d326-e3b8d21a" className="w-layout-cell">
                

                <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d334-e3b8d21a" className="w-layout-layout quick-stack-11 wf-layout-layout">
                <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d335-e3b8d21a" className="w-layout-cell">
                  
                  <h2 className="no-margin">{planet} </h2>
                  
                  <h5 className="no-margin">{planetMeaning}</h5>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d21a-e3b8d21a" className="w-layout-layoutb quick-stack-8 wf-layout-layout">
        <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d322-e3b8d21a" className="w-layout-cell cell-2b"><h5 className='no-margin'>You:</h5></div>
        <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d322-e3b8d21a" className="w-layout-cell cell-2b"><h5>Them:</h5></div>
        </div>

        <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d21a-e3b8d21a" className="w-layout-layoutb quick-stack-8 wf-layout-layout">
        <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d322-e3b8d21a" className="w-layout-cell cell-2b">
          <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d32d-e3b8d21a" className="w-layout-layout quick-stack-7 cell-2b wf-layout-layout">
            <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d324-e3b8d21a" className="w-layout-cell"><img src={zodiacIconMap.get(userData?.[0])} loading="lazy"style={{"max-height": "40px"}} /></div>
            <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d326-e3b8d21a" className="w-layout-cell">
              <h4>{userData?.[0]}</h4>
            </div>
            
          </div>
        </div>
        <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d32c-e3b8d21a" className="w-layout-cell cell-2b">
          <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d32d-e3b8d21a" className="w-layout-layout quick-stack-7 cell-2b wf-layout-layout">
            <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d32e-e3b8d21a" className="w-layout-cell">
              <img src={zodiacIconMap.get(celebData?.[0])} loading="lazy" className="image"  style={{"max-height": "40px"}} />
              
              </div>
            <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d330-e3b8d21a" className="w-layout-cell cell-5">
              <h4>{celebData?.[0]}</h4>
            </div>
            
          </div>

        </div>
        </div>




        <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d21a-e3b8d21ab" className="w-layout-layoutb quick-stack-8 wf-layout-layout">
        <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d322-e3b8d21a" className="w-layout-cell cell-3b">
        <div>

          {match && 
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <h6 className='no-margin'>{match}</h6>
        </AccordionSummary>
        <AccordionDetails>
          {matchInfo}
        </AccordionDetails>
      </Accordion>
          }
    </div>
     
            
            <div>
      
     
    </div>
        </div>
        
        </div>
       
    </>    
       
    );
};

export default MatchRow;
