import { ACTIONS } from 'Actions/cart'

export default (state = {
  products: [],
  discount: ""
}, action) => {
  switch (action.type) {
    // TODO: Try to rewrite this in a better way
    case ACTIONS.ADD_TO_CART:
      const newProduct = action.payload.product
      newProduct.quantity = action.payload.quantity
      const productInCart = state.products.filter((p) => p.id === newProduct.id)
      if (productInCart.length === 0) {
        return {
          ...state,
          products: [
            ...state.products,
            newProduct
          ]
        }
      } else {
        // Tricks: We update the reference so 
        // will be updated in the legacy state
        productInCart[0].quantity += newProduct.quantity
        return {
          ...state,
          products: [
            ...state.products,
          ]
        }
      }
    case ACTIONS.REMOVE_FROM_CART:
      const rmProductID = action.payload.product.id
      const productsCleaned = state.products.filter((p) => p.id !== rmProductID)

      return {
        ...state,
        products: productsCleaned
      }
    case ACTIONS.INCREASE_PRODUCT_QUANTITY_IN_CART:
      const incProductID = action.payload.product.id
      const selectedProductInc = state.products.filter((p) => p.id === incProductID)[0]
      selectedProductInc.quantity += 1

      return {
        ...state,
        products: [
          ...state.products,
        ]
      }
    case ACTIONS.DECREASE_PRODUCT_QUANTITY_IN_CART:
      const decProductID = action.payload.product.id
      const selectedProductDec = state.products.filter((p) => p.id === decProductID)[0]
      selectedProductDec.quantity -= 1

      return {
        ...state,
        products: [
          ...state.products,
        ]
      }
    default:
      return state
  }
}
