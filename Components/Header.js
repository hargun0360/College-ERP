import React from 'react'
import {useSelector} from 'react-redux'

function Header(){

    const mystate=useSelector(state=>
         state.productReducer);
    
    return(<>
        <div>Number is {mystate}</div>
    </>);
}

export default Header;