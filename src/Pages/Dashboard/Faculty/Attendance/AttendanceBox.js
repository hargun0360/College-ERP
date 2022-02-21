import React from 'react'

const AttendanceBox = (props) => {

    return (
        props.flag ? <div className='Att-box' style={{ width: "50px", height: "50px", backgroundColor: "lightgreen", border: "0.5px solid black", color: "black", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px", borderRadius: "50%", cursor: "pointer" }}  >
            P
        </div> :
            <div className='Att-box' style={{ width: "50px", height: "50px", backgroundColor: "#f15151", border: "0.5px solid black", color: "black", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px", borderRadius: "50%", cursor: "pointer" }}   >
                A
            </div>
    )
}

export default AttendanceBox