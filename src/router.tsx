import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { EmptyPage } from '@/components/Pages';

const App = () => (
  <Router>
    <Switch>
      <Route path="/:secondPage" exact component={EmptyPage} />
      <Route path="/" exact component={EmptyPage} />
    </Switch>
  </Router>
);

export default App;
