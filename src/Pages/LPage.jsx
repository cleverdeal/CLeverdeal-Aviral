import React from "react";
import img1 from "../assests/cdl.png";
import { Link } from "react-router-dom";
const list = [
  {
    id: "1",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsw0fGua5DySVd3so3StxY_OiMHf2dGWuceg&usqp=CAU",
    price: "56 Lakhs",
    name: "Sunflower Villa",
    desc: "Sunflower villa is a dream home at the dream location",
  },

  {
    id: "2",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoA0treqt67Crm1NhzPTtfSyVfvbjRcSGbvg&usqp=CAU",
    price: "90 Lakhs",
    name: "XYZ Villa",
    desc: "A place that catches everyone's eye",
  },

  {
    id: "3",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXqVtMcbsi0k3mD7n0VqvOFBvdOXQuqq2Ymg&usqp=CAU",
    price: "85 Lakhs",
    name: "Red Town Villa",
    desc: "This is the home you are looking for",
  },

  {
    id: "4",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVjVsnAzgeOyMlFboCzDLkN1lBvmnsPvzMEA&usqp=CAU",
    price: "1.2 Cr",
    name: "Tata Vermount Villa",
    desc: "Just Amazing",
  },
];
function LPage() {
  return (
    <div className="box-border">
      <nav className="container flex justify-center py-4 mt-4 sm:mt-12">
        <img className="w-[100px] h-50" src={img1} alt="aaa"></img>
        <ul className="navbarlist ">
          <li>
            <button>Home</button>
          </li>
          <li>
            <button>About</button>
          </li>
          <li>
            <button>Project</button>
          </li>
          <li>
            <button>Blog</button>
          </li>
          <li>
            <button>Contact</button>
          </li>
        </ul>
        <div className="navloginsignup">
          <ul>
            <li>
              <button className="signupbutton">
                <Link to="/Login">Sign Up</Link>
              </button>
            </li>
            <li>
              <button className="loginbutton">
                {" "}
                <Link to="/signIn">Login </Link>
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="firstrow">
        <div className=" first-row-content flex flex-col gap-12">
          <h2 className="font-bold font-sans text-7xl leading-normal">
            We will help you find your perfect home
          </h2>
          <p className="text-xl font-light">
            One stop destination for all types of properties. Aims at genuine
            properties according to customer requirements.One stop destination
            for all types of properties
          </p>
          <div>
            <div className="dropdown ">
              <label
                tabindex="0"
                className="btn m-1 rounded-lg font-bold text-white"
              >
                Filter
              </label>
              <ul
                tabindex="0"
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Commercial</a>
                </li>
                <li>
                  <a>Residential</a>
                </li>
                <li>
                  <a>Plots</a>
                </li>
              </ul>
            </div>
            <input
              className=" border-solid border-2 border-black"
              type="search"
              placeholder="Search for properties"
            ></input>

            <Link
              to="/search"
              className="py-[15px] font-bold  rounded-r-2xl mt-8 h-12 bg-black text-white"
            >
              Search
            </Link>
          </div>
        </div>

        <div className="first-row-image">
          <img src="https://i.pinimg.com/550x/fc/07/40/fc0740d7c26d93974e117cb88a81bc36.jpg"></img>
        </div>
      </div>

      <div className="popular-project-heading">
        <h2 className="font-semibold">Popular Projects</h2>
      </div>
      <div className="popular-projects ml-6 grid grid-cols-4 items-center">
        {list.map((item) => (
          <div className="projects">
            <div className="project1">
              <img src={item["imageurl"]} alt=""></img>
              <h3>{item["name"]}</h3>
              <h4>{item["price"]}</h4>
              <p>{item["desc"]}</p>
              <Link to="/property" className="btn btn-link">
                Know more
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="container grid grid-cols-2 justify-evenly mt-20 p-6  ">
        <div className="third-row-image ml-40">
          <img src="https://3d-rendering-walkthrough-dubai.weebly.com/uploads/2/5/8/6/25863872/3d-architectural-rendering-services-apartment-modern_orig.jpg"></img>
        </div>

        <div className="third-row-content">
          <h2 className="font-bold">Enjoy the best living experience</h2>
          <p>
            One stop destination for all types of properties. Aims at genuine
            properties according to customer requirements.One stop destination
            for all types of properties
          </p>
          <button>Learn More </button>
        </div>
      </div>
      <div className="forth-row grid grid-col-1">
        <h2>Get started with Cleverdeals</h2>
        <p>
          Subscribe and enjoy the ultimate living experience with us where we
          mae your dream a reality
        </p>
        <button>Get Started</button>
      </div>

      <footer className="footer  mt-10 container font-medium p-14 bg-base-200 text-base-content">
        <div>
          <img src={img1} alt="aaa"></img>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
}

export default LPage;
