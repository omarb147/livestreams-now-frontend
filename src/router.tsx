import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Homepage } from '@/pages';
import { Header } from '@/components/atoms';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/:secondPage" exact component={Homepage} />
      <Route path="/" exact component={Homepage} />
    </Switch>
  </Router>
);

export default App;
