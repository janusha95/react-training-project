import React , {useReducer} from 'react'

    const initialState = {
        firstCounter : 0,
        secondCounter : 10
    }
    const reducer = (state , action)=>{
        switch(action.type){
            case 'increment':
                return {...state, firstCounter : state.firstCounter + action.value}
            case 'decrement':
                return {...state, firstCounter : state.firstCounter - action.value}  
            case 'increment2':
                return {...state, secondCounter : state.secondCounter + action.value}
            case 'decrement2':
                return {...state, secondCounter : state.secondCounter - action.value}
            case 'reset':
                return initialState 
            default:
                return state         
        }
        
    }
    function ReducerHooksTwo() {
    const [count, method] = useReducer(reducer , initialState)
    return (
        <div>
            <div>Count - {count.firstCounter}
            second Counter - {count.secondCounter}</div>
            <button onClick ={() => method({type : 'increment' , value : 1})}>Increment</button>
            <button onClick ={() => method({type :'decrement' , value : 1})}>Decrement</button>
            <button onClick ={() => method({type : 'increment' , value : 5})}>Increment 5</button>
            <button onClick ={() => method({type :'decrement' , value : 5})}>Decrement 5</button>
            <button onClick ={() => method({type :'reset'})}>Reset</button>
            <div>
                <button onClick ={() => method({type : 'increment2' , value : 1})}>Increment Counter 2</button>
                <button onClick ={() => method({type :'decrement2' , value : 1})}>Decrement Conter 2</button>
            </div>
        </div>
    )
}

export default ReducerHooksTwo
