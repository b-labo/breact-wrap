'use strict'

const React = require('react')
const { combine } = require('breact-wrap')

class Component01 extends React.Component { /* ... */ }

// Combine wrappers
const WrappedComponent01 = combine(
  (Component) => class Wrapped extends Component {

  }
)(Component01)

