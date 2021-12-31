import React, { useState, useEffect } from 'react'
import './LandingPage.css'
import animated from '../../../src/Assets/Imagesused/Landing-illustration.gif'
import underline from '../../../src/Assets/Imagesused/Underline.png'
import Modal from './Modal'
const Main = () => {
    const [flag, setFlag] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setFlag(true);
    }
    return (
        <div className='Landing-container'>
            {
                 <Modal trigger={flag} setTrigger={setFlag} />
            }
            <div className='Left-Container'>
                <div className='Left-Cont-box'>
                    <div className='Main-Heading'>
                        <div className='Sub-heading'>
                            <h2>Manage everything </h2>
                            <span className='underline'>
                                <img src={underline} alt="illustration" />
                            </span>
                        </div>
                        <div className='Sub-heading'>
                            <h2>related to our</h2>
                        </div>
                        <div className='Sub-heading'>
                            <h2>college</h2>
                        </div>
                    </div>
                    <div className='Continue-Button' onClick={handleClick}>
                        <div className='Continue-text'>
                            <h2>Continue</h2>
                        </div>
                        <div className='Arrow'>
                            <i id="arrow" className="fa fa-arrow-right icon"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Right-Container'>
                <div className='Right-Cont-box'>
                    <figure>
                        <img className="image-illus" src={animated} alt="illustration" />
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Main
