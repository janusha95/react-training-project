import React , {useContext} from 'react'
import ContextHooksOne from './ContextHooksOne.js'
import {UserContext , AgeContext} from '../App'


function ContextHooksTwo() {

    const user = useContext(UserContext)
    const age = useContext(AgeContext)

    return (
        <div>
            {user} - {age}
        </div>
    )
}

export default ContextHooksTwo
