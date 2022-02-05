import React from 'react';
import './Result.css'
import { useDispatch, useSelector } from 'react-redux'
const ViewResult = () => {
    const { val } = useSelector((state) => state.toggle);
  return (<>
      <div className={`Annoucement-Container ${val ? "activate" : ""}`} > 
            <div className='Marks-div'>
                <div className='marks-radialbar'>
                    <div className='overall-marks'>

                    </div>
                    <div className='radial-div-compo'>

                    </div>
                </div>
            </div>
            <div className='all-sub-div'>
                <div className='heading-marks'>

                </div>
                <div className='all-sub-bars'>
                  
                </div>
            </div>
      </div>
  </>);
};

export default ViewResult;