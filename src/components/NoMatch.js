import React from 'react';
import {useLocation} from 'react-router-dom';

const noMatchStyle = {
    textAlign: 'center',
    background: 'green',
    height: '100vh',
    paddingTop: '20px'
}

function NoMatch() {
    let location = useLocation();
  
    return (
      <div style={noMatchStyle}>
        <h2>404 page not found</h2>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </div>
    );
  }
  
  export default NoMatch;