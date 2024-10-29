import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const submitHandler = (e)=>{
    e.preventDefault();
    handleLogin(email,password)
    console.log(email,password)
    setEmail('')
    setPassword('')
  }
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className=" border-2 border-emerald-600 p-20 rounded-xl">
        <form onSubmit={(e)=>{
          submitHandler(e)

        }} className="flex flex-col items-center justify-center">
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className=" outline-nonne bg-transparent  placeholder:text-gray-400 border-2 border-emerald-600 rounded-full py-3  px-5 text-xl" type="email" placeholder="Enter your email" required />
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className=" outline-nonne bg-transparent  placeholder:text-gray-400 border-2 border-emerald-600 rounded-full py-3  px-5 text-xl mt-4" type="password" placeholder="Enter Passwowrd" />
          <button className="mt-4 text-white outline-none  placeholder:text-white border-2 bg-emerald-600 rounded-full py-3  px-5 text-xl">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
