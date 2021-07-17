import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useSelector } from 'react-redux'
import { selectGameStats } from '../../redux/gameSlice'
import { bg, rootStyle} from './App.module.css';
import './App.css';
import Home from '../Home/Home';
import Header from '../Header/Header';
import UpgradePanel from '../Upgrades/UpgradePanel';
import BadgePanel from '../Badge/BadgePanel';
import NoMatch from '../NoMatch/NoMatch';
import InfoPanel from '../InfoPanel/InfoPanel'
import Login from '../Login/Login';
import Welcome from '../Welcome/Welcome'
import ClockService from '../ClockService';

const axios = require('axios')

function App() {
  let currentGameStats = useSelector(selectGameStats);
  console.log(currentGameStats);
  // const [loginModal, setLoginModal] = useState(true);
  const [data, setData] = useState({data: "not loaded"});
  const [login, setLogin] = useState(true);
  const [user, setUser] = useState({
    name: "",
    id: 0,
  })
const [game, setGame] = useState({
  dogs: 0,
  badges: [{
    badgeOne: false, 
    badgeTwo: false}],
  upgrades: [{ 
    upgradeOne: false, 
    upgradeTwo: false}]
})

  useEffect(() => {
    axios.get('http://localhost:8080/saves/1')
    .then(function (response) {
        // handle success
        setData(response.data);

    }).catch(err => {
        // Handle Error Here
        console.error(err);
    });
  }, []);

  // const handleLoginModal = () => {
  //   setLoginModal(false);
  // }

  const handleLogin = () => {
    setLogin(!login);
  }

  const handleLoad = () => {
    console.log("loading from App.js");
  };

  const handleSave = () => {
    console.log("saving from App.js");
  };

  const addADog = () => {
    console.log("Adding a dog");
    let prevDogs = game.dogs;
    prevDogs++;
    setGame({ ...game,
    dogs: prevDogs});
  }

  return (
    <Router>
      <ClockService />
      {/* <Playground label="Playground"/> */}
      {/* <TickTimer /> */}
      <div className={rootStyle}>
        {/* <LoginModal status={loginModal} onClose={handleLoginModal} /> */}
        <div className={bg}>
          <Header 
            isLoggedIn={login} 
            onLog={handleLogin} 
            onLoad={handleLoad}
            onSave={handleSave} /> 
          <Switch>
            <Route exact path="/" render={() => <Home isLoggedIn={login} onClick={addADog}/> }/>
            <Route path="/welcome" render={() => <Welcome /> }/>
            <Route path="/upgrades"  render={() => <UpgradePanel /> }/>
            <Route path="/badges"  render={() => <BadgePanel /> }/>
            <Route path="/login"  render={() => <Login onLogin={handleLogin}/> }/>
            <Route path="*"> <NoMatch /> </Route>
          </Switch>
          <InfoPanel dogs={game.dogs}/>
          {/* <Footer /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
