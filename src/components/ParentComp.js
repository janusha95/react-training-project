import React, { Component } from 'react'
import ChildComp from './ChildComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: "Jan"
        }
        this.greetParent = this.greetParent.bind(this)
    }
    
    greetParent(DisplayMessage){
        // if(this.state.parentName = "V"){
        // alert(`Hello ${this.state.parentName} and ${DisplayMessage}`)}
        // else{
        //     alert(`Welcome Guest`)
        // }
        alert(`Hello ${this.state.parentName} and ${DisplayMessage}`)
    }
    
    render() {
        return (
            <div>
               <ChildComp greetHandler={this.greetParent}/> 
            </div>
        )
    }
}

export default ParentComp
