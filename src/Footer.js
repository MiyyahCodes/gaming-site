import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-sm-6">
              <div class="single-box">
                <h2>
                  <i class="fas fa-car"></i> Air Formula
                </h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
                  repellendus sunt praesentium aspernatur iure molestias.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="single-box">
                <h2>OUR LINKS</h2>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">About Us</a>
                  </li>
                  <li>
                    <a href="/">Services</a>
                  </li>
                  <li>
                    <a href="/">Blog</a>
                  </li>
                  <li>
                    <a href="/">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="single-box">
                <h2>OUR SERVICES</h2>
                <ul>
                  <li>
                    <a href="/">FAQ</a>
                  </li>
                  <li>
                    <a href="/">Support</a>
                  </li>
                  <li>
                    <a href="/">About Story</a>
                  </li>
                  <li>
                    <a href="/">Privacy</a>
                  </li>
                  <li>
                    <a href="/">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="single-box">
                <h2>Newsletter</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Recipient's username"
                    aria-label="Enter your Email ..."
                    aria-describedby="basic-addon2"
                  />
                  <span class="input-group-text">
                    <i class="fas fa-arrow-right"></i>
                  </span>
                </div>
                <h2>Follow us on</h2>
                <p class="socials">
                  <i class="fab fa-facebook"></i>
                  <i class="fab fa-dribbble"></i>
                  <i class="fab fa-pinterest"></i>
                  <i class="fab fa-twitter"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
