import React, { Component } from 'react'

class EventC extends Component {
    clickHandler() {
        console.log("clicked in class comp")
    }    
    render() {
        return (
            <div>
                <button onClick = {this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default EventC
