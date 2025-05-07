import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/loginSlice'

const Body = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const fetchUser=async()=>{
    try
    {
      const res = await axios.get(BASE_URL+"profile/view",{
        withCredentials:true,
     });
     dispatch(addUser(res.data));
    }
    catch(err)
    {
      navigate("/login");
      console.error(err);
    }
  };

  useEffect(()=>{
    fetchUser();
  },[])
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Body