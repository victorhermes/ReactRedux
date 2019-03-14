import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/main';

const Routes = () => (
  // Como o react router dom tem integração com o native,...
  // ...o BrowserRouter é para dizer que a página será rodada na internet
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
