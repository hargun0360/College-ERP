import React,{useState} from 'react';
import Timeline from './Timeline'
import { useSelector, useDispatch } from 'react-redux'
import './Holiday.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const Holidays = () => {
    const { val } = useSelector((state) => state.toggle);
    const [value, onChange] = useState(new Date());
  return (<>

  <div className={`Holiday-Container ${val ? "activate" : ""}`}>
  <div className='Holidays-calendar'>
    <div className='Add-Holiday-btn'>

    </div>
    <div className='Calendar-card'>
        <div className='holiday-card'>

        </div>
        <div className='Calendar'>
            <Calendar onChange={onChange} value={value} />
        </div>
    </div>
  </div>
    <div className='timeline'>
        <Timeline />
    </div>
  </div>
  
  </>);
};

export default Holidays;
