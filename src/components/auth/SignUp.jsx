

import React from "react";
import ButtonModel from "../utils/ButtonModel";

export default function SignUpPage() {
  const onSubmit = ()=>{

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
        Sign up 
      
      </ButtonModel>
    </div>
  </form>
  );
}
