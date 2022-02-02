import React, { useState } from 'react';
import Timeline from './Timeline'
import { useSelector, useDispatch } from 'react-redux'
import './Holiday.css'
import Calendar from 'react-calendar';
import AddHoliday from './AddHoliday'
const Holidays = () => {
  const { val } = useSelector((state) => state.toggle);
  const user = localStorage.getItem("userd");
  const [value, onChange] = useState(new Date());
  const [flag,setFlag] = useState(false)
  const handleClick = (e) => {
    e.preventDefault();
    setFlag(true);
}
  return (<>
    {
            <AddHoliday trigger={flag} setTrigger={setFlag} />
    }
    <div className={`Holiday-Container ${val ? "activate" : ""}`}>
      <div className='Holidays-calendar'>
        <div className='Calendar-card'>
          <div className='holiday-card'>
            <div className='Holiday-date'>
              <h3>26</h3>
              <span className='prefix'>th</span>
              <span className='month-cal'>jan</span>
            </div>
            <div className='upcoming-Holiday'>
              <h5>Upcoming Holiday</h5>
            </div>
            <div className='circular0'>

            </div>
          </div>
          <div className='Calendar'>
            <Calendar onChange={onChange} value={value} />
          </div>
          {user === "admin" ? <div className='Add-Holiday-btn' onClick={handleClick}>
            <div className='plus-icon'>
              <box-icon name='plus-circle' color="#007BAB" ></box-icon>
            </div>
            <div className='Add-Holiday-text'>
              <h4>Add Holiday</h4>
            </div>
          </div> : null}
        </div>
      </div>
      <div className='timeline'>
        <Timeline />
      </div>
    </div>

  </>);
};

export default Holidays;
