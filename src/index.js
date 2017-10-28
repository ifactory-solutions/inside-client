import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import Home from 'components/pages/Home';
import Author from 'components/pages/Author';

import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={enUS}>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/author" component={Author} />
        </div>
      </Router>
    </LocaleProvider>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
