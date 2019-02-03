import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import counter from './counter'
import cart from './cart'

export default (history) => combineReducers({
  router: connectRouter(history),
  counter,
  cart
})
