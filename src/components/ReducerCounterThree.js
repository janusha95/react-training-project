import React , {useReducer} from 'react'

    const initialState = 0
    const reducer = (state , action)=>{
        switch(action){
            case 'increment':
                return state + 1
            case 'decrement':
                return state - 1  
            case 'reset':
                return initialState 
            default:
                return state         
        }
        
    }
    function ReducerHooksThree() {
    const [count, method] = useReducer(reducer , initialState)
    const [countTwo, methodTwo] = useReducer(reducer , initialState)
    return (
        <div>
            <div>Count - {count}</div>
            <button onClick ={() => method('increment')}>Increment</button>
            <button onClick ={() => method('decrement')}>Decrement</button>
            <button onClick ={() => method('reset')}>Reset</button>
            <div>
            <div>Count Two - {countTwo}</div>
            <button onClick ={() => methodTwo('increment')}>Increment</button>
            <button onClick ={() => methodTwo('decrement')}>Decrement</button>
            <button onClick ={() => methodTwo('reset')}>Reset</button>
            </div>
        </div>
    )
}

export default ReducerHooksThree
