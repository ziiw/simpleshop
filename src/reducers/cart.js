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
      const rmProduct = action.payload.product
      const productsCleaned = state.products.filter((p) => p.id !== rmProduct.id)

      return {
        ...state,
        products: productsCleaned
      }
    case ACTIONS.INCREASE_PRODUCT_QUANTITY_IN_CART:
      const incProduct = action.payload.product
      const selectedProductInc = state.products.filter((p) => p.id === incProduct.id)[0]
      selectedProductInc.quantity += 1

      return {
        ...state,
        products: [
          ...state.products,
        ]
      }
    case ACTIONS.DECREASE_PRODUCT_QUANTITY_IN_CART:
      const decProduct = action.payload.product
      if (decProduct.quantity <= 1) {
        // Delete the product
        const productsCleaned = state.products.filter((p) => p.id !== decProduct.id)
        return {
          ...state,
          products: productsCleaned
        }
      } else {
        // Decrease quantity
        const selectedProductDec = state.products.filter((p) => p.id === decProduct.id)[0]
        selectedProductDec.quantity -= 1

        return {
          ...state,
          products: [
            ...state.products,
          ]
        }
      }
    default:
      return state
  }
}
