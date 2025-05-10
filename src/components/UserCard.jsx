import React, { useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeRequest } from "../utils/requestsSlice";
import { removeConnectionData } from "../utils/connectionSlice";

const UserCard = ({ user, hidebuttons, acceptRejectbuttons,removebuttons }) => {
  //console.log(user);
  //console.log(acceptRejectbuttons);
  const { show, reqId } = acceptRejectbuttons;
  const { visible, request } = removebuttons;
  const { firstName, lastName, photoUrl, age, about, gender } = user;
  const [toast, setToast] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const dispatch = useDispatch();

  const reviewRequest = async (status, id,from) => {
    try {
      const result = await axios.patch(
        BASE_URL + "Connections/Review",
        { status, id },
        { withCredentials: true }
      );
      //console.log(result.data);
      setToast(true);
      setStatusMessage(result.data);
      if(from=="request")
      {
      dispatch(removeRequest(id));
      }
      else
      {
        dispatch(removeConnectionData(id));
      }
      setTimeout(() => {
        setToast(false);
      }, 500);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="card bg-base-300 w-96 shadow-sm m-2">
        <figure className="m-1 p-2 w-[120px] h-[160px]">
          <img
            src={photoUrl}
            alt="user"
            className="w-full h-full object-cover rounded"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          <p>
            {age} : {gender}
          </p>
          <p>{about}</p>
          {!hidebuttons && (
            <div className="card-actions justify-center my-4">
              <button className="btn btn-primary">Ignore</button>
              <button className="btn btn-secondary">Send Request</button>
            </div>
          )}
          {show && (
            <div className="card-actions justify-center my-4">
              <button
                className="btn btn-primary"
                onClick={() => reviewRequest("accepted", reqId,"request")}
              >
                Accept
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => reviewRequest("rejected", reqId,"request")}
              >
                Reject
              </button>
            </div>
          )}
           {visible && (
            <div className="card-actions justify-center my-4">
              <button
                className="btn btn-secondary"
                onClick={() => reviewRequest("rejected", request,"connection")}
              >
                Remove Connection
              </button>
            </div>)}
        </div>
      </div>
      {toast && (
        <div className="toast toast-top toast-center">
          {statusMessage.includes("success") ? (
            <div className="alert alert-success">
              <span>{statusMessage}</span>
            </div>
          ) : (
            <div className="alert alert-failure">
              <span>{statusMessage}</span>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default UserCard;
