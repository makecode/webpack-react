import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/App';

const Home = () => (
  <div>
    <h1>Home</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim animi voluptate corporis illum aliquid ea in minus voluptas! Eaque, reprehenderit quae numquam alias reiciendis saepe nobis provident incidunt deleniti corrupti culpa quaerat nostrum doloribus tempora sed dolorem deserunt iusto rerum sit, ratione impedit autem adipisci eveniet libero. Ratione, eum totam?</p>
  </div>
);

const About = () => (
  <div>
    <h1>About</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, non!</p>
    <p>Cum in quidem, voluptates dolorum iusto perferendis voluptatem. Ex, minima.</p>
    <p>Voluptatum quia dolorum voluptatibus maiores facilis. Pariatur vitae blanditiis quae.</p>
    <p>Aperiam officia nostrum magnam in ipsum, architecto velit odio deserunt!</p>
  </div>
);

const Contacts = () => (
  <div>
    <h1>Contacts</h1>
    <ul>
      <li>Telephone</li>
      <li>Adress</li>
      <li>Email</li>
    </ul>
  </div>
);

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Switch>
            <Route path='/' exact={true} component={Home} />
            <Route path='/contacts' component={Contacts} />
            <Route path='/about' component={About} />
          </Switch>
        </App>
      </BrowserRouter>
    )
  }
}

export default AppRouter;