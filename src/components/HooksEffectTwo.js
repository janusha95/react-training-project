import React, {useState, useEffect} from 'react'

function HooksEffectTwo() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log("mouse moved")
        setX (e.clientX)
        setY (e.clientY)
    }

    useEffect(() => {
        console.log("useEffect is called")
        window.addEventListener('mousemove' , logMousePosition)
        
        return() => {
            console.log("unmounting")
            window.removeEventListener('mousemove' , logMousePosition)
        }
    }, [])

    return (
        <div>
            X - {x} , Y - {y}
        </div>
    )
}

export default HooksEffectTwo
