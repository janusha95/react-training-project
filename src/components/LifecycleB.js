import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
          name : "jan"
         
      }
      console.log('LifeCycleB constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleB static getDerivedStateFromProps')
        return null;
        
    }
    
  render() {
    console.log('LifeCycleB render');
    return (
      <div>
          LifeCycleB
      </div>
    )
  }

  componentDidMount(){
    console.log('LifeCycleB componentDidMount');
  }

}

export default LifeCycleB