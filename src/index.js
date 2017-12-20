import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';

import enUS from 'antd/lib/locale-provider/en_US';
import Home from 'features/home';
import { ProjectsList } from 'features/projects';

import DefaultLayout from './layouts/Default';
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
        <div style={{ height: '100%' }}>
          <DefaultLayout exact path="/" component={Home} />
          <DefaultLayout path="/projects" component={ProjectsList} />
        </div>
      </Router>
    </LocaleProvider>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
