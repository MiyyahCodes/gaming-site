import React from "react";
import "./streaming.css";
import Streaming from "./Streaming.js";
import underline from "./underline.png";

export default function Online() {
  return (
    <div className="online">
      <div class="container">
        <h2 className="pt-5">
          CHECKOUT LIVE <span className="upcoming">STREAMING</span>
        </h2>
        <img src={underline} alt="underline" className="mb-5" />
        <Streaming embedId="Mx7A4HkRBZA" />
        <div class="row mt-4">
          <div class="col">
            <Streaming embedId="WoNAt9bQZtY" />
            <div>
              <h5>WATCH DOGS</h5>
              <p>Duis aute irure dolor i</p>
            </div>
          </div>
          <div class="col">
            <Streaming embedId="zH9PD6UXwBU" />
            <div>
              <h5>WATCH DOGS 2</h5>
              <p>Duis aute irure dolor i</p>
            </div>
          </div>
          <div class="col">
            <Streaming embedId="biO6z-pst34" />
            <div>
              <h5>WATCH DOGS 2</h5>
              <p>Duis aute irure dolor i</p>
            </div>
          </div>
          <div class="col">
            <Streaming embedId="4GWnWAQUhxw" />
            <div>
              <h5>WATCH DOGS 2</h5>
              <p>Duis aute irure dolor i</p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
