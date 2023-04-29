import React from "react";
import "./testimonial.css";
import underline from "./underline.png";
import quote from "./quote.png";
import tes1 from "./tes-1.png";
import tes2 from "./tes-2.png";

export default function Testimonial() {
  return (
    <div className="testimonial">
      <div class="container text-center">
        <h2>
          TESTIMO<span className="upcoming">NIAL</span>
        </h2>
        <img src={underline} alt="underline" className="mb-5" />
      </div>
      <div class="container">
        <div class="row justify-content-around">
          <div class="col-5 tes rounded-top">
            <img src={quote} alt="quote" className="mb-5" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="tes-name">
              <img src={tes1} alt="quote-pic" className="" />
              <div className="tes-des">
                <h5>JANE DOE</h5>
                <p className="upcoming">Gamer</p>
              </div>
            </div>
          </div>
          <div class="col-5 tes rounded-top">
            <img src={quote} alt="quote" className="mb-5" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="tes-name">
              <img src={tes2} alt="quote-pic" className="" />
              <div className="tes-des">
                <h5>JANE DOE</h5>
                <p className="upcoming">Gamer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
