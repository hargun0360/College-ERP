import React from 'react'
import { useSelector } from 'react-redux'
import 'boxicons'
import MaterialTable from 'material-table'
import './Annoucement.css'
import Delete from '@material-ui/icons/Delete';
const AdminAnnoucement = () => {
    const tableData = [{ Date: "27/12/2021", Time: "9:00 AM", Annoucement: "Each week you should complete one module. Homework assignments and discussions should be completed by Saturday at 11:59 pm each week. Discussions require you to respond to at least two of your classmates. These responses are due each Monday by 11:59 pm.", },
    { Date: "27/12/2021", Time: "9:00 AM", Annoucement: "Each week you should complete one module. Homework assignments and discussions should be completed by Saturday at 11:59 pm each week. Discussions require you to respond to at least two of your classmates. These responses are due each Monday by 11:59 pm." }]
    const columns = [{
        title: "Date",
        field: "Date",
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
        field: "Time",
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
        field: "Annoucement",
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
        width: "90vw", minHeight: "90vh", overflow:"revert",scrollbars:"hidden"
    }
    const activateStyle = {
        width: "81vw", minHeight: "90vh",
    }
    return (
        <div className={`Annoucement-Container ${val ? "activate" : ""}`}>
            <div className='make-annoucement-btn'>
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
                    onClick: (e,id) => { console.log("data delete",e,id) }
                }]} localization={{
                    header: {
                        actions: ""
                    }
                }}  />
            </div>
        </div>
    )
}

export default AdminAnnoucement