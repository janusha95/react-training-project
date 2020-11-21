import React, { Component } from 'react'

export class HoverCounterTwo extends Component {
    
    render() {
        const {count,incrementCounter} = this.props
      return (
        <div>
          <h3 onMouseOver={incrementCounter}>Hovered {count} times</h3>
        </div>
      )
    }
}

export default HoverCounterTwo
