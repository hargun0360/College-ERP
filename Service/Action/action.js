export  const userEmail = (data)=>{
    return{
        type:"User_Email",
        payload:data
    }
}
export  const user= (data)=>{
    return{
        type:"User_Type",
        payload:data
    }
}

export const flag=(value)=>{
    console.log(value);
    return{
        type:"Toggle",
        payload:value
    }
}