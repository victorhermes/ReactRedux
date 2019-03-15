import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/main';
import Footer from '../components/Footer';

const Routes = () => (
  // Como o react router dom tem integração com o native,...
  // ...o BrowserRouter é para dizer que a página será rodada na internet
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>

      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default Routes;
