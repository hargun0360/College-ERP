import React from 'react';
import './Profile.css'
import { useDispatch, useSelector } from 'react-redux'
const FacultyProfile = () => {
    const { val } = useSelector((state) => state.toggle);
  return (<>
      <div className={`Annoucement-Container ${val ? "activate" : ""}`} > 
            <div></div>
      </div>
  </>);
};

export default FacultyProfile