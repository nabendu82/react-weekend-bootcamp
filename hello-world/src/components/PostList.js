import React, { Component } from 'react'

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        const res = await fetch(url);
        const posts = await res.json();
        this.setState({ posts });
    }
    
    render() {
        const { posts } = this.state;
        console.log(posts)

        return (
            <>
                <h1>Posts</h1>
                {posts && posts.length && posts.map(post => <div key={post.id}>{post.title}</div>)}
            </>
        )
    }
}

export default PostList
