import React from 'react';
import './Result.css'
import { useDispatch, useSelector } from 'react-redux'
const ViewResult = () => {
    const { val } = useSelector((state) => state.toggle);
  return (<>
      <div className={`Annoucement-Container ${val ? "activate" : ""}`} > 
            <div></div>
      </div>
  </>);
};

export default ViewResult;