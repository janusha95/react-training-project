import React, { useState } from 'react'
import HooksEffectTwo from './HooksEffectTwo.js'

function MouseContainer() {
    const [display, setDisplay]= useState(true)
    return (
        <div>
            <button onClick={()=> setDisplay(!display)}>toggle btn</button>
            {display && <HooksEffectTwo/> }
        </div>

    )
}

export default MouseContainer
