import React from 'react';
import './Feedback.css'
import { useDispatch, useSelector } from 'react-redux'
const FeedbackStudent = () => {
    const { val } = useSelector((state) => state.toggle);
  return (<>
      <div className={`Annoucement-Container ${val ? "activate" : ""}`} > 
            <div></div>
      </div>
  </>);
};

export default FeedbackStudent;