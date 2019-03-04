import { ACTIONS } from 'Actions/catalog'

export default (state = [], action) => {
  switch (action.type) {
    case ACTIONS.GET_ALL_PRODUCTS:
      return action.payload
    default:
      return state
  }
}
