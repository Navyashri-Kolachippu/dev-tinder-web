import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addConnectionData } from '../utils/connectionSlice'
import UserCard from './UserCard'

const Connections = () => {
const [connection,setConnection]=useState(null);
const connData = useSelector((store)=>store.connection);
const dispatch = useDispatch();
const getConnections= async()=>{
    if(connData) 
    {
        setConnection(connData);
        return;
    }
    try
    {
    const res = await axios.get(BASE_URL+"connections/getconnections",{ withCredentials: true })
    //console.log(res.data);
    setConnection(res.data);
    dispatch(addConnectionData(res.data));
    }
    catch(err)
    {
    console.log(err);
    }
}

useEffect(()=>{
    getConnections()
},[]);

  return (
    connection && (
    <div className="flex m-2 p-2">
        {connection?.connectedUsersData?.map((conn)=> <UserCard key={conn.firstName} user={conn} hidebuttons={true}/>)}
    </div>
    )
  )
}

export default Connections