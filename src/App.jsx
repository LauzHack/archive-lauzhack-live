import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import config from './config.json';

import Live from './Live';
import Social from './Social';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayLive: true,
      displayYou: false,
    };
  }

  changePage(page) {
    if (page === 'social') {
      this.setState({
        displayLive: false,
        displayYou: true,
      });
    } else {
      this.setState({
        displayLive: true,
        displayYou: false,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand >LauzHack Live</Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} onClick={() => this.changePage('live')}>Live</NavItem>
              <NavItem eventKey={2} onClick={() => this.changePage('social')}>Social</NavItem>
              <NavItem eventKey={3} href={config.SCHEDULE_URL}>Schedule</NavItem>
              <NavItem eventKey={4} href={config.CHALLENGES_URL}>Challenges</NavItem>
              <NavItem eventKey={5} href={config.SLACK_URL}>Slack</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="content">
          {this.state.displayLive && <Live />}
          {this.state.displayYou && <Social />}
        </div>
      </div>
    );
  }
}

export default App;
