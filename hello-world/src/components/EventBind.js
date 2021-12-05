import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Hello World'
        }
        // this.clickHandler = this.clickHandler.bind(this)
    }
    
    clickHandler = () => {
        this.setState({
            message: 'Hello React'
        })
        console.log(this)
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                {/* <button onClick={this.clickHandler.bind(this)}>Click Me</button> */}
                {/* <button onClick={this.clickHandler}>Click Me</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click Me</button> */}
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default EventBind
