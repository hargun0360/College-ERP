import axios from './Interceptor';


class AuthServices {


    //Authentication


    login(user, data) {
        return axios.post(`auth/login?user=${user}`, data)
    }
    forgot(user, data) {
        return axios.post(`auth/verifybeforereset?user=${user}`, data)
    }
    otp(data) {
        return axios.post('auth/checkotpbeforereset', data)
    }
    resendotp(data) {
        return axios.post('auth/resendotp', data)
    }
    resetpass(user, data) {
        return axios.post(`auth/resetpassword?user=${user}`, data)
    }
    logout() {
        localStorage.clear();
    }

    //Get Admin Detail

    getadminDetails(user,id) {
        console.log(user,id);
        return axios.get(`admin/showProfile/${id}?user=${user}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + localStorage.getItem('user')
            }
        })
    }

    // update Admin Detail

    updateAdminDetails(data,user,id) {
        console.log(user,id,data);
        return axios({
            method:"put",
            url:`admin/editprofile/${id}?user=${user}`,
            data:data,
            headers:{
                "Content-Type": "multipart/form-data",
                 Authorization: 'Bearer ' + localStorage.getItem('user'),
                 
            }
            
        })
    }

    // get annoucement

    getAnnoucementDetails(user) {
        return axios.get(`student/viewAnnouncement?user=${user}`, {
            headers: {
                "Content-Type": "application/json" ,
                Authorization: 'Bearer ' + localStorage.getItem('user')
            }
        })
    }

    // post annoucement

    postAdminDetails(data,id) {
        console.log(data);
        return axios.post(`faculty/makeannouncement/${id}`, data, {
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + localStorage.getItem('user')
            }
        })
    }

    deleteAnnoucementDetails(idu,ida) {
        return axios.delete(`faculty/deleteannouncement/${ida}/${idu}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + localStorage.getItem('user')
            }
        })
    }

    // get Batch (Batch Section)

        getBatch(year) {
        return axios.get(`admin/getbatch/${year}`, {
            headers: {
                "Content-Type": "application/json" ,
                Authorization: 'Bearer ' + localStorage.getItem('user')
            }
        })
    }

    // View Student Data (Batch Section)

    getStudents(branch,year) {
        return axios.get(`admin/viewbatch?batch=${branch}&year=${year}`, {
            headers: {
                "Content-Type": "application/json" ,
                Authorization: 'Bearer ' + localStorage.getItem('user')
            }
        })
    }

    // view each student (batch section)

    getEachStudent(id) {
        return axios.get(`admin/showprofile/${id}?user=student`, {
            headers: {
                "Content-Type": "application/json" ,
                Authorization: 'Bearer ' + localStorage.getItem('user')
            }
        })
    }

    // Add Batch (Batch Section)

        AddBatch(data) {
            console.log(data);
        return axios.post(`admin/addbatch`, data, {
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + localStorage.getItem('user')
            }
        })
    }

    // Delete Student 

    DelStudent(id) {
        return axios.delete(`admin/deletestudent/${id}?user=student`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + localStorage.getItem('user')
            }
        })
    }


    // Add Student

    AddStudent(data) {
        console.log(data);
    return axios.post(`admin/addstudents`,data, {
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + localStorage.getItem('user')
        }
    })
}

}



export default new AuthServices();