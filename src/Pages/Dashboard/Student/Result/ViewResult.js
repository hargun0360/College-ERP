import React, { useState } from 'react';
import './Result.css'
import { useDispatch, useSelector } from 'react-redux'
import MainRadialbar from './MainRadialbar'
import RadialBar from './RadialBar';
const ViewResult = () => {
  const { val } = useSelector((state) => state.toggle);
  const col = ['#FF902A', '#6C63FF', '#F82A4F', '#7F00AB', '#32C70D', '#FF902A', '#6C63FF', '#F82A4F']
  const [data, setData] = useState([{ id: "1", sub: "maths", per: "40" },
  { id: "2", sub: "maths", per: "50" }, { id: "3", sub: "maths", per: "70" },
  { id: "4", sub: "maths", per: "20" }, { id: "5", sub: "maths", per: "90" }])
  return (<>
    <div className={`Annoucement-Container ${val ? "activate" : ""}`} >
      <div className='Marks-div'>
        <div className='marks-radialbar'>
          <div className='overall-marks'>
            <h4>Overall Attendence</h4>
          </div>
          <div className='radial-div-compo'>
            <MainRadialbar />
          </div>
        </div>
      </div>
      <div className='heading-marks'>
        <h4>Attendence Insights</h4>
      </div>
      <div className='all-sub-div'>
        {
          data.map((value, id) => (<>
            <div className='each-div'>
              <div className='subjects-head'>
                <h6>{value.sub}</h6>
              </div>
              <div className='all-sub-bars'>
                <RadialBar per={value.per} color={col[id]} />
              </div>
            </div>
          </>))
        }
      </div>
    </div>
  </>);
};

export default ViewResult;