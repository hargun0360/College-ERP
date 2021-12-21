import React from 'react'

const SubmitButton = (props) => {
    return (
        <div>
            <button className={props.className} type="sumbit" >{props.Label}</button>
        </div>
    )
}

export default SubmitButton
