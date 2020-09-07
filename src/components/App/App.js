import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { bg, wrapper, rootStyle} from './App.module.css';
import './App.css';
import Home from '../Home';
import Header from '../Header/Header';
import Footer from '../Footer';
import UpgradePanel from '../UpgradePanel';
import BadgePanel from '../BadgePanel';
import NoMatch from '../NoMatch';
import LoginModal from '../LoginModal/LoginModal';

function App() {


  let [count, setCount] = useState(0);
  let [click, setClick] = useState(0);
  let [timerRun, setTimerRun] = useState(false);
  let myCounter;

  const startHandler = () => {
    setTimerRun(true);
    setClick(click + 1);
  };

  const updateDogs = () => {
    if(timerRun){
      setCount(count => count + 1)
    }
  }
  
  useEffect(() => {
      myCounter = setInterval(() => {
      updateDogs();
    },1000)
  },[timerRun]);
  
  const stopHandler = () => {
    setTimerRun(false);
    clearInterval(myCounter);
  }

  return (
      <Router>
    <div className={rootStyle}>
      <LoginModal />
      <div className={bg}>
        {click}
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
        {count}
        <Header />
        <div className={wrapper}> 
        <Switch>
          <Route exact path="/" render={() => <Home /> }/>
          <Route path="/upgrades"  render={() => <UpgradePanel /> }/>
          <Route path="/badges"  render={() => <BadgePanel /> }/>
          <Route path="*"> <NoMatch /> </Route>
        </Switch>
        </div>
        <Footer />
      </div>
    </div>
      </Router>
  );
}

export default App;
