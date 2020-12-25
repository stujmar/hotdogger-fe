import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { bg, wrapper, rootStyle} from './App.module.css';
import './App.css';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import UpgradePanel from '../UpgradePanel';
import BadgePanel from '../BadgePanel';
import NoMatch from '../NoMatch';
import InfoPanel from '../InfoPanel/InfoPanel'
import LoginModal from '../LoginModal/LoginModal';

function App() {

  const [loginModal, setLoginModal] = useState(true)

  const handleLoginModal = () => {
    console.log('we got to the onClose handler');
    setLoginModal(false);
  }

  return (
    <Router>
      {/* <Playground label="Playground"/> */}
      {/* <TickTimer /> */}
      <div className={rootStyle}>
        {/* <LoginModal status={loginModal} onClose={handleLoginModal} /> */}
        <div className={bg}>
          <Header />
          <div className={wrapper}> 
          <Switch>
            <Route exact path="/" render={() => <Home /> }/>
            <Route path="/upgrades"  render={() => <UpgradePanel /> }/>
            <Route path="/badges"  render={() => <BadgePanel /> }/>
            <Route path="*"> <NoMatch /> </Route>
          </Switch>
          </div>
          <InfoPanel />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
