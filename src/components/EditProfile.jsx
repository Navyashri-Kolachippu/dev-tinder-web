import React, { useState } from 'react'
import UserCard from './UserCard';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/loginSlice';
import axios from 'axios';

const EditProfile = ({userDetails}) => {
    //console.log(userDetails);

 const [firstName,setFirstName]=useState(userDetails?.firstName ||" ");
 const [lastName,setLastName]=useState(userDetails?.lastName||" ");
 const [age,setAge]=useState(userDetails?.age||" ");
 const [gender,setGender]=useState(userDetails?.gender||" ");
 const [about,setabout]=useState(userDetails?.about||" ");
 const [photoUrl,setphotoUrl]=useState(userDetails?.photoUrl||" ");
 const [error,seterror]=useState("");
 const [toast,setToast]=useState(false);
 const dispatch=useDispatch();

 const saveProfile=async()=>{
 try
 {
    seterror("");
    const res= await axios.patch(BASE_URL+"profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          age,
          gender,
          about,
        },
        { withCredentials: true }
      );
    //console.log(res.data);
    dispatch(addUser(res.data));
    setToast(true);
    setTimeout(()=>{setToast(false)},500)
 }
 catch(err)
 {
    //console.log(err);
    seterror(err?.response?.data);
 }
 }

  return (
    <>
    <div className="flex justify-center items-start my-10 gap-10">
    <div className="card card-border bg-base-800 w-96">
        <div className="card-body">
            <h2 className="card-title justify-center">Edit Profile</h2>
            <div>
                <fieldset className="fieldset">
                <legend className="fieldset-legend">First Name:</legend>
                <input type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} className="input" />
                </fieldset>
           </div>
           <div>
                <fieldset className="fieldset">
                <legend className="fieldset-legend">Last Name:</legend>
                <input type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}  className="input"/>
                </fieldset>
           </div>
           <div>
                <fieldset className="fieldset">
                <legend className="fieldset-legend">Photo URL:</legend>
                <input type="text" value={photoUrl} onChange={(e)=>{setphotoUrl(e.target.value)}}  className="input"/>
                </fieldset>
           </div>
           <div>
                <fieldset className="fieldset">
                <legend className="fieldset-legend">Age:</legend>
                <input type="text" value={age} onChange={(e)=>{setAge(e.target.value)}}  className="input"/>
                </fieldset>
           </div>
           <div>
                <fieldset className="fieldset">
                <legend className="fieldset-legend">Gender</legend>
                <input type="text" value={gender} onChange={(e)=>{setGender(e.target.value)}}  className="input"/>
                </fieldset>
           </div>
           <div>
                <fieldset className="fieldset">
                <legend className="fieldset-legend">About:</legend>
                <input type="text" value={about} onChange={(e)=>{setabout(e.target.value)}}  className="input"/>
                </fieldset>
           </div>
            <p className="text-red-500">{error}</p>
            <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={saveProfile}>Save Profile</button>
            </div>
        </div>
    </div>
     <UserCard className="" user={{firstName,lastName,age,gender,about,photoUrl}} hidebuttons={true} />
    </div>
       { toast && 
        <div className="toast toast-top toast-center">
        <div className="alert alert-success">
            <span>Profile saved successfully.</span>
        </div>
        </div>
        }
    </>
  )
}

export default EditProfile