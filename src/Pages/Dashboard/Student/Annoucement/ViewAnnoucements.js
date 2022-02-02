import React from 'react';
import './Annoucement.css'
import { useDispatch, useSelector } from 'react-redux'
const ViewAnnoucements = () => {
    const { val } = useSelector((state) => state.toggle);
  return (<>
      <div className={`Annoucement-Container ${val ? "activate" : ""}`} > 
            <div></div>
      </div>
  </>);
};

export default ViewAnnoucements;
