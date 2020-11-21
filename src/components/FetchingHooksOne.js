import axios from 'axios'
import React , {useState , useEffect} from 'react'

function FetchingHooksOne() {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)

    const[idClick, setIdClick] = useState(1)

    const fetchClick = () =>{
        setIdClick(id)
    }

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${idClick}`)
            .then(res =>{
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idClick])
    return (
        <div>
            <input type="text" value = {id} onChange = {e => setId(e.target.value)}/>
            <button onClick = {fetchClick}>Fetch data</button>
            <div>{post.title}</div>
            {/* <ul>{posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}</ul> */}
        </div>
    )
}

export default FetchingHooksOne
