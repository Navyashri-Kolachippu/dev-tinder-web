import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnectionData } from "../utils/connectionSlice";
import UserCard from "./UserCard";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connection);
  //console.log(connections);
  const getConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "Connections/GetConnections", {
        withCredentials: true,
      });
      //console.log(res.data);
      dispatch(addConnectionData(res?.data?.connectedUsersData));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0)
    return (
      <h1 className="flex justify-center m-6 p-2 text-xl font-bold">
        {" "}
        No Connections Found
      </h1>
    );

  return (
    connections && (
      <div className="flex m-2 p-2">
        {connections?.map((conn) => (
          <UserCard
            key={conn?.fromUser?.id}
            user={conn?.fromUser}
            hidebuttons={true}
            acceptRejectbuttons={{ show: false }}
            removebuttons={{visible:true,request:conn?.requestId}}
          />
        ))}
      </div>
    )
  );
};

export default Connections;
