import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assests/cdl.png";
import { FaChevronLeft } from "react-icons/fa";
function BrokerS() {
  return (
    <div className="mt-10 bg-grey-lighter min-h-screen flex flex-col">
      <Link to="/" className="mx-20">
        <FaChevronLeft />
      </Link>
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <img src={img1} className="mx-auto mb-7"></img>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email/phone number"
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
          />

          <button
            type="submit"
            className="w-full text-center py-3 rounded-lg  text-white btn-primary my-1"
          >
            Create Account
          </button>
          <hr className="my-2"></hr>
         
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link
            className="no-underline border-b border-blue text-blue"
            to="/signIn"
          >
            {" "}
            Log in
          </Link>
          .
        </div>
      </div>
    </div>
  );
}

export default BrokerS;
