import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        const url = `https://jsonplaceholder.typicode.com/posts`;
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
        const res = await fetch(url, settings);
        const data = await res.json();
        console.log(data);
    }
    
    render() {
        const { userId, title, body } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" name="userId" placeholder="Enter Name" value={userId} onChange={this.handleChange} />
                </div>
                <div>
                    <input type="text" name="title" placeholder="Enter Title" value={title} onChange={this.handleChange} />
                </div>
                <div>
                    <input type="text" name="body" placeholder="Enter Body" value={body} onChange={this.handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default PostForm
