import React from 'react'

const UserCard = ({user,hidebuttons}) => {
    //console.log(user);
    const {firstName,lastName,photoUrl,age,about,gender}=user;
   
  return (
    <div className="card bg-base-300 w-96 shadow-sm m-2">
        <figure className="m-1 p-2 w-[120px] h-[160px]">
            <img
            src={photoUrl}
            alt="user"
            className="w-full h-full object-cover rounded" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{firstName+" "+lastName}</h2>
            <p>{age} : {gender}</p>
            <p>{about}</p>
           { 
            !hidebuttons &&
            <div className="card-actions justify-center my-4">
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Send Request</button>
            </div>
           }
        </div>
    </div>
  )
}

export default UserCard