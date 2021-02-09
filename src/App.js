import React from 'react';
import Stats from './Bot_stats'

class Volume extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="header"></div>
        <Stats />
        {/* <div className="bg"></div> */}
      </div>
    );
  }
}

export default Volume;
