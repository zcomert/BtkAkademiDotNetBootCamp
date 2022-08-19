import React, { useContext } from "react";
import AppContext from "../../context/ContextApplication";

export default function Login() {
  const {setIsLogin} = useContext(AppContext);

  return (
    <div>
      <h3>Login</h3>
      <input type='text' />
      <input type='password' />

      <button onClick={
        () => { 
         setIsLogin(true)
        }
      } >Login</button>
    
    </div>
  );
}
