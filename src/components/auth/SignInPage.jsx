

import React, { useEffect, useState } from "react";
import ButtonModel from "../utils/ButtonModel";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../../redux/actions/auth.action";
import { useNavigate,useHistory } from "react-router-dom";

export default function SignInPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form,setForm] = useState({email:"",password:""});
  const { isLoggedIn } = useSelector((state) => state.auth);

useEffect(() => {
  if(isLoggedIn){
  navigate("/blogs");
  }


}, [isLoggedIn])

  const onSubmit = (e)=>{
    e.preventDefault();
    dispatch(AuthAction.login(form));
  }
  return (
    <form
   
    onSubmit={onSubmit}
  >
    <div
   
    >
      <input
        className="h-12"
        placeholder="Email"
      />
    </div>
    <div
 
    >
      <input
        className="h-12"
        type="password"
        placeholder="Password"
      />
    </div>

    <div>
      <ButtonModel
        type={"submit"}
        classes={"login-form-button bg-purple-500 text-white"}
      >
        Log in 
      
      </ButtonModel>
    </div>
  </form>
  );
}
