import MatchRow from "./MatchRow";
import MatchHeader from "./MatchHeader";

import SunPlanet from '../../images/planet-sun.webp';
import MoonPlanet from '../../images/planet-moon.webp';
import AscendantPlanet from '../../images/ascendant.svg';
import MarsPlanet from '../../images/planet-mars.webp';
import VenusPlanet from '../../images/planet-venus.webp';
import MercuryPlanet from '../../images/planet-mercury.webp';
import JupiterPlanet from '../../images/planet-jupiter.webp';
import SaturnPlanet from '../../images/planet-saturn.webp';
import UranusPlanet from '../../images/planet-uranus.webp';
import NeptunePlanet from '../../images/planet-neptune.webp';
import PlutoPlanet from '../../images/planet-pluto.webp';

import SunIcon from '../../images/sun.svg';
import MoonIcon from '../../images/moon.svg';
import AscendantIcon from '../../images/ascendant.svg';
import MarsIcon from '../../images/mars.svg';
import VenusIcon from '../../images/venus.svg';
import MercuryIcon from '../../images/mercury.svg';
import JupiterIcon from '../../images/jupiter.svg';
import SaturnIcon from '../../images/saturn.svg';
import UranusIcon from '../../images/uranus.svg';
import NeptuneIcon from '../../images/neptune.svg';
import PlutoIcon from '../../images/pluto.svg';



import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import api from '../../api/axiosConfig';

const MatchResult = () => {
  const [celebChart, setCelebChart] = useState();

  const location = useLocation();
  const { state } = location;
  const {user, userChart, match} = state;
  
//https://www.horoscope.com/us/planets/index.html
  const planetMeanings = {
    sun: "Identity & ego", 
    moon: "Inner emotional life",
    mercury: "Communication",
    venus: "Love, beauty & money",
    mars: "Assertiveness & aggression",
    jupiter: "Luck & opportunity",
    saturn: "Responsibility, time & routine",
    uranus: "Individuality & revolution",
    neptune: "Dreams, healing & intuition",
    pluto: "Transformation & rebirth",
    ascendant: "Social personality"
  }
  
  useEffect(() => {
    // make sure to add caching so backend doesnt go to database for every req  
    //if (!user) getUserData(chartId);
    getCelebData(match?.celeb.name)
  }, [])
  
  const getCelebData = async (celebName) => {
    try {
      const response = await api.get(`/api/v1/celeb/search/${celebName}`);
      const data = response.data;
      const planetMap = new Map(data.celebChart.chart.map(i => [i.planet, [i.zodiac, i.element, i.mode, i.house]]));
      setCelebChart(planetMap);
    } catch (err) {
      console.log(err);
    }
  }
  
  
  return (
    <>
<div className="page-wrapper">
    <div className="section light-page-header wf-section">
      <div className="container">
        <h1 className="heading large-h1">Match Results</h1>
      </div>
    </div>
    <MatchHeader user={user} match={match}/>
    
    <MatchRow planet = "Sun" icon = {SunIcon} userData={userChart.get("Sun")} celebData={celebChart?.get("Sun")} planetMeaning={planetMeanings.sun} planetImg={SunPlanet}/>
    <div className="row_spacer"/>
    
    <MatchRow planet = "Moon" icon = {MoonIcon} userData={userChart.get("Moon")} celebData={celebChart?.get("Moon")} planetMeaning={planetMeanings.moon} planetImg={MoonPlanet}/>
    <div className="row_spacer"/>
    
    <MatchRow planet = "Ascendant" icon = {AscendantIcon} userData={userChart.get("Ascendant")} celebData={celebChart?.get("Ascendant")} planetMeaning={planetMeanings.ascendant} planetImg={AscendantPlanet}/>
    <div className="row_spacer"/>
    
    <MatchRow planet = "Mars" icon = {MarsIcon} userData={userChart.get("Mars")} celebData={celebChart?.get("Mars")} planetMeaning={planetMeanings.mars} planetImg={MarsPlanet}/>
    <div className="row_spacer"/>
    
    <MatchRow planet = "Venus" icon = {VenusIcon} userData={userChart.get("Venus")} celebData={celebChart?.get("Venus")} planetMeaning={planetMeanings.venus} planetImg={VenusPlanet}/>
    <div className="row_spacer"/>
    
    <MatchRow planet = "Mercury" icon = {MercuryIcon} userData={userChart.get("Mercury")} celebData={celebChart?.get("Mercury")} planetMeaning={planetMeanings.mercury} planetImg={MercuryPlanet}/>
    <div className="row_spacer"/>
    
    <MatchRow planet = "Jupiter" icon = {JupiterIcon} userData={userChart.get("Jupiter")} celebData={celebChart?.get("Jupiter")} planetMeaning={planetMeanings.jupiter} planetImg={JupiterPlanet}/>
    <div className="row_spacer"/>
    
    <MatchRow planet = "Saturn" icon = {SaturnIcon} userData={userChart.get("Saturn")} celebData={celebChart?.get("Saturn")} planetMeaning={planetMeanings.saturn} planetImg={SaturnPlanet}/>
    <div className="row_spacer"/>
    
    <MatchRow planet = "Uranus" icon = {UranusIcon} userData={userChart.get("Uranus")} celebData={celebChart?.get("Uranus")} planetMeaning={planetMeanings.uranus} planetImg={UranusPlanet}/>
    <div className="row_spacer"/>
    
    <MatchRow planet = "Neptune" icon = {NeptuneIcon} userData={userChart.get("Neptune")} celebData={celebChart?.get("Neptune")} planetMeaning={planetMeanings.neptune} planetImg={NeptunePlanet}/>
    <div className="row_spacer"/>
    
    <MatchRow planet = "Pluto" icon = {PlutoIcon} userData={userChart.get("Pluto")} celebData={celebChart?.get("Pluto")} planetMeaning={planetMeanings.pluto} planetImg={PlutoPlanet}/>
    <div className="spacer _16"/>
   </div>

   
  </>

    );
};

export default MatchResult;
