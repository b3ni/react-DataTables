import React from 'react';
import ReactDOM from 'react-dom';

import { IndexRoute, Router, Route } from 'react-router';
import createHistory from 'history/lib/createHashHistory';

const history = createHistory( { queryKey: false } );

import App from './components/App';
import PageNotFound from './components/PageNotFound';
import Basic from './components/examples/Basic';

const routes = (
  <Router history={ history }>
    <Route path="/" component={App}>
      <IndexRoute component={Basic} />
      <Route path="examples">
        <Route path="basic" component={Basic}/>
      </Route>
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.querySelector('#app'));
