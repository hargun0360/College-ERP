import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Paper, TableContainer, TableBody, Table, TableHead, TableCell, TableRow } from "@material-ui/core"
const ViewAnnoucements = () => {
    const { val } = useSelector((state) => state.toggle);
    const user = localStorage.getItem("userd");
    const [tableData, setTableData] = useState([{id:"1",date:"20-2-2022",time:"9:00 AM",Annby:"Hargun Singh",Ann:"so much data here"},{id:"2",date:"20-2-2022",time:"9:00 AM",Annby:"Hargun Singh",Ann:"so much data here"},{id:"3",date:"20-2-2022",time:"9:00 AM",Annby:"Hargun Singh",Ann:"so much data here"},{id:"4",date:"20-2-2022",time:"9:00 AM",Annby:"Hargun Singh",Ann:"so much data here"},{id:"5",date:"20-2-2022",time:"9:00 AM",Annby:"Hargun Singh",Ann:"so much data here"},{id:"6",date:"20-2-2022",time:"9:00 AM",Annby:"Hargun Singh",Ann:"so much data here"}])
    const loadAnnF = () =>{
        console.log("faculty");
    }
    const loadAnnS = () =>{
            console.log("student");
    }

     useEffect(()=>{  
        if(user === "student"){
            loadAnnS();
        }else if(user === "faculty"){
            loadAnnF();
        }
    },[])  
  return (<>
      <div className={`Annoucement-Container ${val ? "activate" : ""}`} > 
      <TableContainer component={Paper} style={{
                    width: val ? "81vw" : "91vw",
                    position: "relative",
                    top: "7%",
                    height:"90vh"

                }} >
                    <Table style={{height: "max-content"}} stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ border: "0px solid transparent", width: "20%",fontFamily:"'Inter', sans-serif"  }} align='center'>Date</TableCell>
                                <TableCell style={{ border: "0px solid transparent",fontFamily:"'Inter', sans-serif"  }} align='center'>Time</TableCell>
                                {
                                    user === "student" ? <TableCell style={{ border: "0px solid transparent",fontFamily:"'Inter', sans-serif"  }} align='center'>Annoucement By</TableCell> : null
                                }
                                <TableCell style={{ border: "0px solid transparent" ,fontFamily:"'Inter', sans-serif" }} align='center'>Annoucement</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {
                                tableData.map((data) => (<>
                                    <TableRow>
                                        <TableCell style={{ border: "0px solid transparent",fontFamily:"'Inter', sans-serif"  }} align='center'>{data.date}</TableCell>
                                        <TableCell style={{ border: "0px solid transparent",fontFamily:"'Inter', sans-serif"  }} align='center'>{data.time}</TableCell>
                                        {
                                            user === "student" ? <TableCell style={{ border: "0px solid transparent" ,fontFamily:"'Inter', sans-serif" }} align='center'>{data.Annby}</TableCell> : null
                                        }
                                        <TableCell style={{ border: "0px solid transparent",fontFamily:"'Inter', sans-serif"  }} align='center'>{data.Ann}</TableCell>
                                    </TableRow>
                                </>))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
      </div>
  </>);
};

export default ViewAnnoucements