import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/loginSlice";
import { useNavigate, Link } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginForm,setIsLoginForm]=useState(true);
  const [lastName,setLastName]=useState("");
  const [firstName,setFirstName]=useState("");
  const [age,setAge]=useState("");
  const [gender,setGender]=useState("");
  const [photoUrl,setphotoUrl]=useState("");
  const [about,setAbout]=useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "Login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      //console.log("login",res.data);
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
      console.log(error);
    }
  };

  const signUpHandler = async()=>{
  try
  {
  var hashedPassword = password;
  const result = await axios.post(BASE_URL+"SignUp",
                  {
                    firstName,
                    lastName,
                    age,
                    gender,
                    email,
                    hashedPassword,
                    about,
                    photoUrl,

                  },{withCredentials:true})
  //console.log(result.data);
  dispatch(addUser(result.data));
  return navigate("/profile");
  }
  catch(err)
  {
    setError(err?.response?.data || "Something went wrong");
    console.log(err);
  }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card card-border bg-base-800 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">{isLoginForm ? "Login" : "SignUp"}</h2>
          { !isLoginForm && 
          <>
           <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">First Name</legend>
              <input
                type="text"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                className="input"
                placeholder="First Name"
              />
            </fieldset>
          </div>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Last Name</legend>
              <input
                type="text"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                className="input"
                placeholder="Last Name"
              />
            </fieldset>
          </div>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Age</legend>
              <input
                type="text"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                className="input"
                placeholder="Age"
              />
            </fieldset>
          </div>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Gender</legend>
              <input
                type="text"
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                className="input"
                placeholder="Gender"
              />
            </fieldset>
          </div>
          </>
          }
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="input"
                placeholder="Email address"
              />
            </fieldset>
          </div>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="text"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="input"
                placeholder="Password"
              />
            </fieldset>
          </div>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={ isLoginForm ? loginHandler : signUpHandler}>
              {isLoginForm ? "Login" : "SignUp"}
            </button>
          </div>
          <p className="m-auto cursor-pointer" onClick={()=>setIsLoginForm(value=>!value)}>{isLoginForm ? "New User? SignUp Here":"Existing User? Login Here"}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
