import React from 'react'
import * as actionCreators from "../../Service/Action/action";
import { useDispatch } from 'react-redux'; 
import  {  useNavigate  } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();
   
    const dispatch = useDispatch();
    const handleChange = (e)=>{
        dispatch(actionCreators.user(e.target.value));
        navigate('/Login');
    }
    return (
        <div>
          <select onChange={handleChange}>
          <option selected="true" disabled="disabled">Login as</option>
              <option value="admin">admin</option>
              <option value="faculty">faculty</option>
              <option value="student">student</option>
          </select>  
        </div>
    )
}

export default Home
