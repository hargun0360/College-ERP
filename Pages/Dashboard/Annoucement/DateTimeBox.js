import React, { useState } from 'react'
import './DateTimeBox.css'
const DateTimeBox = () => {
    let today=new Date()
    const formatAMPM = (time) => {
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; 
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    var dd = today.getDate();

    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }
    today = dd + '/' + mm + '/' + yyyy;
    return (
        <div className='Date-Time-Box'>
            <div className='Date-Box'>
                <h4>{today}</h4>
            </div>
            <div className='Circular-Box'>

            </div>
            <div className='Time-Box'>
                <h4>{formatAMPM(new Date)}</h4>
            </div>
        </div>
    )
}

export default DateTimeBox
