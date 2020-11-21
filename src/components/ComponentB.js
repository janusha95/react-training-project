import React, { Component } from 'react'
import ComponentC from './ComponentC.js'
import UserContext from './UserContext.js'

export class ComponentB extends Component {
    render() {
        return (
            <div>
                Component E {this.context}
                <ComponentC/>
            </div>
        )
    }
}
ComponentB.contextType = UserContext

export default ComponentB
