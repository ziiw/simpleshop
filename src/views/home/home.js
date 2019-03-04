// -----------------------------
// Imports

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { add, remove, increase, decrease } from 'Actions/cart'
import { getAllProducts } from 'Actions/catalog'
import { readToken } from 'Actions/user'

import Catalog from 'Components/catalog/catalog'
import Cart from 'Components/cart/cart'
import Login from 'Components/login/login'

// -----------------------------
// Core

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    // Component appear
    this.animEnter()
    // Update
    this.props.readToken()
    this.props.getAllProducts()
  }

  componentWillUnmount () {
    // Before leaving
  }

  animEnter () {

  }

  render () {
    return (
      <div id='home'>
        <Catalog products={this.props.catalog} />
        <Cart />
        {!this.props.user.token && <Login />}
        {this.props.user.token && `Welcome ${this.props.user.firstname}`}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
  cart: state.cart,
  catalog: state.catalog,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  getAllProducts: () => dispatch(getAllProducts()),
  readToken: () => dispatch(readToken()),
  add: (p, q) => dispatch(add(p, q)),
  remove: (p) => dispatch(remove(p)),
  increase: (p) => dispatch(increase(p)),
  decrease: (p) => dispatch(decrease(p)),
})

Home.propTypes = {
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
