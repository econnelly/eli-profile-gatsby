import React, {useEffect, useState} from "react"
// import ReactGA from "react-ga"

export default () => {
    const [message, setMessage] = useState("")
    useEffect(() => {

    }, [message])

    const testClick = (e: React.MouseEvent<HTMLDivElement>) => {
        setMessage(`(${e.clientX}, ${e.clientY})`)
    }

    return (
        <>
            <div onClick={(e) => testClick(e)}>Test: {message}</div>
            <p>test paragraph</p>
        </>
    )
}