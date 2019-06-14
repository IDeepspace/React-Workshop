import React, { useState, useRef, useLayoutEffect } from 'react';

const Item = ({ text }) => {
    const ref = useRef()
    const [height, setHeight] = useState()
    useLayoutEffect(() => {
        setHeight(ref.current.getBoundingClientRect().height)
    }, [])
    console.log(height)
    return <div ref={ref} style={{ marginTop: 300 }}>{text}</div>
}

export default Item