import React , {useEffect, useState} from 'react'
import axios from 'axios'

function FetchingDataOne() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [posts, setPosts] = useState({})

    useEffect( ()=> {
        axios
        .get('https://jsonplaceholder.typicode.com/posts/10')
        .then(response => {
            setLoading(false)
            setError('')
            setPosts(response.data)
        })
        .catch(() => {
            setLoading(false)
            setError('Error fetching post')
            setPosts({})
        })
    })

    return (
        <div>
            {loading ? 'loading' : posts.title}
            {error ? error : null}
        </div>
    )
}

export default FetchingDataOne
