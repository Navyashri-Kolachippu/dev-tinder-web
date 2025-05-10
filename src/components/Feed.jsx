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
    //console.log("userfeed",userFeed.data[0]);
    if (userFeed) return;
    try {
      const res = await axios(BASE_URL + "Feed/Suggestions", {
        withCredentials: true,
      });
      //console.log(res.data);
      dispatch(addFeed(res.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUserFeed();
  }, []);

  return (
    userFeed && (
      <div className="flex m-2 p-2">
        {userFeed?.data?.map((userDetail) => (
          <UserCard
            key={userDetail.id}
            user={userDetail}
            hidebuttons={false}
            acceptRejectbuttons={{ show: false }}
            removebuttons={{visible:false}}
          />
        ))}
      </div>
    )
  );
};

export default Feed;
