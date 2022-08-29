import React from 'react'
import img1 from "../assests/cdl.png";
import {Link} from "react-router-dom"
import { FaChevronLeft } from 'react-icons/fa';
function signL() {
  return (
    <div className="container mx-auto mt-10 flex flex-col items-center">
    <Link to='/' className='mr-auto'><FaChevronLeft /></Link>
    <img src={img1} alt="aaa"></img>
    <form className="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg">
      <input type="text" placeholder="Email or Phone Number" className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
      <input type="text" placeholder="Pasword" className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
      <button className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg">Login</button>

      <a className="text-blue-400 text-center my-2">Forgot Pasword?</a>
      <hr />
      <Link to='/LoginOtp' className="w-full bg-blue-500 mt-8 mb-4 text-white p-3 rounded-lg font-semibold text-lg">Login in with Otp</Link>
    </form>
   
  </div>
  )
}

export default signL