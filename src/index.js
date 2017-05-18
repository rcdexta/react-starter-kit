import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import config from './config'
import axios from 'axios'

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'

import rootSaga from './sagas'
import reducer from './reducers'

let sagaMiddleware = createSagaMiddleware()
let store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

axios.defaults.baseURL = config.path.backend
axios.interceptors.response.use(res => res.data)

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
