import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addConnectionData } from '../utils/connectionSlice'
import UserCard from './UserCard'

const Connections = () => {
const dispatch = useDispatch();
const connections = useSelector((store) => store.connection);
const getConnections= async()=>{
    try
    {
    const res = await axios.get(BASE_URL+"connections/getconnections",{ withCredentials: true })
    //console.log(res.data);
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

if (!connections) return;

if (connections.connectedUsersData.length === 0) return <h1 className="flex justify-center m-6 p-2 text-xl font-bold"> No Connections Found</h1>;

  return (
    connections && (
    <div className="flex m-2 p-2">
        {connections?.connectedUsersData?.map((conn)=> <UserCard key={conn.firstName} user={conn} hidebuttons={true}/>)}
    </div>
    )
  )
}

export default Connections