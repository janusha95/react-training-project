import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifeCycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
          name : "jan"
         
      }
      console.log('LifeCycleA constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA static getDerivedStateFromProps')
        return null;
        
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount');
      }

    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }  

    getSnapshotBeforeUpdate(){
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
        
    }
    
    changeState = () =>{
        this.setState({
            name: 'V'
        })
    }
    
  render() {
    console.log('LifeCycleA render');
    return (
      <div>
        <h2>LifeCycleA</h2>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB></LifecycleB>
      </div>
    )
  }

  
}

export default LifeCycleA