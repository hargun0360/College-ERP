import React,{useState} from 'react';
import './Annoucement.css'
import { useDispatch, useSelector } from 'react-redux'
import { Paper, TableContainer, TableBody, Table, TableHead, TableCell, TableRow } from "@material-ui/core"
import MakeAnnoucement from './MakeAnnoucement';

const FacultyAnnoucement = () => {
  const { val } = useSelector((state) => state.toggle);
  const [flag, setFlag] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setFlag(true);

  }
  const handleDelete = (id) => {
    // AuthService.DelStudent(id)
    //     .then((res)=>{
    //         console.log(res);
    //         if(res){
    //             toast.success("Student Deleted Successfully")
    //         }
    //         setTrigger(false);
    //         console.log(trigger);
    //     }).catch((e)=>{
    //         console.log(e);
    //         toast.error("Error!")
    //     })
}
  const [tableData, setTableData] = useState([{id:"1",date:"20-2-2022",time:"9:00 AM",Annby:"Hargun Singh",Ann:"so much data here"},{id:"2",date:"20-2-2022",time:"9:00 AM",Annby:"Hargun Singh",Ann:"so much data here"},{id:"3",date:"20-2-2022",time:"9:00 AM",Annby:"Hargun Singh",Ann:"so much data here"},{id:"4",date:"20-2-2022",time:"9:00 AM",Annby:"Hargun Singh",Ann:"so much data here"},{id:"5",date:"20-2-2022",time:"9:00 AM",Annby:"Hargun Singh",Ann:"so much data here"},{id:"6",date:"20-2-2022",time:"9:00 AM",Annby:"Hargun Singh",Ann:"so much data here"}])
  return (<>
        {
            <MakeAnnoucement trigger={flag} setTrigger={setFlag} />
        }
    <div className={`Annoucement-Container ${val ? "activate" : ""}`} >
      <div className='make-annoucement-btn' onClick={handleClick}>
        <div className='annoucement-icon'>
          <box-icon id="edit-icons" color="white" name='edit' />
        </div>
        <div className='annoucement-text'>
          <h2>Make an Announcement</h2>
        </div>
      </div>
      <div className='annoucement-table'>
      <TableContainer component={Paper} style={{
                    width: val ? "81vw" : "91vw",
                    position: "relative",
                    top: "0%",
                    height:"80vh"

                }} >
                    <Table style={{height: "max-content"}} stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ border: "0px solid transparent", width: "20%",fontFamily:"'Inter', sans-serif"  }} align='center'>Date</TableCell>
                                <TableCell style={{ border: "0px solid transparent",fontFamily:"'Inter', sans-serif"  }} align='center'>Time</TableCell>
                                <TableCell style={{ border: "0px solid transparent",fontFamily:"'Inter', sans-serif"  }} align='center'>Annoucement By</TableCell>
                                <TableCell style={{ border: "0px solid transparent" ,fontFamily:"'Inter', sans-serif" }} align='center'>Annoucement</TableCell>
                                <TableCell style={{ border: "0px solid transparent",fontFamily:"'Inter', sans-serif"  }} align='center'></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {
                                tableData.map((data) => (<>
                                    <TableRow>
                                        <TableCell style={{ border: "0px solid transparent",fontFamily:"'Inter', sans-serif"  }} align='center'>{data.date}</TableCell>
                                        <TableCell style={{ border: "0px solid transparent",fontFamily:"'Inter', sans-serif"  }} align='center'>{data.time}</TableCell>
                                        <TableCell style={{ border: "0px solid transparent" ,fontFamily:"'Inter', sans-serif" }} align='center'>{data.Annby}</TableCell>
                                        <TableCell style={{ border: "0px solid transparent",fontFamily:"'Inter', sans-serif"  }} align='center'>{data.Ann}</TableCell>
                                        <TableCell style={{ border: "0px solid transparent" }} align='center' onClick={()=>handleDelete(data._id)}>
                                            <div className='trash-icon' style={{cursor:"pointer"}}>
                                                <box-icon color="red" name='trash-alt' />
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                </>))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
      </div>
    </div>
  </>);
};

export default FacultyAnnoucement;