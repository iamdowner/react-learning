// import './Volume.css';

import React from 'react';

class Volume extends React.Component {
  constructor(props) {
    super(props);
    this.state = { volume: 50, isMuted: false };
    // Эта привязка обязательна для работы `this` в колбэке.
    this.increaseButton = this.increaseButton.bind(this);
    this.decreaseButton = this.decreaseButton.bind(this);
    this.muteButton = this.muteButton.bind(this);
    this.getVolume = this.getVolume.bind(this);



  }
  increaseButton() {
    this.setState(state => ({
      volume: ++state.volume
    }));
  }
  decreaseButton() {
    this.setState(state => ({
      volume: --state.volume
    }));
  }
  muteButton() {
    this.setState(state => ({
      isMuted: !state.isMuted
    }));
  }
  getVolume() {
    if (!this.state.isMuted) {
      return this.state.volume
    } else {
      return "X"
    }
  }

  render() {
    return (
      <div className="game-box">
        <div className="h1">{this.getVolume()}</div>
        <div className="buttons">
          <button onClick={this.increaseButton}>
            increase
        </button>
          <button onClick={this.muteButton}>
            Mute
        </button>
          <button onClick={this.decreaseButton}>
            decrease
        </button>
        </div>
      </div>


    );
  }
}

export default Volume;
