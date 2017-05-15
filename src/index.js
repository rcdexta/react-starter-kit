import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'
import config from './config'
import axios from 'axios'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'

import rootSaga from './sagas'
import reducer from './reducers'

let sagaMiddleware = createSagaMiddleware()
let store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

axios.defaults.baseURL = config.path.backend
axios.interceptors.response.use((res) => res.data)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Routes />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
