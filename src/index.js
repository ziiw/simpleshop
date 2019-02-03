// -----------------------------
// Imports

import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './layouts/layout'

// -----------------------------
// Core

const init = () => {
  console.info('%c[INIT] - FJORD STARTER READY !', 'color: #7a0d48; font-weight: 900; font-family: Arial;')
  // Enable react dev-tools (https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
  window.React = React

  render()
}

const render = (store, history) => {
  ReactDOM.render(
    <Layout />, document.getElementById('root')
  )
}

init()
