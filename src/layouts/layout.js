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
        <div id='wrapperPage' >
          <Provider store={store}>
            <ConnectedRouter history={history}>
              <Switch>
                <Route path='/' component={Home} />
              </Switch>
            </ConnectedRouter>
          </Provider>
        </div>
      </div>
    )
  }
}
