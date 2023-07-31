import React from 'react'
import Rating from './Rating';

let masterList = [
    {
      productname: "Mouse",
      url: "image/mouse.jpg",
      price: 500,
      disc: "Description of mouse",
      rating: 4,
    },
    {
      productname: "Keyboard",
      url: "image/keyboard.jpg",
      price: 500,
      disc: "Description of keyboard",
      rating: 3,
    },
    {
      productname: "Router",
      url: "image/router.jpg",
      price: 2340,
      disc: "AC 1200 Mbps WAVE 2 Concurrent dual band wireless Router with 4 High gain Omni Antenna;802.11 a/b/g/n/ac standards with speed of 300 Mbps",
      rating: 4,
    }
  ];

export default function Diffproduct() {
    return masterList.map((props) => {
        return (
            <div className='container'>
            <div className='row row-cols-sm-4 row-cols-md-4'>
          <div className="col">
            <div className="card">
              <img
                src={props.url}
                style={{ width: "50%" }}
                className="card-img-top mx-auto"
                alt="logo"
              />
              <div className="card-body text-center">
                <h5 className="card-title">{props.productname}</h5>
                <h5 className="card-title">{props.price}</h5>
                <p className="card-text">{props.disc}</p>
                <Rating rating={props.rating}/>
              </div>
            </div>
          </div>
          </div>
          </div>
        );
      });
}
