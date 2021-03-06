import React from 'react';
import Tilt from 'react-tilt';
import logo from './images/logo.svg';
import chamberLogo from './images/chamberIcon.png';
import devLogo from './images/ecoDevIcon.png';
import tourismLogo from './images/tourismLogo.png';
import './scss/app.scss';

class App extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div id="fullscreen">
          <div className="overlay"></div>
          <iframe id="background-video" title="Grenada Drone Flyover" frameBorder="0" allowFullScreen src="https://player.vimeo.com/video/314553822?autoplay&loop&background=1"></iframe>
        </div>
        <div className="main-container">
          <div className="header-container">
            <img src={logo} className="main-logo" alt="Greater Grenada Partnership"/>
            <div className="header-row">
              <div className="left-line" />
              <h2 className="header2"> Welcome to the </h2>
              <div className="right-line" />
            </div> 
            <h1 className="header"> GREATER GRENADA PARTNERSHIP </h1>
            <div className="main-underline" />
          </div>
          <div className="tilt-container">
            <Tilt className="Tilt" options={{ max: 25 }}>
              <a href="http://www.grenadameansbusiness.com/" target="_blank" rel="noopener noreferrer" className="Tilt-inner">
                <img src={devLogo} id="devLogo" alt="Grenada Economic Development District"/>
              </a>
            </Tilt>
            <Tilt className="Tilt" options={{ max: 25 }}>
              <a href="http://www.visitgrenadams.com/" className="Tilt-inner" target="_blank" rel="noopener noreferrer">
                <img src={tourismLogo} id="tourismLogo" alt="Grenada Mississippi Tourism Commission"/>
              </a>
            </Tilt>
            <Tilt className="Tilt" options={{ max: 25 }}>
              <a href="https://www.grenadamississippi.com/" className="Tilt-inner" target="_blank" rel="noopener noreferrer">
                <img src={chamberLogo} id="chamberLogo" alt="Grenada Area Chamber Of Commerce"/>
              </a>
            </Tilt>
          </div>
          <div className="footer-container">
            <div className="footer-row">
              <p className="footer-header"> GRENADA MISSISSIPPI </p>
              <div className="footer-main-line" />
            </div>
            <p className="footer-par">
              A warm small town atmosphere with a community offering <br/> something for everyone yet always striving for more.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
