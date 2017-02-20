import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import AppContainer from './src/containers/AppContainer';
import reducer from './src/reducers';
import Hello from './src/components/Hello';
import {Provider} from 'react-redux';
import { Router, Route, browserHistory, Link , IndexRoute} from 'react-router';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory} >
          <Route path="/" component={AppContainer}>
            <Route path="hello1" component={Hello} />
        </Route>
      </Router>
  </Provider>,
  document.getElementById('main')
);

/*ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory} >
          <Route path="/">
            <IndexRoute component={AppContainer} />
        </Route>
      </Router>
  </Provider>,
  document.getElementById('header')
);*/
