import React from "react"

function Comment({user, comment}) {
    return (
        <>
            <h1>{user}</h1>
            <p>{comment}</p>
        </>
    )
}

export default Comment