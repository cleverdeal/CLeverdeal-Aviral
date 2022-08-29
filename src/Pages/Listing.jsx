import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
function Listing() {
  return (
    <div>
      <div className="w-full  mx-auto mt-5 lg:w-10/12">
        <div>
          <div className=" grid justify-items-start w-full  text-xl">
            <h1 className="font-bold">DLF The Primus</h1>
            <p className="font-medium ">Sector 82A, New Gurgaon, Gurgaon
</p>
          </div>
          <div className="carousel w-full mt-5 max-h-80">
            <div className="carousel-item relative w-full   ">
              <img
                src="https://is1-3.housingcdn.com/4f2250e8/e2122155464255adaa267a4fd5ff15dd/v0/fs/dlf_the_primus-sector_82a-gurgaon-dlf.jpg.webp"
                className="w-full rounded-lg "
              />
            </div>
            <div className="carousel-item relative w-full">
              <img
                src="https://placeimg.com/800/200/arch"
                className ="w-full rounded-lg"
              />
            </div>
          </div>

          <div className="w-full  mt-6 rounded-lg shadow-md bg-base-100 stats">
            <div className="grid grid-cols-1 sm:grid-cols-3">
              <div className="stat">
                <div className="stat-title text-md">3, 4 BHK Apartments</div>
                <div className="text-lg stat-value">Configurations</div>
              </div>
              <div className="stat">
                <div className="stat-title text-md">Ready to Move</div>
                <div className="text-lg stat-value">Possession Status</div>
              </div>
              <div className="stat">
                <div className="stat-title text-md">₹8.70 K/sq.ft</div>
                <div className="text-lg stat-value">Avg. Price</div>
              </div>
              <div className="stat">
                <div className="stat-title text-md">
                  1799.00 sq.ft. - 2606.00 sq.f
                </div>
                <div className="text-lg stat-value">123</div>
              </div>
            </div>
          </div>
          <div className="flex  "> </div>
          <div>
            <h1 className="p-5 font-bold text-xl">DLF The Primus Overview</h1>
            <div
              tabIndex="0"
              className="collapse collapse-arrow shadow-md bg-base-100 rounded-box"
            >
              <div className="collapse-title font-medium">
                Show more About Project
              </div>
              <div className="collapse-content">
                <p>
                  The Primus as a new residential project offers a well-equipped
                  range of apartments. Complementing with its grand facade, this
                  residential project is an epitome of comfort and elegance.
                  Offering apartments with all the elements of fine living and
                  luxury, these homes blend life together in a more refined
                  form. The project buildings are coupled with convenience, also
                  providing healthy and comfortable lifestyle. Far from the
                  hustle and bustle of the town, the project has been designed
                  keeping every need of yours in mind. The green building
                  concept and huge floor areas make this project a benchmark in
                  modern living that mirrors the taste of affluent class and
                  cater to all needs of modern living in a seamless manner. More
                  About This Property DLF The Primus is a project by DLF in
                  Gurgaon. It is a Ready to Move project. DLF The Primus offers
                  some of the most conveniently designed Apartment. Located in
                  Sector 82A, it is a residential project. The project is spread
                  over 13 Acres . It has 624 units. There are 9 buildings in
                  this project. DLF The Primus offers some of the most exclusive
                  3 BHK, 4 BHK. As per the area plan, units are in the size
                  range of 1799.0 - 2606.0 sq.ft.. Launched in February 2012,
                  DLF The Primus is slated for possession in Jan, 2017. The
                  address of DLF The Primus is Sector 82A. DLF The Primus
                  ensures a coveted lifestyle and offers a convenient living. It
                  offers facilities such as Gymnasium, Power Backup. For
                  families with kids, there is Children's Play Area, School,
                  nearby apart from Swimming Pool. Sports enthusiasts can also
                  make the most of Squash Court, Aerobics Room, Basketball
                  Court, Badminton Court, Cycling & Jogging Track. Residents can
                  also enjoy Spa/Sauna/Steam, Library, Restaurants/ Cafeterias
                  provisions in the project. There is 24x7 Security. It is a
                  Gated Community. Bank loan is approved from major banks such
                  as HDFC, ICICI Bank. DLF is a reputed developer firm
                  established in 1946. The firm has since then developed 143
                  projects and focuses on customer-centricity. Sector 82A is
                  well-connected to other parts of city by road, which passes
                  through the heart of this suburb. Prominent shopping malls,
                  movie theatres, school, and hospitals are present in proximity
                  of this residential project.
                </p>
              </div>
            </div>
          </div>

         
          <div className="mt-10 w-full mb-12 h-52">
            <MapContainer
              style={{ height: "100%", width: "100%" }}
              center={[28.3866113, 76.9660206]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
              />
              <Marker position={[28.3866113, 76.9660206]}></Marker>
            </MapContainer>
          </div>
          <div className="p-10">
            <button className="btn btn-primary rounded-lg btn-wide btn-lg mt-5 xl:btn-block">
              add to wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listing;
