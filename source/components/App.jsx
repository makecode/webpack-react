import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        Hello, React 16
        <div>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/contacts'>Contacts</NavLink>
            </li>
          </ul>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;