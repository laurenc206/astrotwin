import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route, useNavigate} from 'react-router-dom';
import UserChart from './components/userChart/UserChart';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import CreateChart from './components/createChart/CreateChart';
import MatchResult from './components/matchResult/MatchResult';
import ModifyVars from './components/modifyVars/ModifyVars';
import SearchCeleb from './components/searchCeleb/SearchCeleb';
import ResultCeleb from './components/searchCeleb/ResultCeleb';
import AddCeleb from './components/searchCeleb/AddCeleb';
import ContactMe from './components/contactMe/ContactMe';
import About from './components/about/About';

function App() {
  const initVars = {
    Sun: 4.0,
    Moon: 4.0,
    Ascendant: 3.0,
    Mars: 2.0,
    Venus: 2.0,
    Mercury: 2.0,
    Jupiter: 1,
    Saturn: 1,
    Uranus: .5,
    Neptune: .1,
    Pluto: .1,
    Zodiac: 2.5,
    Element: 1,
    Mode: .5,
    House: 1
  }
  
  const [user, setUser] = useState();
  const [userChart, setUserChart] = useState(); //user is var, use setUser to change
  const [matchData, setMatches] = useState();
  const [vars, setVars] = useState(initVars);
  const [varsUpdated, setVarsUpdated] = useState(false)

  const navigate = useNavigate();

  const createUser = async (userData) => {
    console.log("userData: " + JSON.stringify(userData))
    let locIdentifier = userData.Location.shortCountry == "US" || 
                        userData.Location.shortCountry == "CA" ?
                        userData.Location.shortRegion :
                        userData.Location.shortCountry;

    let loc = {town: userData.Location.name, 
               region: userData.Location.longRegion,
               country: userData.Location.longCountry,
               code: locIdentifier}

    let utcDate = new Date(userData.Date)

    
    let userForm = {name: userData.Name, date: convertUTCDateToLocalDate(utcDate).toISOString(), location:loc}
    try {
      console.log("userForm: " + JSON.stringify(userForm))
      const response = await api.post("api/v1/user", userForm) 
      const data = response.data;
      setUser(data);
      const planetMap = new Map(data.userChart.chart.map(i => [i.planet, [i.zodiac, i.element, i.mode, i.house]]));
      setUserChart(planetMap);
      setMatches('');
      navigate(`/userChart/${data.chartId}`)
    } catch (err) {
      throw new Error('Data base unavaliable')
    }
  }

  function convertUTCDateToLocalDate(date) {
    var newDate = new Date(date.getTime() - date.getTimezoneOffset()*60*1000);
    return newDate;   
  }

  // dont do a get user chart method
  // getting the user will return the chart with it
  const getUserData = async (userId) => {
      try {
        console.log("get user data" + userId)
        const response = await api.get(`/api/v1/user/getUser/${userId}`);
        const data = response.data;
        setUser(data);

        const planetMap = new Map(data.userChart.chart.map(i => [i.planet, [i.zodiac, i.element, i.mode, i.house]]));
        setUserChart(planetMap);
      } catch (err) {
        console.log(err);
      }
  }
  
  const getMatchData = async (userId) => {
    try {
      console.log("get match data")
      const matchParams= {
        isVarsModified: varsUpdated,
        userId: userId,
        vars: vars
      }
      const response = await api.post(`/api/v1/user/getMatchList`, matchParams);
      setMatches(response.data);
      setVarsUpdated(false)
      console.log("MATCHES " + JSON.stringify(matchData))
      return response
    } catch (err){
      console.log(err);
    }
  }

  useEffect(() => {
    if (user && varsUpdated) getMatchData(user.chartId)
  }, [varsUpdated])

  //console.log("vars updated " + varsUpdated);

  return (
    <>

    <div className='App'>

    <Header user={user}/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/createChart" element={<CreateChart createUser={createUser} user={user}/>}></Route>
          <Route path="/matchResult" element={<MatchResult />}></Route>
          <Route path="/modifyVars" element={<ModifyVars vars={vars} setVars={setVars} setVarsUpdated={setVarsUpdated} initVars={initVars}/>}></Route> 
          <Route path="/userChart/:chartId" element={<UserChart user={user} getUserData={getUserData} userChart={userChart} getMatchData={getMatchData} matchData={matchData} varsUpdated={varsUpdated}/>}></Route>
          <Route path="/searchCeleb" element={<SearchCeleb user={user} userChart={userChart} matchData={matchData}/>}></Route>
          <Route path="/resultCeleb" element={<ResultCeleb/>}></Route>
          <Route path="/addCeleb" element={<AddCeleb user={user} userChart={userChart} getMatchData={getMatchData} setVarsUpdated={setVarsUpdated} matchData={matchData}/>}></Route>
          <Route path="/contactMe" element={<ContactMe/>}/>
          <Route path="/about" element={<About/>}></Route>
        </Route>
      </Routes>
    <Footer user={user}/>
    </div>
</>
  );
}

export default App;
