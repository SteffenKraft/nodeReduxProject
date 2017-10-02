import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import reducers from './reducers' // Or wherever you keep your reducers

import Layout from './components/Layout';
import Home from './components/Home';
import Store from './components/Store';
import AddStore from './components/AddStore';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  compose(
    applyMiddleware(
      thunk,
      routerMiddleware(history)
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/store/:slug" component={Store} />
        <Route path="/add-store/:id?" component={AddStore} />
      </Layout>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)