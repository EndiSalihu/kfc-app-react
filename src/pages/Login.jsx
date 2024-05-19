import React, { useEffect, useRef, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";


const Login = () => {
  const [user,setUser] = useState({ username: "", email: "", password:"", confirmPassword: "" });
  const loginRef = useRef();

  useEffect(() => {
    loginRef.current.focus();
  }, [])

  const handleLogin = (e) => setUser({...user, [e.target.name]: e.target.value});

  // open console
  console.log(user);

  const submitLogin = () => {
    alert(`Welcome ${user.username}`)
    console.log(`Username: ${user.username}, Email: ${user.email}, Password: ${user.password}, Confirmed Password: ${user.confirmPassword}.`);
  }


  return (
    <>
      <NavigationBar />
      <div className="my-10 flex justify-center">
         <form className="m-10 p-16 w-1/3 border border-red-700 items-center flex flex-col gap-10 rounded max-lg:w-96">
        <div className="flex flex-col gap-5 text-center">
          <h1 className="text-red-600 text-4xl">Login</h1>
          <p className="text-gray-500">or</p>
          <Link to="/">
           <button className="p-2 bg-red-600 text-white hover:bg-red-800 rounded-md max-xl:text-sm">CONTINUE AS GUEST</button>
          </Link>
        </div>


        <div className="flex flex-col gap-4">
          <label className="text-gray-500 text-lg">Username</label>
          <input className="border border-red-700 p-1.5 outline-none rounded" ref={loginRef} type="text" placeholder="Username" value={user.username} name="username" onChange={(e) => handleLogin(e)}/>


          <label  className="text-gray-500 text-lg">Email</label>
          <input className="border border-red-700 p-1.5 outline-none rounded" type="text" placeholder="Email" value={user.email} name="email" onChange={(e) => handleLogin(e)}/>

          <label  className="text-gray-500 text-lg">Password</label>
          <input className="border border-red-700 p-1.5 outline-none rounded" type="password" placeholder="Password" value={user.password} name="password" onChange={(e) => handleLogin(e)}/>

          <label  className="text-gray-500 text-lg">Confirm Password</label>
          <input className="border border-red-700 p-1.5 outline-none rounded" type="password" placeholder="Confirm Password" value={user.confirmPassword} name="confirmPassword" onChange={(e) => handleLogin(e)}/>

          <Link className="bg-red-600 text-white p-2 hover:bg-red-800 rounded-md w-30 text-center max-xl:text-sm " to="/">
            <button onClick={() => submitLogin()}>LOGIN</button>
          </Link>

          <p>Forgot Your password? <Link to="/"><span className="text-red-600">Recover password</span></Link></p>
        </div>
      </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
