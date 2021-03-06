import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    /** /repositories/:repository+ retorna todo o conteudo após /repositories*/
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
