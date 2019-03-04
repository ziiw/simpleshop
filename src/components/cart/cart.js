// -----------------------------
// Imports

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from './styles.styl'

import { remove, increase, decrease } from 'Actions/cart'

// -----------------------------
// Core

class Cart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    // Component appear
    this.animEnter()
  }

  componentWillUnmount () {
    // Before leaving
  }

  animEnter () {

  }

  calculTotal () {
    return this.props.cart.products.reduce((acc, item) => {
      if (item.quantity) {
        return item.price * item.quantity
      } else {
        return item.price
      }
    }, 0)
  }

  render () {
    return (
      <div className={styles.cart}>
        Cart
        <ul>
          {this.props.cart.products.map((p) => {
            return <li key={p._id}>{p.name} - {p.quantity} <span onClick={() => this.props.remove(p)}>x</span> | <span onClick={() => this.props.increase(p)}>+</span> | <span onClick={() => this.props.decrease(p)}>-</span></li>
          })}
        </ul>
        
        {this.props.cart.products.length > 0 && <Link to='/order'>Buy for {this.calculTotal()}€</Link>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  remove: (p) => dispatch(remove(p)),
  increase: (p) => dispatch(increase(p)),
  decrease: (p) => dispatch(decrease(p)),
})

Cart.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
