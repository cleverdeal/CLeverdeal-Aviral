import React from "react";
import { Link } from 'react-router-dom'
import "./Landingpage.css";
import img1 from "../assests/cdl.png";
var i=0;
const list=[

  {
    id:"1",
    imageurl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsw0fGua5DySVd3so3StxY_OiMHf2dGWuceg&usqp=CAU",
    price:"56 Lakhs",
    name:"Sunflower Villa",
    desc:"Sunflower villa is a dream home at the dream location"
  },

  {
    id:"2",
    imageurl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoA0treqt67Crm1NhzPTtfSyVfvbjRcSGbvg&usqp=CAU",
    price:"90 Lakhs",
    name:"XYZ Villa",
    desc:"A place that catches everyone's eye"
  },

  {
    id:"3",
    imageurl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXqVtMcbsi0k3mD7n0VqvOFBvdOXQuqq2Ymg&usqp=CAU",
    price:"85 Lakhs",
    name:"Red Town Villa",
    desc:"This is the home you are looking for"
  },

  {
    id:"4",
    imageurl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVjVsnAzgeOyMlFboCzDLkN1lBvmnsPvzMEA&usqp=CAU",
    price:"1.2 Cr",
    name:"Tata Vermount Villa",
    desc:"Just Amazing"
  }
];

const Landingpage = () => {
  return (

    
    <div className="container">
      <div className="navbar">
        <img src={img1} alt="aaa"></img>
        <ul className="navbarlist">
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
              <button className="signupbutton"><Link to='/Login' >Sign in</Link></button>
            </li>
            <li>
              <button className="loginbutton"> <Link to='/signIn' >Login in</Link></button>
            </li>
          </ul>
        </div>

      </div>

      

      <div className="firstrow">

        <div className="first-row-content">
        <h2> We will help you find your perfect home</h2>
        <p>One stop  destination for all types of properties. Aims at genuine properties according to customer requirements.One stop destination for  all types of properties</p>
        
        <input type="search"  placeholder="Search for properties"></input>
        <Link to='/search'>Search</Link>
        
        
        
        </div>

        <div className="first-row-image">

          <img src="https://i.pinimg.com/550x/fc/07/40/fc0740d7c26d93974e117cb88a81bc36.jpg" ></img>
        </div>

      </div>
      

      <div className="popular-project-heading">
        <h2>Popular Projects</h2>
      </div>
      <div className="popular-projects">

        

        
      
      {list.map((item) => (

        <div className="projects">

          <div className="project1">
          <img src={item["imageurl"]} alt=""></img>
          <h3>{item["name"]}</h3>
          <h4>{item["price"]}</h4>
          <p>{item["desc"]}</p>
          <Link to='/property' className="btn btn-link">Know more</Link>
          </div>
          
        </div>
        
        
      ))}
    
        
        
      
      
      </div>

 
        
        <div className="flex">

          <div className="third-row-image">
            <img src="https://3d-rendering-walkthrough-dubai.weebly.com/uploads/2/5/8/6/25863872/3d-architectural-rendering-services-apartment-modern_orig.jpg"></img>
          </div>

          <div className="third-row-content">
            <h2>Enjoy the best living experience</h2>
            <p>One stop  destination for all types of properties. Aims at genuine properties according to customer requirements.One stop destination for  all types of properties</p>
            <button>Learn More  </button>
          </div>

        </div>

        <div className="forth-row">
          <h2>Get started with Cleverdeals</h2>
          <p>Subscribe and enjoy the ultimate living experience with us where we mae your dream a reality</p>
          <button>Get Started</button>
        </div>

        <footer>
        
        </footer>

    </div>
  );
};
export default Landingpage;