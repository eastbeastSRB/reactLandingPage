import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { SignUp } from './SignUp';
import { Discounts } from './Exclusive-discounts';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              
              <Route path="/Exclusive-discounts" component={Discounts} />
              <Route path="/SignUp" component={SignUp} />
            </Switch>
          </Router>
        </Layout>
        <Home />
      </React.Fragment>
    );
  }
}

export default App;
