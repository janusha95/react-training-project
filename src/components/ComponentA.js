import React, { Component } from 'react'
import ComponentB from './ComponentB.js'

export class ComponentA extends Component {
    render() {
        return (
            <div>
                <ComponentB/>
            </div>
        )
    }
}

export default ComponentA