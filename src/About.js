import React from "react";
import "./about.css";
import blue from "./blue.png";
import red from "./red.png";
import gold from "./gold.png";
import yellow from "./yellow.png";
import underline from "./underline.png";
import about from "./about-company.jpg";

export default function About() {
  return (
    <div className="games">
      <div class="container text-center">
        <h2>
          UPCOMING <span className="upcoming">GAMES</span>
        </h2>
        <img src={underline} alt="underline" className="mb-5" />
        <div class="row">
          <div class="col">
            <img src={blue} alt="hero-avatar" className="avatars mb-2" />
            <div>
              <h5>BUNNY OFFICER</h5>
              <p>OCT 21 - 25, 2021</p>
            </div>
          </div>
          <div class="col">
            <img src={yellow} alt="hero-avatar" className="avatars mb-2" />
            <div>
              <h5>BUNNY OFFICER</h5>
              <p>OCT 21 - 25, 2021</p>
            </div>
          </div>
          <div class="col">
            <img src={gold} alt="hero-avatar" className="avatars mb-2" />
            <div>
              <h5>BUNNY OFFICER</h5>
              <p>OCT 21 - 25, 2021</p>
            </div>
          </div>
          <div class="col">
            <img src={red} alt="hero-avatar" className="avatars mb-2" />
            <div>
              <h5>BUNNY OFFICER</h5>
              <p>OCT 21 - 25, 2021</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="card mx-auto ps-5 pb-5">
          <div class="row g-0">
            <div class="col-md-7">
              <div class="card-body">
                <h1 class="card-title gaming">
                  WE'RE THE BEST GAMING{" "}
                  <span className="upcoming">COMPANY</span>
                </h1>
                <img src={underline} alt="underline" className="mb-5" />
                <p class="card-text">
                  Proin dapibus feugiat pulvinar. Morbi commodo orci at sapien
                  aliquet, ut fringilla tellus porttitor. Aliquam tempus ipsum
                  neque, interdum feugiat nisi tincidunt et. Phasellus bibendum
                  gravida ante eget cursus. Nam id magna in lacus lacinia
                  pretium. In semper fringilla imperdiet. Donec diam lectus,
                  porta sed felis non, pharetra suscipit orci.
                </p>
              </div>
            </div>
            <div class="col-md-5">
              <img src={about} class="img-fluid rounded about-img" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
