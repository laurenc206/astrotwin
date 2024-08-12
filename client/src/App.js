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

const fetchUser = async (userId) => {
    const response = await api.get(`/api/v1/user/getUser/${userId}`)
    return response;
}

const fetchMatches = async (userId, vars, varsUpdated) => {
  const matchParams = {
    userId: userId,
    vars: vars,
    isVarsModified: varsUpdated
  }

  const matches = await api.post(`/api/v1/user/getMatchList`, matchParams);
  return matches;
}

const fetchCelebs = async () => {
  const response = await api.get('/api/v1/celeb/search/findAll');
  return response;
}




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
  const [celebData, setCelebData] = useState([]);

  const navigate = useNavigate();


  // dont do a get user chart method
  // getting the user will return the chart with it
  
  const getUserData = async (userId) => {
    fetchUser(userId).then((response) => {
      //console.log("response " + JSON.stringify(response))
      const userData = response.data
      const chartData = new Map(response.data.userChart.chart.map(i => [i.planet, [i.zodiac, i.element, i.mode, i.house]]))
      setUser(userData)
      setUserChart(chartData)
    }).catch((e) => {
      console.log(e)
    })
  }

  const updateMatchData = async () => {
    if (user) {
      fetchMatches(user.chartId, vars, varsUpdated).then((response) => {
        setMatches(response.data)
        setVarsUpdated(false)
      }).catch((e) => {
        console.log(e)
      })
    } 
  }

  useEffect(() => {
      updateMatchData()
  }, [vars, user, celebData])

  useEffect(() => {
    if (user) {
      navigate(`/userChart/${user.chartId}`)
    }
  },[user])

  useEffect(() => {
    console.log("fetch celebs")
    fetchCelebs().then((response) => {
      console.log("fetch celebs response " + JSON.stringify(response))
     
      setCelebData(response.data)
    })
  }, [])


  return (
    <>

    <div className='App'>

    <Header user={user}/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/createChart" element={<CreateChart setUser={setUser} setUserChart={setUserChart} />}></Route>
          <Route path="/matchResult" element={<MatchResult user={user} userChart={userChart}/>}></Route>
          <Route path="/modifyVars" element={<ModifyVars vars={vars} setVars={setVars} setVarsUpdated={setVarsUpdated} initVars={initVars}/>}></Route> 
          <Route path="/userChart/:chartId" element={<UserChart user={user} userChart={userChart} matchData={matchData} getUserData={getUserData}/>}></Route>
          <Route path="/searchCeleb" element={<SearchCeleb celebList={celebData}/>}></Route>
          <Route path="/resultCeleb/:celebName" element={<ResultCeleb matches={matchData}/>}></Route>
          <Route path="/addCeleb" element={<AddCeleb celebList={celebData} setCelebData={setCelebData} />}></Route>
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
