// -----------------------------
// Imports

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { increment, decrement } from 'Actions/counter'
import { add, remove, increase, decrease } from 'Actions/cart'

import Catalog from 'Components/catalog/catalog'
import Cart from 'Components/cart/cart'

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
    // Before update
    console.log(this.props.counter)
    // Update
    this.props.increment()
  }

  componentWillUnmount () {
    // Before leaving
  }

  animEnter () {

  }

  render () {
    return (
      <div id='home'>
        <Catalog products={[{id: 1, name: 'product 1'}, {id: 2, name: 'product 2'}, {id: 3, name: 'product 3'}, {id: 4, name: 'product 4'}]} />
        <Cart />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
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
