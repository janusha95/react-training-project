import React , {useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {
    loading : true,
    post : {}, 
    error: ''
}

const reducer = (state, action) => {
    switch(action.type) {
     case 'SUCCESS':
         return {
         loading: false,
         error: '',
         post: action.payload
         }   
     case 'FAILURE':
         return {
         loading: false,
         error: 'Fetching error',
         post: {}
         }
     default :
        return state    
        }
}

function FetchingDataTwo() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect( ()=> {
        axios
        .get('https://jsonplaceholder.typicode.com/posts/10')
        .then(response => {
            dispatch({type: 'SUCCESS', payload:response.data})
        })
        .catch(() => {
            dispatch({type: 'FAILURE'})
        })
    })
    return (
        <div>
            {state.loading ? 'loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default FetchingDataTwo
