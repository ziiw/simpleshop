import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import user from './user'
import cart from './cart'
import catalog from './catalog'

export default (history) => combineReducers({
  router: connectRouter(history),
  user,
  cart,
  catalog
})
