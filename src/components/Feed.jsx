import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const userFeed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getUserFeed = async () => {
    try {
      const res = await axios(BASE_URL + "Feed/Suggestions", {
        withCredentials: true,
      });
      //console.log(res);
      dispatch(addFeed(res.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUserFeed();
  }, []);

 // console.log(userFeed);
  if (!userFeed) return;
  if(userFeed?.length <= 0)
    return (
      <h1 className="flex justify-center m-6 p-2 text-xl font-bold">
        {" "}
        No New Users Found
      </h1>
    );
  return (
    userFeed && (
      <div className="flex m-2 p-2 justify-center">
        <UserCard
            key={userFeed[0].id}
            user={userFeed[0]}
            hidebuttons={false}
            acceptRejectbuttons={{ show: false }}
            removebuttons={{visible:false}}
          />

      </div>
    )
  );
};

export default Feed;
