import React , {Component} from 'react';

class Message extends Component {
    constructor() {
        super()
        this.state = {
          message : "Welcome Guest"
        }
        // this.ChangeMessage = this.ChangeMessage.bind(this)
    }

    // ChangeMessage() {
    //     this.setState ({
    //     message : "Welcome Vetri"
    //     },
    //     () => {
    //        console.log('Callback' , this.state.message)
    //     }
    //     )
    //     console.log('Callback' , this.state.message)
    //     console.log(this)
    // }

    ChangeMessage = () => {
        this.setState({
            message : "Welcome Jan"
        })
    }


    render()
{ 
    return ( 
        <div>
            <h3>{this.state.message}</h3>
            {/* <button onClick={() => this.ChangeMessage()}>Reply</button> */}
            <button onClick={this.ChangeMessage}>Reply</button>
        </div>
        )

}
}
export default Message