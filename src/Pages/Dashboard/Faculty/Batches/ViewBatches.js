import React from 'react';
import './Batches.css'
import { useDispatch, useSelector } from 'react-redux'
const ViewBatches = () => {
    const { val } = useSelector((state) => state.toggle);
  return (<>
      <div className={`Annoucement-Container ${val ? "activate" : ""}`} > 
            <div></div>
      </div>
  </>);
};

export default ViewBatches;