import axios from 'axios';
import React, { useEffect, useState } from 'react'

const DataFetching1 = () => {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res);
                setPost(res.data);
            })
            .catch(err => console.error(err))
    }, [id])

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <h1>{post.title}</h1>
            <h2>{post.body}</h2>
        </div>
    )
}

export default DataFetching1
