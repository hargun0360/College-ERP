import React,{useState} from 'react';

const Timeline = () => {
    const [date,setDate] = useState([{id:"1",d:"1st january",o:"New Year"},{id:"2",d:"1st january",o:"New Year"},{id:"3",d:"1st january",o:"New Year"},{id:"4",d:"1st january",o:"New Year"},{id:"5",d:"1st january",o:"New Year"},{id:"6",d:"1st january",o:"New Year"},{id:"7",d:"1st january",o:"New Year"},{id:"8",d:"1st january",o:"New Year"},{id:"9",d:"1st january",o:"New Year"},{id:"10",d:"1st january",o:"New Year"},{id:"11",d:"1st january",o:"New Year"},{id:"12",d:"1st january",o:"New Year"},{id:"13",d:"1st january",o:"New Year"}]);
    return (<>

        <div className='timeline-heading'>
            <h2>Holidays</h2>
        </div>
        <div className="line"></div>
        <div className='vertical-timeline'>
            <ul>
                {
                    date.map((data) => (
                        <li key={data.id} >
                            <h5 className='date'>{data.d}</h5>
                            <p className='occassion'>{data.o}</p>
                            <span className="circle"></span>
                        </li>
                    ))
                }
            </ul>
        </div>
        
        </>);
};

export default Timeline;
