import React from 'react'

const WithCounter = (WrappedComponent, incrementNumber) =>{
    class WithCounter extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
          
          incrementCounter = () => {
              this.setState(prevState => {
                  return {count: prevState.count + incrementNumber}
              })
             
          }  
        render(){
            return (
                <WrappedComponent count={this.state.count}
                incrementCounter = {this.incrementCounter}
                {... this.props}
                />
            )
        }
    }
    return WithCounter
}

export default WithCounter
