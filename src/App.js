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

function App() {
  const initVars = {
    Sun: 3.0,
    Moon: 3.0,
    Ascendant: 2.0,
    Mars: 1.5,
    Venus: 1.5,
    Mercury: 1.5,
    Jupiter: .5,
    Saturn: .5,
    Uranus: .5,
    Neptune: .25,
    Pluto: .25,
    Zodiac: 1.0,
    Element: .5,
    Mode: .25,
    House: 1.2
  }
  
  const [user, setUser] = useState();
  const [userChart, setUserChart] = useState(); //user is var, use setUser to change
  const [matchData, setMatches] = useState();
  const [vars, setVars] = useState(initVars);
  const [varsUpdated, setVarsUpdated] = useState(false)

  const navigate = useNavigate();

  const createUser = async (userData) => {
    //console.log("userData: " + JSON.stringify(userData))
    let locIdentifier = userData.Location.countryCode == "US" || 
                        userData.Location.countryCode == "CA" ?
                        userData.Location.adminCodes1.ISO3166_2 :
                        userData.Location.countryCode;

    let loc = {town: userData.Location.name, 
               region: userData.Location.adminName1,
               country: userData.Location.countryName,
               code: locIdentifier}

    let utcDate = new Date(userData.Date)

    
    let userForm = {name: userData.Name, date: convertUTCDateToLocalDate(utcDate).toISOString(), location:loc}
    try {
      //console.log("userForm: " + JSON.stringify(userForm))
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
      return response
    } catch (err){
      console.log(err);
    }
  }

  useEffect(() => {
    if (user && varsUpdated) getMatchData(user.chartId)
  }, [varsUpdated])

  console.log("vars updated " + varsUpdated);

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
        </Route>
      </Routes>
    <Footer user={user} vars={vars} setVars={setVars}/>
    </div>
</>
  );
}

export default App;
