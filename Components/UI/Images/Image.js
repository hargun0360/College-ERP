import React from 'react'
import imge from '../../../Assets/Imagesused/illustration.png'
import './Images.css'
const Image = () => {
    return (

        <div className="image-box">
            <figure>
                <img className="image" src={imge} alt="illustration" />
            </figure>

        </div>
    )
}

export default Image
