import { ACTIONS } from 'Actions/cart'

export default (state = {
  products: [],
  discount: ""
}, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      const newProduct = action.payload.product
      newProduct.quantity = action.payload.quantity
      const productInCart = state.products.filter((p) => p._id === newProduct._id)
      return {
        ...state,
        products: (productInCart.length === 0) ? addProduct(state, newProduct) : updateProductQuantity(state, newProduct, 1)
      }
    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        products: removeProduct(state, action.payload.product)
      }
    case ACTIONS.INCREASE_PRODUCT_QUANTITY_IN_CART:
      return {
        ...state,
        products: updateProductQuantity(state, action.payload.product, 1)
      }
    case ACTIONS.DECREASE_PRODUCT_QUANTITY_IN_CART:
      const { product } = action.payload
      return {
        ...state,
        products: (product.quantity <= 1) ? removeProduct(state, product) : updateProductQuantity(state, product, -1)
      }
    default:
      return state
  }
}

function addProduct (state, product) {
  let updatedProducts = state.products.slice()
  updatedProducts.splice(updatedProducts.length, 0, product)
  return updatedProducts
}

function removeProduct (state, product) {
  return state.products.filter((p) => p._id !== product._id)
}

function updateProductQuantity (state, product, qty) {
  return state.products.map(p => {
    if (p._id !== product._id) {
      return p
    }

    return {
      ...p,
      quantity: p.quantity + qty
    }
  })
}