import React from "react"

function Button({buttonValue, handleClick}) {
    return(
        <button onClick={handleClick}>{buttonValue}</button>
    )
}

export default Button