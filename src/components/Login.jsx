import React, { useState } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/loginSlice';
import { useNavigate ,Link} from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {
    const [email,setEmail]=useState("nav@gmail.com");
    const [password,setPassword]=useState("def@123");
    const [error,setError]=useState("");
    const dispatch= useDispatch();
    const navigate=useNavigate();

    const loginHandler=async()=>{
        try {
            const res = await axios.post(
              BASE_URL+"login",
              {
                email,
                password,
              },
              { withCredentials: true });
              //console.log("login",res.data);
           dispatch(addUser(res.data));
           return navigate("/");
          } catch (err) {
            setError(err?.response?.data || "Something went wrong");
            console.log(error);
          }
    }

  return (
    <div className="flex justify-center my-10">
    <div className="card card-border bg-base-800 w-96">
        <div className="card-body">
            <h2 className="card-title justify-center">Login</h2>
            <div>
                <fieldset className="fieldset">
                <legend className="fieldset-legend">Email</legend>
                <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="input" placeholder="Email address" />
                </fieldset>
           </div>
           <div>
                <fieldset className="fieldset">
                <legend className="fieldset-legend">Password</legend>
                <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}  className="input" placeholder="Password" />
                </fieldset>
           </div>
           <p className="text-red-500">{error}</p>
            <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={loginHandler}>Login</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login