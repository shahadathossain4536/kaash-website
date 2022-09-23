import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
const Services = () => {
  return (
    <section className="container">
      <h2 className="text-uppercase pt-5 mt-5 fs-1">Our Services</h2>
      <div>
        <div class="row row-cols-1 row-cols-md-3 g-4 py-5 my-5">
          <div class="col">
            <div class="card h-100 ps-0">
              <p
                className="text-uppercase fs-1"
                style={{
                  backgroundColor: "black",
                  color: "orange",
                  width: "294px",
                  height: "80px",
                  font: "80px",
                }}
              >
                Basic
              </p>
              <div class="card-body ps-0">
                {/* <h5 class="card-title">Card title</h5> */}
                <p className="card-text text-start ps-2 pe-2 fs-5">
                  One simple page figma to html psd to html xd to html with
                  responsive bootstrap/tailwind.css.
                </p>
                <ul className="text-start  fs-4 ps-0">
                  <ol className="ps-2">
                    {" "}
                    <IoCheckmarkSharp /> 1 page{" "}
                  </ol>
                  <ol className="ps-2">
                    {" "}
                    <IoCheckmarkSharp /> Responsive design{" "}
                  </ol>
                  <ol className="ps-2">
                    {" "}
                    <IoCheckmarkSharp /> Slider/scroller{" "}
                  </ol>
                  <ol className="ps-2">
                    {" "}
                    <IoCheckmarkSharp /> Server upload
                  </ol>
                  <ol className="ps-2">
                    {" "}
                    <IoCheckmarkSharp /> Browser compatibility
                  </ol>
                </ul>
              </div>
              <button class="card-footer bg-info text-white border border-0">
                Book now
              </button>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 ps-0">
              <p
                className="text-uppercase fs-1"
                style={{
                  backgroundColor: "black",
                  color: "orange",
                  width: "294px",
                  height: "80px",
                  font: "80px",
                }}
              >
                Standard
              </p>
              <div class="card-body ps-0">
                {/* <h5 class="card-title">Card title</h5> */}
                <p className="card-text text-start ps-2 pe-2 fs-5">
                  One standard page with 4-5 sections figma/psd/xd html with
                  responsive bootstrap/tailwind.css.
                </p>
                <ul className="text-start  fs-4 ps-0">
                  <ol className="ps-2">
                    {" "}
                    <IoCheckmarkSharp /> 1 page{" "}
                  </ol>
                  <ol className="ps-2">
                    {" "}
                    <IoCheckmarkSharp /> Responsive design{" "}
                  </ol>
                  <ol className="ps-2">
                    {" "}
                    <IoCheckmarkSharp /> Slider/scroller{" "}
                  </ol>
                  <ol className="ps-2">
                    {" "}
                    <IoCheckmarkSharp /> Server upload
                  </ol>
                  <ol className="ps-2">
                    {" "}
                    <IoCheckmarkSharp /> Browser compatibility
                  </ol>
                </ul>
              </div>
              <button class="card-footer bg-info text-white border border-0">
                Book now
              </button>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 ps-0">
              <p
                className="text-uppercase fs-1"
                style={{
                  backgroundColor: "black",
                  color: "orange",
                  width: "294px",
                  height: "80px",
                  font: "80px",
                }}
              >
                Standard
              </p>
              <div class="card-body ps-0">
                {/* <h5 class="card-title">Card title</h5> */}
                <p className="card-text text-start ps-2 pe-2 fs-5">
                  One complex page with 7-8 sections figma/psd/xd html with
                  responsive bootstrap/tailwind.css.
                </p>
                <ul className="text-start  fs-4 ps-0">
                  <ol className="ps-2">
                    {" "}
                    <IoCheckmarkSharp /> 1 page{" "}
                  </ol>
                  <ol className="ps-2">
                    {" "}
                    <IoCheckmarkSharp /> Responsive design{" "}
                  </ol>
                  <ol className="ps-2">
                    {" "}
                    <IoCheckmarkSharp /> Slider/scroller{" "}
                  </ol>
                  <ol className="ps-2">
                    {" "}
                    <IoCheckmarkSharp /> Server upload
                  </ol>
                  <ol className="ps-2">
                    {" "}
                    <IoCheckmarkSharp /> Browser compatibility
                  </ol>
                </ul>
              </div>
              <button class="card-footer bg-info text-white border border-0">
                Book now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
