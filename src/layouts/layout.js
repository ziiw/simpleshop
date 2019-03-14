// -----------------------------
// Imports

import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'
import { store, history } from 'Stores/configureStore'

// -----------------------------
// Views

import Home from 'Views/home/home'
import Order from 'Views/order/order'

// -----------------------------
// Core

export default class Layout extends React.Component {
  componentDidMount () {
    // Component appear
    console.info('[Layout] - starting')
  }

  render () {
    return (
      <div id='layout'>
        <div id='wrapperPage'>
          <h1>SimpleShop</h1>
          <Provider store={store}>
            <ConnectedRouter history={history}>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/order' component={Order} />
              </Switch>
            </ConnectedRouter>
          </Provider>
        </div>
      </div>
    )
  }
}
