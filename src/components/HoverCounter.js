import React, { Component } from 'react'
import WithCounter from './WithCounter';

 class HoverIncrement extends Component {

  render() {
      const {count,incrementCounter} = this.props
    return (
      <div>
        <h3 onMouseOver={incrementCounter}>Hovered {count} times</h3>
      </div>
    )
  }
}

export default WithCounter(HoverIncrement, 10)
