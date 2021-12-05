import React, { useEffect, useRef, useState } from 'react'

const HookTimer = () => {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)

        return () => {
            clearInterval(intervalRef.current)
        }
    },[])

    return (
        <>
            <h2>Hook Timer - {timer}</h2>
            <button onClick={() => clearInterval(intervalRef.current)}>Stop Timer</button>
        </>

    )
}

export default HookTimer
