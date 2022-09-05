import React from 'react'
import img1 from "../assests/cdl.png";
import './Lsearch.css'

const List = [
    {
      id: "1",
      imageURL:
        "https://is1-2.housingcdn.com/4f2250e8/6194715ba67f9e6ae42b7bff91173e4f/v0/fs/ggr_floor_5-sector_57-gurgaon-arun_gaur_and_co.jpeg.webp",
      heading: "ARUN GAUR & CO",
      price: "₹1.2cr-₹2cr",
      Emi: "Emi starts at ₹59k",
      address: "Sector 57 Gurgaon",
      status: "Ready to move in",
      averageprice: "₹15.56K/sq.ft",
    },
  
    {
      id: "2",
      imageURL:
        "https://is1-3.housingcdn.com/012c1500/90d22734dfc560c2f3b74d8168298c66/v0/fs.jpeg.webp",
      heading: "PURI THE ARAVALLIS",
      price: "₹3.5cr-₹4.5cr",
      Emi: "Emi starts at ₹80k",
      address: "Sector 61 Golf Course Extention Road",
      status: "Posesstion Start Aug 2026",
      averageprice: "₹15.56K/sq.ft",
    },
  
    {
      id: "3",
      imageURL:
        "https://is1-2.housingcdn.com/4f2250e8/0c06a3ff770e94e8af3a1af0b0f98d86/v0/fs/ashiana_amarah-sector_93_gurgaon-gurgaon-ashiana_housing_ltd.jpeg.webp",
      heading: "4 BHK Independent Builer Floor",
      price: "₹1.8cr",
      Emi: "Emi starts at ₹59k",
      address: "Sushank Lok Sector 57 Gurgaon",
      status: "Ready to move in",
      averageprice: "₹15.56K/sq.ft",
    },
  
    {
      id: "4",
      imageURL:
        "https://is1-2.housingcdn.com/4f2250e8/be03774a556856be30feced5f16aae9c/v7/fs/dlf_the_belaire-sector_54_gurgaon-gurgaon-dlf.jpg.webp",
      heading: "DLF The Belaire",
      price: "₹4.6cr - ₹6.72cr",
      Emi: "Emi starts at ₹59k",
      address: "Sector 54 Gurgaon",
      status: "Ready to move in",
      averageprice: "₹15.56K/sq.ft",
    },
  
    {
      id: "5",
      imageURL:
        "https://is1-2.housingcdn.com/01c16c28/d071e1ed4c0fa702f60d3217d7deda0f/v0/fs/5_bhk_villa-for-sale-sector_57-Gurgaon-bedroom.jpg.webp",
      heading: "5 BHK Villa",
      price: "₹5.25cr-₹6cr",
      Emi: "Emi starts at ₹59k",
      address: "Sushant Lok Sector 57 Gurgaon",
      status: "Ready to move in",
      averageprice: "₹15.56K/sq.ft",
    },
  ];
function Lsearch() {
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
    </div>

    <h2 id="show">Showing Results 1-20</h2>

    {List.map((item) => (
      <div className="project">
        <div className="Image">
          <img src={item["imageURL"]}></img>
        </div>

        <div className="OtherDetails">
          <div className="priceandemi">
            <h2>{item["price"]}</h2>
            <p>{item["Emi"]}</p>
          </div>

          <div className="headingandowner">
            <h3>{item["heading"]}</h3>
            <h3>{item["address"]}</h3>
          </div>

          <div className="statusandprice">
            <p>{item.status}</p>
            <p>{item.averageprice}</p>
            <button>View Property</button>
          </div>
        </div>
      </div>
    ))}

    <hr></hr>

    <footer>
      <div className="footercol">
      <div className="col1">
      <ul>
        <li>
          <img src={img1}></img>
        </li>
        <li>
          
          <p>One stop destination for all types of properties</p>
        </li>
        
      </ul>
      </div>

      <div className="col2">
          <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Blogs</li>
          </ul>
      
      </div>

      <div className="col3">
          <ul>
          <li>Company</li>
          <li>Policy</li>
          <li>How We Work</li>
          <li>Security</li>
          </ul>
      </div>

      <div className="col4">
          <ul>
          <li>Support</li>
          <li>FAQ'S</li>
          <li>Help</li>
          <li>Contact Us</li>
          </ul>
      </div>
      </div>
    </footer>
  </div>
  )
}

export default Lsearch