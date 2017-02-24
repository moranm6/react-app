import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
// import AppContainer from './src/containers/AppContainer';
import reducer from './src/reducers';
import Hello from './src/components/Hello';
//import Heroes from './src/components/Heroes';
import Layout from './src/components/shared/_Layout';
import Hero from './src/pages/HeroContainer';
import HeroEditor from './src/pages/EditContainer';
import {Provider} from 'react-redux';
import { Router, Route, browserHistory, Link , IndexRoute} from 'react-router';

const store = createStore(reducer);

/*ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory} >
          <Route path="/" component={AppContainer}>
            <Route path="hello1" component={Hello} />
        </Route>
      </Router>
  </Provider>,
  document.getElementById('main')
);*/

const main = (
    <Provider store={store}>
      <Router history={browserHistory} >
        <Route path="/" component={Layout}>
          {/*<IndexRoute component={AppContainer} />*/}
          <Route path="about" component={Hello}/>
          <Route path="heroes" component={Hero}/>
          <Route path="newHero" component={HeroEditor} />
          <Route path="hero/(:id)" component={HeroEditor} />
        </Route>
      </Router>
    </Provider>
);

ReactDOM.render(main, document.getElementById('main'));


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
