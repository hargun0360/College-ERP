import React from 'react'
import './Images.css'
const Image = (props) => {
    console.log(props);
    return (

        <div className="image-box">
            <figure>
                <img className="image" src={props.imge} alt="illustration" />
            </figure>

        </div>
    )
}

export default Image
