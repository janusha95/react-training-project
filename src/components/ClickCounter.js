import React, { Component } from 'react'
import WithCounter from './WithCounter';

export class ClickCounter extends Component {
    
    render() { 
        const {count,incrementCounter} = this.props
    return (
      <div>
        <button onClick={incrementCounter}>{this.props.name } Clicked {count} times</button>
      </div>
    )
}
}

export default WithCounter(ClickCounter , 5)
