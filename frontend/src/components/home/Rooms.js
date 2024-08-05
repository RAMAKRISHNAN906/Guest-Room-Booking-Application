import React, { useEffect, useState } from "react";
import CommonHeading from "../common/CommonHeading";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Rooms() {
  const [roomItems,setRoomItems]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3001/loaddata')
    .then( response=>{
      console.log(response.data)
        setRoomItems(response.data)
    })
    .catch(err=>{
      console.log("eror jjj")
    })
  },[])
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="Our Rooms"
            title="Rooms"
            subtitle="Explore Our"
          />
          <div className="row g-4">
            {roomItems.map((item, key) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="room-item shadow rounded overflow-hidden">
                  <div className="position-relative">
                    <img className="img-fluid" src={`http://localhost:3001/images/${item.image}`} alt="img" style={{width:'400px',height:'400px'}}/>
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                      {`Night/ ${item.price}-INR`}
                    </small>
                  </div>
                  <div className="p-4 mt-2">
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">{item.name}</h5>
                    </div>
                    <p className="text-body mb-3">{item.description}</p>
                    <div className="d-flex justify-content-between">
                      <a
                        className="btn btn-sm btn-primary rounded py-2 px-4"
                        href=""
                      >
                        {"View details"}
                      </a>
                      <a 
                      className="btn btn-sm btn-dark rounded py-2 px-4" 
                      href=""
                      >
                        <Link to={`/Bookings/${item._id}`}>book room</Link>
                      </a>  
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
