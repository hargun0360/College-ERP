import React from 'react'
import {useDispatch} from 'react-redux'
import increment from '../Service/Action/action'

function Home(){
    const dispatch=useDispatch();
    return(<>
    
    <div>
        <button onClick={()=>{
            dispatch(increment(2));
        }}>
            Click
        </button>
    </div>
    </>);
}

export default Home;