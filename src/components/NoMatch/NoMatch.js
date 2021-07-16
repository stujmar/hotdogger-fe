import React from 'react';
import { useLocation } from 'react-router-dom';
import { matchBody, matchText } from './NoMatch.module.css'

const noMatchStyle = {
    textAlign: 'center',
    background: 'green',
    height: '100vh',
    paddingTop: '20px'
}

function NoMatch() {
    let location = useLocation();
  
    return (
      <div className={matchBody} style={noMatchStyle} >
        <h2 className={matchText} >404 page not found</h2>
        <h3 className={matchText} >
          No match for <code>{location.pathname}</code>
        </h3>
      </div>
    );
  }
  
  export default NoMatch;