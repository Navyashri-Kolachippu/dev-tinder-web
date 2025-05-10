import axios from 'axios';
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from './UserCard';
import { addRequest } from '../utils/requestsSlice';

const Requests = () => {
    const dispatch=useDispatch();
    const requests = useSelector((store) => store.request);
    const getRequest= async()=>{
        try
        {
            const result= await axios.get(BASE_URL+"connections/getrequests",{ withCredentials: true })
            console.log(result);
            dispatch(addRequest(result.data.connectionRequests));
        }
        catch(err)
        {
            console.log(err);
        }
    }

 useEffect(()=>{
    getRequest()
 },[]);

if (!requests) return;

if (requests.length == 0) return <h1 className="flex justify-center m-6 p-2 text-xl font-bold"> No Connection Requests Found</h1>;

  return (
    <div className="flex m-2 p-2">
        {requests?.map((req) => <UserCard key={req?.fromUser?.id} user={req?.fromUser} hidebuttons={true} acceptRejectbuttons={{ show: true, reqId: req?.request?.id }}/>)} 
    </div>
  )
}

export default Requests