import React from 'react'
import 'boxicons'
export const AdminSidebarData = [
    {
        title:"Profile",
        icon:<box-icon name="user" color="#505050"/>,
        Link:`/Dashboard/profile`,
        tooltip:"Profile"
    },
    {
        title:"Announcements",
        icon:<box-icon name="bell" color="#505050"/>,
        Link:`/Dashboard/annoucement`,
        tooltip:"Announcements"

    },
    {
        title:"Batches",
        icon:<box-icon name="group" color="#505050"/>,
        Link:'/Dashboard/Batches',
        tooltip:"Batches"
    },
    {
        title:"Admins",
        icon:<box-icon name="user-circle" color="#505050"/>,
        Link:'/Dashboard/Admins',
        tooltip:"Admins"
    },
    {
        title:"Faculty", 
        icon:<box-icon name="user-check" color="#505050"/>,
        Link:'/Dashboard/Faculty',
        tooltip:"Faculty"
    },
    {
        title:"Holidays",
        icon:<box-icon name="calendar" color="#505050"/>,
        Link:'/Dashboard/Holidays',
        tooltip:"Holidays"
    },

];
