import React, { useEffect, useState } from 'react'

const HookMouse = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMouseMove = e => {
        console.log('Mouse Event')
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMouseMove);
        return () => {
            console.log('Cleanup unmounting code');
            window.removeEventListener('mousemove', logMouseMove);
        }
    },[]);

    return (
        <h2>
            Hook X - {x} Y - {y}
        </h2>
    )
}

export default HookMouse
