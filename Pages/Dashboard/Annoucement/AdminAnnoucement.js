import React,{useState, useLayoutEffect,useEffect} from 'react'
import 'boxicons'
import MaterialTable from 'material-table'
import './Annoucement.css'
import AdminAnnoucementForm from '../Admin/AdminAnnoucement'
import * as actionCreators from "../../../Service/Action/action";
import { useDispatch,useSelector } from 'react-redux'
import Spinner from '../../../Components/UI/Spinner/Spinner';
const AdminAnnoucement = () => {
    const dispatch = useDispatch();
    const[tableData,setTableData] = useState([])
    
    //annoucement
    
    
    useLayoutEffect(()=>{
        dispatch(actionCreators.loadAnnoucementDetails());
    },[]);
   
    const {loading , annoucement} = useSelector((state)=>state.getAnnoucement);
    useEffect(()=>{
        if(annoucement){
            setTableData(annoucement);
            console.log(annoucement);
        }
    },[loading]);
    
    

    const [flag, setFlag] = useState(false);
    const columns = [{
        title: "Date",
        field: "date",
        cellStyle: {
            paddingRight: "15%",
            border: "0px solid transparent",
            overflowX: "hidden",
        },
        headerStyle: {
            width: 20,
            maxWidth: 20,
            paddingRight: "15%",
            color: " #1E637E",
            fontFamily: "Inter",
            fontWeight: "500",
            fontSize: "16px",
        },
        align: "center",
    },
    {
        title: "Time",
        field: "time",
        cellStyle: {
            paddingRight: "22%",
            border: "0px solid transparent",
            overflowX: "hidden",
        },
        headerStyle: {
            width: 10,
            maxWidth: 10,
            paddingRight: "22%",
            color: " #1E637E",
            fontFamily: "Inter",
            fontWeight: "500",
            fontSize: "16px",
        }, align: "center"
    },
    {
        title: "Annoucement",
        field: "description",
        cellStyle: {
            border: "0px solid transparent",
            overflowX: "hidden"
        },
        headerStyle: {
            width: 10,
            maxWidth: 10,
            color: " #1E637E",
            fontFamily: "Inter",
            fontWeight: "500",
            fontSize: "16px",

        },
        align: "center"
    }];
    const { val } = useSelector((state) => state.toggle);
    const style = {
        width: "90vw", minHeight: "90vh", overflow:"revert",scrollbars:"hidden",
    }
    const activateStyle = {
        width: "81vw", minHeight: "90vh",
    }

    const handleClick = (e) =>{
        e.preventDefault();
        setFlag(true);

    }
    return loading ? (<Spinner />) : (<>
        {
            <AdminAnnoucementForm trigger={flag} setTrigger={setFlag} />
        }
        <div className={`Annoucement-Container ${val ? "activate" : ""}`}>
            <div className='make-annoucement-btn' onClick={handleClick}>
                <div className='annoucement-icon'>
                    <box-icon id="edit-icons" color="white"  name='edit' />
                </div>
                <div className='annoucement-text'>
                    <h2>Make an Announcement</h2>
                </div>
            </div>
            <div className='annoucement-table'>
                <MaterialTable style={val ? activateStyle : style} columns={columns} data={tableData} title={""} options={{ search: false, sorting: false, toolbar: false, maxBodyHeight: 400, tableLayout: "100%", paging: false, draggable: false, actionsColumnIndex: -1 }} actions={[{
                   icon: () => <box-icon color="red"  name='trash-alt' />,
                    tooltip: "Delete annoucement", 
                    onClick: (e,ide) => { console.log(ide._id)
                     dispatch(actionCreators.deleteAnnoucementDetails(ide._id))}
                }]} localization={{
                    header: {
                        actions: ""
                    }
                }}  />
            </div>
        </div>
        </>)
}

export default AdminAnnoucement