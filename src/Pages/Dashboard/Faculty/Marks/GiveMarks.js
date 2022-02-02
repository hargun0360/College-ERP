import React from 'react';
import './Marks.css'
import { useDispatch, useSelector } from 'react-redux'
const GiveMarks = () => {
    const { val } = useSelector((state) => state.toggle);
  return (<>
      <div className={`Annoucement-Container ${val ? "activate" : ""}`} > 
            <div></div>
      </div>
  </>);
};

export default GiveMarks;