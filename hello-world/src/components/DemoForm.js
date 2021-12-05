import React, { Component } from 'react'

class DemoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            comment: '',
            language: 'react',
            imgArr: ['https://source.unsplash.com/500x300/weekly?water','https://source.unsplash.com/500x300/weekly?nature','https://source.unsplash.com/500x300/weekly?mountain']
        }
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`
            Email: ${this.state.email}
            Comment: ${this.state.comment}
            Language: ${this.state.language}
            `)
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.state.imgArr.map(image => <li key={image}><img src={image} alt={`${image}`} /></li>)}

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={this.state.email} onChange={this.handleEmailChange} />
                </div>
                <div>
                    <label htmlFor="comment">Comments</label>
                    <textarea id="comment" value={this.state.comment} onChange={this.handleCommentChange}></textarea>
                </div>
                <div>
                    <label htmlFor="language">Language</label>
                    <select id="language" value={this.state.language} onChange={this.handleLanguageChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default DemoForm
