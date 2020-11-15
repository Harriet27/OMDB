import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Search,
  Favorites,
} from './Pages';

const App = () => {
  return (
    <Switch>
      <Route path="/" component={Search} exact />
      <Route path="/favorites" component={Favorites} />
    </Switch>
  );
};

export default App;
