// -----------------------------
// Imports

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { increment, decrement } from 'Actions/counter'
import { add, remove, increase, decrease } from 'Actions/cart'

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

  // componentDidUpdate(prevProps, prevState) {
  //   if(prevProps.cart.products.length !== this.props.cart.products.length){
  //     //Perform some operation here
  //     this.setState({someState: someValue});
  //     this.classMethod();
  //   }
  // }

  componentWillUnmount () {
    // Before leaving
  }

  animEnter () {

  }

  render () {
    return (
      <div id='home'>
        <button onClick={() => this.props.add({id: 1, name: 'trololo'}, 2)}>Add tololol</button>
        <button onClick={() => this.props.remove({id: 1, name: 'trololo'})}>Remove tololol</button>
        <button onClick={() => this.props.increase({id: 1, name: 'trololo'})}>increase tololol</button>
        <button onClick={() => this.props.decrease({id: 1, name: 'trololo'})}>decrease tololol</button>
        <ul>
          {this.props.cart.products.map((p) => {
            return <li key={p.id}>{p.name} - {p.quantity}</li>
          })}
        </ul>
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
