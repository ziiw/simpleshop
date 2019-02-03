export const ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  INCREASE_PRODUCT_QUANTITY_IN_CART: 'INCREASE_PRODUCT_QUANTITY_IN_CART',
  DECREASE_PRODUCT_QUANTITY_IN_CART: 'DECREASE_PRODUCT_QUANTITY_IN_CART'
}

export const add = (product, quantity) => {
  return dispatch => {
    dispatch({
      type: ACTIONS.ADD_TO_CART,
      payload: {product, quantity}
    })
  }
}

export const remove = (product) => {
  return dispatch => {
    dispatch({
      type: ACTIONS.REMOVE_FROM_CART,
      payload: {product}
    })
  }
}

export const increase = (product) => {
  return dispatch => {
    dispatch({
      type: ACTIONS.INCREASE_PRODUCT_QUANTITY_IN_CART,
      payload: {product}
    })
  }
}

export const decrease = (product) => {
  return dispatch => {
    dispatch({
      type: ACTIONS.DECREASE_PRODUCT_QUANTITY_IN_CART,
      payload: {product}
    })
  }
}