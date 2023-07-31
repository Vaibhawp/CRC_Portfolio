import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Rating from "./Rating";
import { Link } from "react-router-dom";

export default function Newproduct() {
  return (
    <div className="container-fluid mt-2 bg-dark">
      <div className="row">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="image\c.jpg"
                className="d-block w-100"
                alt="..."
                height={450}
              />
            </div>
            <div className="carousel-item">
              <img
                src="image\b.jpg"
                className="d-block w-100"
                alt="..."
                height={450}
              />
            </div>
            <div className="carousel-item">
              <img
                src="image\c.jpg"
                className="d-block w-100"
                alt="..."
                height={450}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="row my-4 text-center ">
        <div className="col-md-4 bg-warning ">
          <div className="card  ">
            {/* <img src="" className="card-img-top" alt="..." height="250px" /> */}
            <div className="card-body bg-dark-subtle  ">
              <h5 className="card-title">TASK-1</h5>
              <p className="card-text"></p>
              <Link
                className="btn btn-outline-dark bg-primary"
                to="/firstComponent"
              >
                Click
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4  bg-warning">
          <div className="card ">
            {/* <img src="" className="card-img-top" alt="..." height="250px" /> */}
            <div className="card-body bg-dark-subtle">
              <h5 className="card-title">TASK-2</h5>
              <p className="card-text"></p>
              <Link className="btn btn-outline-dark bg-primary" to="/demo22">
                Click
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4  bg-warning">
          <div className="card ">
            {/* <img src="" className="card-img-top" alt="..." height="250px" /> */}
            <div className="card-body bg-dark-subtle">
              <h5 className="card-title">TASK-3</h5>
              <p className="card-text"></p>
              <Link className="btn btn-outline-dark bg-primary" to="/algebric">
                Click
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4 text-center">
        <div className="col-md-4 bg-primary">
          <div className="card">
            {/* <img src="" className="card-img-top" alt="..." height="250px" /> */}
            <div className="card-body bg-dark-subtle">
              <h5 className="card-title">TASK-4</h5>
              <p className="card-text"></p>
              <Link className="btn btn-outline-dark bg-primary" to="/bootstrap">
                Click
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 bg-primary">
          <div className="card">
            {/* <img src="" className="card-img-top" alt="..." height="250px" /> */}
            <div className="card-body bg-dark-subtle">
              <h5 className="card-title">TASK-5</h5>
              <p className="card-text"></p>
              <Link
                className="btn btn-outline-dark bg-primary"
                to="/diffproduct"
              >
                Click
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 bg-primary">
          <div className="card">
            {/* <img src="" className="card-img-top" alt="..." height="250px" /> */}
            <div className="card-body bg-dark-subtle">
              <h5 className="card-title">TASK-6</h5>
              <p className="card-text"></p>
              <Link className="btn btn-outline-dark bg-primary" to="/gallery1">
                Click
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4 text-center">
        <div className="col-md-4 bg-danger">
          <div className="card">
            {/* <img src="" className="card-img-top" alt="..." height="250px" /> */}
            <div className="card-body bg-dark-subtle">
              <h5 className="card-title">TASK-7</h5>
              <p className="card-text"></p>
              <Link className="btn btn-outline-dark bg-primary" to="/inlinecss">
                Click
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 bg-warning">
          <div className="card">
            {/* <img src="" className="card-img-top" alt="..." height="250px" /> */}
            <div className="card-body bg-dark-subtle">
              <h5 className="card-title">TASK-8</h5>
              <p className="card-text"></p>
              <Link className="btn btn-outline-dark bg-primary" to="/product">
                Click
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 bg-danger">
          <div className="card">
            {/* <img src="" className="card-img-top" alt="..." height="250px" /> */}
            <div className="card-body bg-dark-subtle">
              <h5 className="card-title">TASK-9</h5>
              <p className="card-text"></p>
              <Link
                className="btn btn-outline-dark bg-primary"
                to="/countercomp"
              >
                Click
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4 text-center">
        <div className="col-md-4">
          <div className="card">
            {/* <img src="" className="card-img-top" alt="..." height="250px" /> */}
            <div className="card-body bg-dark-subtle">
              <h5 className="card-title">TASK-10</h5>
              <p className="card-text"></p>
              <Link
                className="btn btn-outline-dark bg-primary"
                to="/likedislike"
              >
                Click
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4 text-center">
        <div className="col-md-4">
          <div className="card">
            {/* <img src="" className="card-img-top" alt="..." height="250px" /> */}
            <div className="card-body bg-dark-subtle">
              <h5 className="card-title">TASK-11</h5>
              <p className="card-text"></p>
              <Link className="btn btn-outline-dark bg-primary" to="/Viewtodo">
                Click
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center my-4">
        <p style={{ color: "white" }}> Vaibhaw Pandey</p>
      </footer>
    </div>
  );
}
