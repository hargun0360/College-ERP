import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Toaster = (props) => {
    return (
        <div>
            toast.{props.type}({props.message});
            <ToastContainer
            theme="colored"
            position="top-center"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            pauseOnHover={false}
            pauseOnFocusLoss={false}
            closeOnClick />
        </div>
    )
}

export default Toaster;
