export const ACTIONS = {
  PLACE_ORDER: 'PLACE_ORDER',
  PLACE_ORDER_FAILED: 'PLACE_ORDER_FAILED',
}

// Maybe not necessary to use redux for that
export const placeOrder = (cart, delivery, discount) => {
  return dispatch => {
    return new Promise ((resolve, reject) => {
      Axios.post(`${Constants.SERVER.HOST}/api/order`, {
        cart,
        delivery,
        discount
      }).then(({data}) => {
        if (data.success) {
          dispatch({
            type: ACTIONS.PLACE_ORDER,
            payload: data.message
          })
          resolve()
        } else{
          dispatch({
            type: ACTIONS.PLACE_ORDER_FAILED,
            payload: data.message
          })
          reject()
        }
      }).catch((error) => {
        console.error(error)
        reject()
      })
    })
  }
}